import React from 'react'
import Slider from '../../slider/Slider'
import ProfileList from '../../components/profile/profileList/ProfileList'
import './Home.css'


const Home = () => {
  
  return (
   <div>
    <Slider/>
   <ProfileList/>
   </div>
  )
}

export default Home