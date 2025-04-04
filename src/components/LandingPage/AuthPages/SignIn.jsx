import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../../Auth/AuthLayout";
import GoogleAuthButton from "../../Auth/GoogleAuthButton";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de connexion manuelle ici
  };

  return (
    <AuthLayout>
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Welcome Back 👋</h2>
        <p className="text-gray-500 mt-2 text-sm">Sign in to continue your journey</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm text-gray-700 mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-md font-semibold transition duration-300"
        >
          Sign In
        </button>
      </form>

      <div className="my-4 text-center text-gray-500 text-sm">or</div>

      <GoogleAuthButton />

      <p className="text-center text-sm text-gray-600 mt-4">
        Don't have an account?{" "}
        <Link to="/signup" className="text-orange-600 font-medium hover:underline">
          Sign Up
        </Link>
      </p>
    </AuthLayout>
  );
};

export default SignIn;
