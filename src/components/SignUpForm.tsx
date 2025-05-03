'use client'
import axios from "axios";
import { useState } from "react";
import Image from 'next/image';
import logo from "@/../public/logo_borderless.svg"

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
    <div className="relative w-full p-2 sm:max-w-sm md:max-w-md">
      <div className="absolute right-0 -translate-x-1/3">
        <Image src={logo} alt="logo" width={128}/>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col mt-10 bg-primary-ll dark:bg-transparent dark:border border-complementary font-semibold text-complementary dark:text-white rounded-lg space-y-2 px-10 pb-8 pt-8"
      >
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-2">Sign Up</h2>
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
        <div className="flex flex-col">
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
        <div className="flex flex-col">
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
        <button className="btn-primary mt-2 justify-end" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}
