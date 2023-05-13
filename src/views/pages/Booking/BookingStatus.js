import React, { useState } from 'react'
import { Input } from 'reactstrap'
import { RequiredField } from '../../../utility/RequiredField'

const BookingStatus = () => {
  const [discount, setDiscount] = useState(0);
  const [unitCost, setUnitCost] = useState(0);
  const [basicCost, setBasicCost] = useState(0);
  const [netTotal, setNetTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [adjustment, setAdjustment] = useState(0);
  const [additionalWorks, setAdditionalWorks] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0.00);
  const [totalRefund, setTotalRefund] = useState(0);
  const [netRemainingBalance, setNetRemainingBalance] = useState(0.00);
  const [totalReimbusable, setTotalReimbusable] = useState(0);
  const [SGST, setSGST] = useState({
    Total: 0, Paid: 0, Balance: 0
  })
  const [CGST, setCGST] = useState({
    Total: 0, Paid: 0, Balance: 0
  })
  const [optionalCost, setOptionalCost] = useState(0);
  return (
    <>
      <div className='container bg-white p-2 rounded-2'>
        <form className="row needs-validation" novalidate>
          <div className="col-md-12 col-12">
            <label htmlFor="bookingStatus" className="text-alternate mb-3">{RequiredField} Booking Status</label>
            <div className="input-group mb-3">
              <input type="text" className="form-control" id="bookingStatus" name="bookingStatus" required />
            </div>
          </div>
          <div className='col-md-4 col-12 mb-3' >
            <label htmlFor='bDate' className="text-alternate">{RequiredField}Booking Date</label>
            <input type="date" className="form-control" id="bDate" name="bDate" required />
          </div>
          <div className='col-md-4 col-12 mb-3' >
            <label htmlFor='aDate' className="text-alternate">Allotment Date</label>
            <input type="date" className="form-control" id="aDate" name="aDate" required="" />
          </div>
          <div className='col-md-4 col-12 mb-3' >
            <label htmlFor='agreeDate' className="text-alternate">Agreement Date</label>
            <input type="date" className="form-control" id="agreeDate" name="agreeDate" required="" />
          </div>
          <div className="col-md-8 col-12">
            <label htmlFor="buyer" className="text-alternate mb-1">{RequiredField} Buyer(P)</label>
            <div className="input-group mb-3">
              <select className="form-control" id="buyer" name="buyer" required>
                <option value="someOption">Some option</option>
                <option value="otherOption">Other option</option>
              </select>
            </div>
          </div>
          <div className='col-md-3 col-12 mb-3' >
            <p className="text-alternate">Customer Id</p>
            <input type="text" className="form-control" id="cId" name="cId" required="" />
          </div>
          <div className="col-md-6 col-12">
            <label htmlFor="project" className="text-alternate mb-1">{RequiredField} Project</label>
            <div className="input-group mb-3">
              <select className="form-control" id="project" name="project" required>
                <option value="someOption">Some option</option>
                <option value="otherOption">Other option</option>
              </select>
            </div>
          </div>
          <div className='col-md-3 col-12' >
            <p className="text-alternate">Application No</p>
            <input type="text" className="form-control" id="applicationNo" name="applicationNo" required="" />
          </div>
          <div className='col-md-3 col-12' >
            <p className="text-alternate">Application Date</p>
            <input type="date" className="form-control" id="applicationDate" name="applicationDate" required="" />
          </div>
          <div className="col-md-4 col-12">
            <label htmlFor="Block" className="text-alternate mb-1">{RequiredField} Block</label>
            <div className="input-group mb-1">
              <select className="form-control" id="Block" name="Block" required>
                <option value="someOption">Some option</option>
                <option value="otherOption">Other option</option>
              </select>
            </div>
            <label htmlFor="Floor" className="text-alternate mb-1">{RequiredField} Floor</label>
            <div className="input-group mb-3">
              <select className="form-control" id="Floor" name="Floor" required>
                <option value="someOption">Some option</option>
                <option value="otherOption">Other option</option>
              </select>
            </div>
          </div>
          <div className='col-md-3 col-12 mt-3'>
            <div>
              <Input type="checkbox" />
              <p className="text-alternate">Reg. Done</p>
            </div>
            <div>
              <Input type="checkbox" />
              <p className="text-alternate">Key Handed Over</p>
            </div>
          </div>
          <div className="col-md-3 col-12">
            <label id='coBuyer' className="text-alternate mb-1">Co-buyer Name</label>
            <div className="input-group mb-3">
              <input type="text" className="form-control" id="coBuyer" name="coBuyer" />
            </div>
          </div>
          <div className="col-md-2 col-12">
            <div className="mt-3">
              <button type="button" className='btn btn-outline-primary' >Nomination</button>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <label htmlFor="UnitType" className="text-alternate mb-1">{RequiredField}Unit Type</label>
            <div className="input-group mb-3">
              <select className="form-control" id="UnitType" name="UnitType" required>
                <option value="someOption">Some option</option>
                <option value="otherOption">Other option</option>
              </select>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <label htmlFor="UnitNo" className="text-alternate mb-1">{RequiredField}Unit No.</label>
            <div className="input-group mb-3">
              <select className="form-control" id="UnitNo" name="UnitNo" required>
                <option value="someOption">Some option</option>
                <option value="otherOption">Other option</option>
              </select>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <label htmlFor="schemeType" className="text-alternate mb-1">{RequiredField}Scheme Type</label>
            <div className="input-group mb-3">
              <select className="form-control" id="schemeType" name="schemeType" required>
                <option value="someOption">Some option</option>
                <option value="otherOption">Other option</option>
              </select>
            </div>
          </div>

          <div className='col-md-3 mb-3 col-12'>
            <p className="text-alternate ">Rs./SFt</p>
            <input type="text" className="form-control" id="Rs./SFt" name="Rs./SFt" required="" />
          </div>
          <div className='col-md-3 col-12 mb-3 '>
            <p className="text-alternate">Discount(%)</p>
            <input type="text" className="form-control" id="discount" name="discount" value={discount} onChange={(e) => setDiscount(e.target.value)} required="" />
          </div>
          <div className='col-md-3 col-12 mb-3 '>
            <p className="text-alternate">Unit Cost(Rs.)</p>
            <input type="text" className="form-control" id="uCost" name="uCost" value={unitCost} onChange={(e) => setUnitCost(e.target.value)} required="" />
          </div>
          <div className='col-md-3 mb-3 col-12 d-flex justify-content-between'>
            <div className='d-flex flex-column'>
              <p className="text">Basic Cost(Rs.):</p>
              <p className="text">[Unit + Optional Unit]:</p>
            </div>
            <div className='d-flex flex-column'>
              <span>{unitCost}</span>
            </div>
          </div>
          <div className='col-md-3 col-12 d-flex justify-content-between'>
            <p className="text">B.Area (SFt/Cottah):</p>
          </div>
          <div className="col-md-4 col-12">
            <label htmlFor="TransDisc" className="text-alternate mb-1">Sch. Trans.Disc%</label>
            <div className="input-group mb-3">
              <select className="form-control" id="TransDisc" name="TransDisc">
                <option value="someOption">Some option</option>
                <option value="otherOption">Other option</option>
              </select>
            </div>
          </div>
          <div className='col-md-3 col-12 d-flex flex-column justify-content-between'>
            <p className="text">S.Area (SFt/Cottah):</p>
            <div className="mb-3">
              <input type="text" className="form-control" id="SArea" name="SArea" required="" />
            </div>
          </div>
          <div className='col-md-3 col-12 d-flex justify-content-between'>
            <p className="text">Bed Rooms:</p>
          </div>
        </form>
        <form className="row needs-validation" novalidate>
          <div className='col-md-6 col-12 d-flex flex-column'>
            <div>
              <p className="text">Financed By</p>
              <div className="input-group mb-1">
                <select className="form-control" id="FinancedBy" name="FinancedBy">
                  <option value="someOption">Some option</option>
                  <option value="otherOption">Other option</option>
                </select>
              </div>
            </div>
            <div>
              <p className="text">Sales Executive</p>
              <div className="input-group mb-1">
                <select className="form-control" id="SalesExecutive" name="SalesExecutive">
                  <option value="someOption">Some option</option>
                  <option value="otherOption">Other option</option>
                </select>
              </div>
            </div>
            <div>
              <p className="text">Data Entry By</p>
              <div className="mb-1">
                <input type="text" className="form-control" id="SArea" name="SArea" required="" />
              </div>
            </div>
            <div>
              <p className="text">Tele Caller</p>
              <div className="input-group mb-1">
                <select className="form-control" id="DataEntry" name="DataEntry">
                  <option value="someOption">Some option</option>
                  <option value="otherOption">Other option</option>
                </select>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-12 d-flex flex-column'>
            <div className=' row'>
              <div className='col-md-6 col-12 d-flex'>
                <p className='text-alternate'>Adjustment (Rs.)</p>
                <div className=''>
                  <input type="text" className="form-control" id="Adj" name="Adj" value={adjustment} onChange={(e) => { setAdjustment(e.target.value) }} required="" />
                </div>
              </div>
              <div className='col-md-6 col-12 d-flex justify-content-between'>
                <p className='text'>Total Reimbusable (Rs.)</p>
                <p className='text'>{totalReimbusable}</p>
              </div>
            </div>
            <div className=''>
              <p className='text'>Additional Works (Rs.) {additionalWorks}</p>
            </div>
            <hr className='bg-danger border-danger'></hr>
            <div>
              <p className='text'>Total Cost (Rs.) {totalCost}</p>
              <p className='text'>Total Payment (Rs.) {totalPayment}</p>
              <p className='text'>Total Refund (Rs.) {totalRefund}</p>
              <p className='text'>Net Remaining Balance (Rs.) {netRemainingBalance}</p>
              <div>
                <Input type="checkbox" />
                <p className="text-alternate">Loan Required</p>
              </div>
            </div>
            <div className='row'>
              <div className="col-3">
                <p className='text border-none'></p>
              </div>
              <div className="col-3">
                <p className='text'>Total</p>

              </div>
              <div className="col-3">
                <p className='text'>Paid</p>

              </div>
              <div className="col-3">
                <p className='text'>Balance</p>

              </div>
              <div className="col-3">
                <p className='text '>SGST</p>

              </div>
              <div className="col-3">
                <p className='text'>{SGST.Total}</p>

              </div>
              <div className="col-3">
                <p className='text'>{SGST.Paid}</p>

              </div>
              <div className="col-3">
                <p className='text'>{SGST.Balance}</p>

              </div>
              <div className="col-3">
                <p className='text'>CGST</p>

              </div>
              <div className="col-3">
                <p className='text'>{CGST.Total}</p>

              </div>
              <div className="col-3">
                <p className='text'>{CGST.Paid}</p>

              </div>
              <div className="col-3">
                <p className='text'>{CGST.Balance}</p>

              </div>
            </div>
          </div>
        </form>
        <form className="row needs-validation" novalidate>
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

export default BookingStatus
