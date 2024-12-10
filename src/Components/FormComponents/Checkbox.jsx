import React from 'react'

const Checkbox = () => {
    return (
        <div className="w-96 bg-white mt-2 shadow-lg rounded-lg p-6">
          {/* <h2 className="text-2xl font-bold mb-4 text-center">Form Title</h2> */}
          <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Select Options
            </label>
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                id="option1"
                className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
              />
              <label htmlFor="option1" className="ml-2 text-gray-700">
                Option 1
              </label>
            </div>
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                id="option2"
                className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
              />
              <label htmlFor="option2" className="ml-2 text-gray-700">
                Option 2
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="option3"
                className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
              />
              <label htmlFor="option3" className="ml-2 text-gray-700">
                Option 3
              </label>
            </div>
          </div>
          </form>
        </div>
    )
}

export default Checkbox