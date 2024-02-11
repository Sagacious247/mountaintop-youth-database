import React, { useState } from 'react'
import SingleProfile from '../singleProfile/SingleProfile'
import Profile from '../Profile'
import profileData from '../../../profile'
import './ProfileList.css'
import Pagination from '../../pagination/Pagination'

const ProfileList = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [profiles, setProfiles] = useState(profileData)


   // Pagination states
   const [currentPage, setCurrentPage] = useState(1);
   const [productsPerPage] = useState(6);
   // Get Current Products
   const indexOfLastProduct = currentPage * productsPerPage;
   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
   const currentProducts = profiles.slice(
     indexOfFirstProduct,
     indexOfLastProduct
   );

  return (
    <section>
      <div className='profile-header'>
      <h2>MEMBERS INFORMATIONS</h2>
      </div>
    <div className='profile-list container'>
      {profiles.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <>
          {currentProducts.map((profile) => {
            return (
              <Profile {...profile} profile={profile}/>
            )
          })}
          </>
      )} 
    </div>
    <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          productsPerPage={productsPerPage}
          totalProducts={profiles.length}
        />
    </section>
  )
}

export default ProfileList