import React from 'react'
import { Input } from 'reactstrap'
import { RequiredField } from '../../../utility/RequiredField'

const PaymentRecieve = () => {
  return (
    <>
    <div className='container bg-white p-2 rounded-2'>
      <form className="row needs-validation" novalidate>
        <p className="text-alternate mb-3">Company Details</p>
        <div className="col-md-12 col-12">
          <label htmlFor="bookingID" className="text-alternate mb-3">{RequiredField} Booking ID</label>
          <div className="input-group mb-3">
          <input type="number" className="form-control" id="bookingID" name="bookingID" required="" />
          </div>
        </div>
        <div className='col-md-3 col-12' >
          <p className="text-alternate">Payment No.</p>
          <div className='input-group'>
          <select className="form-control" id="companyName" name="companyName" required>
              <option value="someOption">Some option</option>
              <option value="otherOption">Other option</option>
            </select>
          </div>
        </div>
        <div className='col-md-3 col-12'>
          <label htmlFor='bookingDate mb-2' className="text-alternate">{RequiredField}Date</label>
          <input type="date" className="form-control" id="bookingDate" name="bookingDate" required="" />
          <p className="text-alternate mb-3">Booking Date</p>
        </div>
        <div className="col-md-12 col-12 row">
          <div className='col-4'>
          <p className="text-alternate mb-3">Project</p>
          </div>
          <div className='col-2'>
          <p className="text-alternate mb-3">Block</p>

          </div>
          <div className='col-3'>
          <p className="text-alternate mb-3">Unit No.</p>

          </div>
          <div className='col-3'>
          <p className="text-alternate mb-3">Floor</p>

          </div>
          <hr className='bg-black'></hr>
          <div className='col-4'>
          <p className="text-alternate mb-1">Payment Head</p>
          </div>
          <div className='col-2'>
          <p className="text-alternate mb-1">Amount(Rs.)</p>

          </div>
          <div className='col-3'>
          <p className="text-alternate mb-1">Recieved(Rs.)</p>

          </div>
          <div className='col-3'>
          <p className="text-alternate mb-1">Balance(Rs.)</p>

          </div>
          <hr className='bg-black'></hr>
          <div className='col-4'>
          <p className="text-alternate mb-3">Lorem, ipsum.</p>
          </div>
          <div className='col-2'>
          <p className="text-alternate mb-3">7000.00</p>

          </div>
          <div className='col-3'>
          <p className="text-alternate mb-3">5000.00</p>

          </div>
          <div className='col-3'>
          <p className="text-alternate mb-3">2000.00</p>

          </div>
        </div>
          <p className="text-alternate">Payment Break Up</p>

        <div className="col-md-3 col-12">
          <label id='payHEAD' className="text-alternate">{RequiredField} Payment Head</label>
          <div className="input-group mb-3">
            <textarea className="form-control" id="payHEAD" name="payHEAD" required></textarea>
          </div>
        </div>
        <div className='col-md-5 col-12 d-flex flex-row'>
          <div>
            <button type="buttton" className="btn btn-primary" >&gt; &gt;</button>
          </div>
          <div className='d-flex flex-column p-1'>
          <h6 className="text-alternate">Amount (Rs.)</h6>
          <input type="text" className='form-control mb-1' />
          <h6 className="text-alternate">SGST(%)</h6>
          <input type="text" className='form-control mb-1' />
          <h6 className="text-alternate">CGST(%)</h6>
          <input type="text" className='form-control mb-1' />
          <h6 className="text-alternate">STax(%)</h6>
          <input type="text" className='form-control mb-1' />

          </div>
          <div className='d-flex flex-column'>
            <button type="buttton" className="btn btn-primary mb-1" >&gt; &gt;</button>
            <button type="buttton" className="btn btn-primary mb-1" >&#10005;</button>
            <button type="buttton" className="btn btn-primary mb-1" >Cls</button>
          </div>
        </div>
        <div className="col-md-4 col-12 row">
          <div className="col-7">
          <p className="text-alternate">Assigned</p>
          </div>
          <div className="col-5">
          <p className="text-alternate">Amount</p>
          </div>
          <div className="col-7" >
          <p className="text-alternate">167</p>

          </div>
          <div className="col-5">
          <p className="text-alternate">200</p>

          </div>
        </div>
        <div className="col-md-8 col-12">
          <p className="text-alternate">Narration</p>
          <div className="input-group mb-3">
            <input type="email" className="form-control" id="GSTIN" name="GSTIN" required="" />
          </div>
        </div>
        <div className="col-md-4 col-12">
          <p className="text-alternate">Amount (Rs.)</p>
          <div className="input-group mb-3">
            <input type="email" className="form-control" id="GSTIN" name="GSTIN" required="" />
          </div>
        </div>
        <p className="text-alternate">Cash/Cheque/DD Details</p>
        <div className='col-12 col-md-3 row'>
          <div className='col-6 d-flex'>
            <Input type="radio" name="basicRadio" />
            <p className="text">Cash</p>
          </div>
          <div className='col-6 d-flex'>
            <Input type="radio" name="basicRadio" />
            <p className="text">Cheque</p>
          </div>
          <div className='col-6 d-flex'>
            <Input type="radio" name="basicRadio" />
            <p className="text">DD</p>
          </div>
          <div className='col-6 d-flex'>
            <Input type="radio" name="basicRadio" />
            <p className="text">RTGS</p>
          </div>
          <div className='col-6 d-flex'>
            <Input type="radio" name="basicRadio" />
            <p className="text">NEFT</p>
          </div>
          <div className='col-6 d-flex'>
            <Input type="radio" name="basicRadio" />
            <p className="text">Net Banking</p>
          </div>
          <div className='col-6 d-flex'>
            <Input type="radio" name="basicRadio" />
            <p className="text">Credit Card</p>
          </div>
        </div>
        <div className='col-12 col-md-8'>
          <div className='d-flex'>
            <p className='text'>Cheque No.</p>
            <input type="text" className='form-control mx-1' />
            <p className='text'>Date</p>
            <input type="date" className='form-control mx-1' />
            <input type="checkbox" />
            <p className='text'>Bounced</p>
          </div>
          <div className='d-flex mb-1'>
            <p className='text'>Bank</p>
            <select  className="form-control"  >
              <option>Choose One</option>
              <option>option 1</option>
              <option>option 2</option>
            </select>
            <button type="button" className='btn btn-outline-primary'>Bank</button>
          </div>
          <div className='d-flex'>
            <p className='text'>Branch</p>
            <select className="form-control"  >
              <option>Choose One</option>
              <option>option 1</option>
              <option>option 2</option>
            </select>
          </div>
        </div>
        <div className='col-12 col-md-1 d-flex flex-column'>
            <p className='text mb-1'>Amount(Rs.)</p>
            <input type="text" className='form-control mb-1'/>
            <button type="button" class="btn btn-outline-primary btn-sm mb-1"> &gt; &gt; </button>
            <button type="button" class="btn btn-outline-primary btn-sm mb-1"> &lt; &lt; </button>
            <button type="button" class="btn btn-outline-primary btn-sm mb-1">&#10005;</button>
            <button type="button" class="btn btn-outline-primary btn-sm mb-1">Cls</button>

        </div>
        <div className="col-md-12 col-12 row">
          <div className="col-2">
            <p className='text'>Amount(Rs.)</p>
          </div>
          <div className="col-1">
            <p className='text'>Mode</p>
          </div>
          <div className="col-2">
          <p className='text'>Cheque/DD No.
          </p>
          </div>
          <div className="col-1">
            <p className='text'>Date</p>
          </div>
          <div className="col-1">
            <p className='text'>Bounced</p>
          </div>
          <div className="col-3">
            <p className='text'>Bank</p>
          </div>
          <div className="col-2">
            <p className='text'>Branch</p>
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

export default PaymentRecieve
