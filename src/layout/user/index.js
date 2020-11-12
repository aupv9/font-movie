import React, { Fragment ,useState,useEffect} from 'react';
import {
    CBadge,
    CCardBody,
    CDataTable,
    CButton
  } from '@coreui/react'
  import axios from 'axios';
import { useHistory } from 'react-router-dom';

  const usersData = [
    {image: 'John Doe', name: '2018/01/01', genre: 'Hành động', status: 'active'},
    {image: 'John Doe', name: '2018/01/01', genre: 'Hành động', status: 'active'},
    {image: 'John Doe', name: '2018/01/01', genre: 'Hành động', status: 'active'},
    {image: 'John Doe', name: '2018/01/01', genre: 'Hành động', status: 'active'},
    {image: 'John Doe', name: '2018/01/01', genre: 'Hành động', status: 'active'},
    {image: 'John Doe', name: '2018/01/01', genre: 'Hành động', status: 'active'},
    {image: 'John Doe', name: '2018/01/01', genre: 'Hành động', status: 'active'},
    {image: 'John Doe', name: '2018/01/01', genre: 'Hành động', status: 'active'},
    {image: 'John Doe', name: '2018/01/01', genre: 'Hành động', status: 'active'},
    {image: 'John Doe', name: '2018/01/01', genre: 'Hành động', status: 'active'},

  ]
  const getBadge = (statusActive)=>{
    switch (statusActive) {
      case true: return 'success';
      default: return 'banned'  
    }
  }
 

  const fields = [
    { key: 'userName', _style: { width: '15%'} ,filter:false},
    { key: 'firstName', _style: { width: '15%'} },
    { key: 'lastName', _style: { width: '15%'} },
    { key: 'birthDay', _style: { width: '15%'} },

    { key: 'email', _style: { width: '15%'} },
    { key: 'phone', _style: { width: '15%'} },
    {
      key: 'operation',
      label: 'Operation',
      _style: { width: '20%' },
      sorter: false,
      filter: false
    }
  ]

const UserPage = () =>{
  
  const [dataFilm,setDataFilm] = useState([]);
  const history = useHistory();
  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/users")
      .then(res =>
        {
          console.log(res.data);
          setDataFilm(res.data)
        })
  },[]);
  
  const getUserById = (id)=>{
      history.push(`/user/list-user/edit/${id}`);
  }

  return (
      <Fragment>
        <CDataTable
        items={dataFilm}
        fields={fields}
        columnFilter
        tableFilter
        footer
        itemsPerPageSelect
        itemsPerPage={5}
        hover
        sorter
        pagination
        scopedSlots = {{
          'statusActive':
            (item)=>{
              return (
              <td>
                <CBadge color={getBadge(item.statusActive)}>
                  {item.statusActive? "Active":"Ban"}
                </CBadge> 
              </td>
              )
          },
            'operation':
            (item)=>{
              return (
                <CCardBody>
                  <CButton size="sm" color="info"  onClick={()=>{getUserById(item.id)}}>
                   Edit
                  </CButton>
                  <CButton size="sm" color="danger" className="ml-1">
                    Delete
                  </CButton>
                </CCardBody>
                )
            }
        }}
    />
      </Fragment>
    
  )
}
export default UserPage;
