import React, { useState, useEffect } from 'react';

const Home = () => {
  const [registrationData, setRegistrationData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(null);

  useEffect(() => {
    const savedData = localStorage.getItem("registrationData");
    if (savedData) {
      setRegistrationData(JSON.parse(savedData));
    }
  }, []);

  const handleDelete = () => {
    localStorage.removeItem("registrationData");
    setRegistrationData(null);
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditedData({ ...registrationData });
  };

  const handleSave = () => {
    localStorage.setItem("registrationData", JSON.stringify(editedData));
    setRegistrationData(editedData);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setEditedData({
      ...editedData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full flex justify-center  min-h-screen p-5">
      <div className="w-full max-w-8xl bg-white shadow-md rounded-lg">
        <h1 className="text-4xl font-bold text-purple-700 text-center mb-6">User Data Table</h1>
          <table className="min-w-full mx-auto border-collapse table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 border bg-purple-700 text-white">FirstName</th>
                <th className="px-4 py-2 border bg-purple-700 text-white">LastName</th>
                <th className="px-4 py-2 border bg-purple-700 text-white">Email</th>
                <th className="px-4 py-2 border bg-purple-700 text-white">PhoneNumber</th>
                <th className="px-4 py-2 border bg-purple-700 text-white">Gender</th>
                <th className="px-4 py-2 border bg-purple-700 text-white">DateofBirth</th>
                <th className="px-4 py-2 border bg-purple-700 text-white">Country</th>
                <th className="px-4 py-2 border bg-purple-700 text-white">City</th>
                <th className="px-4 py-2 border bg-purple-700 text-white">Address</th>
                <th className="px-4 py-2 border bg-purple-700 text-white">Actions</th>
              </tr>
            </thead>
            <tbody>
              {registrationData ? (
                <tr className="hover:bg-gray-200">
                  <td className="px-4 py-2 border">
                    {isEditing ? (
                      <input
                        type="text"
                        name="firstname"
                        value={editedData.firstname}
                        onChange={handleChange}
                        className="w-full border"
                      />
                    ) : (
                      registrationData.firstname
                    )}
                  </td>
                  <td className="px-4 py-2 border">
                    {isEditing ? (
                      <input
                        type="text"
                        name="lastname"
                        value={editedData.lastname}
                        onChange={handleChange}
                        className="w-full border"
                      />
                    ) : (
                      registrationData.lastname
                    )}
                  </td>
                  <td className="px-4 py-2 border">
                    {isEditing ? (
                      <input
                        type="email"
                        name="email"
                        value={editedData.email}
                        onChange={handleChange}
                        className="w-full border"
                      />
                    ) : (
                      registrationData.email
                    )}
                  </td>
                  <td className="px-4 py-2 border">
                    {isEditing ? (
                      <input
                        type="text"
                        name="phone"
                        value={editedData.phone}
                        onChange={handleChange}
                        className="w-full border"
                      />
                    ) : (
                      registrationData.phone
                    )}
                  </td>
                  <td className="px-4 py-2 border">
                    {isEditing ? (
                      <input
                        type="text"
                        name="gender"
                        value={editedData.gender}
                        onChange={handleChange}
                        className="w-full border"
                      />
                    ) : (
                      registrationData.gender
                    )}
                  </td>
                  <td className="px-4 py-2 border">
                    {isEditing ? (
                      <input
                        type="text"
                        name="dob"
                        value={editedData.dob}
                        onChange={handleChange}
                        className="w-full border"
                      />
                    ) : (
                      registrationData.dob
                    )}
                  </td>
                  <td className="px-4 py-2 border">
                    {isEditing ? (
                      <input
                        type="text"
                        name="country"
                        value={editedData.country}
                        onChange={handleChange}
                        className="w-full border"
                      />
                    ) : (
                      registrationData.country
                    )}
                  </td>
                  <td className="px-4 py-2 border">
                    {isEditing ? (
                      <input
                        type="text"
                        name="city"
                        value={editedData.city}
                        onChange={handleChange}
                        className="w-full border"
                      />
                    ) : (
                      registrationData.city
                    )}
                  </td>
                  <td className="px-4 py-2 border">
                    {isEditing ? (
                      <input
                        type="text"
                        name="address"
                        value={editedData.address}
                        onChange={handleChange}
                        className="w-full border"
                      />
                    ) : (
                      registrationData.address
                    )}
                  </td>
                  <td className="px-4 py-2 border">
                    {isEditing ? (
                      <button
                        className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                        onClick={handleSave}
                      >
                        Save
                      </button>
                    ) : (
                      <div className="flex space-x-2">
                        <button
                          className="bg-blue-500 text-white px-4 py-2 rounded"
                          onClick={handleEdit}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-500 text-white px-4 py-2 rounded"
                          onClick={handleDelete}
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ) : (
                <tr>
                  <td colSpan="10" className="px-4 py-2 border text-center">
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
       
      </div>
    </div>
  );
};

export default Home;
