import React from 'react'
import './Profile.css'
import { Link } from 'react-router-dom'

const Profile = ({name, job, id, image, Profile}) => {

  return (
<div className='--card profile'>
 <div className='profile-img'>
  <img src={image} alt=''/>
 </div>
 <div className='deatails-content'>
     <h4>Name: {name}</h4>
     <p>Job: {job}</p>
    <Link className='--btn' to={`/profile-details/${id}`}>View Profile</Link>
 </div>
</div>
  )
}

export default Profile