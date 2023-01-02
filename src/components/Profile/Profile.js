import { Typography } from '@mui/material'
import React from 'react'
import CustomTimeline from '../Timeline/Timeline'

import './Profile.css'

const Profile = () => {
  return (
    <div className='profile container_shadow'>
      <div className='profile_name'>
        <Typography className='name'>Povilas Gedminas</Typography>
        <Typography className='title'>Front end developer</Typography>

      </div>
      <figure className='profile_image'>
        <img src={require('../../assets/images/displayImage.JPG')} alt=''/>
      </figure>

      <div className='profile_information'>
        <CustomTimeline />
        <br/>
        <button>my button</button>
      </div>
    </div>
  )
}

export default Profile