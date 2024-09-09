import React, { useState } from 'react'
import { Modal, ModalBody, ModalHeader } from 'react-bootstrap';
// import Draggable from 'react-draggable';
// import HostelManagement from '../service/HostelManagementService';

const StaffHome = () => {

  const [showAddStaff,setshowAddStaff] = useState(false);
  const [showUpdateRoom,setShowUpdateRoom] = useState(false);


  const HandleNewStaff = () => {
    setshowAddStaff(true);
    setShowUpdateRoom(false)
  }
  
  const [staff,setStaff] = useState({
    name:'',
    fathername:'',
    mobileno:'',
    altmobileno:'',
    email:'',
    houseno:'',
    street:'',
    city:'',
    state:'',
    pincode:'',
    workingname:'',
    roomno:''
  })

  const HandleChange = (e) =>{
    const {name,value} = e.target;
    setStaff({...staff,[name]:value})
  }

  const handleClose = (e) =>{
    setshowAddStaff(false);
  }

  return (
    <div className='container-fluid mt-3'>
      <h4 className='fs-semibold text-secondary'>Staff Management</h4>
      <div className='mt-2 ms-3'>
        <div className="ms-5 mt-3">
            <button className="btn btn-info fw-semibold ms-5" onClick={HandleNewStaff}>Add Staff</button>
        </div>
        <div className='mt-2 ms-3'>
            <h5 className='fs-semibold text-secondary'>All Staff Details</h5>
            <table className='table table-striped-columns table-bordered table-hover border-dark mt-lg-4'>
            <thead className='text-center'>
                <tr>
                <th className='text-primary'>Name</th>
                <th className='text-primary'>Father Name</th>
                <th className='text-primary'>Mobile</th>
                <th className='text-primary'>Email</th>
                <th className='text-primary'>Address</th>
                <th  className='text-primary'>DoJ</th>
                <th className='text-primary'>Designation</th>
                <th className='text-primary'>Actions</th>
                </tr>
            </thead>
            
            </table>
        </div>
      </div>
      <Modal show={showAddStaff} onHide={handleClose} className=''>
          <Modal.Header closeButton  >
            <Modal.Title className='text-secondary'>Add Staff</Modal.Title>
          </Modal.Header>
          <Modal.Body className='mx-3'>
            <form className='ms-2' >
              <div className='row'>
                <div className='d-flex my-1'>
                  <label className='form-label fw-bold mt-2 col-5' htmlFor='name'>Name :</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control w-50 col-7"
                    placeholder="Enter Staff Name"
                    value={staff.name}
                    onChange={HandleChange}
                    maxLength={30}
                    required
                    onKeyPress={(e) => {
                        const isValidInput = /[A-Za-z]/;
                        if (!isValidInput.test(e.key)) {
                            e.preventDefault();
                        }
                    }}
                  />
                </div>
                <div className='d-flex my-1'>
                    <label className='form-label fw-bold mt-2 col-5' htmlFor='fathername'>Father's Name :</label>
                    <input
                        type="text"
                        name="fathername"
                        id="fathername"
                        className="form-control w-50 col-7"
                        placeholder="Enter Father's Name"
                        value={staff.fathername}
                        onChange={HandleChange}
                        maxLength={30}
                        onKeyPress={(e) => {
                            const isValidInput = /[A-Za-z]/;
                                if (!isValidInput.test(e.key)) {
                                    e.preventDefault();
                                }
                            }}
                        required
                    />
                </div>
              </div>
              <div className='row'>
                <div className='d-flex my-1'>
                  <label className='form-label fw-bold mt-2 col-5' htmlFor='mobileno'>Mobile No. :</label>
                  <input
                    type="text"
                    name="mobileno"
                    id="mobileno"
                    className="form-control w-50 col-7"
                    placeholder="Enter Mobile Number"
                    value={staff.mobileno}
                    onChange={HandleChange}
                    maxLength={10}
                    onKeyPress={(e) => {
                        const isValidInput = /[0-9]/;
                        if (!isValidInput.test(e.key)) {
                            e.preventDefault();
                        }
                        }}
                    required
                    />
                </div>
                <div className='d-flex my-1'>
                  <label className='form-label fw-bold mt-2 col-5' htmlFor='altmobileno'>Alternate Mobile No. :</label>
                  <input
                    type='text'
                    name='altmobileno'
                    id='altmobileno'
                    className='form-control w-50 col-7'
                    placeholder='Enter Altetnate Mobile Number'
                    value={staff.altmobileno}
                    onChange={HandleChange}
                    maxLength={10}
                    onKeyPress={(e) => {
                        const isValidInput = /[0-9]/;
                        if (!isValidInput.test(e.key)) {
                            e.preventDefault();
                        }
                        }}
                  />
                </div>
                <div className='d-flex my-1'>
                <label className='form-label fw-bold mt-2 col-5' htmlFor='email'>Mail-Id :</label>
                  <input
                    type='text'
                    name='email'
                    id='email'
                    className='form-control w-50 col-7'
                    placeholder='Enter Mail id'
                    value={staff.email}
                    onChange={HandleChange}
                    required
                  />
                </div>
              </div>
              <div className='my-1'>
                <h5 className='text-secondary fw-bold'>Address</h5>
                <div className='d-flex'>
                  <label className='form-label fw-bold mt-2 col-5' htmlFor='houseno'>House No. :</label>
                  <input
                    type='text'
                    name='houseno'
                    id='houseno'
                    className='form-control w-50 col-7 mb-1'
                    placeholder='Enter House Number'
                    value={staff.houseno}
                    onChange={HandleChange}
                  />
                </div>
                <div className='d-flex'>
                  <label className='form-label fw-bold mt-1 col-5' htmlFor='street'>Street Name :</label>
                  <input
                    type='text'
                    name='street'
                    id='street'
                    className='form-control w-50 col-7 mb-1'
                    placeholder='Enter Street Name'
                    value={staff.street}
                    onChange={HandleChange}
                  />
                </div>
                <div className='d-flex'>
                  <label className='form-label fw-bold mt-1 col-5' htmlFor='city'>City :</label>
                  <input
                    type='text'
                    name='city'
                    id='city'
                    className='form-control w-50 col-7 mb-1'
                    placeholder='Enter City Name'
                    value={staff.city}
                    onChange={HandleChange}
                  />
                </div>
                <div className='d-flex'>
                  <label className='form-label fw-bold mt-1 col-5' htmlFor='state'>State :</label>
                  <input
                    type='text'
                    name='state'
                    id='state'
                    className='form-control w-50 col-7 mb-1'
                    placeholder='Enter State Name'
                    value={staff.state}
                    onChange={HandleChange}
                  />
                </div>
                <div className='d-flex'>
                  <label className='form-label fw-bold mt-1 col-5' htmlFor='pincode'>PinCode :</label>
                  <input
                    type='text'
                    name='pincode'
                    id='pincode'
                    className='form-control w-50 col-7 mb-1'
                    placeholder='Enter Pincode Name'
                    value={staff.pincode}
                    onChange={HandleChange}
                  />
                </div>
              </div>
              <div className='row my-1'>
                <div className='d-flex'>
                  <label className="form-label" htmlFor="availablerooms">Designation:- </label>
                  <select className="form-control w-100" name="availablerooms" id="availablerooms" required>
                        <option>Select</option>
                        <option>Cook</option>
                        <option>Sweeper</option>
                        <option>Supervisor</option>
                        <option>Helper</option>
                    </select>
                </div>
              </div>
              <div className='d-flex justify-content-around mt-3'>
                <button className='btn btn-danger' type='clear' onClick={handleClose}>Cancel</button>
                <button className='btn btn-success' type='submit'>Save</button>
              </div>
            </form>
          </Modal.Body>
      </Modal>

      <Modal show={false}>
        
      <ModalHeader className='d-flex justify-content-center fw-bold  text-primary ms-5'>
        UPDATE STAFF DETAILS
        <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
        </ModalHeader>
        <ModalBody  className='p-5 pt-2'>
        <form className="mt-3">
    <table className="table table-borderless">
        <tbody>
            <tr>
                <td className="fw-bold">
                    <label className="form-label" htmlFor="name">Name:- </label>
                </td>
                <td>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control w-100"
                        placeholder="Enter Staff Name"
                        value={staff.name}
                        onChange={HandleChange}
                        maxLength={30}
                        onKeyPress={(e) => {
                            const isValidInput = /[A-Za-z]/;
                            if (!isValidInput.test(e.key)) {
                                e.preventDefault();
                            }
                        }}
                        required
                    />
                </td>
            </tr>
            <tr>
                <td className="fw-bold">
                    <label className="form-label" htmlFor="fathername">Father's Name:- </label>
                </td>
                <td>
                    <input
                        type="text"
                        name="fathername"
                        id="fathername"
                        className="form-control w-100"
                        placeholder="Enter Father's Name"
                        value={staff.fathername}
                        onChange={HandleChange}
                        maxLength={30}
                        onKeyPress={(e) => {
                            const isValidInput = /[A-Za-z]/;
                            if (!isValidInput.test(e.key)) {
                                e.preventDefault();
                            }
                        }}
                        required
                    />
                </td>
            </tr>
            <tr>
                <td className="fw-bold">
                    <label className="form-label" htmlFor="mobileno">Mobile No:- </label>
                </td>
                <td>
                    <input
                        type="text"
                        name="mobileno"
                        id="mobileno"
                        className="form-control w-100"
                        placeholder="Enter Mobile Number"
                        value={staff.mobileno}
                        onChange={HandleChange}
                        required
                        maxLength={10}
                        onKeyPress={(e) => {
                            const isValidInput = /[0-9]/;
                            if (!isValidInput.test(e.key)) {
                                e.preventDefault();
                            }
                        }}
                    />
                </td>
            </tr>
            <tr>
                <td className="fw-bold">
                    <label className="form-label" htmlFor="email">Mail-Id:- </label>
                </td>
                <td>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        className="form-control w-100"
                        placeholder="Enter Mail id"
                        value={staff.email}
                        onChange={HandleChange}
                        required
                    />
                </td>
            </tr>
            <tr>
                <td className="fw-bold">
                    <label className="form-label" htmlFor="address">Permanent Address:- </label>
                </td>
                <td>
                    <textarea
                        name="address"
                        id="address"
                        rows="3"
                        className="form-control w-100"
                        value={staff.address}
                        onChange={HandleChange}
                        required
                    ></textarea>
                </td>
            </tr>
            <tr>
                <td className="fw-bold">
                    <label className="form-label" htmlFor="availablerooms">Designation:- </label>
                </td>
                <td>
                    <select className="form-control w-100" name="availablerooms" id="availablerooms" required>
                        <option>Select</option>
                        <option>Cook</option>
                        <option>Sweeper</option>
                        <option>Supervisor</option>
                        <option>Helper</option>
                    </select>
                </td>
            </tr>
        </tbody>
    </table>
    <div className="d-flex justify-content-around mt-3">
        {/* <button className="btn btn-danger">Clear</button> */}
        <button className="btn btn-success">Save</button>
    </div>
</form>

        </ModalBody>
      </Modal>
        
    </div>
  )
}

export default StaffHome

// import React from 'react'
// import { Link } from 'react-router-dom'

// const StaffHome = () => {
//   return (
//     <div className='container-fluid'>
//         <div className='my-1'>
//               <Link to='/newstaff' className='btn btn-primary w-100'>New Staff</Link>
//             </div>
//             <div className='my-1'>
//               <Link to='/editstaff' className='btn btn-primary w-100'>Edit Staff</Link>
//             </div>
//             <div className='my-1'>
//               <Link to='/staffpayment' className='btn btn-primary w-100'>Staff Payment</Link>
//             </div>
//             <div className='my-1'>
//               <Link to='/stafflist' className='btn btn-primary w-100'>Staff's List</Link>
//             </div>
//             <div className='my-1'>
//               <Link to='/previousstaff' className='btn btn-primary w-100'>Previous Staff</Link>
//             </div>
//     </div>
//   )
// }

// export default StaffHome
