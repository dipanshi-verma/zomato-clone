import React from 'react';
import { Link} from 'react-router-dom';

const Navbar = () => {
  return (
   <>
    <div className='display-flex  text-end  bg-blue-700 h-16'>
         <h2 className='text-2xl text-white mr-5 text-start  ' >🛍️ZomatoMall</h2>
        <Link to="/" className=' text-white mr-5'>Home</Link>
        <Link to="/products" className='text-white mr-5'>Products</Link>
        <Link to="/add" className='text-white mr-5'>Add Seller</Link>
        <Link to="/login" className='text-white mr-5'>Login/SignUp</Link>

    </div>
    
   </>
  );
};

export default Navbar;
