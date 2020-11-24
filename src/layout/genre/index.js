import React, { Fragment ,useState,useEffect} from 'react';
import {
    CBadge,
    CCardBody,
    CDataTable,
    CButton
  } from '@coreui/react'
  import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js';
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
    { key: 'name', _style: { width: '20%'} ,filter:false},
    {
      key: 'operation',
      label: 'Operation',
      _style: { width: '20%' },
      sorter: false,
      filter: false
    }
  ]

const GenrePage = () =>{
  
  const [dataGenre,setDataGenre] = useState([]);
  const history = useHistory();
  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/genres")
      .then(res =>
        {   console.log(res.data);
            setDataGenre(res.data);
        })
  },[]);
  
  const getGenreById = (id)=>{
      history.push(`/genre/list-genre/edit/${id}`);
  }
  const deleteGenre = (id)=>{
    
    Swal.fire({
      title: 'Are you sure?',
      text: "Bạn muốn xóa bộ Genre này không ?!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
          axios.delete(`http://localhost:8080/api/v1/genre/${id}`).then(
            res =>{
              if(res.status === 200){
                Swal.fire(
                  'Deleted!',
                  'Your film has been deleted.',
                  'success'
                )
              }else{
                
                Swal.fire(
                  'Deleted!',
                  'Your film has not been deleted.',
                  'error'
                )
              }
            }
          );
      }
    })
    
  }
  return (
      <Fragment>
         <CButton size="md" color="primary" className="ml-1 mb-3" onClick={()=>{history.push("/genre/list-genre/create")}}>
                    Create
                  </CButton>
        <CDataTable
        items={dataGenre}
        fields={fields}
        columnFilter
        tableFilter
        footer
        itemsPerPageSelect
        itemsPerPage={2}
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
                  <CButton size="sm" color="info"  onClick={()=>{getGenreById(item._id)}}>
                   Edit
                  </CButton>
                  <CButton size="sm" color="danger" className="ml-1" onClick={()=>deleteGenre(item._id)}>
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
export default GenrePage;
