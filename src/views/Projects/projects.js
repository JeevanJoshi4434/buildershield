import React from 'react'

const projects = () => {
  return (
    <>
      <div className='container bg-white p-2 rounded-2'>
        <div className="row">
          <div className="col-md-12 col-12">
            <p className="text-alternate mb-3">Project *</p>
            <div className="input-group mb-3">
              <select className="form-control" id="projectName" name="name">
                <option value="someOption">Some option</option>
                <option value="otherOption">Other option</option>
              </select>
              {/* <input type="text" className="form-control" id="projectName" name="name" required="" /> */}
            </div>
          </div>
          <div className='col-md-3 col-12' >
            <p className="text-alternate">Code</p>
            <input type="text" className="form-control" id="projectName" name="name" required="" />
          </div>
          <div className='col-md-3 col-12'>
            <p className="text-alternate">Last Project Code</p>
            <input type="text" className="form-control" id="projectName" name="name" required="" />
          </div>
          <div className="col-md-12 col-12">
            <p className="text-alternate mt-3">Select Developer</p>
            <div className="input-group mb-3">
              <select className="form-control" id="day" name="day">
                <option value="1">Developer - 1</option>
                <option value="2">Developer - 2</option>
                <option value="3">Developer - 3</option>
              </select>
            </div>
          </div>
          <div className="col-md-3 col-12">
            <p className="text-alternate mb-3">Start Date</p>
            <div className="input-group mb-3">
              <input type="date" className="form-control" id="startDate" name="startDate" required="" />
            </div>
          </div>
          <div className="col-md-3 col-12">
            <p className="text-alternate mb-3">End Date</p>
            <div className="input-group mb-3">
              <input type="date" className="form-control" id="endDate" name="endDate" required="" />
            </div>
          </div>
          <div className="col-md-6 col-12">
            <p className="text-alternate mb-3">Location</p>
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
          <div className="col-md-3 col-12">
            <p className="text-alternate mb-3">Compound Interest</p>
            <div className="input-group">
              <span className="input-group-text">
                <input aria-label="Compound Interest" id="compoundInterest" name="compoundInterest" type="radio" className="form-check-input" />
              </span>
              <input aria-label="Rate of Interest (Rs.)" placeholder="Rate of Interest (Rs.)" className="form-control" />
            </div>
          </div>
          <div className="col-md-3 col-12">
            <p className="text-alternate mb-3">Demand &amp; Reminder Interval</p>
            <div className="input-group mb-3">
              <input type="text" className="form-control" id="projectName" name="name" required="" />
            </div>
          </div>

          <div className="col-md-5 col-12">
            <p className="text-alternate mb-3">Owner's List</p>
            <div className="input-group mb-3">
              <select className="form-control" id="day" name="day">
                <option value="1">JG Development Pvt. Ltd.</option>
                <option value="2">Owner - 2</option>
                <option value="3">Owner - 3</option>
              </select>
            </div>
          </div>
          <div className="col-md-1 col-12 d-flex flex-column" >
                <button type="button" class="btn btn-outline-primary btn-sm mb-1"> &gt; &gt; </button>
                <button type="button" class="btn btn-outline-primary btn-sm mb-1">&#10005;</button>
                <button type="button" class="btn btn-outline-primary btn-sm mb-1">Cls</button>
          </div>
          <div className="col-md-6 col-12">
            <div className="input-group mb-3">
              <textarea className="form-control" id="ownerList" name="OwnerList" required=""></textarea>
            </div>
          </div>
          <div className="col-md-5 col-12">
            <p className="text-alternate mb-3">Profit Centre List</p>
            <div className="input-group mb-3">
              <select className="form-control" id="day" name="day">
                <option value="1">Project at sonarpur</option>
                <option value="2">Project at xyz</option>
                <option value="3">Option - 3</option>
              </select>
            </div>
          </div>
          <div className="col-md-1 col-12 d-flex flex-column" >
                <button type="button" class="btn btn-outline-primary btn-sm mb-1"> &gt; &gt; </button>
                <button type="button" class="btn btn-outline-primary btn-sm mb-1">&#10005;</button>
                <button type="button" class="btn btn-outline-primary btn-sm mb-1">Cls</button>
          </div>
          <div className="col-md-6 col-12">
            <div className="input-group mb-3">
              <textarea className="form-control" id="ownerList" name="OwnerList" required=""></textarea>
            </div>
          </div>
          <div className="col-md-12 col-12">
            <p className="text-alternate mb-3">Description</p>
            <div className="input-group mb-3">
              <textarea className="form-control" id="projectDes" name="projectDes" required=""></textarea>
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

export default projects
