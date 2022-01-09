import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import router from 'next/router'
import jwt from "jsonwebtoken";
import {FaQuestion} from 'react-icons/fa'

const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="border rounded shadow-sm">
        <button
          type="button"
          aria-label="Open item"
          title="Open item"
          className="flex items-center justify-between w-full p-4 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="text-lg font-medium">{title}</p>
          <div className="flex items-center justify-center w-8 h-8 border rounded-full">
            <svg
              viewBox="0 0 24 24"
              className={`w-3 text-gray-600 transition-transform duration-200 ${
                isOpen ? 'transform rotate-180' : ''
              }`}
            >
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="2,7 12,17 22,7"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
        {isOpen && (
          <div className="p-4 pt-0">
            <p className="text-gray-700">{children}</p>
          </div>
        )}
      </div>
    );
  };
  
const Faq = () => {
    const [isLoading, setIsLoading] = useState(true);
  const [trending, setTrending] = useState(null);
  const [logout, setLogout] = useState(null);
  const [user, setUser] = useState("");
  const datas = trending;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8000/api/blog/hotels");
      setTrending(result.data);
      setIsLoading(false);
    };

    fetchData();
    function getCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    }
    if(!getCookie("token")){
      return router.push("/login");
    }
    setUser(jwt.decode(getCookie("token")));
    console.log(user);
  }, []);

  if (isLoading) {
    return <div className="login-back-loading">Loading...</div>;
  }
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center">
            <a href="/" className="mb-6 sm:mx-auto">
              <div className="flex items-center text-primary text-7xl justify-center w-12 h-12 rounded-full bg-indigo-50">
              <FaQuestion/>
              </div>
            </a>
            <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
              <h2 className="max-w-lg mb-6 text-primary font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="#375488"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="ec5d8ef5-b853-4714-b94f-df28ec98eeb7"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <span className="relative">Hello &nbsp;<b>{user.name}</b></span>
                </span>{' '}
                How can we help you?
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Here you can find answers to the most common questions we get from our customers. If you can't find the answer to your question, please feel free to contact us.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <Item title="The quick, brown fox jumps over a lazy dog?">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae.
            </Item>
            <Item title="The first mate and his Skipper too will do?">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae.
            </Item>
            <Item title="Is the Space Pope reptilian!?">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae.
            </Item>
            <Item title="How much money you got on you?">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae.
            </Item>
          </div>
        </div>
      </div>
    );
  };

  export default Faq;