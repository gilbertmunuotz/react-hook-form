import Modal from './Modal';
import { useState } from "react";
import { useForm } from "react-hook-form";
import userSchema from "../userschema/UserSchema";
import { yupResolver } from "@hookform/resolvers/yup";

function Form() {

    const schema = userSchema;
    const [modalOpen, setModalOpen] = useState(false);
    const [submittedData, setSubmittedData] = useState(null);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(data) {
        setSubmittedData(data);
        setModalOpen(true);
    }

    return (
        <div className="bg-sky-500 min-h-screen flex justify-center items-center">
            <div className="bg-white px-3 rounded-lg shadow-md mx-4 w-full max-w-lg">
                <h1 className="text-center text-3xl font-serif mb-6 mt-2">Sign Up Form</h1>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="mb-4">
                        <label htmlFor="userName" className="block text-xl font-medium text-gray-900 mb-2">Username</label>
                        <input
                            type="text"
                            {...register("UserName")}
                            id="userName"
                            placeholder="Enter Username Here..."
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <p className="text-red-600 text-sm mt-1">{errors.UserName?.message}</p>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-xl font-medium text-gray-900 mb-2">Email</label>
                        <input
                            type="email"
                            {...register("email")}
                            id="email"
                            placeholder="Enter Email Here..."
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <p className="text-red-600 text-sm mt-1">{errors.email?.message}</p>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-xl font-medium text-gray-900 mb-2">Password</label>
                        <input
                            type="password"
                            {...register("password")}
                            id="password"
                            placeholder="Password Here..."
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <p className="text-red-600 text-sm mt-1">{errors.password?.message}</p>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="confirmPassword" className="block text-xl font-medium text-gray-900 mb-2">Confirm Password</label>
                        <input
                            type="password"
                            {...register("confirmPassword")}
                            id="confirmPassword"
                            placeholder="Confirm Password Here..."
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <p className="text-red-600 text-sm mt-1">{errors.confirmPassword?.message}</p>
                    </div>

                    <div className="flex justify-center mb-6">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                            Sign Up
                        </button>
                    </div>
                </form>

                <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} data={submittedData} />

            </div>
        </div>
    );
}

export default Form;