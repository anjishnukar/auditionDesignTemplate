import React from 'react'

const LongAnswer = ({question}) => {
    return (
        <div className='h-full flex items-center justify-center sticky top-10'>
          <div className="w-96 min-h-96 justify-center items-center bg-white mt-10 shadow-lg rounded-lg p-6">
            {/* <h2 className="text-2xl font-bold mb-4 text-center">Form Title</h2> */}
            <form>
              <div className="mb-4">
                <label
                  htmlFor="input-field"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Input Label
                </label>
                {/* <input
                  type="text"
                  id="input-field"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter text"
                /> */}
                <textarea
                    id="long-answer"
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your detailed answer here"
            ></textarea>
              </div>
            </form>
          </div>
        </div>
      )
}

export default LongAnswer