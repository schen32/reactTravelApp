import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import React from "react";
import { Link, redirect } from "react-router";
import { loginWithGoogle } from "~/appwrite/auth";
import { account } from "~/appwrite/client";

export async function clientLoader() {
  try {
    const user = await account.get();
    if (!user.$id) {
      redirect("/");
    }
  } catch (e) {
    console.error("clientLoader", e);
  }
}

const signIn = () => {
  const handleSignIn = async () => {
    await loginWithGoogle();
  };

  return (
    <main className="auth">
      <section className="size-full glassmorphism flex-center px-6">
        <div className="sign-in-card">
          <header className="header">
            <Link to="/" className="flex flex-col items-center gap-2">
              <img
                src="/assets/icons/logo.svg"
                alt="Logo"
                className="size-[30px]"
              />
              <h1 className="p-28-bold text-dark-100">Tourvisto</h1>
            </Link>
          </header>

          <article>
            <h2 className="p-28-semibold text-dark-100 text-center">
              Start your Travel Journey
            </h2>
            <p className="p-18-regular text-center text-gray-100 !leading-7">
              Manage destinations, itineraries, and user activity with ease.
            </p>
          </article>

          <ButtonComponent
            type="button"
            iconCss="e-search-icon"
            className="button-class !h-11 !w-full"
            onClick={handleSignIn}
          >
            <img
              src="/assets/icons/google.svg"
              className="size-5"
              alt="google"
            ></img>
            <span className="p-18-semibold text-white">
              Sign In with Google
            </span>
          </ButtonComponent>
        </div>
      </section>
    </main>
  );
};

export default signIn;
