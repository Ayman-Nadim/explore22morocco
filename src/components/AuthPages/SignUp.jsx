import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../Auth/AuthLayout";
import GoogleAuthButton from "../Auth/GoogleAuthButton";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Nouveau champ
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vérification que les mots de passe correspondent
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Logique d'inscription manuelle ici (ajouter la logique Firebase ou autre backend)
    setError(""); // Réinitialiser les erreurs
  };

  return (
    <AuthLayout>
      <h2 className="text-3xl font-extrabold text-center text-orange-00 mb-4">
        Create an Account
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 text-sm text-gray-700">
        <div>
          <label htmlFor="email" className="block mb-1 font-medium">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="example@mail.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password" className="block mb-1 font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block mb-1 font-medium">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md transition"
        >
          Sign Up
        </button>
      </form>

      <div className="my-4">
        <GoogleAuthButton />
      </div>

      <p className="text-center text-sm text-gray-600 mt-4">
        Already have an account?{" "}
        <Link to="/signIn" className="text-orange-500 hover:underline">
          Sign In
        </Link>
      </p>
    </AuthLayout>
  );
};

export default SignUp;
