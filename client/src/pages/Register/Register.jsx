import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../app/store/authSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({ ...form, loggedIn: false }));
    alert("Registered Successfully!");
    navigate("/login");
  };

  return (
    <div className=" flex justify-center items-center h-[100vh]">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Register</h2>
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 border rounded"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
