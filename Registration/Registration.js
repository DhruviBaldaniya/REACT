import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const user = useState();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    gender: '',
    dob: '',
    country: '',
    city: '',
    address: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save registration data to localStorage
    localStorage.setItem('registrationData', JSON.stringify(formData));

    // Redirect to the login page
    navigate('/login');
  };

  return (
    <div className='w-full max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg'>
      <form onSubmit={handleSubmit}>
        <div className="mb-6 flex flex-col items-center mt-5">
          <div className="text-4xl font-bold text-purple-700">Registration</div>
          <div className="w-16 h-1 bg-purple-700 rounded-full mt-2"></div>
        </div>
        <div className='flex flex-col gap-4'>
        <label className='text-lg font-semibold'>First Name:</label>
          <input type='text' name='firstname' placeholder='First Name' value={formData.firstname} onChange={handleChange} required className='p-3 border'/>
         
          <label className='text-lg font-semibold'>Last Name:</label>
          <input type='text' name='lastname' value={formData.lastname} onChange={handleChange} required 
          placeholder='Enter your lastname'
          className='p-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700'/>

          <label className='text-lg font-semibold'>Email:</label>
          <input type='email' name='email' value={formData.email} onChange={handleChange} required 
          placeholder='Enter your email'
          className='p-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700'/>

          
            <label className='text-lg font-semibold'>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                placeholder="Password"
                onChange={handleChange}
                required
                className='p-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700'/>
            


           <label className='text-lg font-semibold'>Phone Number: </label>
            <input
              type='text'
              name='phone' value={formData.phonenumber} onChange={handleChange} required
              placeholder='Enter your phone number'
              maxLength='10'
              className='p-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700'
            />

            <label className='text-lg font-semibold'>Gender:</label>
            <select
              id='gender'
              name='gender' value={formData.gender} onChange={handleChange} required
              className='p-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700'
            >
              <option value=''>Select Gender</option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
            </select>

            <label className='text-lg font-semibold'>Date of Birth: </label>
            <input
              type='date'
              name='dob' value={formData.dateofbirth} onChange={handleChange} required
              className='p-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700'
            />

            <label className='text-lg font-semibold'>Country:</label>
            <select
              id='country'
              name='country' value={formData.country} onChange={handleChange} required
              className='p-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700'
            >
              <option value=''>Select Country</option>
              <option value='India'>India</option>
              <option value='USA'>USA</option>
              <option value='UK'>UK</option>
            </select>

            <label className='text-lg font-semibold'>City:</label>
            <select
              id='city'
              name='city' value={formData.city} onChange={handleChange} required
              className='p-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700'
            >
              <option value=''>Select City</option>
              <option value='Surat'>Surat</option>
              <option value='Mumbai'>Mumbai</option>
              <option value='Vadodara'>Vadodara</option>
              <option value='Ahmedabad'>Ahmedabad</option>
            </select>

            <label className='text-lg font-semibold'>Address: </label>
            <textarea
              name='address' value={formData.address} onChange={handleChange} required
              placeholder='Address' 
              className='p-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700'
            ></textarea>

            <label className='text-lg font-semibold'>
              <input type='checkbox' className='mr-2' value={formData.termandcondition} onChange={handleChange} required/> Terms and Conditions
            </label>
          
          <button type='submit' className='px-4 py-2 bg-purple-700 text-white'>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
