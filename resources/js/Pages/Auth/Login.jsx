import { useEffect, useState } from 'react';
import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

import '../../Homepage/style.scss';
import { Button } from 'antd';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const [selectedUser, setSelectedUser] = useState('Whole Seller');

    const userImages = {
        "Whole Seller": "https://img.freepik.com/free-vector/login-concept-illustration_114360-748.jpg?t=st=1730653621~exp=1730657221~hmac=fed3056cf64015441919969d8ca51c1b729a55fc62f59a4de36195175bd66f6f&w=740",
        "Customer": "https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7863.jpg?t=st=1730653498~exp=1730657098~hmac=4c8c5def60080a6311c6bf0d6bcc7a195de5407e1b75da8e91e6ac1f02865574&w=740",
        "Admin": "https://img.freepik.com/free-vector/secure-login-concept-illustration_114360-4685.jpg?t=st=1730653554~exp=1730657154~hmac=7d0dd6d7a8dd63549ea17a889df144e88f186331ca13e73d35349ac0ff36e873&w=740",
    };

    const userHeadings = {
        "Whole Seller": "Whole Seller",
        "Customer": "Customer",
        "Admin": "Admin",
    };

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <div className="login-section container bg-white p-3 flex lg:flex-row my-5" style={{ background: "rgb(254, 248, 245)" }}>
            <Head title="Log in" />

            <div className='self-top flex flex-col'>
                {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
                <div className="flex justify-center rounded-lg border w-fit m-auto  mb-4">
                    {['Whole Seller', 'Customer', 'Admin'].map((user) => (
                        <button
                            key={user}
                            className={`px-4 py-2 text-gray-600  font-medium  ${selectedUser === user ? 'bg-green-500 text-white' : 'bg-gray-300 hover:bg-green-400 hover:text-white'
                                }`}
                            onClick={() => setSelectedUser(user)}
                        >
                            {user}
                        </button>
                    ))}
                </div>

                <div className=" w-full lg:flex-1 lg:flex items-center justify-center bg-white text-black">
                    <img
                        loading='lazy'
                        className="login-img w-full h-full"
                        src={userImages[selectedUser]}
                        alt={selectedUser}
                    />
                </div>
            </div>

            <div className="col-right w-full bg-gray-100 flex items-center justify-center">
                <div className="max-w-md w-full p-6">
                    <h1 className="text-3xl font-semibold mb-6 text-black text-center">
                        {userHeadings[selectedUser]}
                    </h1>

                    <form onSubmit={submit}>
                        <div>
                            <InputLabel htmlFor="email" value="Email" />

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) => setData('email', e.target.value)}
                            />

                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="password" value="Password" />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                            />

                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="block mt-4">
                            <label className="flex items-center">
                                <Checkbox
                                    className="m-0"
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                />
                                <span className="ml-2 text-sm text-gray-600">Remember me</span>
                            </label>
                        </div>

                        <div className="flex flex-col items-center justify-end">
                            {canResetPassword && (
                                <Link href={route('password.request')} className="my-3">
                                    Forgot your password?
                                </Link>
                            )}

                            <button
                                type="submit"
                                className="btn btn-primary btn-home-primary text-center"
                                disabled={processing}
                            >
                                Log in
                            </button>
                        </div>
                    </form>
                    <div className="mt-4 text-sm text-gray-600 text-center">
                        <p>
                            Don't have an account?{' '}
                            <a href="/register" className="text-black hover:underline">
                                Sign Up
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
