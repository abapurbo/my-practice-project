import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import useAuth from "../Hooks/useAuth";
import axios from "axios";

export default function SignUp() {
    const { createUser, userUpdate } = useAuth()
    const navigate=useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();

    // hosting in imgbb
    const handleSignUpForm = (data) => {
        const profileImg = data.photo[0]
        //sign up user in firebase
        createUser(data.email, data.password)
            .then(res => {
                console.log(res.user)
                // store the image in form data
                const formData = new FormData()
                formData.append('image', profileImg)

                //  send the photo to store and get the ul
                const IMG_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imag_api_key}`
                axios.post(IMG_API_URL, formData)
                    .then(res => {
                        // update user profile to firebase
                        const profile = {
                            displayName: data.name,
                            photoURL: res.data.data.url
                        }
                        console.log(profile)
                        userUpdate(profile)
                        navigate('/')
                    })
                    .catch(err => console.log(err))

            })
            .catch(error => console.log(error))

    }
    return <div>
        <div className="hero  min-h-screen ">
            <div className="hero-content flex-col">
                <div className="text-left space-y-1">
                    <h1 className="text-5xl font-bold">Create an Account</h1>
                    <h4 className="text-xl ">Sign Up with ZapShift</h4>
                </div>
                <div className="card bg-base-100 w-full shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(handleSignUpForm)} className="fieldset ">
                            <label className="label">Name</label>
                            <input type="text" className="input w-full" {...register('name', { required: true })} placeholder="your name" />
                            {
                                errors.name?.type === 'required' && <p className="text-red-500">Username is required.</p>
                            }
                            <label className="label">Photo</label>
                            <input type="file" className="file-input w-full" {...register('photo', { required: true })} />
                            {
                                errors.photo?.type === 'required' && <p className="text-red-500">Your photo is required.</p>
                            }
                            <label className="label">Email</label>
                            <input type="email" className="input w-full" {...register('email', { required: true })} placeholder="your email" />
                            {
                                errors.email?.type === 'required' && <p className="text-red-500">Email is required.</p>
                            }
                            <label className="label">Password</label>
                            <input type="password" className="input w-full" placeholder="Password"
                                {
                                ...register('password',
                                    {
                                        required: true,
                                        pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
                                        minLength: 6

                                    }


                                )}
                            />
                            {
                                errors.password?.type === 'required' && <p className="text-red-500">Password is required.</p>
                            }
                            {
                                errors.password?.type === 'minLength' && <p className="text-red-500">Password must be 6 characters or longer</p>
                            }
                            {
                                errors.password?.type === 'pattern' && <p className="text-red-500">Password must have at least one uppercase, at least one lowercase, at least one number, and at least one special characters</p>
                            }
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-primary mt-4">Sign Up</button>
                        </form>
                        <div className="divider">or</div>
                        <div>
                            <h1>Already have an account? <Link className="text-blue-500" to='/authLayout/login'>Login now</Link></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}
