"use client";

import axios from "axios";

import { useEffect, useState } from "react";

import Image from "next/image";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PWR() {
  const url = process.env.NEXT_PUBLIC_API_PWR;

  const [token, setToken] = useState();

  useEffect(() => {
    axios({
      method: "GET",
      url: `${url}/claimedPWR/`,
    })
      .then((res) => {
        setToken(res.data.data.claimedPWR);
      })
      .catch((err) => setToken("Error"));
    console.log(token);
  }, [token, url]);

  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  function claimTokens() {
    axios({
      method: "POST",
      url: `${url}/claimPWR/?userAddress=${value}`,
    }).then((res) => {
      if (res.data.status == "fail" || res.data.status == "error") {
        toast.error(res.data.data.message);
        console.log(res.data.data.message);
        console.log("button clicked");
      } else if (res.data.status == "success") {
        toast.success("PWR Claimed");
      }
    });
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    claimTokens();
  };

  const [activeButton, setActiveButton] = useState("PWR");

  const toggleButton = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <main className="">
      {/* Title */}
      <h1 className="font-bold md:text-[56px] text-3xl text-center h-[68px] mx-5 text-white">
        PWR Faucet
      </h1>

      {/* Subtitle */}
      <h2 className="mt-[20px] h-[26px] text-center mx-5 text-white">
        To prevent bots and abuse, the PWR Faucet allows you to claim once every
        24 hours
      </h2>

      <form className="mx-5" onSubmit={handleFormSubmit}>
        {/* Field */}
        <div className="flex flex-col items-center field mt-9 space-y-4 ">
          <input
            onChange={onChange}
            value={value}
            className="address-input min-[820px]:w-[800px] w-full h-[64px] border-violet-500 hover:border-violet-100 focus:border-violet-800 bg-gray-900 placeholder:text-white"
            type="text"
            placeholder="Enter Your Wallet Address (0x...)"
            style={{ color: "white" }}
          />

          <div
            type="submit"
            className="flex items-center justify-center cursor-pointer sm:w-[502px] w-full h-[48px] bg-[#112FF8] rounded-[32px] px-6 py-2 text-sm text-white"
          >
            Give Me 100 PWR
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl sm:w-[502px] w-full h-[88px] mx-auto px-4 py-2 mt-12">
          <div className="flex items-center gap-x-2 mt-3">
            <div className="h-[50px] flex justify-center items-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="32"
                viewBox="0 0 25 32"
                fill="none"
              >
                <path
                  d="M6.1246 15.2701L0.999924 10.4333L5.83679 5.30859"
                  stroke="#737289"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.00057 10.4336L23.9039 10.4327"
                  stroke="#737289"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.7793 26.5958L23.9039 21.759L19.0671 16.6343"
                  stroke="#737289"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M23.904 21.7588L1.00063 21.7579"
                  stroke="#737289"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <div className="flex flex-col gap-y-2 h-[65px]">
              <h3 className="text-sm text-[#9C9BB3] font-medium px-2 h-[22px]">
                DISTRIBUTED TOKENS
              </h3>
              <h3 className="font-bold px-2 text-white">{token}</h3>
            </div>
          </div>
        </div>
      </form>

      <div className="pt-[80px]"></div>
    </main>
  );
}
