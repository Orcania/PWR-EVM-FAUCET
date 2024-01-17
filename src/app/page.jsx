"use client";

import { useState } from "react";

import FooterComponent from "./component/footer/footer.component";
import HeaderComponent from "./component/header/header.component";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Pwr from "./component/pwr/pwr.component";
import EVM from "./component/evm/evm.component";

export default function Home() {
  const [activeButton, setActiveButton] = useState("PWR");

  const toggleButton = (buttonName) => {
    setActiveButton(buttonName);
  };

  const bgColor = activeButton === "PWR" ? "bg-gray-900" : "bg-white";
  const Boxbtn = activeButton === "PWR" ? "bg-gray-900" : "bg-white";
  const txtbtn = activeButton === "PWR" ? "text-white" : "text-gray-900";
  const border = activeButton === "PWR" ? "border-gray-700" : "";

  return (
    <main className={`${bgColor}`}>
      <HeaderComponent activeButton={activeButton}></HeaderComponent>
      <div className="main-section w-full flex flex-col justify-center items-center pt-10">
        <div className="flex justify-center items-center my-20 md:w-2/4 w-full">
          <div
            className={`${Boxbtn} w-[279px] rounded-[56px] border ${border} flex justify-start items-start`}
          >
            <div
              className={`px-4 py-1 flex-col justify-start items-start inline-flex ${
                activeButton === "PWR"
                  ? "border border-indigo-500 rounded-[64px]"
                  : ""
              }`}
            >
              <button
                onClick={() => toggleButton("PWR")}
                className={`${txtbtn} px-2 py-1 text-base font-normal font-['Space Grotesk'] leading-relaxed`}
              >
                PWR Base Layer Faucet
              </button>
            </div>
            <div
              className={`px-4 py-1 flex-col justify-start items-start inline-flex ${
                activeButton === "EVM"
                  ? "border border-indigo-500 rounded-[64px]"
                  : ""
              }`}
            >
              <button
                onClick={() => toggleButton("EVM")}
                className={`${txtbtn} px-2 py-1 text-base font-normal font-['Space Grotesk'] leading-relaxed`}
              >
                Ethereum 2.0 Faucet
              </button>
            </div>
          </div>
        </div>

        <ToastContainer />

        {activeButton === "PWR" && <Pwr />}
        {activeButton === "EVM" && <EVM />}
      </div>

      <FooterComponent activeButton={activeButton}></FooterComponent>
    </main>
  );
}
