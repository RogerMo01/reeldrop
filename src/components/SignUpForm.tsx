import axios from "axios";
import { useState } from "react";

interface ErrorResponse {
  error?: string;
  message?: string;
  // Add other possible error response fields here
}

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    try {
      const response = await axios.post("/api/users", formData);
      alert(`User created: ${response.data.email}`);
    } catch (error) {
      if (axios.isAxiosError<ErrorResponse>(error)) {
        // Handle Axios error (HTTP error)
        const errorMessage =
          error.response?.data?.error ||
          error.response?.data?.message ||
          error.message ||
          "Register error";
        alert(errorMessage);
        throw new Error(errorMessage);
      } else if (error instanceof Error) {
        // Handle generic errors
        alert(error.message);
        throw error;
      } else {
        // Handle unknown error types
        alert("Unknown error registering");
        throw new Error("Unknown error occurred");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          className="input-primary"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          className="input-primary"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          className="input-primary"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button className="btn-primary" type="submit">
        Sign Up
      </button>
    </form>
  );
}
