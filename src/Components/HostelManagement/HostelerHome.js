import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HostelManagement from '../service/HostelManagementService'
import { Modal } from 'react-bootstrap'

const HostelerHome = () => {

  const [showAddHosteler,setShowAddHosteler] = useState(false)

  const [hosteler,setHosteler] = useState({
    name:'',
    fathername:'',
    mobileno:'',
    email:'',
    address:'',
    workingname:'',
    roomno:''
  })

  const HandleClose = () =>{
    setShowAddHosteler(false)
  }

  const HandleNewHosteler = () =>{
    setShowAddHosteler(true)
  }

  const HandleChange = (e) =>{
    const {name,value} = e.target;
    setHosteler({...hosteler,[name]:value})
  }

  const HandleSubmit = async(e) => {
    e.preventDefault();
    try {
      HostelManagement.AddNewHosteler(hosteler).then(res=>{
        console.log(res.data);
      })
    } catch (error) {
      console.log(error);
      
    }
  }


  return (
    <div className='container-fluid mt-3'>
      <h3 className='fs-bold text-secondary'>Hosteler Management</h3>
      <div className='mt-2 ms-3'>
        <div className='ms-5 mt-3'>
          <button className='btn btn-info fw-semibold ms-5' onClick={HandleNewHosteler}>Add New Hosteler</button>
        </div>
        <div className='mt-2 ms-3'>
          <h5 className='fs-semibold text-secondary'>All Hosteler's Details</h5>
          <table className='table table-striped-columns table-bordered table-hover border-dark mt-lg-4'>
            <thead className='text-center'>
              <tr>
                <th className='text-primary'>Sl.No.</th>
                <th className='text-primary'>Room Number</th>
                <th className='text-primary'>Name</th>
                <th className='text-primary'>Mobile No.</th>
                <th className='text-primary'>Father Name</th>
                <th className='text-primary'>Mail-id</th>
                <th className='text-primary'>Address</th>
                <th className='text-primary'>Office Name</th>
                <th className='text-primary'>Actions</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      <Modal show={showAddHosteler} onHide={HandleClose}>
          <Modal.Header closeButton  >
            <Modal.Title>Add Hosteler</Modal.Title>
          </Modal.Header>
          <Modal.Body className='mx-3'>
            <form className='ms-2' onSubmit={HandleSubmit}>
              <div className='row'>
                <div className='d-flex my-1'>
                  <label className='form-label fw-bold mt-2 col-4' htmlFor='name'>Name :</label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    className='form-control w-50 col-8'
                    placeholder='Enter Hosteler Name'
                    value={hosteler.name}
                    onChange={HandleChange}
                  />
                </div>
                <div className='d-flex my-1'>
                <label className='form-label fw-bold mt-2 col-4' htmlFor='fathername'>Father's Name :</label>
                  <input
                    type='text'
                    name='fathername'
                    id='fathername'
                    className='form-control w-50 col-8'
                    placeholder='Enter Father`s Name'
                    value={hosteler.fathername}
                    onChange={HandleChange}
                  />
                </div>
              </div>
              <div className='row'>
                <div className='d-flex my-1'>
                  <label className='form-label fw-bold mt-2 col-4' htmlFor='mobileno'>Mobile No. :</label>
                  <input
                    type='text'
                    name='mobileno'
                    id='mobileno'
                    className='form-control w-50 col-8'
                    placeholder='Enter Mobile Number'
                    value={hosteler.mobileno}
                    onChange={HandleChange}
                  />
                </div>
                <div className='d-flex my-1'>
                <label className='form-label fw-bold mt-2 col-4' htmlFor='email'>Mail-Id :</label>
                  <input
                    type='text'
                    name='email'
                    id='email'
                    className='form-control w-50 col-8'
                    placeholder='Enter Mail id'
                    value={hosteler.email}
                    onChange={HandleChange}
                  />
                </div>
              </div>
              <div className='my-1'>
                  <label className='form-label fw-bold' htmlFor='address'>Permanent Address</label>
                <div className=''>
                  <textarea
                    name='address'
                    id='address'
                    rows='3'
                    className='w-75 ms-5'
                    value={hosteler.address}
                    onChange={HandleChange}
                  />
                </div>
              </div>
              <div className='row my-1'>
                <div className='d-flex'>
                  <label className='form-label fw-bold mt-2 col-4' htmlFor='workingname'>Office Name :</label>
                  <input
                    type='text'
                    name='workingname'
                    id='workingname'
                    className='form-control w-50 col-8'
                    placeholder='Enter office Name'
                    value={hosteler.workingname}
                    onChange={HandleChange}
                  />
                </div>
              </div>
              <div className='row my-1'>
                <div className='d-flex'>
                  <label className='form-label fw-bold mt-2 col-4' htmlFor='availablerooms'>Room No.</label>
                  <select className='rounded fw-semibold col-8 w-50' name='roomno' id='availablerooms' value={hosteler.roomno} onChange={HandleChange}>
                    <option>Select</option>
                    <option value='room no : 306'>room no:306</option>
                    <option value='room no : 307'>room no:307</option>
                    <option value='room no : 308'>room no:308</option>
                    <option value='room no : 309'>room no:309</option>
                  </select>
                </div>
              </div>
              <div className='d-flex justify-content-around mt-3'>
                <button className='btn btn-danger' type='clear' onClick={HandleClose}>Cancel</button>
                <button className='btn btn-success' type='submit'>Save</button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
    </div>
  )
}

export default HostelerHome

{/* <div className='mt-5 ms-3'>
    <h5 className='ms-2 fw-semibold'>Here you can manage hosteler's data</h5>
</div>
<div className='mt-2 ms-5'>
    <div className='my-1'>
      <Link to='/newhostler' className='btn btn-primary'>New Hosteler</Link>
    </div>
    <div className='my-1'>
      <Link to='/edithostelers' className='btn btn-primary'>Edit Hostelers</Link>
    </div>
    <div className='my-1'>
      <Link to='/hostelersfees' className='btn btn-primary'>Hosteler's Fees</Link>
    </div>
    <div className='my-1'>
      <Link to='/hostelerslist' className='btn btn-primary'>Hosteler's List</Link>
    </div>
    <div className='my-1'>
      <Link to='/previoushostelers' className='btn btn-primary'>Previous Hostelers</Link>
    </div>
</div> */}