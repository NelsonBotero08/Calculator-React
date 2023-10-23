import React from 'react'
import "../sheestStyleComponents/ButtonClear.css"

const ButtonClear = ({clear}) => {
  return (
    <div className='clear' onClick={() => clear()} >
      <p>Clear</p>
    </div>
  )
}

export default ButtonClear
