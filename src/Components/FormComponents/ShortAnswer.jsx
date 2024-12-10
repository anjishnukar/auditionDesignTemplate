import React from 'react'

const ShortAnswer = () => {
    return (
        <div className="w-96 bg-white mt-2 shadow-lg rounded-lg p-6">
          {/* <h2 className="text-2xl font-bold mb-4 text-center">Form Title</h2> */}
          <form>
            <div className="mb-4">
              <label
                htmlFor="input-field"
                className="block text-gray-700 font-medium mb-2"
              >
                Input Label
              </label>
              <input
                type="text"
                id="input-field"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter text"
              />
            </div>
          </form>
        </div>
    )
}

export default ShortAnswer