import React, { useState } from 'react'
import HostelManagement from '../service/HostelManagementService';

const RoomManagement = () => {

  const [showAddRoom,setShowAddRoom] = useState(false);
  const [showUpdateRoom,setShowUpdateRoom] = useState(false);

  const [roomField,setRoomField] = useState({
    newroom:'',
    sharing:'',
    active:false
  })

  const HandleNewRoom = () => {
    setShowAddRoom(true);
    setShowUpdateRoom(false)
  }
  
  const HandleUpdateRoom = () =>{
    setShowUpdateRoom(true);
    setShowAddRoom(false);
  }

  const HandleRoomChange = (e) =>{
    const {name,value}=e.target;
    setRoomField({...roomField,[name]:value});
  }

  const HandleCheckboxChange = (e) => {
    setRoomField({ ...roomField, active: e.target.checked });
  };

  const handleAddRoomSubmit = async (e) => {
    e.preventDefault();
    const roomData = {
      roomNumber: roomField.newroom,
      sharing: roomField.sharing,
      isActive: roomField.active,
    };
    console.log(roomData);
    
    try {
      await HostelManagement.AddNewRoom(roomData).then(res=>{
        console.log(res.data);
        setRoomField({ roomNumber: '', sharing: '', isActive: false });
      })
      // const response = await axios.post('http://localhost:4000/roommanagement', roomData);
      // console.log('Room added:', response.data);
      // Reset the form fields
      // setRoomField({ roomNumber: '', sharing: '', isActive: false });
    } catch (error) {
      console.error('There was an error adding the room:', error);
    }
  };

  return (
    <div className='container-fluid mt-3'>
      <h4 className='fs-semibold text-secondary'>Room Management</h4>
      <div className='mt-2 ms-3'>
        <div className='ms-5 mt-3'>
          <button className='btn btn-info fw-semibold ms-5' onClick={HandleNewRoom}>Add New Room</button>
        </div>
        {
          showAddRoom && 
          <form onSubmit={handleAddRoomSubmit}>
            <div className='mt-4 ms-5 d-flex'>
              <label className='mt-1 mx-2 fw-bold'>Room No.</label>
              <input
                type='text'
                name='newroom'
                placeholder='Enter Room Number'
                className='w-25 form-control '
                value={roomField.newroom}
                onChange={HandleRoomChange}
                maxLength={5}
                onKeyPress={(e) => {
                  const isValidInput = /[0-9]/;
                  if (!isValidInput.test(e.key)) {
                    e.preventDefault();
                  }
                }}
              />
              <div className='ms-5 form-group'>
                <label className='fw-bold'>No. of Sharing</label>
                <select className='rounded ms-2 fw-semibold' name='sharing' value={roomField.sharing} onChange={HandleRoomChange}>
                  <option value=''>Select</option>
                  <option value='1 sharing'>1 sharing</option>
                  <option value='2 sharing'>2 sharing</option>
                  <option value='3 sharing'>3 sharing</option>
                  <option value='4 sharing'>4 sharing</option>
                  <option value='5 sharing'>5 sharing</option>
                  <option value='6 sharing'>6 sharing</option>
                  <option value='7 sharing'>7 sharing</option>
                  <option value='8 sharing'>8 sharing</option>
                  <option value='9 sharing'>9 sharing</option>
                  <option value='10 sharing'>10 sharing</option>
                </select>
              </div>
                <label className="form-check-label fw-bold ms-4" for="flexSwitchCheckChecked">Active / Deactive</label>
              <div className="form-check form-switch ms-3">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  role="switch" 
                  id="flexSwitchCheckChecked"
                  checked={roomField.active}
                  onChange={HandleCheckboxChange}
                />
              </div>
            </div>
            <div className='d-flex justify-content-center mt-4'>
              <button type='submit' className='btn btn-primary'>Save</button>
            </div>
          </form>
        }
        <div className='ms-5 mt-3'>
          <button className='btn btn-info fw-semibold ms-5' onClick={HandleUpdateRoom}>Update Room</button>
        </div>
        {
          showUpdateRoom && 
          <form>
            <div className='mt-4 ms-5 d-flex'>
              <label className='mt-1 mx-2 fw-bold'>Room No.</label>
              <input
                type='text'
                name='updateroom'
                placeholder='Enter Room Number'
                className='w-25 form-control '
                value={roomField.updateroom}
                onChange={HandleRoomChange}
                maxLength={5}
                onKeyPress={(e) => {
                  const isValidInput = /[0-9]/;
                  if (!isValidInput.test(e.key)) {
                    e.preventDefault();
                  }
                }}
              />
              <div className='ms-5 form-group'>
                <label className='fw-bold'>No. of Sharing</label>
                <select className='rounded ms-2 fw-semibold'>
                  <option>Select</option>
                  <option>1 sharing</option>
                  <option>2 sharing</option>
                  <option>3 sharing</option>
                  <option>4 sharing</option>
                  <option>5 sharing</option>
                  <option>6 sharing</option>
                  <option>7 sharing</option>
                  <option>8 sharing</option>
                  <option>9 sharing</option>
                  <option>10 sharing</option>
                </select>
              </div>
                <label className="form-check-label fw-bold ms-4" for="flexSwitchCheckChecked">Active / Deactive</label>
              <div className="form-check form-switch ms-3">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
              </div>
            </div>
            <div className='d-flex justify-content-around mt-4'>
              <button className='btn btn-danger'>Delete</button>
              <button className='btn btn-primary'>Update</button>
            </div>
          </form>
        }
      </div>
      <div className='mt-2 ms-3'>
        <h5 className='fs-semibold text-secondary'>All Room Details</h5>
        <table className='table table-striped-columns table-bordered table-hover border-dark mt-lg-4'>
          <thead className='text-center'>
            <tr>
              <th className='text-primary'>Room Number</th>
              <th className='text-primary'>Active</th>
              <th className='text-primary'>Status</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  )
}

export default RoomManagement