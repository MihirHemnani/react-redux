import React from 'react'
import { useSelector } from 'react-redux'


const C = () => {

  const state = useSelector(state => state)

  return (
    <div className='mt-20 grid grid-rows-1 justify-center'>
      <div className="mt-20 rounded-md shadow-sm">
        <p className='mb-2'>
          Display <span className='font-medium'>(Component C)</span>
        </p>
        <p className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          {state}
        </p>
      </div>
    </div>
  )
}

export default C