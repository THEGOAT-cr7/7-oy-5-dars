import React, { useState } from "react";
import Forminput from "../components/Forminput";
import { toast } from "react-toastify";
import { useSignup } from "../hooks/useSignup";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const { signup, isPending } = useSignup();
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(displayName, email, password);
      toast.success("Signup successful!");
      setDisplayName("");
      setEmail("");
      setPassword("");
      navigate("/login");
    } catch (err) {
      toast.error(err.message || "Signup failed");
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <Forminput
          label="Display Name"
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
        <Forminput
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Forminput
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={isPending}>
          {isPending ? "Loading..." : "Signup"}
        </button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </main>
  );
}

export default Signup;
