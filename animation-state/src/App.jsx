import React from 'react'
import Rotate from './animation/Rotate'
import BoxAnimation from './animation/BoxAnimation'

export default function App() {
  return (
    <div className='bg-black h-screen flex items-center justify-center'>
      {/* <Rotate /> */}
      <BoxAnimation />
    </div>
  )
}
