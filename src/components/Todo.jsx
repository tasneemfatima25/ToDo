import React, { useState } from 'react';

const Todo = () => {
  const [inputVal, setInputVal] = useState("");
  const [items, setItems] = useState([]);

  const handleClick = () => {
    if (inputVal.trim()) {
      setItems([...items, inputVal]);
      setInputVal("");
    }
  };

  const dltHandle = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 py-4 px-2">
      <div className="flex flex-col p-6 sm:p-8 lg:p-12 w-full sm:w-3/4 lg:w-1/2 bg-white rounded-xl shadow-2xl transform transition-transform duration-300 hover:scale-105">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-purple-500 font-bold mb-4 flex items-center">
          ToDo <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl ml-2">😍</span>
        </h1>
        <div className="relative mb-4">
          <input 
            value={inputVal} 
            onChange={(e) => setInputVal(e.target.value)} 
            type="text" 
            placeholder="Add your task..." 
            className="w-full border rounded-lg border-purple-300 p-4 text-lg sm:text-xl lg:text-2xl bg-gray-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 ease-in-out"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-500 text-xl sm:text-2xl lg:text-3xl">
            ✏️
          </span>
        </div>
        <button 
          onClick={handleClick} 
          className="py-2 px-4 sm:py-3 sm:px-6 lg:py-4 lg:px-8 font-bold rounded-lg bg-purple-500 text-white text-lg sm:text-xl lg:text-2xl mt-2 mb-6 shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          Add Task
        </button>
        <ul className="w-full">
          {items.map((item, index) => (
            <li 
              key={index} 
              className="flex justify-between items-center text-sm sm:text-lg md:text-xl lg:text-2xl text-purple-500 font-medium bg-white p-4 mb-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {item}
              <button 
                onClick={() => dltHandle(index)} 
                className="py-1 px-2 sm:py-2 sm:px-4 lg:py-3 lg:px-6 font-medium rounded-lg bg-purple-500 hover:bg-red-500 text-white text-xs sm:text-sm lg:text-lg transition duration-300 ease-in-out"
              >
                ╳
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
