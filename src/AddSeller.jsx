import React from 'react'

export const AddSeller = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-sky-500 to-indigo-500 flex justify-center items-center">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          <span role="img" aria-label="lock">📦</span>Add New Seller
        </h2>

        <form action="#" className="space-y-4">
          <div>
            <label className="block text-white font-medium mb-1">Seller Name</label>
            <input
              type="text"
              name="name"
              placeholder="e.g. Verma Traders"
              className="w-full px-4 py-2 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-white font-medium mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="e.g. seller@email.com"
              className="w-full px-4 py-2 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-white font-medium mb-1">Shop Name</label>
            <input
              type="text"
              name="name"
              placeholder='e.g. Jay Pritam'
              className="w-full px-4 py-2 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-white font-medium mb-1">Phone Number</label>
            <input
              type="telephone"
              name="phno"
              placeholder='1234567890'
              className="w-full px-4 py-2 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <div>
            <label className="block text-white font-medium mb-1">Shop Address</label>
            <input
              type="text"
              name="name"
              placeholder='City, Street, Pincode'
              className="w-full px-4 py-2 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            
          </div>
          </div>

          

          <button
            type="submit"
            className="w-full bg-white text-purple-700 font-bold py-2 rounded-lg hover:bg-purple-100 transition flex justify-center items-center gap-2">
            ✅ Add Seller
          </button>
        </form>
      </div>
    </div>


  )
}

export default AddSeller;
