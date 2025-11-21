import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

export default function Login() {
    const { register, handleSubmit } = useForm()
    const handleLoginForm = (data) => {

    }
    return <div>
        <div className="hero  min-h-screen ">
            <div className="hero-content flex-col">
                <div className="text-left space-y-1">
                    <h1 className="text-5xl font-bold">Welcome Back</h1>
                    <h4 className="text-xl ">Login with ZapShift</h4>
                </div>
                <div className="card bg-base-100 w-full   shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(handleLoginForm)} className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input" {...register('email', { required: true })} placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password"
                                {
                                ...register('password',
                                    {
                                        required: true,
                                        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                                        minLength: 6

                                    }


                                )}
                            />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-primary mt-4">Login</button>
                        </form>
                        <div className="divider">or</div>
                        <div>
                         <h1>Don't have any account? <Link className="text-blue-500" to='/authLayout/signUp'>Sign up now</Link></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}
