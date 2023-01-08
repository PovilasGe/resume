import { Grid, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import CustomTimeline, { CustomTimelineSeparator } from '../../components/Timeline/Timeline'
import TimelineContent from '@mui/lab/TimelineContent';
import WorkIcon from '@mui/icons-material/Work';
import './Contact.css'
import resumeData from '../../utils/resumeData'
import { TimelineItem } from '@mui/lab';
import Icon from '@mui/material/IconButton';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';
import CustomButton from '../../components/Button/Button';
import { useState } from 'react';

const Contact = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
    console.log(event.target.value)
  }
    return (
        <>
          {/* Conmtact */}
        <Grid container spacing={5} className='section pt_45 pb_45 m_0'>
            {/* Contact form */}
            <Grid item xs={12} lg={7}>
                <Grid container>
                    <Grid item className='section_title mb_30'>
                        <span></span>
                        <h6 className='section_title_text'>Contact Form</h6>
                    </Grid>

                    <Grid item xs={12}>
                      <Grid container spacing={3}>
                        <Grid item xs ={12} sm={6}>
                          <TextField fullWidth name='name' label= 'Name'/>
                        </Grid>
                        <Grid item xs ={12} sm={6}>
                          <TextField fullWidth name='email' label= 'E-mail'/>
                        </Grid>
                        <Grid item xs ={12}>
                          <TextField  value={inputValue} onChange={handleChange} fullWidth name='message' label= 'Message' multiline rows={5}/>
                        </Grid>
                        <Grid item xs={12}>
                        <a className='decoration'
  href={`mailto:povilasgedminas@gmail.com?subject=Labas, Povilai&body=${inputValue}`}><CustomButton className='button' text='Submit' />
</a>
                        </Grid>
                      </Grid>
                    </Grid>

                </Grid>
            </Grid>
            {/* Contact information */}
            <Grid item xs={12} lg={5}>
              <Grid container>
              <Grid item className='section_title mb_30'>
                        <span></span>
                        <h6 className='section_title_text'>Contact Information</h6>
              </Grid>
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography className='contactInfo_item'>
                          <span>Address: </span> {resumeData.address}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography className='contactInfo_item'>
                          <span>Phone: </span> {resumeData.phone}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography className='contactInfo_item'>
                          <span>Email: </span> {resumeData.email}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12}>
                    <Grid container className='contactInfo_socialsContainer'>
                      {Object.keys(resumeData.socials).map(key =>(
                        <Grid item className='contactInfo_social'>
                          <a href={resumeData.socials[key].link}>{resumeData.socials[key].icon}</a>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
              </Grid>
            </Grid>
        </Grid>
        </>
      );
    };
    
export default Contact