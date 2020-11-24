import React, { Fragment ,useState,useEffect} from 'react';
import {
    CBadge,
    CCardBody,
    CDataTable,
    CButton,CMediaBody,CMedia
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
    {
      key: 'operation',
      label: 'Operation',
      _style: { width: '20%' },
      sorter: false,
      filter: false
    }
  ]

const DirectorPage = () =>{
  
  const [dataFilm,setDataFilm] = useState([]);
  const history = useHistory();
  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/directors")
      .then(res =>
        {
          setDataFilm(res.data)
        })
  },[]);
  
  const getFilmById = (id)=>{
      history.push(`/movie/list-movie/edit/${id}`);
  }

  return (
      <Fragment>
         <CButton size="md" color="primary" className="ml-1 mb-3" onClick={()=>{history.push("/director/list-director/create")}}>
                    Create
                  </CButton>
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
          'image':
            (item)=>{
              return (
              <td>
               <CMedia>
                <img src={item.image} height="50"/>
                <CMediaBody>
                  <h5 className="mt-0">Poster Film</h5>
                  <p>
                    
                  </p>
                </CMediaBody>
              </CMedia>
              </td>
              )
          },
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
                  <CButton size="sm" color="info"  onClick={()=>{getFilmById(item.id)}}>
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
export default DirectorPage;
