import React from 'react';

export const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-sky-500 to-indigo-500 flex justify-center items-center">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          <span>🔐</span> Welcome Back
        </h2>

        <form action="#" className="space-y-4">
          <div>
            <label className="block text-white font-medium mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-white font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="********"
              className="w-full px-4 py-2 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="flex items-center justify-between text-white text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="hover:underline">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-purple-700 font-bold py-2 rounded-lg hover:bg-purple-100 transition flex justify-center items-center gap-2">
            🚀 Login
          </button>

          <p className="text-center text-white text-sm mt-4">
            Don't have an account?
            <a href="#" className="text-yellow-300 hover:underline">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
