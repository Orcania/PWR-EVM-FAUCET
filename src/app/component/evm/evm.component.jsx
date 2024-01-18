"use client";

import axios from "axios";

import { useEffect, useState } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EVM() {
  const url = process.env.NEXT_PUBLIC_API_EVM;

  const [token, setToken] = useState();
  const [value, setValue] = useState("");

  useEffect(() => {
    axios({
      method: "GET",
      url: `${url}/claimedPWR/`,
    })
      .then((res) => {
        setToken(res.data.data.claimedPWR);
      })
      .catch((err) => {
        console.error(err);
        setToken("Error");
      });
  }, [url]);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  function claimTokens() {
    axios({
      method: "POST",
      url: `${url}/claimPWR/?userAddress=${value}`,
    })
      .then((res) => {
        if (res.data.status === "fail" || res.data.status === "error") {
          toast.error(res.data.data.message);
        } else if (res.data.status === "success") {
          toast.success("ETH Claimed");
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Error claiming ETH");
      });
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    claimTokens();
    setValue("");
  };

  return (
    <main className="">
      {/* Title */}
      <h1 className="font-bold md:text-[56px] text-3xl text-center h-[68px] mx-5">
        Ethereum + Faucet
      </h1>

      {/* Subtitle */}
      <h2 className="mt-[20px] h-[26px] text-center mx-5 md:mb-0 mb-12">
        To prevent bots and abuse, the Ethereum + Faucet allows you to claim
        once every 24 hours in the Ethereum faucet
      </h2>

      <form className="mx-5" onSubmit={handleFormSubmit}>
        {/* Field */}
        <div className="flex flex-col items-center field mt-9 space-y-4">
          <input
            onChange={onChange}
            value={value}
            className="address-input min-[820px]:w-[800px] w-full h-[64px]"
            type="text"
            placeholder="Enter Your Wallet Address (0x...)"
          />

          <button
            type="submit"
            className="flex items-center justify-center cursor-pointer sm:w-[502px] w-full h-[48px] bg-[#112FF8] rounded-[32px] px-6 py-2 text-sm text-white"
          >
            Give Me 100 ETH
          </button>
        </div>

        <div className="bg-[#F9F8FF] rounded-xl sm:w-[502px] w-full h-[88px] mx-auto px-4 py-2 mt-12">
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
