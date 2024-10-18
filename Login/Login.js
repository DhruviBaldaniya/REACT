import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve registration data from localStorage
    const storedData = JSON.parse(localStorage.getItem('registrationData'));

    if (storedData && Array.isArray(storedData)) {
      const validUser = storedData.find(
        (u) => u.email === user.username && u.password === user.password
      );

      if (validUser) {
        navigate('/home');
      } else {
        setError('Invalid username or password.');
      }
    } else {
      setError('No account found. Please register first.');
    }
  };

  return (
    <div className="bg-white min-h-screen flex justify-center items-center">
      <div className="w-[435px] bg-white shadow-lg p-6 rounded-md">
      <div className="flex flex-col items-center mt-5">
          <div className="text-4xl font-bold text-purple-700 ">Login</div>
          <div className="w-16 h-1 bg-purple-700 rounded-full mt-2"></div>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="space-y-6">
            <div className="flex items-center bg-gray-200 p-4 rounded-md">
              <span className="text-gray-500 text-2xl pr-4">
                <i className="bi bi-person-fill"></i>
              </span>
              <input
                type="text"
                name="username"
                value={user.username}
                placeholder="Username (Email)"
                onChange={handleChange}
                required
                className="bg-transparent w-full outline-none text-gray-600 text-lg"
              />
            </div>
            <div className="flex items-center bg-gray-200 p-4 rounded-md">
              <span className="text-gray-500 text-2xl pr-4">
                <i className="bi bi-key-fill"></i>
              </span>
              <input
                type="password"
                name="password"
                value={user.password}
                placeholder="Password"
                onChange={handleChange}
                required
                className="bg-transparent w-full outline-none text-gray-600 text-lg"
              />
            </div>
          </div>
          {error && <div className="text-red-500 text-center">{error}</div>}
          <div className="pl-2 mt-7 text-black text-lg text-purple-700 cursor-pointer">Forgot password?</div>
          <button type='submit' className='w-80 h-12 text-white bg-purple-700 rounded-full font-bold text-lg hover:bg-purple-800 mx-8'>
            Login
          </button>
          <div className="pl-14 mt-7 text-black text-lg">
            Don't have an account?{" "}
            <span className="cursor-pointer text-purple-700">
              <a href="./registration">Register</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
