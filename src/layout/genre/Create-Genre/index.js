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
    CInput,
    CLabel,
    CRow  } from '@coreui/react';

  import axios from 'axios';
  import CIcon from '@coreui/icons-react';
  import { useParams } from "react-router";
  import { toast ,ToastContainer} from 'react-toastify';




const CreateGenre = () => {
  const [genre, setGenre] = useState({});
  const {id} =useParams();
  useEffect(() => {

    axios.get(`http://localhost:8080/api/v1/genre/${id}`).then(res => {
        setGenre(res.data);
     
    })
  }, []);

  const handleInputChange =(event) =>{
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    console.log(value);
    setGenre({...genre,
      [name]: value
    },);
  }
  const updateGenre = () =>{
      axios.post("http://localhost:8080/api/v1/genre",genre).then(res => {
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
                    Create Genre
                    <small> </small>
                    </CCardHeader>
                    <CCardBody>
                    <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                        <CFormGroup row>
                        <CCol md="3">
                            <CLabel>Genre Title</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                        <CInput id="text-input" name="name" placeholder="Movie Title" value={genre.name} onChange={handleInputChange}/>
                        </CCol>
                        </CFormGroup>
                       
                    </CForm>
                    </CCardBody>
                    <CCardFooter>
                    <CButton type="submit" size="sm" color="primary" onClick={updateGenre}><CIcon name="cil-scrubber"/> Create</CButton>
                    <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Back</CButton>
                    </CCardFooter>
                </CCard>
                
        </CCol>
        <ToastContainer></ToastContainer>
      </CRow>
        </Fragment>
    );
}

export default CreateGenre;
