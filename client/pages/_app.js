import "tailwindcss/tailwind.css";
import React, {useState, useEffect} from "react";
import {ToastProvider} from "react-toast-notifications";

import {BarLoader} from "react-spinners";

function MyApp({Component, pageProps}) {
    // implement react spinner
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        });
    }, []);

    const override = `
  display: block;
  margin: 0 auto;
  width: 100%;
  border-color: red;
  `;

    return (
        <>
            {loading ? (
                <BarLoader
                    css={override}
                    size={5}
                    color={"#375488"}
                    loading={loading}
                />
            ) : (
                <ToastProvider
                    autoDismiss
                    autoDismissTimeout={4000}
                    placement="top-right"
                >
                    <Component {...pageProps} />
                </ToastProvider>
            )}
        </>
    );
}

export default MyApp;
