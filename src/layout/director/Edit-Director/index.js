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





const EditDirector = () => {
  const [film, setFilm] = useState({});
  const {id} =useParams();
  useEffect(() => {

    axios.get(`http://localhost:8080/api/v1/film/${id}`).then(res => {
      setFilm(res.data);
      console.log(res.data)
    })
  }, [])



    return (
        <Fragment>
             <CRow>
        <CCol xs="12" md="6">
          <CCard>
            <CCardHeader>
              Edit Director
              <small> </small>
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Movie Title</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                  <CInput id="text-input" name="text-input" placeholder="Movie Title" value={film.name}/>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Trailer URL</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-input" name="text-input" placeholder="Trailer" value={film.trailer}/>
                    {/* <CFormText>This is a help text</CFormText> */}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="email-input">Film URL</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput  id="email-input" name="email-input" placeholder="URL Film" autoComplete="false" value={film.url}/>
                    {/* <CFormText className="help-block">Please enter your email</CFormText> */}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="password-input">Poster</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                  <CInputFile id="file-input" name="file-input"/>
                    <CFormText className="help-block">Please select image</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="date-input">Date Release</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" value={film.release}/>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="disabled-input">Duration</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput  id="email-input" name="" placeholder="" autoComplete="false" value={film.time}/>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="textarea-input">Content</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="9"
                      placeholder="Content..." 
                      value={film.content}
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="textarea-input">Director</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="4"
                      placeholder="Director..." 
                      value={film.director}
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="textarea-input">Actor</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="4"
                      placeholder="Actor..." 
                      value={film.actor}
                    />
                  </CCol>
                </CFormGroup>
               
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="selectSm">Genre</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom  name="select" id="Select">
                      <option value="0">Please select</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                      <option value="4">Option #4</option>
                      <option value="5">Option #5</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="selectSm">Rating</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom size="sm" name="selectSm" id="Select">
                      <option value="0">Please select</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                      <option value="4">Option #4</option>
                      <option value="5">Option #5</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Edit</CButton>
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Back</CButton>
            </CCardFooter>
          </CCard>
          
        </CCol>
        <CCol xs="12" md="6">
          <CCard>
            <CCardHeader>
              Video trailer
            </CCardHeader>
            <CCardBody>
            <div class="embed-responsive embed-responsive-16by9">
              <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
            </div>
            </CCardBody>
            <CCardFooter>
            </CCardFooter>
          </CCard>
         
        </CCol>
      </CRow>
        </Fragment>
    );
}

export default EditDirector;
