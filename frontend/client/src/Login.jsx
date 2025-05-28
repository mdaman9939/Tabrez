import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("role", data.role); // assuming response has { role: "admin" or "customer" }
        navigate("/dashboard");
      } else {
        alert(data.message || "Invalid credentials");
      }
    } catch (error) {
      alert("Login error: " + error.message);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f4f4f4",
      }}
    >
      <div
        style={{
          padding: 40,
          background: "white",
          borderRadius: 10,
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          width: 300,
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: 30 }}>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: "100%",
            padding: 10,
            marginBottom: 15,
            borderRadius: 5,
            border: "1px solid #ccc",
            fontSize: 14,
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: 10,
            marginBottom: 20,
            borderRadius: 5,
            border: "1px solid #ccc",
            fontSize: 14,
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: 10,
            backgroundColor: "#007bff",
            color: "white",
            fontWeight: "bold",
            border: "none",
            borderRadius: 5,
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
