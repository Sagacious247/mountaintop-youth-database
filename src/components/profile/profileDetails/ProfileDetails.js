import React, { useEffect, useState } from 'react'
import profileData from '../../../profile'
import { Link, useParams } from 'react-router-dom'
import { FaTwitter, FaFacebook, FaInstagram, FaBook, FaGithub, FaWhatsapp} from 'react-icons/fa'
import './ProfileDetails.css'

const ProfileDetails = () => {
  const [name, setName] = useState("")
  const [job, setJob] = useState("")
  const [desc, setDesc] = useState("")
  const [image, setImage] = useState("")
  const [twitter, setTwitter] = useState("")
  const [facebook, setFacebook] = useState("")
  const [instagram, setInstagram] = useState("")
  const [github, setGithub] = useState("")

  const {id} = useParams()
  console.log(id)

  useEffect(() => {
    const profileDetail = profileData.find((profile) => 
    profile.id === parseInt(id))
    setName(profileDetail.name)
    setJob(profileDetail.job)
    setDesc(profileDetail.desc)
    setImage(profileDetail.image)
    setTwitter(profileDetail.twitter)
    setFacebook(profileDetail.facebook)
    setInstagram(profileDetail.instagram)
    setGithub(profileData.github)
  })

  return (
    <section>
    <div className='container profileDetail'>
      <div className='header'>
      <Link to="/" className='--btn btn'>&larr; Back To Home</Link>
      </div>
      <div className='profile-container --card'>
       
       <div className='img --card'>
        <img src={image} alt={name}/>
        <h4>{name}</h4>
       </div>
       <div className='profile-details'>
        <p>{desc}</p>
        <h5>Job: <span>{job}</span></h5>
        <div className='media-icons'>
          <h2>Social Media handles</h2>
          <a href={`https://twitter.com/${twitter}`} target='_blank'>
            <FaTwitter size={28} color='blue'/>
          </a>
          <a href={`https://facebook.com/${facebook}`} target='_blank'>
            <FaBook size={28} color='blue'/>
          </a>
          <a href={`https://instagram.com/${instagram}`} target='_blank'>
            <FaInstagram size={28} color='orangered'/>
          </a>
          <a href={`https://github.com//${github}`} target='_blank'>
            <FaGithub size={28} color='grey'/>
          </a>
          <a href={`https://github.com//${github}`} target='_blank'>
            <FaWhatsapp size={28} color='green'/>
          </a>
        </div>
       </div>
    </div>
      </div>
    </section>
  )
}

export default ProfileDetails