import React from 'react'
import './Common.css'
export default function Notfound() {
    return (
        <div>
            <div className='verified' >
                <img src="/assests/image/notFound.png" alt="" srcset="" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <button type='submit' onClick={()=>{window.open("https://abcskill.org/courses-list/", "_blank");}} className='findmoresu'>Find More</button>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4"></div>
                </div>
            </div>
            <div className="mobileviewVerify">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <button type='submit' onClick={()=>{window.open("https://abcskill.org/courses-list/", "_blank");}} className='findmoremobsu'>Find More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
