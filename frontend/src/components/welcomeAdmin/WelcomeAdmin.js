import React, { useState } from 'react'
import './welcome.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function WelcomeAdmin() {
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [dateJ, setDateJ] = useState('')
    const [dateE, setDateE] = useState('')
    const [contact, setContact] = useState('')
    const [org, setOrg] = useState('')
    const [course, setCourse] = useState('')
    const [duration, setDuration] = useState('')
    const [trainer, setTrainer] = useState('')
    const [certificateID, setCertificateID] = useState('')
    const [certificateLink, setCertificateLink] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            name: name,
            email: email,
            dateofJ: dateJ,
            dateofC: dateE,
            phone: contact,
            org: org,
            course: course,
            duration: duration,
            trainer: trainer,
            cID: certificateID,
            url: certificateLink
        }
        if(name === '' || email === '' || dateJ === '' || dateE === '' || contact === '' || org === '' || course === '' || duration === '' || trainer === '' || certificateID === '' || certificateLink === ''){
            toast.error("Form field cannot be empty!", {
                position: toast.POSITION.BOTTOM_CENTER
            });
        }else if(!email.includes('@') || !email.includes('.')){
            toast.error("Invalid Email!", {
                position: toast.POSITION.BOTTOM_CENTER
            });
        }else if(contact.length !== 10){
            toast.error("Invalid Contact Number!", {
                position: toast.POSITION.BOTTOM_CENTER
            });
        }else if(certificateID === ''){
            toast.error("Invalid Certificate ID!", {
                position: toast.POSITION.BOTTOM_CENTER
            });
        }else if(certificateLink.match(/^(http|https):\/\/[^ "]+$/)===null){
            toast.error("Invalid Certificate Link!", {
                position: toast.POSITION.BOTTOM_CENTER
            });
        }else{
            axios.post(`http://localhost:5031/api/v1/certificateCRUD/getCertificateRoutes/addCertificate`, data)

            .then(res => {
            
                if(res.data.code === 200){
                    navigate(`/admin/success`);
                    toast.success("Certificate Added!", {
                        position: toast.POSITION.BOTTOM_CENTER
                    });
                }
            }
            )
            .catch(err => {
         
                toast.error("Something went wrong!", {
                    position: toast.POSITION.BOTTOM_CENTER
                });
            }
            )
        }

        

    }
    return (
        <div>
            <div className="container">
                <h1 className="text-center headFormsection  mb-4">Enter Candidate Details</h1>
                <form action="">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-12">
                                <div class="mb-3 mt-3">
                                    <label class="form-label">Name</label>
                                    <input type="text" class="form-control formc" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your Name" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Email</label>
                                    <input type="email" class="form-control formc" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Date of Training</label>
                                    <input type="date" class="form-control formc" value={dateJ} onChange={(e) => setDateJ(e.target.value)} placeholder="Enter Your Password" />
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <div class="mb-3 mt-3">
                                    <label for="exampleFormControlInput1" class="form-label">Organization</label>
                                    <input type="text" class="form-control formc" value={org} onChange={(e) => setOrg(e.target.value)} placeholder="Enter Your Organization Name" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Contact Number</label>
                                    <input type="text" class="form-control formc" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Enter Your Contact Number" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Trainer/Guide</label>
                                    <input type="text" class="form-control formc" value={trainer} onChange={(e) => setTrainer(e.target.value)} placeholder="Enter Your Trainer/Guide" />
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <form action="" >
                                    <div class="mb-3 mt-3">
                                        <label for="exampleFormControlInput1" class="form-label">Course Enrolled</label>
                                        <input type="text" class="form-control formc" value={course} onChange={(e) => setCourse(e.target.value)} placeholder="Enter Your Course Name" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Course Duration</label>
                                        <input type="text" class="form-control formc" value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="Enter Your Course Duration" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Ending Date</label>
                                        <input type="date" class="form-control formc" value={dateE} onChange={(e) => setDateE(e.target.value)} placeholder="Enter Your Ending Date" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-12">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Certificate Url</label>
                                    <input type="text" class="form-control formc" value={certificateLink} onChange={(e) => setCertificateLink(e.target.value)} placeholder="Enter Your Certificate Url" />
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Certificate ID</label>
                                    <input type="text" class="form-control formc" value={certificateID} onChange={(e) => setCertificateID(e.target.value)} placeholder="Enter Your Certificate ID" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center btn-verify">
                        <button type="button" class="btn btn-primary-verify" onClick={(e) => { handleSubmit(e) }} >Submit</button>
                    </div>
                </form>
            </div >
            <ToastContainer />
        </div >
    )
}
