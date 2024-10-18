import React, { useState, useEffect } from 'react';

const Home = () => {
  const [registrationData, setRegistrationData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    // Fetch the list of users from localStorage
    const savedData = JSON.parse(localStorage.getItem('registrationData')) || [];
    setRegistrationData(savedData);
  }, []);

  const handleDelete = (index) => {
    const updatedData = registrationData.filter((_, i) => i !== index);
    localStorage.setItem('registrationData', JSON.stringify(updatedData));
    setRegistrationData(updatedData);
  };

  const handleEdit = (index) => {
    setIsEditing(true);
    setEditingIndex(index);
    setEditedData({ ...registrationData[index] });
  };

  const handleSave = () => {
    const updatedData = [...registrationData];
    updatedData[editingIndex] = editedData;
    localStorage.setItem('registrationData', JSON.stringify(updatedData));
    setRegistrationData(updatedData);
    setIsEditing(false);
    setEditingIndex(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData({
      ...editedData,
      [name]: value,
    });
  };

  const handleLogout = () => {
    // Perform logout logic without clearing the table data
    alert("Logged out!");
    // Redirect to the login page without clearing localStorage
    window.location.href = "/login"; // Adjust the path as necessary
  };

  return (
    <div className="w-full flex justify-center min-h-screen p-5 relative">
      {/* Logout button in the top-right corner */}
      <button
        className="absolute top-4 right-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition"
        onClick={handleLogout}
      >
        Logout
      </button>

      <div className="w-full max-w-8xl bg-white">
        <h1 className="text-4xl font-bold text-purple-700 text-center mb-6 mt-14">User Data Table</h1>
        <table className="min-w-full mx-auto border-collapse table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 border bg-purple-700 text-white">Firstname</th>
              <th className="px-4 py-2 border bg-purple-700 text-white">Lastname</th>
              <th className="px-4 py-2 border bg-purple-700 text-white">Email</th>
              <th className="px-4 py-2 border bg-purple-700 text-white">Phone</th>
              <th className="px-4 py-2 border bg-purple-700 text-white">Gender</th>
              <th className="px-4 py-2 border bg-purple-700 text-white">DOB</th>
              <th className="px-4 py-2 border bg-purple-700 text-white">Country</th>
              <th className="px-4 py-2 border bg-purple-700 text-white">City</th>
              <th className="px-4 py-2 border bg-purple-700 text-white">Address</th>
              <th className="px-4 py-2 border bg-purple-700 text-white">Actions</th>
            </tr>
          </thead>
          <tbody>
            {registrationData.length > 0 ? (
              registrationData.map((user, index) => (
                <tr key={index} className="hover:bg-gray-200">
                  <td className="px-4 py-2 border">
                    {isEditing && editingIndex === index ? (
                      <input
                        type="text"
                        name="firstname"
                        value={editedData.firstname}
                        onChange={handleChange}
                        className="w-full border"
                      />
                    ) : (
                      user.firstname
                    )}
                  </td>
                  <td className="px-4 py-2 border">
                    {isEditing && editingIndex === index ? (
                      <input
                        type="text"
                        name="lastname"
                        value={editedData.lastname}
                        onChange={handleChange}
                        className="w-full border"
                      />
                    ) : (
                      user.lastname
                    )}
                  </td>
                  <td className="px-4 py-2 border">
                    {isEditing && editingIndex === index ? (
                      <input
                        type="email"
                        name="email"
                        value={editedData.email}
                        onChange={handleChange}
                        className="w-full border"
                      />
                    ) : (
                      user.email
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
                      user.phone
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
                      user.gender
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
                      user.dob
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
                      user.country
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
                      user.city
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
                      user.address
                    )}
                  </td>
                  <td className="px-4 py-2 border">
                    <div className="flex space-x-2">
                      {isEditing && editingIndex === index ? (
                        <button
                          className="bg-green-500 text-white px-4 py-2 rounded"
                          onClick={handleSave}
                        >
                          Save
                        </button>
                      ) : (
                        <>
                          <button
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                            onClick={() => handleEdit(index)}
                          >
                            Edit
                          </button>
                          <button
                            className="bg-red-500 text-white px-4 py-2 rounded"
                            onClick={() => handleDelete(index)}
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))
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
