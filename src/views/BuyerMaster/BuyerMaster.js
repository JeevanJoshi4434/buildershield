import React from 'react'
import { lightRequiredField, RequiredField } from '../../utility/RequiredField'

const BuyerMaster = () => {
  return (
    <>
      <div className='container bg-white p-2 rounded-2'>
        <div className="row">
          <div className="col-md-8 col-12">
            <p className="text-alternate mb-3">{RequiredField} first Applicant</p>
            <div className="input-group mb-3">
              <select className="form-control" id="projectName" name="name">
                <option value="someOption">Some option</option>
                <option value="otherOption">Other option</option>
              </select>
              <select className="form-control" id="projectName" name="name">
                <option value="someOption">Some option</option>
                <option value="otherOption">Other option</option>
              </select>
              {/* <input type="text" className="form-control" id="projectName" name="name" required="" /> */}
            </div>
          </div>

          <div className="col-md-4 col-12">
            <p className="text-alternate mb-3">Enquirer Code</p>
            <div className="input-group mb-3">
              <button type="button" className="btn btn-primary" >Print Buyer</button>
            </div>
          </div>
          <div className='col-md-3 col-12' >
            <p className="text-alternate">{lightRequiredField} Father's Name</p>
            <input type="text" className="form-control" id="projectName" name="name" required="" />
          </div>
          <div className='col-md-3 col-12'>
            <p className="text-alternate">Husband Name</p>
            <input type="text" className="form-control" id="projectName" name="name" required="" />
          </div>
          <div className="col-md-12 col-12">
            <p className="text-alternate mt-3">{lightRequiredField} Occupation</p>
            <div className="input-group mb-3">
            <input type="text" className="form-control" id="projectName" name="name" required="" />
            </div>
          </div>
          <div className="col-md-6 col-12">
            <p className="text-alternate mb-3">{RequiredField} Permanent Address</p>
            <div className="input-group mb-3">
              <textarea className="form-control" id="location" name="location" required=""></textarea>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <p className="text-alternate mb-3">Correspondence Address</p>
            <div className="input-group mb-3">
              <textarea className="form-control" id="location" name="location" required=""></textarea>
            </div>
          </div>
          <div className="col-md-7 col-12">
            <p className="text-alternate mt-3">Contact No.</p>
            <div className="input-group mb-3">
            <input type="number" className="form-control" id="contact" name="contact" required="" />
            </div>
          </div>
          <div className="col-md-5 col-12">
            <p className="text-alternate mt-3">City</p>
            <div className="input-group mb-3">
            <select className="form-control" id="day" name="day">
              <option value="1">Location 1</option>
              <option value="2">Location 2</option>
              <option value="3">Location 3</option>
            </select>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <p className="text-alternate mb-3">DOB</p>
            <div className="input-group mb-3">
              <input type="date" className="form-control" id="startDate" name="startDate" required="" />
            </div>
          </div>
          <div className="col-md-4 col-12">
            <p className="text-alternate mb-3">Aadhar No.</p>
            <div className="input-group mb-3">
              <input type="text" className="form-control" id="endDate" name="endDate" required="" />
            </div>
          </div>
          <div className="col-md-4 col-12">
            <p className="text-alternate mb-3">City</p>
            <select className="form-control" id="day" name="day">
              <option value="1">Location 1</option>
              <option value="2">Location 2</option>
              <option value="3">Location 3</option>
            </select>
          </div>
          <div className="col-md-8 col-12">
            <p className="text-alternate mb-3">Email</p>
            <div className="input-group mb-3">
              <input type="email" className="form-control" id="endDate" name="endDate" required="" />
            </div>
          </div>
          <div className="col-md-4 col-12">
            <p className="text-alternate mb-3">Status</p>
            <select className="form-control" id="day" name="day">
              <option value="1"> 1</option>
              <option value="2"> 2</option>
              <option value="3"> 3</option>
            </select>
          </div>
          <div className="col-md-6 col-12">
            <p className="text-alternate mb-3">Relegion</p>
            <select className="form-control" id="day" name="day">
              <option value="1"> 1</option>
              <option value="2"> 2</option>
              <option value="3"> 3</option>
            </select>
          </div>
          <div className="col-md-6 col-12">
            <p className="text-alternate mb-3">Police Station</p>
            <select className="form-control" id="day" name="day">
              <option value="1">Location 1</option>
              <option value="2">Location 2</option>
              <option value="3">Location 3</option>
            </select>
          </div>
          <div className="col-md-6 col-12">
            <p className="text-alternate mb-3">Address</p>
            <div className="input-group mb-3">
              <textarea className="form-control" id="location" name="location" required=""></textarea>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <p className="text-alternate mb-3">PAN</p>
            <div className="input-group">
              <input type="text" className="form-control" />
            </div>
          </div>
            <p className="text-alternate mb-3">Co-Applicant</p>
          <div className="col-md-7 col-12">
            <p className="text-alternate mb-3">Select Applicant</p>
            <div className="input-group mb-3">
            <select className="form-control" id="day" name="day">
              <option value="1">option 1</option>
              <option value="2">option 2</option>
              <option value="3">option 3</option>
            </select>
              <input type="text" className="form-control" id="projectName" name="name" required="" />
            </div>
          </div>
          <div className='col-md-6 col-12' >
            <p className="text-alternate">{lightRequiredField} Father's Name</p>
            <input type="text" className="form-control" id="projectName" name="name" required="" />
          </div>
          <div className='col-md-6 col-12'>
            <p className="text-alternate">Husband Name</p>
            <input type="text" className="form-control" id="projectName" name="name" required="" />
          </div>
          <div className="col-md-6 col-12">
            <p className="text-alternate mt-3">{lightRequiredField} Occupation</p>
            <div className="input-group mb-3">
            <input type="text" className="form-control" id="projectName" name="name" required="" />
            </div>
          </div>
          <div className="col-md-6 col-12">
            <p className="text-alternate mb-3">Aadhar No.</p>
            <div className="input-group mb-3">
              <input type="text" className="form-control" id="endDate" name="endDate" required="" />
            </div>
          </div>
          <div className="col-md-4 col-12">
            <p className="text-alternate mb-3">DOB</p>
            <div className="input-group mb-3">
              <input type="date" className="form-control" id="startDate" name="startDate" required="" />
            </div>
          </div>
          <div className="col-md-5 col-12">
            <p className="text-alternate mb-3">PAN</p>
            <div className="input-group">
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-5 col-12">
            <p className="text-alternate mb-3">Email</p>
            <div className="input-group mb-3">
              <input type="email" className="form-control" id="endDate" name="endDate" required="" />
            </div>
          </div>
          <div className="col-md-6 col-12">
            <p className="text-alternate mb-3">Related with First Applicant</p>
            <div className="input-group mb-3">
            <select className="form-control" id="day" name="day">
              <option value="1">No</option>
              <option value="2">Yes</option>
            </select>
            </div>
            <p className="text-alternate mb-3">Contact No.</p>
              <input type="number" className="form-control" id="projectName" name="name" required="" />
          </div>
          <div className="col-md-12 col-12">
            <p className="text-alternate mb-3">Permanent Address</p>
            <div className="input-group mb-3">
              <textarea className="form-control" id="projectDes" name="projectDes" required=""></textarea>
            </div>
          </div>
            <p className="text-alternate mb-3">Co-Applicant</p>
          <div className="col-md-6 col-12">
            <p className="text-alternate mb-3">Third Applicant</p>
            <div className="input-group mb-3">
            <select className="form-control" id="day" name="day">
              <option value="1">option 1</option>
              <option value="2">option 2</option>
              <option value="3">option 3</option>
            </select>
              <input type="text" className="form-control" id="projectName" name="name" required="" />
            </div>
            <p className="text-alternate mb-3">Forth Applicant</p>
            <div className="input-group mb-3">
            <select className="form-control" id="day" name="day">
              <option value="1">option 1</option>
              <option value="2">option 2</option>
              <option value="3">option 3</option>
            </select>
              <input type="text" className="form-control" id="projectName" name="name" required="" />
            </div>
          </div>
          <div className="col-md-6 col-12">
            <p className="text-alternate mt-3">Contact No.</p>
            <div className="input-group mb-3">
            <input type="number" className="form-control" id="contact" name="contact" required="" />
            </div>
            <p className="text-alternate mt-3">Contact No.</p>
            <div className="input-group mb-3">
            <input type="number" className="form-control" id="contact" name="contact" required="" />
            </div>
          </div>
          <div className="col-md-3 col-12 p-1">
            <button type="button" class="btn btn-outline-primary btn-md mb-1 mr-1"> Add </button>
            <button type="button" class="btn btn-outline-primary btn-md mb-1 mr-1"> Edit </button>
          </div>
          <div className="col-md-6 col-12 p-1">
            <button type="button" class="btn btn-outline-primary btn-md mb-1 mr-1"> View </button>
            <button type="button" class="btn btn-outline-primary btn-md mb-1 mr-1"> Delete </button>
            <button type="button" class="btn btn-outline-primary btn-md mb-1 mr-1"> Clear </button>
          </div>
          <div className="col-md-3 col-12 p-1">
            <button type="button" class="btn btn-outline-primary btn-md mb-1 mr-1"> Ok </button>
            <button type="button" class="btn btn-outline-primary btn-md mb-1 mr-1"> Exit </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default BuyerMaster
