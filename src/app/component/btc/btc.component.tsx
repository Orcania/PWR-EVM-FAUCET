"use client";

import axios from "axios";

import { useEffect, useState } from "react";

import Image from "next/image";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BTC() {
  const url = process.env.NEXT_PUBLIC_API_BTC;

  const [token, setToken] = useState<undefined | number>();

  useEffect(() => {
    axios({
      method: "GET",
      url: `${url}/claimedPWR/`,
    })
      .then((res) => {
        setToken(res.data.data.claimedPWR);
      })
      .catch((err) => setToken(undefined));
    console.log(token);
  }, [token, url]);

  const [value, setValue] = useState("");

  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  function claimTokens() {
    axios({
      method: "POST",
      url: `${url}/claimPWR/?userAddress=${value}`,
    }).then((res) => {
      if (res.data.status == "fail" || res.data.status == "error") {
        toast.error(res.data.data.message);
      } else if (res.data.status == "success") {
        toast.success("PWR Claimed");
      }
    });
  }

  const [activeButton, setActiveButton] = useState("PWR");

  const toggleButton = (buttonName: any) => {
    setActiveButton(buttonName);
  };

  return (
    <main className="">
      {/* Title */}
      <h1 className="font-bold md:text-[56px] text-3xl text-center h-[68px] mx-5 ">
        PWR Bitcoin+ Faucet
      </h1>

      {/* Subtitle */}
      <h2 className="mt-[20px] h-[26px] text-center mx-5 md:mb-0 mb-12 ">
        To prevent bots and abuse, the PWR Bitcoin+ Faucet allows you to claim
        once every 24 hours
      </h2>
      <form className="mx-5">
        {/* Field */}
        <div className="flex flex-col items-center field mt-9 space-y-4">
          <input
            onChange={onChange}
            value={value}
            className="address-input min-[820px]:w-[800px] w-full h-[64px]"
            type="text"
            placeholder="Enter Your Wallet Address (0x...)"
          />

          <div
            onClick={claimTokens}
            className="flex items-center justify-center cursor-pointer sm:w-[502px] w-full h-[48px] rounded-[32px] px-6 py-2 text-sm transition-all duration-300 ease-in-out 
            bg-orange-500 text-white 
            hover:bg-orange-300 
            active:bg-orange-600 
           "
          >
            Give Me 100 BTC
          </div>
        </div>

        <div className="bg-white rounded-xl sm:w-[502px] w-full h-[88px] mx-auto px-4 py-2 mt-12">
          <div className="flex items-center gap-x-2 mt-3">
            <div className="h-[50px] flex justify-center items-center  mb-3">
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
            <div className="flex flex-col gap-y-2  h-[65px]">
              <h3 className="h-[22px] text-sm text-[#9C9BB3] font-medium px-2">
                DISTRIBUTED TOKENS
              </h3>
              <h3 className="font-bold px-2 text-[#1E1F31]">{token}</h3>
            </div>
          </div>
        </div>
      </form>

      <div className="pt-[80px]"></div>
    </main>
  );
}
