import React from 'react'
import profileImg from '../../../assets/sagacious.png'
import './SingleProfile.css'

const SingleProfile = () => {

  return (
      <div className='--card list --grid-15'>
        <h1>Single Profile</h1>
     <div className='img'>
      <img src={profileImg} alt=''/>
     </div>
     <div className='profile-content'>
       <div className='details'>
         <h4>Sagacious paul</h4>
         <p>Mobile Developer</p>
       </div>  
     </div>
    </div>

  )
}

export default SingleProfile

// import React from 'react'
// import './SingleProfile.css'

// const SingleProfile = ({name, image, id, job}) => {
//   console.log(name, image, job)
//   return (
//     <div className='--card'>
//      <div className='img'>
//       <img src={image} alt={name}/>
//      </div>
//      <div className='content'>
//        <div className='details'>
//          <h4>{name}</h4>
//          <p>{job}</p>
//        </div>
     
//      </div>
//     </div>
//   )
// }

// export default SingleProfile