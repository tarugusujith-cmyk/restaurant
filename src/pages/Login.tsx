import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

import loginImage from "../assets/online-order-page/pizza2.jpg";

interface LoginForm {
  email: string;
  password: string;
  rememberMe: boolean;
}

function Login() {
  const [formData, setFormData] = useState<LoginForm>({
    email: "",
    password: "",
    rememberMe: false,
  });

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type, checked } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Login data:", formData);
    navigate("/home");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#e9e9e9] px-5 py-6">
      <div className="flex min-h-[650px] w-full max-w-[1100px] overflow-hidden bg-white shadow-sm">

        <section className="flex w-full flex-col justify-between px-8 py-7 sm:px-12 lg:w-1/2 lg:px-16">

          <div>
            <Link
              to="/"
              aria-label="Go to home"
              className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ff8a00] text-[9px] font-bold text-white"
            >
              D
            </Link>
          </div>

          <div className="mx-auto mt-10 w-full max-w-[330px]">

            <div className="mb-7">
              <h1 className="text-2xl font-bold text-[#251b16]">
                Login
              </h1>

              <p className="mt-2 text-[9px] text-[#77716c]">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-[#4285f4] hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-[9px] font-medium text-[#30251f]"
                >
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Gani@gmail.com"
                  required
                  className="h-9 w-full rounded-md bg-[#fafafa] px-3 text-[9px] text-[#30251f] outline-none placeholder:text-[#b8b2ad] focus:ring-1 focus:ring-[#ff8a00]"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-[9px] font-medium text-[#30251f]"
                >
                  Password
                </label>

                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="123"
                    required
                    className="h-9 w-full rounded-md bg-[#fafafa] px-3 pr-16 text-[9px] text-[#30251f] outline-none placeholder:text-[#b8b2ad] focus:ring-1 focus:ring-[#ff8a00]"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((previous) => !previous)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[8px] text-[#99918a] hover:text-[#ff8a00]"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex cursor-pointer items-center gap-2 text-[8px] text-[#77716c]">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="h-3 w-3 accent-[#ff8a00]"
                  />

                  Remember me
                </label>

                <Link
                  to="/forgot-password"
                  className="text-[8px] text-[#77716c] hover:text-[#ff8a00]"
                >
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                className="h-9 w-full rounded-md bg-[#ff8a00] text-[9px] font-medium text-white transition hover:bg-[#e67800]"
              >
                Login
              </button>

              <button
                type="button"
                onClick={() => console.log("Google login")}
                className="flex h-9 w-full items-center justify-center gap-2 rounded-md border border-[#e5e0dc] bg-white text-[9px] text-[#30251f] transition hover:bg-[#fafafa]"
              >
                <span className="font-bold text-[#4285f4]">
                  G
                </span>

                Login with Google
              </button>
            </form>
          </div>

          <p className="mt-10 text-center text-[8px] text-[#c2bcb7]">
            Copyright © 2022 Delizioso
          </p>
        </section>

        <section className="hidden w-1/2 lg:block">
          <img
            src={loginImage}
            alt="Pancakes with blueberries"
            className="h-full w-full object-cover"
          />
        </section>
      </div>
    </main>
  );
}

export default Login;
