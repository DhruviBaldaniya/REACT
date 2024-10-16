import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Loginsignup = () => {
    const [action, setAction] = useState("Sign Up");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (action === "Sign Up") {
            if (!name || !email || !password) {
                setError("Please fill in all fields");
                return;
            }
            // Store signup data in localStorage
            localStorage.setItem("user", JSON.stringify({ name, email, password }));
            navigate("/registration"); // Redirect to registration page
        } else {
            const storedUser = JSON.parse(localStorage.getItem("user"));
            if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
                setError("Invalid email or password");
                return;
            }
            // Successful login
            navigate("/home"); // Redirect to home page (table page)
        }
    };

    return (
        <>
            <div className="flex flex-col mx-auto bg-white w-[435px] mt-5 shadow-lg p-8">
                <div className="flex flex-col items-center gap-2.5 w-full mt-7">
                    <div className="text-[#4c00b4] text-4xl font-bold">{action}</div>
                    <div className="w-16 h-1.5 bg-[#4c00b4] rounded-lg"></div>
                </div>
                <div className="mt-14 flex flex-col gap-6">
                    {action === "Login" ? null : (
                        <div className="flex items-center mx-auto w-[360px] h-[60px] bg-gray-200 rounded-md">
                            <span className="mx-8 text-gray-500 text-2xl"><i className="bi bi-person-fill"></i></span>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full bg-transparent border-none outline-none text-gray-500 text-lg"
                            />
                        </div>
                    )}
                    <div className="flex items-center mx-auto w-[360px] h-[60px] bg-gray-200 rounded-md">
                        <span className="mx-8 text-gray-500 text-2xl"><i className="bi bi-envelope-fill"></i></span>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-transparent border-none outline-none text-gray-500 text-lg"
                        />
                    </div>
                    <div className="flex items-center mx-auto w-[360px] h-[60px] bg-gray-200 rounded-md">
                        <span className="mx-8 text-gray-500 text-2xl"><i className="bi bi-key-fill"></i></span>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-transparent border-none outline-none text-gray-500 text-lg"
                        />
                    </div>
                    {error && <div className="text-red-500 text-center">{error}</div>}
                </div>
                {action === "Sign Up" ? null : (
                    <div className="pl-11 mt-7 text-black text-lg">
                        Forgot password? <span className="cursor-pointer">Click Here</span>
                    </div>
                )}
                <div className="flex gap-7 mt-16 justify-center">
                    <div
                        className={`${action === "Login" ? "bg-gray-200 text-gray-500" : "bg-[#4c00b4] text-white"} flex justify-center items-center w-[170px] h-[50px] rounded-full font-bold cursor-pointer`}
                        onClick={() => setAction("Sign Up")}
                    >
                        Sign Up
                    </div>
                    <div
                        className={`${action === "Sign Up" ? "bg-gray-200 text-gray-500" : "bg-[#4c00b4] text-white"} flex justify-center items-center w-[170px] h-[50px] rounded-full font-bold cursor-pointer`}
                        onClick={() => setAction("Login")}
                    >
                        Login
                    </div>
                </div>
                <div className="flex justify-center mt-8">
                    <button onClick={handleSubmit} className="px-6 py-2 bg-[#4c00b4] text-white rounded-full">
                        {action}
                    </button>
                </div>
            </div>
        </>
    );
};

export default Loginsignup;
