import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../app/store/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(form));
    navigate("/homepage");
  };

  return (
    <div className=" flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md space-y-4 mt-10"
      >
        <h2 className="text-xl font-bold text-center">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
