import React, { useState } from 'react'
import './adminLogin.css'
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../components/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function AdminLogin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const auth = useAuth();
    const handleSubmit = (e) => {
        e.preventDefault()
        if (email === '' || password === '') {
            toast.error("Form field cannot be empty!", {
                position: toast.POSITION.BOTTOM_CENTER
            });
        } else if (!email.includes('@') || !email.includes('.')) {
            toast.error("Invalid Email!", {
                position: toast.POSITION.BOTTOM_CENTER
            });
        } else if (password === '') {
            toast.error("Invalid Password!", {
                position: toast.POSITION.BOTTOM_CENTER
            });
        } else {
            if (email === 'admin@gmail.com' && password === 'password') {
              
                auth.login(email);
                navigate("/admin/welcome");
                toast.success("Login Successful!", {
                    position: toast.POSITION.BOTTOM_CENTER
                });
            } else {
                toast.error("Invalid Credentials!", {
                    position: toast.POSITION.BOTTOM_CENTER
                });
            }
        }


    }
    const handelFindMore=(e)=> {
        e.preventDefault();
        navigate("/");
    }
    return (
        <div  >
            <div className='verifysectionbg' style={{ backgroundImage: `url(/assests/image/verifysection.png)` }}>
                <div className="formsection container">
                    <div className="row">
                        <div className="col-md-5 col-4"></div>
                        <div className="col-md-4 col-7">
                            <h1 className="text-center headFormsectiona">Please enter your credentials</h1>
                            <form action="">
                                <div class="mb-3 mt-3">
                                    <label for="exampleFormControlInput1" class="form-label text-light as">Email</label>
                                    <input type="email" class="form-control formc" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label text-light">Password</label>
                                    <input type="password" class="form-control formc" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password" />
                                </div>

                                <div className="text-center btn-verify">
                                    <button type="button" onClick={(e) => { handleSubmit(e) }} class="btn btn-primary-verify">Login</button>
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
                            <button type='submit' onClick={(e)=>{handelFindMore(e)}} className='findmore'>Find More</button>
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
                            <button type='submit' onClick={(e)=>{handelFindMore(e)}} className='findmoremob'>Find More</button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}
