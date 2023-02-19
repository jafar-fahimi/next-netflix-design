import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
  };

  return (
    <section className="relative flex h-screen w-screen flex-col bg-black/60 md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 opacity-60 sm:!inline"
        objectFit="cover"
      />
      <img
        src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative mx-4 mt-24 space-y-8 rounded bg-black/75 py-10 px-6 sm:px-14 md:mt-0 md:max-w-md"
      >
        <h1 className="text-4xl font-semibold">Sign In</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input
              type="email"
              placeholder="Email"
              className={`input ${
                errors.email && "border-b-2 border-orange-500"
              }`}
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="p-1 text-[13px] font-light  text-orange-500">
                Please enter a valid email.
              </p>
            )}
          </label>
          <label className="inline-block w-full">
            <input
              type="password"
              placeholder="Password"
              className={`input ${
                errors.password && "border-b-2 border-orange-500"
              }`}
              {...register("password", {
                required: true,
                minLength: 4,
                maxLength: 60,
              })}
            />
            {errors.password && (
              <p className="p-1 text-[13px] font-light  text-orange-500">
                Your password must contain between 4 and 60 characters.
              </p>
            )}
          </label>
        </div>
        <button
          className="w-full rounded bg-[#E50914] py-3 font-semibold"
          type="submit"
        >
          Sign In
        </button>
        <div className="text-[gray]">
          New to Netflix?
          <button
            className="cursor-pointer text-white hover:underline"
            type="submit"
          >
            Sign up now
          </button>
        </div>
      </form>
    </section>
  );
}
