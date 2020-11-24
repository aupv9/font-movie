import React, { Fragment, useEffect ,useState} from 'react';
import {
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CForm,
    CFormGroup,
    CFormText, 
    CTextarea,
    CInput,
    CInputFile,
    CLabel,
    CSelect,
    CRow  } from '@coreui/react';

  import axios from 'axios';
  import CIcon from '@coreui/icons-react';
  import { useParams } from "react-router";
  import { toast ,ToastContainer} from 'react-toastify';





const EditMoive = () => {
  
  const [values,setValues] = useState({});
  const {id} =useParams();
  useEffect(() => {

    axios.get(`http://localhost:8080/api/v1/user/${id}`).then(res => {
      setValues(res.data);
      console.log(res.data)
    })
  }, [])

  const handleInputChange =(event) =>{
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    console.log(value);
    setValues({...values,
      [name]: value
    },);
  }


  const updateValues = () =>{
      console.log(values);

      axios.put("http://localhost:8080/api/v1/user",{...values,"roles":[values["roles"]]}).then(res => {
        
        if(res.status === 202){
          toast.success("Update success",{
            position: toast.POSITION.TOP_RIGHT
          });
        }else{
          toast.error("Update Fail",{
            position: toast.POSITION.TOP_RIGHT
          })
        }
      }).catch(err =>{
        toast.error("Update Fail",{
          position: toast.POSITION.TOP_RIGHT
        })
      });
  }
    return (
        <Fragment>
             <CRow>
              <CCol xs="12" md="6">
                <CCard>
                  <CCardHeader>
                    Edit User
                  </CCardHeader>
                  <CCardBody>
                    <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                      <CFormGroup row>
                        <CCol md="3">
                          <CLabel>Email</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                        <CInput id="text-input" name="email" placeholder="Email" value={values.email}  onChange={handleInputChange}/>
                        </CCol>
                      </CFormGroup>
                      <CFormGroup row>
                        <CCol md="3">
                          <CLabel htmlFor="text-input">First Name</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                        <CInput id="text-input" name="fisrtName" placeholder="Fisrt Name" value={values.fisrtName}  onChange={handleInputChange}/>
                        </CCol>
                      </CFormGroup>
                      <CFormGroup row>
                        <CCol md="3">
                          <CLabel htmlFor="email-input">Last Name</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                        <CInput id="text-input" name="lastName" placeholder="Fisrt Name" value={values.lastName}  onChange={handleInputChange}/>
                          {/* <CFormText className="help-block">Please enter your email</CFormText> */}
                        </CCol>
                      </CFormGroup>
                    
                      <CFormGroup row>
                        <CCol md="3">
                          <CLabel htmlFor="date-input">Birth Day</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                          <CInput type="date" id="date-input" name="birthDay" placeholder="date" value={values.birthDay}  onChange={handleInputChange}/>
                        </CCol>
                      </CFormGroup>
                      <CFormGroup row>
                        <CCol md="3">
                          <CLabel htmlFor="disabled-input">Phone</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                          <CInput type="number" id="email-input" name="phone" placeholder="" autoComplete="false"   onChange={handleInputChange} value={values.phone}/>
                        </CCol>
                      </CFormGroup>         
                      <CFormGroup row>
                        <CCol md="3">
                          <CLabel htmlFor="selectSm">Member</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                          <CSelect custom  name="member" id="Select" onChange={handleInputChange}>
                            <option value="BASIC">BASIC</option>
                            <option value="STANDARD">STANDARD</option>
                            <option value="PREMIUM">PREMIUM</option>
                          </CSelect>
                        </CCol>
                      </CFormGroup>
                      <CFormGroup row>
                        <CCol md="3">
                          <CLabel htmlFor="selectSm">Role</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                          <CSelect custom size="sm" name="roles" id="Select" onChange={handleInputChange} value={values.roles}>
                            <option value="ROLE_ADMIN">Admin</option>
                            <option value="ROLE_USER">User</option>
                          </CSelect>
                        </CCol>
                      </CFormGroup>
                      <CFormGroup row>
                        <CCol md="3">
                          <CLabel htmlFor="selectSm">Active</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                          <CSelect custom  name="isActive" id="Select" onChange={handleInputChange} value={values.isActive}>
                            <option value="true">True</option>
                            <option value="false">False</option>
                          </CSelect>
                        </CCol>
                      </CFormGroup>
                    </CForm>
                  </CCardBody>
                  <CCardFooter>
                    <CButton type="submit" size="sm" color="primary" onClick={updateValues}><CIcon name="cil-scrubber" /> Edit</CButton>
                    <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Back</CButton>
                  </CCardFooter>
                </CCard>
                
              </CCol>
              
      </CRow>
      <ToastContainer></ToastContainer>
        </Fragment>
    );
}

export default EditMoive;
