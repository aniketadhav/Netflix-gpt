import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  
  
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Background"
        />
      </div>
      <form className="w-3/12 absolute p-12 text-white bg-black mt-36 mx-auto right-0 left-0 rounded bg-opacity-80">
        <h1 className="font-bold text-white text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            name=""
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-600"
          />
        )}
        <input
          type="text"
          name=""
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-600 "
        />
        <input
          type="password"
          name=""
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-600"
        />

        <button
          type="submit"
          className="p-4 my-4 bg-red-700 w-full rounded"
          name=""
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now."
            : "Already Registered Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;