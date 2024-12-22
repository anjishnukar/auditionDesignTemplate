import React from 'react'

const Radio = () => {
  return (
    <div className='h-full flex items-center justify-center sticky top-10'>
    <div className="w-96 min-h-96 justify-center items-center bg-white mt-10 shadow-lg rounded-lg p-6">
    <div className="flex items-center mb-2">
              <input
                type="radio"
                id="option2"
                name="options"
                className="h-4 w-4 text-blue-500 border-gray-300 focus:ring-blue-400"
              />
              <label htmlFor="option2" className="ml-2 text-gray-700">
                Option 2
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="option3"
                name="options"
                className="h-4 w-4 text-blue-500 border-gray-300 focus:ring-blue-400"
              />
              <label htmlFor="option3" className="ml-2 text-gray-700">
                Option 3
              </label>
            </div>
          </div>
        </div>
  )
}

export default Radio