import React from 'react'

const B = () => {
  return (
    <div className='grid grid-rows-1 justify-center'>
      <label htmlFor="text" className="font-medium text-gray-900">
        Text
      </label>
      <div className="mt-2 rounded-md shadow-sm">
        <input
          type="text"
          name="txt"
          id="txt"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Write Something"
        />
      </div>
    </div>
  )
}

export default B