import React, { Fragment ,useState,useEffect} from 'react';
import {
    CBadge,
    CCardBody,
    CDataTable,
    CButton
  } from '@coreui/react'
  import axios from 'axios';

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
    {image: 'John Doe', name: '2018/01/01', genre: 'Hành động', status: 'active'},

  ]
  const getBadge = (statusActive)=>{
    switch (statusActive) {
      case true: return 'success';
      default: return 'banned'
    }
  }
 

  const fields = [
    { key: 'image', _style: { width: '20%'} ,filter:false},
    { key: 'name', _style: { width: '20%'} },
    { key: 'genre_id', _style: { width: '20%'} },
    { key: 'statusActive', _style: { width: '1%'} },
    {
      key: 'operation',
      label: 'Operation',
      _style: { width: '20%' },
      sorter: false,
      filter: false
    }
  ]

const MoivePage = () =>{
  
  const [dataFilm,setDataFilm] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/films")
      .then(res =>
        {
          console.log(res.data);
          setDataFilm(res.data)
        })
  },[])

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
              console.log(item.statusActive);
              return (
              <td>
                <CBadge color={getBadge(item.statusActive)}>
                  {item.statusActive? "Active":"Ban"}
                </CBadge> 
              </td>
              )
          },
            'operation':
            ()=>{
              return (
                <CCardBody>
                  <CButton size="sm" color="info"  onClick={()=>{console.log("heelo ")}}>
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
export default MoivePage;
