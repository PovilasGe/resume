import { Typography } from '@mui/material'
import React from 'react'

import './Profile.css'

const Profile = () => {
  return (
    <div className='profile container_shadow'>
      <div className='profile_name'>
        <Typography className='name'>Sam</Typography>
        <Typography className='title'>Title</Typography>

      </div>
      <figure className='profile_image'>
        <img src={require('../../assets/images/displayImage.JPG')} alt=''/>
      </figure>

      <div className='profile_information'>
        Instert Timeline
        <br/>
        <button>my button</button>
      </div>
    </div>
  )
}

export default Profile