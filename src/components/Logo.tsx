import Image from 'next/image';
import React, { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {} 

const Logo = ({className, ...props}: Props) => {
  return (
     <div {...props} className={`${className}`}>
      <Image className='md:hidden' src={"/logo-sm.svg"} alt="logo" width={24} height={24} />
      <Image className='hidden md:block' src={"/logo-md.svg"} alt='logo' width={152} height={25}/>
    </div>
  )
}

export default Logo