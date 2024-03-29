import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import CustomTimeline, { CustomTimelineSeparator } from '../../components/Timeline/Timeline'
import TimelineContent from '@mui/lab/TimelineContent';
import WorkIcon from '@mui/icons-material/Work';
import './Resume.css'
import resumeData from '../../utils/resumeData'
import { TimelineItem } from '@mui/lab';
import Icon from '@mui/material/IconButton';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';



const Resume = () => {
  return (
    <>
    {/* About me */}
    <Grid container className='section pb_45 pt_45'>
      <Grid item className='section_title mb_30'>
        <span></span>
        <h6 className='section_title_text'>About Me</h6>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='body2' className='aboutme_text'>{resumeData.about}</Typography>
      </Grid>
    </Grid>

    {/* Education and experiences */}
    <Grid container className='section pb_45'>
    <Grid item className='section_title mb_30'>
        <span></span>
        <h6 className='section_title_text'>Resume</h6>
      </Grid>
      <Grid item xs={12}>
        <Grid container className='resume_timeline'>

          <Grid item sm={12} md={6}>
            <CustomTimeline title='Work Experience' icon={<WorkIcon/>}>
              {resumeData.experiences.map(experience => (
                <TimelineItem key={experience.title}>
                 <CustomTimelineSeparator/>
                  <TimelineContent className='timeline_content'>
                    <Typography className='timeline_title'>{experience.title}</Typography>
                    <Typography variant='caption' className='timeline_date'>{experience.date}</Typography>
                    <Typography variant='body2'className='timeline_description'>{experience.description}</Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </CustomTimeline>
          </Grid>

          <Grid item sm={12} md={6}>
            <CustomTimeline title='Education' icon={<SchoolIcon/>}>
              {resumeData.educations.map(education => (
                <TimelineItem key={education.title}>
                 <CustomTimelineSeparator/>
                  <TimelineContent className='timeline_content'>
                    <Typography className='timeline_title'>{education.title}</Typography>
                    <Typography variant='caption' className='timeline_date'>{education.date}</Typography>
                    <Typography variant='body2'className='timeline_description'>{education.description}</Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </CustomTimeline>
          </Grid>

          <Grid item sm={12} md={6}></Grid>
        </Grid>
      </Grid>
    </Grid>

    {/* Services */}
    <Grid container className='section pb_45'> 
      <Grid item className='section_title mb_30'>
        <span></span>
        <h6 className='section_title_text'>My Qualities</h6>
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={3} justifyContent='space-around'>
          {resumeData.services.map(service =>(
            <Grid key={service.title} item xs={12} sm={6} md={3}>
              <div className='service'>
                <Icon className='service_icon'>{service.icon}</Icon>
                <Typography className='service_title' variant='h6'>{service.title}</Typography>
                <Typography className='service_description' variant='body2'>{service.description}</Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>

     {/* Skills */}
    <Grid container className='section graybg pb_45 p_50'>
      <Grid item xs={12}>
      <Grid item className='section_title mb_30'>
        <span></span>
        <h6 className='section_title_text'>Programming skills</h6>
      </Grid>
        <Grid container justifyContent='space-between' spacing={3}>
        {resumeData.skills.map(skill => (
        <Grid key={skill.title} item xs={12} sm={6} md={3}>
          <Paper elevation={0} className='skill'>
            <Typography variant='h6' className='skill_title'>
              {skill.title}
            </Typography>
            {skill.description.map(element =>(
              <Typography key={element} variant='body2' className='skill_description'>
                <TimelineDot variant='outlined' className='timeline_dot'/>
                {element}
              </Typography>
            ))}
          </Paper>
        </Grid>
      ))}
        </Grid>
      </Grid>

    </Grid>

      {/* Conmtact */}
    <Grid container className='section'></Grid>
    </>
  )
}

export default Resume