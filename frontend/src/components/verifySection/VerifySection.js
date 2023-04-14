import {React, useState } from 'react'
import './verifySection.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function VerifySection() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [cID, setCID] = useState('')
 
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            email: email,
            cID: cID
        }
        if (email === '' || cID === '') {
            toast.error("Form field cannot be empty!", {
                position: toast.POSITION.BOTTOM_CENTER
            });

        } else if (!email.includes('@') || !email.includes('.')) {
            toast.error("Invalid Email!", {
                position: toast.POSITION.BOTTOM_CENTER
            });
        }
        else if (cID === '') {
            toast.error("Invalid Certificate ID!", {
                position: toast.POSITION.BOTTOM_CENTER
            });
        } else {
            axios.post(`http://localhost:4031/api/v1/certificateCRUD/getCertificateRoutes/getCertificateByEmailAndCid`, data)
                .then(res => {
           
                    if (res.data.code === 200) {
                        navigate(`/user/verified/${email}/${cID}`);
                        toast.success("Certificate Found!", {
                            position: toast.POSITION.BOTTOM_CENTER
                        });
                    }
                    else {
                        navigate("/user/notFound");
                        toast.error("Certificate Not Found!", {
                            position: toast.POSITION.BOTTOM_CENTER
                        });
                    }
                }
                )
                .catch(err => {
                
                    if (err.response.data.code === 500) {
                        navigate("/user/notFound");
                        toast.error("Certificate Not Found!", {
                            position: toast.POSITION.BOTTOM_CENTER
                        });
                    }
                }
                )
        }
    }
    const handelFindMore=(e)=> {
        e.preventDefault();
        navigate("https://abcskill.org/courses-list/");
    }
   
    return (
        
        <div  >
            <div className='verifysectionbg' style={{ backgroundImage: `url(/assests/image/verifysection.png)` }}>
           
                <div className="formsection container">
                    <div className="row">
                        <div className="col-md-5 col-4"></div>
                        <div className="col-md-4 col-7">
                            <h1 className="text-center headFormsections">Verify your Certificate</h1>
                            <form action="">
                                <div class="mb-3 mt-3">
                                    <label for="exampleFormControlInput1" class="form-label text-light">Email</label>
                                    <input type="email" class="form-control fs formc" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label text-light">Certificate Number</label>
                                    <input type="text" class="form-control formc" value={cID} onChange={(e) => setCID(e.target.value)} placeholder="Enter Your Certificate Number" />
                                </div>
                                
                                <div className="text-center btn-verify">
                                    <button type="button" onClick={(e) => { handleSubmit(e) }} class="btn btn-primary-verify">Verify
                                    
                                    
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-3 col-1"></div>
                    </div>
                </div>
            </div>
            <div className='verifysectionpage' style={{ backgroundImage: `url(/assests/image/page.png)` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <button type='submit' onClick={()=>{window.open("https://abcskill.org/courses-list/", "_blank");}} className='findmore'>Find More</button>
                        </div>
                        <div className="col-md-4"></div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </div>
            <div className="mobileviewVerify">
                <img src="/assests/image/page.png" className='mobimg' alt="" srcset="" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <button type='submit' onClick={()=>{window.open("https://abcskill.org/courses-list/", "_blank");}} className='findmoremob'>Find More</button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}
