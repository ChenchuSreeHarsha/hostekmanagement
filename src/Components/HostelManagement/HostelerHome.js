import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import HostelManagement from '../service/HostelManagementService'
import { Modal } from 'react-bootstrap'
import { RegexEmail, RegexHouseNo, RegexMobileNo, RegexName, RegexPincode } from './RegularEx'
import axios from 'axios'

const HostelerHome = () => {

  const [showAddHosteler,setShowAddHosteler] = useState(false);
  const [hostelerData,setHostelerData] = useState([]);
  const [showUpdateHosteler,setShowUpdateHosteler] = useState(false);

  const [hosteler,setHosteler] = useState({
    name:'',
    fathername:'',
    mobileno:'',
    altmobileno:'',
    email:'',
    workingname:'',
    houseno:'',
    street:'',
    city:'',
    state:'',
    pincode:'',
    roomno:''
  })

  const [validationErrors,setValidationErrors] = useState({
    name:'',
    fathername:'',
    mobileno:'',
    altmobileno:'',
    email:'',
    workingname:'',
    houseno:'',
    street:'',
    city:'',
    state:'',
    pincode:'',
    roomno:''
  })

  const HandleClose = () =>{
    setShowAddHosteler(false)
    setShowUpdateHosteler(false)
  }

  const HandleNewHosteler = () =>{
    setShowAddHosteler(true)
  }

  const HandleUpdateHosteler = () =>{
    setShowUpdateHosteler(true);
    setShowAddHosteler(false)
  }

  const HandleChange = (e) =>{
    const {name,value} = e.target;
    setHosteler({...hosteler,[name]:value})

    // from here validations

    if(name === 'name'){
      if(!RegexName.test(value)){
        setValidationErrors({...validationErrors, [name]:'Name must be 3 or more characters'})
      }else{
        setValidationErrors({...validationErrors,[name]:''})
      }
    }

    if(name === 'fathername'){
      if(!RegexName.test(value)){
        setValidationErrors({...validationErrors, [name]:'Father Name must be 3 or more characters'})
      }else{
        setValidationErrors({...validationErrors,[name]:''})
      }
    }

    if(name === 'mobileno'){
      if(!RegexMobileNo.test(value)){
        setValidationErrors({...validationErrors, [name]:'Mobile number is invalid!'})
      }else{
        setValidationErrors({...validationErrors,[name]:''})
      }
    }

    if(name === 'altmobileno'){
      if(!RegexMobileNo.test(value)){
        setValidationErrors({...validationErrors, [name]:'Mobile number is invalid!'})
      }else{
        setValidationErrors({...validationErrors,[name]:''})
      }
    }

    if(name === 'email'){
      if(!RegexEmail.test(value)){
        setValidationErrors({...validationErrors, [name]:'Email-id is invalid!'})
      }else{
        setValidationErrors({...validationErrors,[name]:''})
      }
    }

    if(name === 'houseno'){
      if(!RegexHouseNo.test(value)){
        setValidationErrors({...validationErrors, [name]:'Please enter valid house no.'})
      }else{
        setValidationErrors({...validationErrors,[name]:''})
      }
    }

    if(name === 'street'){
      if(!RegexName.test(value)){
        setValidationErrors({...validationErrors, [name]:'Please enter valid street name'})
      }else{
        setValidationErrors({...validationErrors,[name]:''})
      }
    }

    if(name === 'city'){
      if(!RegexName.test(value)){
        setValidationErrors({...validationErrors, [name]:'Please enter valid city'})
      }else{
        setValidationErrors({...validationErrors,[name]:''})
      }
    }

    if(name === 'state'){
      if(!RegexName.test(value)){
        setValidationErrors({...validationErrors, [name]:'Please enter valid state'})
      }else{
        setValidationErrors({...validationErrors,[name]:''})
      }
    }

    if(name === 'pincode'){
      if(!RegexPincode.test(value)){
        setValidationErrors({...validationErrors, [name]:'Please enter valid pincode'})
      }else{
        setValidationErrors({...validationErrors,[name]:''})
      }
    }
  }

  const HandleSubmit = async(e) => {
    e.preventDefault();
    try {
      await HostelManagement.AddNewHosteler(hosteler).then(res=>{
        console.log(res.data);
      })
      HandleClose();
      setHosteler('');
      alert('hosterler is added')
    } 
    catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    axios.get('http://localhost:4000/gethostelers')
    .then(res =>{
      setHostelerData(res.data);
    })
  },[])

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
            <tbody className=''>
              {
                hostelerData.map((item,index)=>(
                  <tr className=''>
                    <td>{index+1}</td>
                    <td>{item.roomno}</td>
                    <td>{item.name}</td>
                    <td>{item.mobileno}</td>
                    <td>{item.fathername}</td>
                    <td>{item.email}</td>
                    <td>{item.address || `${item.houseno} , ${item.street} , ${item.city} , ${item.state} , ${item.pincode}`}</td>
                    <td>{item.workingname}</td>
                    <td className='text-center'>
                    <div className='d-flex'>
                      <button className='btn btn-warning mx-2 px-2' onClick={HandleUpdateHosteler}>Edit <i className="fa-solid fa-pen-to-square ms-1"></i></button>
                      <button className='btn btn-danger mx-2 px-2' >Delete <i className="fa-solid fa-trash ms-2"></i></button>
                    </div>
                  </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
      <Modal show={showAddHosteler} onHide={HandleClose} className=''>
          <Modal.Header closeButton  >
            <Modal.Title className='text-secondary'>Add Hosteler</Modal.Title>
          </Modal.Header>
          <Modal.Body className='mx-3'>
            <form className='ms-2' onSubmit={HandleSubmit}>
              <div className='row'>
                <div className='d-flex my-1'>
                  <label className='form-label fw-bold mt-2 col-5' htmlFor='name'>Name :</label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    className='form-control w-50 col-7'
                    placeholder='Enter Hosteler Name'
                    value={hosteler.name}
                    onChange={HandleChange}
                  />
                </div>
                <small className='ms-5'>{validationErrors.name && <span className="text-danger">{validationErrors.name}</span>}</small>
                <div className='d-flex my-1'>
                <label className='form-label fw-bold mt-2 col-5' htmlFor='fathername'>Father's Name :</label>
                  <input
                    type='text'
                    name='fathername'
                    id='fathername'
                    className='form-control w-50 col-7'
                    placeholder='Enter Father`s Name'
                    value={hosteler.fathername}
                    onChange={HandleChange}
                  />
                </div>
                <small className='ms-5'>{validationErrors.fathername && <span className="text-danger">{validationErrors.fathername}</span>}</small>
              </div>
              <div className='row'>
                <div className='d-flex my-1'>
                  <label className='form-label fw-bold mt-2 col-5' htmlFor='mobileno'>Mobile No. :</label>
                  <input
                    type='text'
                    name='mobileno'
                    id='mobileno'
                    className='form-control w-50 col-7'
                    placeholder='Enter Mobile Number'
                    value={hosteler.mobileno}
                    onChange={HandleChange}
                  />
                </div>
                <small className='ms-5'>{validationErrors.mobileno && <span className="text-danger">{validationErrors.mobileno}</span>}</small>
                <div className='d-flex my-1'>
                  <label className='form-label fw-bold mt-2 col-5' htmlFor='altmobileno'>Alternate Mobile No. :</label>
                  <input
                    type='text'
                    name='altmobileno'
                    id='altmobileno'
                    className='form-control w-50 col-7'
                    placeholder='Enter Mobile Number'
                    value={hosteler.altmobileno}
                    onChange={HandleChange}
                  />
                </div>
                <small className='ms-5'>{validationErrors.altmobileno && <span className="text-danger">{validationErrors.altmobileno}</span>}</small>
                <div className='d-flex my-1'>
                <label className='form-label fw-bold mt-2 col-5' htmlFor='email'>Mail-Id :</label>
                  <input
                    type='text'
                    name='email'
                    id='email'
                    className='form-control w-50 col-7'
                    placeholder='Enter Mail id'
                    value={hosteler.email}
                    onChange={HandleChange}
                  />
                </div>
                <small className='ms-5'>{validationErrors.email && <span className="text-danger">{validationErrors.email}</span>}</small>
              </div>
              <div className='row my-1'>
                <div className='d-flex'>
                  <label className='form-label fw-bold mt-2 col-5' htmlFor='workingname'>Office Name :</label>
                  <input
                    type='text'
                    name='workingname'
                    id='workingname'
                    className='form-control w-50 col-7'
                    placeholder='Enter office Name'
                    value={hosteler.workingname}
                    onChange={HandleChange}
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
                    value={hosteler.houseno}
                    onChange={HandleChange}
                  />
                </div>
                <small className='ms-5'>{validationErrors.houseno && <span className="text-danger">{validationErrors.houseno}</span>}</small>
                <div className='d-flex'>
                  <label className='form-label fw-bold mt-1 col-5' htmlFor='street'>Street Name :</label>
                  <input
                    type='text'
                    name='street'
                    id='street'
                    className='form-control w-50 col-7 mb-1'
                    placeholder='Enter Street Name'
                    value={hosteler.street}
                    onChange={HandleChange}
                  />
                </div>
                <small className='ms-5'>{validationErrors.street && <span className="text-danger">{validationErrors.street}</span>}</small>
                <div className='d-flex'>
                  <label className='form-label fw-bold mt-1 col-5' htmlFor='city'>City :</label>
                  <input
                    type='text'
                    name='city'
                    id='city'
                    className='form-control w-50 col-7 mb-1'
                    placeholder='Enter City Name'
                    value={hosteler.city}
                    onChange={HandleChange}
                  />
                </div>
                <small className='ms-5'>{validationErrors.city && <span className="text-danger">{validationErrors.city}</span>}</small>
                <div className='d-flex'>
                  <label className='form-label fw-bold mt-1 col-5' htmlFor='state'>State :</label>
                  <input
                    type='text'
                    name='state'
                    id='state'
                    className='form-control w-50 col-7 mb-1'
                    placeholder='Enter State Name'
                    value={hosteler.state}
                    onChange={HandleChange}
                  />
                </div>
                <small className='ms-5'>{validationErrors.state && <span className="text-danger">{validationErrors.state}</span>}</small>
                <div className='d-flex'>
                  <label className='form-label fw-bold mt-1 col-5' htmlFor='pincode'>PinCode :</label>
                  <input
                    type='text'
                    name='pincode'
                    id='pincode'
                    className='form-control w-50 col-7 mb-1'
                    placeholder='Enter Pincode Name'
                    value={hosteler.pincode}
                    onChange={HandleChange}
                  />
                </div>
                <small className='ms-5'>{validationErrors.pincode && <span className="text-danger">{validationErrors.pincode}</span>}</small>
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
      {/* from here update */}
      <Modal show={showUpdateHosteler} onHide={HandleClose} className=''>
          <Modal.Header closeButton  >
            <Modal.Title className='text-secondary'>Add Hosteler</Modal.Title>
          </Modal.Header>
          <Modal.Body className='mx-3'>
            <form className='ms-2'>
              <div className='row'>
                <div className='d-flex my-1'>
                  <label className='form-label fw-bold mt-2 col-5' htmlFor='name'>Name :</label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    className='form-control w-50 col-7'
                    placeholder='Enter Hosteler Name'
                    value={hosteler.name}
                    onChange={HandleChange}
                  />
                </div>
                <small className='ms-5'>{validationErrors.name && <span className="text-danger">{validationErrors.name}</span>}</small>
                <div className='d-flex my-1'>
                <label className='form-label fw-bold mt-2 col-5' htmlFor='fathername'>Father's Name :</label>
                  <input
                    type='text'
                    name='fathername'
                    id='fathername'
                    className='form-control w-50 col-7'
                    placeholder='Enter Father`s Name'
                    value={hosteler.fathername}
                    onChange={HandleChange}
                  />
                </div>
                <small className='ms-5'>{validationErrors.fathername && <span className="text-danger">{validationErrors.fathername}</span>}</small>
              </div>
              <div className='row'>
                <div className='d-flex my-1'>
                  <label className='form-label fw-bold mt-2 col-5' htmlFor='mobileno'>Mobile No. :</label>
                  <input
                    type='text'
                    name='mobileno'
                    id='mobileno'
                    className='form-control w-50 col-7'
                    placeholder='Enter Mobile Number'
                    value={hosteler.mobileno}
                    onChange={HandleChange}
                  />
                </div>
                <small className='ms-5'>{validationErrors.mobileno && <span className="text-danger">{validationErrors.mobileno}</span>}</small>
                <div className='d-flex my-1'>
                  <label className='form-label fw-bold mt-2 col-5' htmlFor='altmobileno'>Alternate Mobile No. :</label>
                  <input
                    type='text'
                    name='altmobileno'
                    id='altmobileno'
                    className='form-control w-50 col-7'
                    placeholder='Enter Mobile Number'
                    value={hosteler.altmobileno}
                    onChange={HandleChange}
                  />
                </div>
                <small className='ms-5'>{validationErrors.altmobileno && <span className="text-danger">{validationErrors.altmobileno}</span>}</small>
                <div className='d-flex my-1'>
                <label className='form-label fw-bold mt-2 col-5' htmlFor='email'>Mail-Id :</label>
                  <input
                    type='text'
                    name='email'
                    id='email'
                    className='form-control w-50 col-7'
                    placeholder='Enter Mail id'
                    value={hosteler.email}
                    onChange={HandleChange}
                  />
                </div>
                <small className='ms-5'>{validationErrors.email && <span className="text-danger">{validationErrors.email}</span>}</small>
              </div>
              <div className='row my-1'>
                <div className='d-flex'>
                  <label className='form-label fw-bold mt-2 col-5' htmlFor='workingname'>Office Name :</label>
                  <input
                    type='text'
                    name='workingname'
                    id='workingname'
                    className='form-control w-50 col-7'
                    placeholder='Enter office Name'
                    value={hosteler.workingname}
                    onChange={HandleChange}
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
                    value={hosteler.houseno}
                    onChange={HandleChange}
                  />
                </div>
                <small className='ms-5'>{validationErrors.houseno && <span className="text-danger">{validationErrors.houseno}</span>}</small>
                <div className='d-flex'>
                  <label className='form-label fw-bold mt-1 col-5' htmlFor='street'>Street Name :</label>
                  <input
                    type='text'
                    name='street'
                    id='street'
                    className='form-control w-50 col-7 mb-1'
                    placeholder='Enter Street Name'
                    value={hosteler.street}
                    onChange={HandleChange}
                  />
                </div>
                <small className='ms-5'>{validationErrors.street && <span className="text-danger">{validationErrors.street}</span>}</small>
                <div className='d-flex'>
                  <label className='form-label fw-bold mt-1 col-5' htmlFor='city'>City :</label>
                  <input
                    type='text'
                    name='city'
                    id='city'
                    className='form-control w-50 col-7 mb-1'
                    placeholder='Enter City Name'
                    value={hosteler.city}
                    onChange={HandleChange}
                  />
                </div>
                <small className='ms-5'>{validationErrors.city && <span className="text-danger">{validationErrors.city}</span>}</small>
                <div className='d-flex'>
                  <label className='form-label fw-bold mt-1 col-5' htmlFor='state'>State :</label>
                  <input
                    type='text'
                    name='state'
                    id='state'
                    className='form-control w-50 col-7 mb-1'
                    placeholder='Enter State Name'
                    value={hosteler.state}
                    onChange={HandleChange}
                  />
                </div>
                <small className='ms-5'>{validationErrors.state && <span className="text-danger">{validationErrors.state}</span>}</small>
                <div className='d-flex'>
                  <label className='form-label fw-bold mt-1 col-5' htmlFor='pincode'>PinCode :</label>
                  <input
                    type='text'
                    name='pincode'
                    id='pincode'
                    className='form-control w-50 col-7 mb-1'
                    placeholder='Enter Pincode Name'
                    value={hosteler.pincode}
                    onChange={HandleChange}
                  />
                </div>
                <small className='ms-5'>{validationErrors.pincode && <span className="text-danger">{validationErrors.pincode}</span>}</small>
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