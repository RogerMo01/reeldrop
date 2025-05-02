'use client'
import Image from 'next/image';
import logo from "@/../public/logo_borderless.svg"

export default function LogInForm() {

  return (
    <div className="relative w-full p-2 sm:max-w-sm md:max-w-md">
      <div className="absolute right-0 -translate-x-1/3">
        <Image src={logo} alt="logo" width={128}/>
      </div>
      <form
        // onSubmit={handleSubmit}
        className="flex flex-col mt-10 bg-primary-ll dark:bg-complementary-dd font-semibold text-complementary dark:text-white rounded-lg space-y-2 px-10 pb-8 pt-8"
      >
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-2">Log In</h2>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            className="input-primary"
            // value={formData.username}
            // onChange={handleChange}
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
            // value={formData.password}
            // onChange={handleChange}
            required
          />
        </div>
        <button className="btn-primary mt-2 justify-end" type="submit">
          Log In
        </button>
      </form>
    </div>
  );
}
