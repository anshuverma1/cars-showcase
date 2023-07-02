'use client'

import { ButtonProps } from '@/types'
import React from 'react'

const Button = ({ title, containerStyle, handleClick }: ButtonProps) => {
  return (
    <button
      disabled={false}
      type={'button'}
      className={`custom-btn ${containerStyle}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>
        {title}
      </span>
    </button>
  )
}

export default Button