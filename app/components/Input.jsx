import React from 'react'

const Input = ({input, setInput, handleClick, inputRef}) => {
    
  return (
    <div>
      <div className="mb-10 flex justify-center gap-8 items-center p-2">
        <form onSubmit={handleClick} className="flex gap-8">
          <input
            className="text-lg font-semibold text-gray-700 p-2 border-2 border-teal-500 focus:border-teal-700 rounded-lg "
            type="text"
            ref={inputRef}
            placeholder="Enter a username"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button
            type="submit"
            className="bg-teal-400 p-3 rounded font-bold border-2 border-teal-400 hover:bg-transparent cursor-pointer ease-in duration-100"
          >
            Find
          </button>
        </form>
      </div>
    </div>
  );
}

export default Input
