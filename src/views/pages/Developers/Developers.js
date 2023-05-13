import React from 'react'
import { RequiredField } from '../../../utility/RequiredField'

const Developers = () => {
  return (
    <>
      <div className='container bg-white p-2 rounded-2'>
        <form className="row needs-validation" novalidate>
          <p className="text-alternate mb-3">Company Details</p>
          <div className="col-md-12 col-12">
            <label htmlFor="companyName" className="text-alternate mb-3">{RequiredField} Company Name</label>
            <div className="input-group mb-3">
              <select className="form-control" id="companyName" name="companyName" required>
                <option value="someOption">Some option</option>
                <option value="otherOption">Other option</option>
              </select>
              {/* <input type="text" className="form-control" id="projectName" name="name" required="" /> */}
            </div>
          </div>
          <div className='col-md-3 col-12' >
            <p className="text-alternate">Telephone No</p>
            <input type="number" className="form-control" id="tele" name="tele" required="" />
          </div>
          <div className='col-md-3 col-12'>
            <p className="text-alternate">Fax No.</p>
            <input type="text" className="form-control" id="FaxNo" name="FaxNo" required="" />
          </div>
          <div className="col-md-7 col-12">
            <label id='Address' className="text-alternate">{RequiredField} Address</label>
            <div className="input-group mb-3">
              <textarea className="form-control" id="Address" name="Address" required></textarea>
            </div>
          </div>
          <div className='col-md-5 col-12'>
            <p className="text-alternate">E-mail</p>
            <input type="email" className="form-control" id="email" name="email" required="" />
          </div>
          <div className="col-md-12 col-12">
            <p className="text-alternate">Address</p>
            <div className="input-group mb-3">
              <textarea className="form-control" id="Address" name="Address" required=""></textarea>
            </div>
          </div>
          <div className="col-md-12 col-12">
            <p className="text-alternate">GSTIN</p>
            <div className="input-group mb-3">
              <input type="email" className="form-control" id="GSTIN" name="GSTIN" required="" />
            </div>
          </div>
          <p className="text-alternate">Key Persons</p>
          <div className="col-md-12 col-12">
            <label id='keyPersonName' className="text-alternate mt-3">{RequiredField} Name</label>

            <div className="input-group mb-3">
              <input type="name" className="form-control" id="keyPersonName" name="keyPersonName" required />
              <div class="invalid-feedback">
                Please enter a message in the textarea.
              </div>
            </div>
          </div>
          <div className="col-md-2 col-12">
            <label id='Designation' className="text-alternate mb-3">{RequiredField}Designation</label>
            <div className="input-group mb-3">
              <input type="text" className="form-control" id="Designation" name="Designation" required />
            </div>
          </div>
          <div className="col-md-2 col-12">
            <p className="text-alternate mb-3">phone(Res)</p>
            <div className="input-group mb-3">
              <input type="text" className="form-control" id="keyPersonNo" name="keyPersonNo" required="" />
            </div>
          </div>
          <div className="col-md-2 col-12">
            <p className="text-alternate mb-3">phone(Office)</p>
            <div className="input-group mb-3">
              <input type="text" className="form-control" id="officeNo" name="officeNo" required="" />
            </div>
          </div>
          <div className="col-md-2 col-12">
            <p className="text-alternate mb-3">Exta .</p>
            <div className="input-group mb-3">
              <input type="text" className="form-control" id="Exta" name="Exta" required="" />
            </div>
          </div>
          <div className="col-md-2 col-12">
            <p className="text-alternate mb-3">Mobile Phone</p>
            <div className="input-group mb-3">
              <input type="number" className="form-control" id="MobileNo" name="MobileNo" required="" />
            </div>
          </div>
          <div className="col-md-2 col-12">
            <p className="text-alternate mb-3">Pager Number</p>
            <div className="input-group mb-3">
              <input type="text" className="form-control" id="PagerNo" name="PagerNo" required="" />
            </div>
          </div>
          <div className="col-md-1 col-12 d-flex flex-column" >
            <button type="button" class="btn btn-outline-primary btn-sm mb-1"> &gt; &gt; </button>
            <button type="button" class="btn btn-outline-primary btn-sm mb-1">&#10005;</button>
            <button type="button" class="btn btn-outline-primary btn-sm mb-1">Cls</button>
          </div>
          <div className="col-md-10 col-12">
            <div className=" d-flex justify-content-between"><p className='text-alternate'>Name</p><p className='text-alternate'>Designation</p><p className='text-alternate'>Phone(Off.)</p><p className='text-alternate'>Mobile</p></div>
            <div className="input-group mb-3">
              <textarea className="form-control" id="ownerList" name="OwnerList" required=""></textarea>
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
            <button type="submit" class="btn btn-outline-primary btn-md mb-1 mr-1"> Ok </button>
            <button type="button" class="btn btn-outline-primary btn-md mb-1 mr-1"> Exit </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Developers
