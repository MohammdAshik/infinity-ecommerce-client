import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="mt-9">
      <div className="w-[90%] md:w-[30%] mx-auto">
        <h1 className="text-xl uppercase banner-title">new customers</h1>
        <p className="my-3 text-[13px] text-gray-400">
          Create an account below:
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* name */}
          <div>
            {/* first name */}
            <input
              className="border-b py-2 px-3 w-[47%] text-[13px] mr-5"
              type="text"
              {...register("firstName")}
              name="firstName"
              placeholder="First name"
              required
            />
            {/* last name */}
            <input
              className="border-b py-2 px-3 w-[47%] text-[13px]"
              type="text"
              {...register("lastName")}
              name="lastName"
              placeholder="Last name"
              required
            />
          </div>
          {/* email address */}
          <div className="my-4">
            <input
              className="border-b py-2 px-3 w-full text-[13px]"
              type="text"
              {...register("email")}
              name="email"
              placeholder="Email address"
              required
            />
          </div>
          {/* password */}
          <div className="my-4">
            <input
              className="border-b py-2 px-3 w-full text-[13px]"
              type="password"
              {...register("password")}
              name="password"
              placeholder="password"
              required
            />
          </div>
          {/* submit */}
          <div>
            <input
              className="py-2 px-3 mt-3 bg-primary text-[14px] uppercase banner-title text-white rounded-sm"
              type="submit"
              value="create an account"
            />
          </div>
        </form>
        <p className="mt-3 text-[13px]">
          Already have an account? <Link className="text-primary">login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;