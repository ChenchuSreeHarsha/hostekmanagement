import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import RoomManagement from './RoomManagement'
import NewHosteler from './NewHosteler'
import EditHostelers from './EditHostelers'
import HostelersFees from './HostelersFees'
import HostelersList from './HostelersList'
import PreviousHostelers from './PreviousHostelers'
import NewStaff from './NewStaff'
import EditStaff from './EditStaff'
import StaffPayment from './StaffPayment'
import StaffList from './StaffList'
import PreviousStaff from './PreviousStaff'

const HostelManagementIndex = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <BrowserRouter>
          <div>
            <h2 className='fw-bold text-center my-1 text-primary'>Hostel Management</h2>
          </div>
          <div className='col-2 mt-3 p-3'>
            <div className='my-1'>
              <Link to='/' className='btn btn-primary w-100'>Room Management</Link>
            </div>
            <div className='my-1'>
              <Link to='/newhostler' className='btn btn-primary w-100'>New Hosteler</Link>
            </div>
            <div className='my-1'>
              <Link to='/edithostelers' className='btn btn-primary w-100'>Edit Hostelers</Link>
            </div>
            <div className='my-1'>
              <Link to='/hostelersfees' className='btn btn-primary w-100'>Hosteler's Fees</Link>
            </div>
            <div className='my-1'>
              <Link to='/hostelerslist' className='btn btn-primary w-100'>Hosteler's List</Link>
            </div>
            <div className='my-1'>
              <Link to='/previoushostelers' className='btn btn-primary w-100'>Previous Hostelers</Link>
            </div>
            <hr/>
            <div className='my-1'>
              <Link to='/newstaff' className='btn btn-primary w-100'>New Staff</Link>
            </div>
            <div className='my-1'>
              <Link to='/editstaff' className='btn btn-primary w-100'>Edit Staff</Link>
            </div>
            <div className='my-1'>
              <Link to='/staffpayment' className='btn btn-primary w-100'>Staff Payment</Link>
            </div>
            <div className='my-1'>
              <Link to='/stafflist' className='btn btn-primary w-100'>Staff's List</Link>
            </div>
            <div className='my-1'>
              <Link to='/previousstaff' className='btn btn-primary w-100'>Previous Staff</Link>
            </div>
          </div>
          <div className='col-10'>
            <Routes>
              <Route path='/' element={<RoomManagement/>}/>
              <Route path='/newhostler' element={<NewHosteler/>}/>
              <Route path='/edithostelers' element={<EditHostelers/>}/>
              <Route path='/hostelersfees' element={<HostelersFees/>}/>
              <Route path='/hostelerslist' element={<HostelersList/>}/>
              <Route path='/previoushostelers' element={<PreviousHostelers/>}/>
              <Route path='/newstaff' element={<NewStaff/>}/>
              <Route path='/editstaff' element={<EditStaff/>}/>
              <Route path='/staffpayment' element={<StaffPayment/>}/>
              <Route path='/stafflist' element={<StaffList/>}/>
              <Route path='/previousstaff' element={<PreviousStaff/>}/>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default HostelManagementIndex