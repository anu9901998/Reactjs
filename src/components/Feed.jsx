import React from 'react'
import {Box, Stack,Typography} from '@mui/material'
import {Sidebar, Videos} from './index'
const Feed = () => { 
  return (
    <Stack sx={{flexDirection:{sx:'column', md:'row'}}} >
      <Box sx={{height:{sx:'auto', md:'92vh'}, px:{sx:0,md:2}}}>
       <Sidebar/>
      </Box>
      <Box p={2} sx={{overflow:'auto', height:'90vh' , flex:2}}>
        <Typography variant='h4' fontWeight={'bold'} mb={2} sx={{color:'white'}}>New
          <span style={{color:'#F31503'}}>Videos</span>
        </Typography>
        <Videos videos={[]}/>
      </Box>

    </Stack>
  )
}

export default Feed
