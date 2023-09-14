

"use client";

import axios from "axios";

import { useEffect, useState } from "react";

import Image from "next/image";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EVM() {
  const url = process.env.NEXT_PUBLIC_API_EVM;

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
      } else if (res.data.status == "success") {
        toast.success("PWR Claimed");
      }
    });
  }

  const [activeButton, setActiveButton] = useState("PWR");

  const toggleButton = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <main className="">
      {/* Title */}
      <h1 className="font-bold md:text-[56px] text-3xl text-center h-[68px] mx-5">
        PWR Chain EVM Faucet
      </h1>

      {/* Subtitle */}
      <h2 className="mt-[20px] h-[26px] text-center mx-5">
        {" "}
        To prevent bots and abuse, the PWR EVM Faucet allows you to claim once
        every 24 hours
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
            className="flex items-center justify-center cursor-pointer sm:w-[502px] w-full h-[48px] bg-[#112FF8] rounded-[32px] px-6 py-2 text-sm text-white"
          >
            Give Me 100 PWR
          </div>
        </div>

        <div className="bg-[#F9F8FF] rounded-xl sm:w-[502px] w-full h-[88px] mx-auto px-4 py-2 mt-12">
          <div className="flex items-center gap-x-2 mt-3">
            <Image
              className="w-auto h-auto px-1.5"
              src="/exchange.svg"
              width={100}
              height={100}
              alt=""
            />
            <div className="flex flex-col gap-y-2">
              <h3 className="h-[24px] text-sm text-[#9C9BB3] font-medium px-2">
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
