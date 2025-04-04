import React from "react";
import { signInWithGoogle } from "../../utils/firebase";

const GoogleAuthButton = () => {
  return (
    <div className="flex justify-center">
      <button
        onClick={signInWithGoogle}
        className="bg-white text-red-500 px-4 py-2 rounded shadow-md flex items-center justify-center hover:bg-gray-100 transition"
      >
        <img
          src={require("../../img/google-icon.png")}
          alt="Google"
          className="w-5 h-5 mr-2"
        />
        Sign in with Google
      </button>
    </div>
  );
};

export default GoogleAuthButton;
