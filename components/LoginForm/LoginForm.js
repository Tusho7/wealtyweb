"use client";
// import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import { login } from "../../services/login";

const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required(),
});

const LoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema), mode: "all" });

  const onSubmit = async (credentials) => {
    const data = await login(credentials);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        className="form-group"
        style={{ border: errors.email?.message && "1px solid red" }}
      >
        <input
          type="email"
          name="email"
          id="email"
          {...register("email")}
          placeholder="მომხმარებელი"
          className="form-control"
        />
      </div>

      <div
        className="form-group"
        style={{ border: errors.password?.message && "1px solid red" }}
      >
        <input
          {...register("password")}
          type="password"
          name="password"
          id="password"
          placeholder="პაროლი"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        შესვლა
      </button>
    </form>
  );
};

export default LoginForm;
