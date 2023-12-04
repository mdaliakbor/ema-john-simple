import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const [showPass, setShowPass] = useState(false);
    const [err, setErr] = useState('')

    const { user, createUser } = useContext(AuthContext)
    console.log(user)

    const handleShowPass = () => {
        if (showPass == false) {
            setShowPass(true)
        } else if (showPass == true) {

            setShowPass(false)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value

        if (password !== confirm) {
            setErr("Password not match")
        } else if (password !== 6) {
            setErr("Password at least 6 digit")
        }
        // console.log(email, password, confirm)
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                // console.log(user)

                form.reset()
            })
            .catch((error) => {
                console.log(error.message)
            })
    }
    return (
        <div>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"> Please Sign Up</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div className="mt-2">
                                <input id="email" name="email" type="email" required className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 " />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                <button onClick={handleShowPass}><FaEye /></button>
                            </div>
                            <div className="mt-2">
                                <input id="password" name="password" type={(showPass == true) ? "text" : "password"} required className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 " />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
                                <div className="text-sm">
                                    <p className=" text-red-600">{err}</p>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input id="confirm" name="confirm" type="password" required className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Have an account?
                        <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Login</Link>
                    </p>
                </div >
            </div >
        </div >
    );
};

export default Register;