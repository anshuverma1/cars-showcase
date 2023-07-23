'use client';

import { ButtonProps } from '@/types'
import Image from 'next/image'
import React from 'react'

const Button = ({ title, containerStyle, handleClick, btnType, textStyles, rightIcon }: ButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || 'button'}
      className={`custom-btn ${containerStyle}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>
        {title}
      </span>
      {
        rightIcon && <div className='relative w-6 h-6'>
          <Image src={rightIcon} fill alt='right arrow' />
        </div>
      }
    </button>
  )
}

export default Button