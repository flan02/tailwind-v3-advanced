/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react'


// TODO allow us to use the 'object style' syntax
import { cn } from '../../utils/utils'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const MyButton = ({ className, ...props }: ButtonProps) => {
  const [pending, setPending] = React.useState(true)

  return (
    <button className={cn("px-4 py-2 text-white bg-blue-500",
      className, {
      // pending ? 'bg-gray-500' : '') // twMerge format
      'bg-gray-500 border-2 border-black text-yellow-300': pending // object style syntax
    }
    )}
      {...props}
    >
      Submit
    </button>
  )
}


const Cn = () => {
  return (
    <>
      <main className="flex justify-center p-24">
        <MyButton className="p-5 bg-green-500" type='submit' />

      </main>
    </>
  )
}

export default Cn