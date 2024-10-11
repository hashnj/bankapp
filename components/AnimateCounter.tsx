'use client'
import React from 'react'
import CountUp from 'react-countup'

const AnimateCounter = ({amount=0}) => {
  return (
    <div className='w-full'>
      <CountUp end={amount} decimal='.' prefix='$' decimals={2} />
    </div>
  )
}

export default AnimateCounter