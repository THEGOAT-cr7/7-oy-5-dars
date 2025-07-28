import Forminput from "../components/Forminput";

import React from "react";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main>
      <div className="registration lg:block hidden h-full grow"></div>
      <div className="registration grow lg:bg-none grid place-items-center">
        <div className="fixed top-0 left-0 bottom-0 w-full bg-black/30 text-white z-10 h-screen"></div>
        <div className="relative z-20">
          <h2 className="text-3xl font-semibold">Welcome back</h2>
          <form className="w-96" onSubmit={handleSubmit}>
            <Forminput label="Email" name="email" type="email" />
            <Forminput label="Password" name="password" type="password" />
            <div className="mt-10 flex justify-between">
              <button className="btn btn-primary">Submit</button>
              <button className="btn btn-primary">Google</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Login;
