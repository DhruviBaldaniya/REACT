import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '', // this is correct
    gender: '',
    dob: '', // changed from dob to dateofbirth
    country: '',
    city: '',
    address: '',
    password: '',
  });
  

  const [countries, setCountries] = useState([]); // Store selected country list
  const [cities, setCities] = useState([]); // Store city list based on selected country
  const navigate = useNavigate();

  // Manually set the list of countries
  const selectedCountries = [
    { code: 'IN', name: 'India' },
    { code: 'US', name: 'United States' },
    { code: 'UK', name: 'United Kingdom' },
    { code: 'AU', name: 'Australia' },
    { code: 'CA', name: 'Canada' },
  ];

  // Set the selected countries on component mount
  useEffect(() => {
    setCountries(selectedCountries);
  }, []);

  // Handle country change and set cities based on selected country
  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      country: selectedCountry,
      city: '', // Reset city when country changes
    }));

    // Set cities for the selected country
    switch (selectedCountry) {
      case 'IN': // India
        setCities(['Mumbai', 'Delhi', 'Bangalore', 'Ahmedabad']);
        break;
      case 'US': // USA
        setCities(['New York', 'Los Angeles', 'Chicago', 'San Francisco']);
        break;
      case 'GB': // United Kingdom
        setCities(['London', 'Manchester', 'Birmingham']);
        break;
      case 'AU': // Australia
        setCities(['Sydney', 'Melbourne', 'Brisbane']);
        break;
      case 'CA': // Canada
        setCities(['Toronto', 'Vancouver', 'Montreal']);
        break;
      default:
        setCities([]); // Reset cities if no country selected
    }
  };

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
          <input type='text' name='firstname' placeholder='First Name' value={formData.firstname} onChange={handleChange} required className='p-3 border' />

          <label className='text-lg font-semibold'>Last Name:</label>
          <input type='text' name='lastname' value={formData.lastname} onChange={handleChange} required placeholder='Enter your lastname' className='p-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700' />

          <label className='text-lg font-semibold'>Email:</label>
          <input type='email' name='email' value={formData.email} onChange={handleChange} required placeholder='Enter your email' className='p-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700' />

          <label className='text-lg font-semibold'>Password:</label>
          <input type='password' name='password' value={formData.password} onChange={handleChange} required placeholder='Enter your password' className='p-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700' />

          <label className='text-lg font-semibold'>Phone Number: </label>
          <input type='text' name='phone' value={formData.phone} onChange={handleChange} required placeholder='Enter your phone number' maxLength='10' className='p-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700' />

          <label className='text-lg font-semibold'>Gender:</label>
          <select name='gender' value={formData.gender} onChange={handleChange} required className='p-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700'>
            <option value=''>Select Gender</option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
          </select>

          <label className='text-lg font-semibold'>Date of Birth: </label>
          <input type='date' name='dob' value={formData.dob} onChange={handleChange} required className='p-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700' />

          <label className='text-lg font-semibold'>Country:</label>
          <select name='country' value={formData.country} onChange={handleCountryChange} required className='p-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700'>
            <option value=''>Select Country</option>
            {countries.map((country, index) => (
              <option key={index} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>

          <label className='text-lg font-semibold'>City:</label>
          <select name='city' value={formData.city} onChange={handleChange} required className='p-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700'>
            <option value=''>Select City</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>

          <label className='text-lg font-semibold'>Address: </label>
          <textarea name='address' value={formData.address} onChange={handleChange} required placeholder='Address' className='p-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700'></textarea>

          <label className='text-lg font-semibold'>
            <input type='checkbox' className='mr-2' required /> Terms and Conditions
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
