"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { FormEventHandler } from "react";
// import { GoogleButton } from "@/components/GoogleButton";

function Login() {
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (res && !res.error) {
      router.push("/profile");
    } else {
      console.log(res);
    }
  };

  return (
    <section className="login-page">
      <div className="login block-style">
        <Link className="login__logo-link" href="/" />
        <h2 className="login__title">Welcome back</h2>
        {/* <GoogleButton></GoogleButton> */}
        <form className="login__form" onSubmit={handleSubmit}>
          <div className="login__form-item">
            <label htmlFor="email" className="login__label">
              Email
            </label>
            <input
              className="login__input"
              name="email"
              id="email"
              type="email"
              required
            />
          </div>
          <div className="login__form-item">
            <label htmlFor="password" className="login__label">
              Password
            </label>
            <input
              className="login__input"
              name="password"
              id="password"
              type="password"
              required
            />
          </div>
          <button className="login__button" type="submit">
            Sign in
          </button>
          <p className="login__text">Forgot your password?</p>
        </form>
        <p className="login__register">
          {/* Don't have an account? */}
          <Link className="login__link" href="/register">
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
