import React from 'react'
import {styled} from '@mui/system'
import { Box } from '@mui/material'

const MainBox =styled(Box)(({ theme }) =>({
  minHeight:"5vh",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  flexDirection:"column",
}))

function Banner() {
  return (
    <MainBox>
      
    </MainBox>
  )
}

export default Banner
