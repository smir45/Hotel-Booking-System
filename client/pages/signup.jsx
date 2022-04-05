import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import router, {useRouter} from 'next/router';
import {useToasts} from 'react-toast-notifications'

const SignupElements = () => {
    const [error, setError] = useState('');
    const url = "http://localhost:8000/api/auth/user/create";
    const [data, setData] = React.useState({
        name: "",
        email: "",
        password: "",
        phone: "",
    });
    const registration = (e) => {

        e.preventDefault();
        Axios.post(url, {
            name: data.name,
            email: data.email,
            password: data.password,
            phone: data.phone,
        })
            .then((res) => {
                addToast("Registration Successful", {
                    appearance: 'success'
                })
                setTimeout(() => {
                    router.push('/login');
                }, 1000)
            })
            .catch((err) => {
                setError(err.response.data.message);
                addToast(err.response.data.message, {
                    appearance: 'error'
                })

            });
    };

    const handleChange = (e) => {
        const newdata = {...data};
        newdata[e.target.id] = e.target.value;
        setData(newdata);
    };
    const {addToast} = useToasts()

    console.log(data)
    return (
        <>

            <section class="w-full bg-white">
                <head>
                    <header>
                        <title>Accommod | Sign up</title>
                    </header>
                </head>

                <div class="mx-auto max-w-7xl">
                    <div class="flex flex-col lg:flex-row">
                        <div
                            class="relative w-full bg-cover lg:w-6/12 xl:w-7/12 bg-gradient-to-r from-white via-white to-gray-100">
                            <div
                                class="relative flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0">

                                <img
                                    src="https://image.freepik.com/free-photo/funny-3d-cartoon-casual-character_183364-80223.jpg"
                                    alt=""/>
                            </div>
                        </div>

                        <div class="w-full bg-white lg:w-6/12 xl:w-5/12">
                            <form action="" onSubmit={(e) => registration(e)}>
                                <div class="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24">
                                    <h4 class="w-full text-3xl font-bold">Signup</h4>
                                    <p class="text-lg text-gray-500">or, if you have an account you can <a href="/login"
                                                                                                           class="text-primary underline">sign
                                        in</a></p>
                                    <div class="relative w-full mt-10 space-y-8">
                                        <div class="relative">
                                            {/* <label class="font-medium text-gray-900">Name</label> */}
                                            <input onChange={(e) => handleChange(e)} type="text"
                                                   class="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-pmry focus:ring-opacity-50"
                                                   name="name" placeholder="Enter Your Name" id="name"/>
                                        </div>
                                        <div class="relative">
                                            {/* <label class="font-medium text-gray-900">Email</label> */}
                                            <input onChange={(e) => handleChange(e)} type="text"
                                                   class="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-pmry focus:ring-opacity-50"
                                                   name="email" placeholder="Enter Your Email Address" id="email"/>
                                        </div>
                                        <div class="relative">
                                            {/* <label class="font-medium text-gray-900">Password</label> */}
                                            <input onChange={(e) => handleChange(e)} type="password"
                                                   class="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-pmry focus:ring-opacity-50"
                                                   name="password" placeholder="Password" id="password"/>
                                        </div>

                                        <div class="relative">
                                            {/* <label class="font-medium text-gray-900">Phone</label> */}
                                            <input onChange={(e) => handleChange(e)} type="number"
                                                   class="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-pmry focus:ring-opacity-50"
                                                   name="phone" placeholder="Phone" id="phone"/>
                                        </div>
                                        {/* display error message from server */}
                                        <div class="text-red-500 text-sm mt-2">
                                        </div>

                                        <div class="relative">
                                            <button type="submit"
                                                    class="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-pmry rounded-lg hover:bg-pmry ease">Create
                                                Account
                                            </button>
                                            <a href="#_"
                                               class="inline-block w-full px-5 py-4 mt-3 text-lg font-bold text-center text-gray-900 transition duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 ease">Sign
                                                up with Google</a>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}


const Signup = () => {
    return (
        <>
            <SignupElements/>
        </>
    )
}

export default Signup;