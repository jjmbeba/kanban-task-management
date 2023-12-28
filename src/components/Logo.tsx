import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {} 

const Logo = ({className, ...props}: Props) => {
  return (
     <div {...props} className={cn('flex items-center', className)}>
      <Image className='' src={"/logo-sm.svg"} alt="logo" width={24} height={24} />
      <Image className='hidden md:block dark:invert' src={"/logo-md.svg"} alt='logo' width={152} height={25}/>
    </div>
  )
}

export default Logo