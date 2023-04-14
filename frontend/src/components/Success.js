import React from 'react'
import './Common.css'
export default function Success() {
    return (
        <div>
            <div className='verified' >
                <img src="/assests/image/submitsucess.png" alt="" srcset="" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <button type='submit' className='findmoresu'>Find More</button>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4"></div>
                </div>
            </div>
            <div className="mobileviewVerify">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <button type='submit' className='findmoremobsu'>Find More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
