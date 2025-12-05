"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

export default function RiderSignup() {
  const datas = useLoaderData()
  const axiosSecure = useAxiosSecure()
  const duplicatDistrict = datas.map(d => d.district)
  const districts = [...new Set(duplicatDistrict)]
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axiosSecure.post('/riders', data)
      .then(res => {
        console.log(res.data)
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your application has been submitted. We will reach to you in 145 days",
            showConfirmButton: false,
            timer: 2000
          });
        }
        reset()
      })
  };

  return (
    <div className="flex-grow container mx-auto px-4 py-12 md:py-20">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">

        {/* Left Section */}
        <div className="w-full lg:w-1/2">
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-heading-light dark:text-heading-dark mb-4">
              Be a Rider
            </h1>
            <p className="text-lg text-subtext-light dark:text-subtext-dark">
              Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
              From personal packages to business shipments — we deliver on time, every time.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

            <h2 className="text-2xl font-semibold text-heading-light dark:text-heading-dark">
              Tell us about yourself
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-1">Your Name</label>
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  placeholder="Your Name"
                  className="input w-full bg-input-bg-light dark:bg-input-bg-dark border rounded-md"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Age */}
              <div>
                <label className="block text-sm font-medium mb-1">Your Age</label>
                <input
                  {...register("age", {
                    required: "Age is required",
                    min: { value: 18, message: "Must be at least 18" },
                  })}
                  type="number"
                  placeholder="Your age"
                  className="input w-full bg-input-bg-light dark:bg-input-bg-dark border rounded-md"
                />
                {errors.age && (
                  <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1">Your Email</label>
                <input
                  {...register("email", {
                    required: "Email is required",
                  })}
                  type="email"
                  placeholder="Your Email"
                  className="input w-full bg-input-bg-light dark:bg-input-bg-dark border rounded-md"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* District */}
              <div>
                <label className="block text-sm font-medium mb-1">Your District</label>
                <select
                  {...register("district", { required: "District is required" })}
                  className="select w-full bg-input-bg-light dark:bg-input-bg-dark border rounded-md"
                >
                  <option value="">Select your District</option>
                  {
                    districts.map((district, inx) => <option key={inx}>{district}</option>)
                  }
                </select>
                {errors.district && (
                  <p className="text-red-500 text-sm mt-1">{errors.district.message}</p>
                )}
              </div>

              {/* NID */}
              <div>
                <label className="block text-sm font-medium mb-1">NID No</label>
                <input
                  {...register("nid", { required: "NID number is required" })}
                  type="number"
                  placeholder="NID"
                  className="input w-full bg-input-bg-light dark:bg-input-bg-dark border rounded-md"
                />
                {errors.nid && (
                  <p className="text-red-500 text-sm mt-1">{errors.nid.message}</p>
                )}
              </div>

              {/* Contact */}
              <div>
                <label className="block text-sm font-medium mb-1">Contact</label>
                <input
                  {...register("contact", { required: "Contact is required" })}
                  type="tel"
                  placeholder="Contact"
                  className="input w-full bg-input-bg-light dark:bg-input-bg-dark border rounded-md"
                />
                {errors.contact && (
                  <p className="text-red-500 text-sm mt-1">{errors.contact.message}</p>
                )}
              </div>
            </div>

            {/* Warehouse */}
            <div>
              <label className="block text-sm font-medium mb-1">Which warehouse you want to work?</label>
              <select
                {...register("warehouse", { required: "Warehouse selection is required" })}
                className="select w-full bg-input-bg-light dark:bg-input-bg-dark border rounded-md"
              >
                <option value="">Select warehouse</option>
                <option>Warehouse 1</option>
                <option>Warehouse 2</option>
                <option>Warehouse 3</option>
              </select>
              {errors.warehouse && (
                <p className="text-red-500 text-sm mt-1">{errors.warehouse.message}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-secondary text-white font-bold py-3 px-4 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Section Image */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqLYOHiTRZPQtFpweI2_-A5L0LkQoiyUgAPDBZ62ibiwMfwPWJvwEfaRN49APUQKhR368Vdx1qwKp_dH27CNVS0QosGnyAQnN6Grh8O8cS6Sxw3hFM-4vSwux_F_kRbvIPdbXGF0vIABAYOzAUwm4Mz-uR5W2hiTaFXvDAw28GvBB84XnEzJTlE8AsiJ9QEiVbZeeqijdlVW9gFUx5uafmG1tpwWdLPT6QVlgsQvNzs3RRxlrJqZrsFzAysKIu2A7CGAzEsjECZEOQ"
            alt="Rider Illustration"
            className="max-w-md w-full h-auto"
          />
        </div>

      </div>
    </div>
  );
}
