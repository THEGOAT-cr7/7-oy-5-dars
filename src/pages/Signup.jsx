import React, { useState } from "react";
import Forminput from "../components/Forminput";

function Signup() {
  const [displayName, setDisplayName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const displayName = formData.get("displayName");
    const email = formData.get("email");
    const password = formData.get("password");

    console.log(displayName, email, password);
  };
  return (
    <main>
      <div className="registration lg:block hidden h-full grow"></div>
      <div className="registration grow lg:bg-none grid place-items-center">
        <div className="fixed top-0 left-0 bottom-0 w-full bg-black/30 text-white z-10 h-screen"></div>
        <div className="relative z-20">
          <h2 className="text-3xl font-semibold">Signup</h2>
          <form className="w-96" onSubmit={handleSubmit}>
            <Forminput
              label="Display Name"
              name="displayName"
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className={`input w-full ${
                displayName.length === 0 ? "input-error" : "input-success"
              }`}
            />

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

export default Signup;
