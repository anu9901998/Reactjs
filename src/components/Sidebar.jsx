import React from 'react'
import {Stack,Typography} from '@mui/material'
import { categories } from '../utils/constants'
const Sidebar = () => {
    const selectedCategory='New'
  return (
    <Stack direction={'row'} sx={{overflow:'auto', height:{sx:'auto', md:'95%'},flexDirection:{md:'column'}}} >
      
     {
        categories.map((category,index)=>(
            <button key={index} className='category-btn' style={{background:category.name===selectedCategory && '#FC1503', color:'white'}}>
               <span style={{marginRight:'15px', color:category.name===selectedCategory?'white':'red'}}>{category.icon}</span>
               <span style={{ opacity:category.name===selectedCategory?1:0.8}}>{category.name}</span>
            </button>
        ))
     }
      <Typography className='copyright' variant='body2' sx={{mt:1.5,color:'#fff'}}>
            Copyright 2022 
       </Typography>
    </Stack>
  )
}

export default Sidebar
