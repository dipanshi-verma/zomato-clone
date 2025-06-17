import React from 'react'

const Card = () => {
  return (
    <div className=" p-2 bg-gray-100">
     
      <div className="w-64 bg-white rounded-lg shadow-md overflow-hidden">
        <img src="https://w.wallhaven.cc/full/49/wallhaven-49575d.jpg" className="w-full h-40 object-cover" alt="Product" />
        <div className="p-4">
          <h3 className="text-lg font-semibold">Product 1</h3>
          <p className="text-sm text-gray-600">₹49</p>
          <button className="mt-2 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition">Buy</button>
        </div>
      </div>

    
    </div>
  );
};


export default Card;