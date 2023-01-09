import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import CustomTimeline, { CustomTimelineSeparator } from '../../components/Timeline/Timeline'
import TimelineContent from '@mui/lab/TimelineContent';
import WorkIcon from '@mui/icons-material/Work';
import './Portfolio.css'
import resumeData from '../../utils/resumeData'
import { TimelineItem } from '@mui/lab';
import Icon from '@mui/material/IconButton';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';

const Portfolio = () => {
  return (
    <Grid container className='section pb_45 pt_45'>
      <Grid item className='section_title mb_30'>
        <span></span>
        <h6 className='section_title_text'>Portfolio</h6>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='body2' className='aboutme_text'>{resumeData.portfolio}</Typography>
      </Grid>
    </Grid>
  )
}

export default Portfolio