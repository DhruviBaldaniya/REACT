import React, { useState, useEffect } from 'react';

const Home = () => {
  const [registrationData, setRegistrationData] = useState(null);

  useEffect(() => {
    // Retrieve registration data from localStorage
    const savedData = localStorage.getItem("registrationData");
    if (savedData) {
      setRegistrationData(JSON.parse(savedData));
    }
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto p-5 text-center">
      <h1 className="text-2xl font-bold mb-6">User Data Table</h1>
      <table className="w-full border-collapse mt-5">
        <thead>
          <tr>
            <th className="px-4 py-2 border bg-purple-700 text-white">First Name</th>
            <th className="px-4 py-2 border bg-purple-700 text-white">Last Name</th>
            <th className="px-4 py-2 border bg-purple-700 text-white">Email</th>
            <th className="px-4 py-2 border bg-purple-700 text-white">Phone Number</th>
            <th className="px-4 py-2 border bg-purple-700 text-white">Gender</th>
            <th className="px-4 py-2 border bg-purple-700 text-white">Date of Birth</th>
            <th className="px-4 py-2 border bg-purple-700 text-white">Country</th>
            <th className="px-4 py-2 border bg-purple-700 text-white">City</th>
            <th className="px-4 py-2 border bg-purple-700 text-white">Address</th>

            {/* Other table headings */}
          </tr>
        </thead>
        <tbody>
          {registrationData ? (
            <tr className="hover:bg-gray-200">
              <td className="px-4 py-2 border">{registrationData.firstname}</td>
              <td className="px-4 py-2 border">{registrationData.lastname}</td>
              <td className="px-4 py-2 border">{registrationData.email}</td>
              <td className="px-4 py-2 border">{registrationData.phonenumber}</td>
              <td className="px-4 py-2 border">{registrationData.gender}</td>
              <td className="px-4 py-2 border">{registrationData.dateofbirth}</td>
              <td className="px-4 py-2 border">{registrationData.country}</td>
              <td className="px-4 py-2 border">{registrationData.city}</td>
              <td className="px-4 py-2 border">{registrationData.address}</td>
              {/* Other table data */}
            </tr>
          ) : (
            <tr>
              <td colSpan="4" className="px-4 py-2 border text-center">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
