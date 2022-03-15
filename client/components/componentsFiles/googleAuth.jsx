import React, {useState, useEffect} from "react";
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import cookie from "js-cookie";
import {useRouter} from "next/router";


const GoogleAuthentication = (googleData) => {
    const [loginData, setLoginData] = useState(
        localStorage.getItem('loginData') ? JSON.parse(localStorage.getItem('loginData')) : null
    );
    const handleFailure = (response) => {


    };
    const router = useRouter();

    const handleSuccess = (response) => {

        const res = axios.post('http://localhost:8000/api/auth/user/google', {
            access_token: response.accessToken,
            email: response.profileObj.email,
            name: response.profileObj.familyName,
            image: response.profileObj.imageUrl,
        })
            .then(res => {
                localStorage.setItem('loginData', JSON.stringify(res.data));
                cookie.set('token', JSON.stringify(res.data));
                setLoginData(res.data);

                console.log(res.data.message.success);
                if (res.data.message.success === "Logged in successfully") {
                    router.push("/home");
                }


            })
            .catch(err => {
                console.log(err);
            });

    };
    return (
        <GoogleLogin
            clientId="194474197017-qin2e2anfnla6m7hqdq8snjfr8pdpa11.apps.googleusercontent.com"
            buttonText="Signin with Google"
            onSuccess={handleSuccess}
            onFailure={handleFailure}
            cookiePolicy={'single_host_origin'}
        />
    );
};

export default GoogleAuthentication;