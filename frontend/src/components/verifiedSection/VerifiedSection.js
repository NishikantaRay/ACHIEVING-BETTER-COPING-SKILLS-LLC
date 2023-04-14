import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './verified.css'
import axios from 'axios'

export default function VerifiedSection() {

  const { email, cID } = useParams()
  const [apiData, setAPIData] = useState(null)
  const apiCall = (email,cID) => {

  const data = {
    email: email,
    cID: cID
  }
  axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/certificateCRUD/getCertificateRoutes/getCertificateByEmailAndCid`, data)
    .then(res => {
      
      setAPIData(res.data.data[0])

    }
    )
    .catch(err => {
      console.log(err);

    }
    )
  }
  
  useEffect(() => {
    apiCall(email,cID)
  }, [email,cID])

  return (
    <div>
      <div className="container">
        <h1 className="text-center headFormsectionv mt-4 mb-4">Candidate Details</h1>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-4 col-12">
            <form action="">
              <div class="mb-3 mt-3">
                <label for="exampleFormControlInput1" class="form-label vf">Name</label>
                <input type="text" disabled class="form-control formc" value={apiData ? apiData.name : "name"} />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email</label>
                <input type="email" class="form-control formc" disabled value={apiData ? apiData.email : "email"} />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Date of Training</label>
                <input type="text" class="form-control formc" disabled value={apiData ? apiData.dateofJ : "date of joining"} />
              </div>
            </form>
          </div>
          <div className="col-md-4 col-12 ">
            <form action="" >
              <div class="mb-3 mt-3">
                <label for="exampleFormControlInput1" class="form-label">Organization</label>
                <input type="text" class="form-control formc" disabled value={apiData ? apiData.org : "organization"} />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Contact Number</label>
                <input type="text" class="form-control formc" disabled value={apiData ? apiData.phone : "Contact"} />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Trainer/Guide</label>
                <input type="text" class="form-control formc" disabled value={apiData ? apiData.trainer : "Trainer/Guide"} />
              </div>
            </form>
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="text-center btn-verify">
          <button type="button" onClick={(e) => window.location.href = apiData.url} class="btn btn-primary-verify">Download Certificate</button>
        </div>
        {/* <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-4 col-6">
            <div className="text-center btn-verify">
              <button type="button" class="btn btn-primary-verify">Generate Authentication Report</button>
            </div>
          </div>
          <div className="col-md-4 col-6">
            <div className="text-center btn-verify">
              <button type="button" class="btn btn-primary-verify">Download Certificate</button>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div> */}
      </div>
    </div>
  )
}
