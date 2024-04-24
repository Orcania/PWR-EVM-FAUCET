"use client";

import { useState } from "react";

import FooterComponent from "./component/footer/footer.component";
import HeaderComponent from "./component/header/header.component";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Pwr from "./component/pwr/pwr.component";
import EVM from "./component/evm/evm.component";
import PWR from "./component/pwr/pwr.component";
import BTC from "./component/btc/BTC.component";

const CHAIN_TYPE = {
  PWR: "pwr",
  EVM: "evm",
  BTC: "btc",
};

export default function Home() {
  const [activeButton, setActiveButton] = useState(CHAIN_TYPE.PWR);

  function toggleButton(buttonName) {
    setActiveButton(buttonName);
  }

  const theme = {
    pwr: {
      bgColor: "bg-gray-900",
      boxbtn: "bg-gray-900",
      txtbtn: "text-white",
      border: "border-gray-700",
    },
    evm: {
      bgColor: "bg-white",
      boxbtn: "bg-white",
      txtbtn: "text-gray-900",
      border: "",
    },
    btc: {
      bgColor: "bg-blue-500",
      boxbtn: "bg-white",
      txtbtn: "text-gray-900",
      border: "",
    },
  };

  // const bgColor = activeButton === "PWR" ? "bg-gray-900" : "bg-white";
  // const Boxbtn = activeButton === "PWR" ? "bg-gray-900" : "bg-white";
  // const txtbtn = activeButton === "PWR" ? "text-white" : "text-gray-900";
  // const border = activeButton === "PWR" ? "border-gray-700" : "";

  const t = theme[activeButton];

  return (
    <main className={t.bgColor}>
      <HeaderComponent activeButton={activeButton}></HeaderComponent>
      <div className="main-section w-full flex flex-col justify-center items-center pt-10">
        <div className="flex justify-center items-center my-20 md:w-2/4 w-full ">
          <div
            className={`${t.boxbtn}  rounded-[56px] border ${t.border} flex justify-start items-start`}
          >
            <div
              className={` ${
                activeButton === CHAIN_TYPE.PWR
                  ? "border border-indigo-500 rounded-[64px]"
                  : ""
              }`}
            >
              <button
                onClick={() => toggleButton(CHAIN_TYPE.PWR)}
                className={`${t.txtbtn} py-3   px-3 `}
              >
                PWR
              </button>
            </div>
            <div
              className={`${
                activeButton === CHAIN_TYPE.EVM
                  ? "border border-indigo-500 rounded-[64px]"
                  : ""
              }`}
            >
              <button
                onClick={() => toggleButton(CHAIN_TYPE.EVM)}
                className={`${t.txtbtn} px-4 py-3`}
              >
                Eth +
              </button>
            </div>
            <div
              className={` ${
                activeButton === CHAIN_TYPE.BTC
                  ? "border border-indigo-500 rounded-[64px]"
                  : ""
              }`}
            >
              <button
                onClick={() => toggleButton(CHAIN_TYPE.BTC)}
                className={`${t.txtbtn} py-3   px-3 `}
              >
                BTC+
              </button>
            </div>
          </div>
        </div>

        <ToastContainer />

        {activeButton === CHAIN_TYPE.PWR && <Pwr />}
        {activeButton === CHAIN_TYPE.EVM && <EVM />}
        {activeButton === CHAIN_TYPE.BTC && <BTC />}
      </div>

      <FooterComponent activeButton={activeButton}></FooterComponent>
    </main>
  );
}
