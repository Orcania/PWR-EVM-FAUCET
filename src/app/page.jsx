"use client";

import axios from "axios";

import { useEffect, useState, useCallback } from "react";

import FooterComponent from "./component/footer/footer.component";
import HeaderComponent from "./component/header/header.component";
import Image from "next/image";

export default function Home() {
  const url = process.env.NEXT_PUBLIC_API;

  const [token, setToken] = useState(0);
  useEffect(() => {
    axios({
      method: "GET",
      url: `${url}/claimedPWR/`,
    }).then((res) => {
      setToken(res.data.data.claimedPWR);
    });
  }, [token, setToken, url]);

  const claimTokens = useCallback(() => {
    axios({
      method: 'POST',
      url: `${url}/claimPWR/?userAddress=${value}`,
    }).then((res) => console.log(res));
  })

  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(() => e.target.value);
    console.log(value)
  };

  return (
    <main>
      <HeaderComponent></HeaderComponent>

      <div className="pt-[80px]"></div>

      <main>
        {/* Title */}
        <h1 className="font-bold md:text-[56px] text-3xl text-center h-[68px]">
          PWR Chain EVM Faucet
        </h1>

        {/* Subtitle */}
        <h2 className="mt-[20px] h-[26px] text-center">
          {" "}
          To prevent bots and abuse, the PWR EVM Faucet allows you to claim once
          every 24 hours
        </h2>

        <form className="sm:mx-0 mx-3">
          {/* Field */}
          <div className="flex flex-col items-center field mt-9 space-y-4">
            <input
              onChange={onChange}
              value={value}
              className="address-input sm:w-[800px] w-full h-[64px]"
              type="text"
              placeholder="Enter Your Wallet Address (0x...)"
            />

            <button
              onClick={claimTokens}
              className="sm:w-[502px] w-full h-[48px] bg-[#112FF8] rounded-[32px] px-6 py-2 text-sm text-white"
            >
              Give Me 100 PWR
            </button>
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
      </main>

      <div className="pt-[80px]"></div>

      <FooterComponent></FooterComponent>
    </main>
  );
}
