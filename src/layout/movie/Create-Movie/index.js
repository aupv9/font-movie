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





const CreaatMoive = () => {
  const [values,setValues] = useState({});
  const {id} =useParams();
  useEffect(() => {

    axios.get(`http://localhost:8080/api/v1/film/${id}`).then(res => {
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
  const updateFilm = () =>{
      console.log(values);
      axios.post("http://localhost:8080/api/v1/film",values).then(res => {
        if(res.status === 201){
          toast.success("Create success",{
            position: toast.POSITION.TOP_RIGHT
          });
        }else{
          toast.error("Create Fail",{
            position: toast.POSITION.TOP_RIGHT
          })
        }
      });
  }
    return (
        <Fragment>
             <CRow>
             
            <CCol xs="12" md="6">
              <CCard>
                <CCardHeader>
                  Create Movie
                  <small> </small>
                </CCardHeader>
                <CCardBody>
                  <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel>Movie Title</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                      <CInput id="text-input" name="name" placeholder="Movie Title" value={values.name}  onChange={handleInputChange}/>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input">Trailer URL</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput id="text-input" name="trailer" placeholder="Trailer" value={values.trailer}  onChange={handleInputChange}/>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="email-input">Film URL</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput  id="email-input" name="url" placeholder="URL Film" autoComplete="false" value={values.url}  onChange={handleInputChange}/>
                        {/* <CFormText className="help-block">Please enter your email</CFormText> */}
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="password-input">Poster</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                      <CInputFile id="file-input" name="image"  onChange={handleInputChange}/>
                        <CFormText className="help-block">Please select image</CFormText>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="date-input">Date Release</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput type="date" id="date-input" name="release" placeholder="date" value={values.release}  onChange={handleInputChange}/>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="disabled-input">Duration</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput type="number" id="email-input" name="time" placeholder="" autoComplete="false"   onChange={handleInputChange} value={values.time}/>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="textarea-input">Content</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CTextarea 
                          name="content" 
                          id="textarea-input" 
                          rows="9"
                          placeholder="Content..." 
                          value={values.content}
                          onChange={handleInputChange}
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="textarea-input">Director</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CTextarea 
                          name="director" 
                          id="textarea-input" 
                          rows="4"
                          placeholder="Director..." 
                          value={values.director}
                          onChange={handleInputChange}
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="textarea-input">Actor</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CTextarea 
                          name="actor" 
                          id="textarea-input" 
                          rows="4"
                          placeholder="Actor..." 
                          value={values.actor}
                          onChange={handleInputChange}
                        />
                      </CCol>
                    </CFormGroup>
                  
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="selectSm">Genre</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CSelect custom  name="genre" id="Select" onChange={handleInputChange}>
                          <option value="Hành động">Hành động</option>
                          <option value="Tình cảm">Tình cảm</option>
                          <option value="Phiêu lưu">Phiêu lưu</option>
                          <option value="Phiêu lưu">Phiêu lưu</option>
                          
                        </CSelect>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="selectSm">Rating</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CSelect custom size="sm" name="rating" id="Select" onChange={handleInputChange}>
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </CSelect>
                      </CCol>
                    </CFormGroup>
                  </CForm>
                </CCardBody>
                <CCardFooter>
                  <CButton type="submit" size="sm" color="primary" onClick={updateFilm}><CIcon name="cil-scrubber" /> Create</CButton>
                  <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Back</CButton>
                </CCardFooter>
              </CCard>
              
            </CCol>
            <CCol xs="12" md="6">
          
        </CCol>
      </CRow>
      <ToastContainer></ToastContainer>
        </Fragment>
    );
}

export default CreaatMoive;
