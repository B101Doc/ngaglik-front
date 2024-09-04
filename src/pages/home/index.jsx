import React from 'react'
import Navbar from '../../components/Navbar'
import carousel from './carousel'

const index = ({carousels}) => {
  return (
    <>
    <Navbar />
    <carousel carousels={carousels} />    
    </>
  )
}

export default index