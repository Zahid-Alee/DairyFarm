import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from 'antd';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        user_type: 'regular', // Initialize user_type field
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <div className="login-section container md:flex-col sm:flex-col flex-col b-white p-3 flex lg:flex-row h-screen" style={{ background: "white" }}>
            <Head title="Sign Up" />

            <div className="col-left xl:w-50 lg:w-50 md:50 lg:flex items-center justify-center bg-white text-black">
                <img loading='lazy' className="login-img w-full" src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7885.jpg?t=st=1730650599~exp=1730654199~hmac=37497b5aaf56a1cf441b3e623a24f5221eb8e2dc8b456126eff7cfa6299c3a25&w=740" alt="Signup" />
            </div>

            <div className="col-right w-full bg-gray-100 flex items-center justify-center">
                <div className="max-w-md w-full p-6">
                    <h1 className="text-3xl font-semibold mb-6 text-black text-center">Sign Up</h1>

                    <form onSubmit={submit}>
                        <div>
                            <InputLabel htmlFor="name" value="Name" />
                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full"
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) => setData('name', e.target.value)}
                                required
                            />
                            <InputError message={errors.name} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="email" value="Email" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                onChange={(e) => setData('email', e.target.value)}
                                required
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
                                autoComplete="new-password"
                                onChange={(e) => setData('password', e.target.value)}
                                required
                            />
                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="password_confirmation" value="Confirm Password" />
                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                required
                            />
                            <InputError message={errors.password_confirmation} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="user_type" value="User Type" />
                            <select
                                id="user_type"
                                name="user_type"
                                value={data.user_type}
                                className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full"
                                onChange={(e) => setData('user_type', e.target.value)}
                                required
                            >
                                <option value="regular">Regular Customer</option>
                                <option value="wholeseller">Whole Seller</option>
                            </select>
                            <InputError message={errors.user_type} className="mt-2" />
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            <button className="btn btn-primary btn-home-primary py-3" disabled={processing}>
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <div className="mt-4 text-sm text-gray-600 text-center">
                        <p>Already registered? <a href="/login" className="text-black hover:underline">Login</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
