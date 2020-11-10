import React, { Fragment ,useState,useEffect} from 'react';
import {
    CBadge,
    CCardBody,
    CDataTable,
    CButton,CCollapse
  } from '@coreui/react'

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
  const getBadge = (status)=>{
    switch (status) {
      case 'active': return 'success';
      default: return 'banned'
    }
  }
 

  const fields = [
    { key: 'image', _style: { width: '20%'} ,filter:false},
    { key: 'name', _style: { width: '20%'} },
    { key: 'genre', _style: { width: '20%'} },
    { key: 'status', _style: { width: '1%'} },
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
    fetch("http://localhost:8080/api/v1/films")
      .then(res => console.log(res))
  }, [])

  return (
      <Fragment>
        <CDataTable
        items={usersData}
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
          'status':
            (item)=>(
              <td>
                <CBadge color={getBadge(item.status)}>
                  {item.status}
                </CBadge>
              </td>
            ),
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
