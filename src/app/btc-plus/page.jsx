"use client";

import { useState } from "react";

import FooterComponent from "@/app/component/footer/footer.component";
import HeaderComponent from "@/app/component/header/header.component";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Pwr from "@/app/component/pwr/pwr.component";
import EVM from "@/app/component/evm/evm.component";
import BTC from "@/app/component/btc/btc.component";

const CHAIN_TYPE = {
  PWR: "pwr",
  EVM: "evm",
  BTC: "btc",
};

export default function BTCPlus() {
  const [activeButton, setActiveButton] = useState(CHAIN_TYPE.BTC);

  function toggleButton(buttonName) {
    setActiveButton(buttonName);
  }

  const styles = {
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
      bgColor: "bg-white",
      boxbtn: "bg-white",
      txtbtn: "text-gray-900",
      border: "",
    },
  };

  const bgColor = activeButton === "PWR" ? "bg-gray-900" : "bg-white";
  const Boxbtn = activeButton === "PWR" ? "bg-gray-900" : "bg-white";
  const txtbtn = activeButton === "PWR" ? "text-white" : "text-gray-900";
  const border = activeButton === "PWR" ? "border-gray-700" : "";

  const theme = styles[activeButton];

  return (
    <main className={theme.bgColor}>
      <HeaderComponent activeButton={activeButton}></HeaderComponent>
      <div className="main-section w-full flex flex-col justify-center items-center pt-10">
        <div className="flex justify-center items-center my-20 md:w-2/4 w-full ">
          <div
            className={`${theme.boxbtn}  rounded-[56px] border ${theme.border} flex justify-start items-start`}
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
                className={`${theme.txtbtn} py-3   px-5 `}
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
              {/* <button
                onClick={() => toggleButton(CHAIN_TYPE.EVM)}
                className={`${theme.txtbtn} px-5 py-3`}
              >
                ETH+
              </button> */}
            </div>
            <div
              className={` ${
                activeButton === CHAIN_TYPE.BTC
                  ? "border border-orange-500 rounded-[64px]"
                  : ""
              }`}
            >
              <button
                onClick={() => toggleButton(CHAIN_TYPE.BTC)}
                className={`${theme.txtbtn} py-3   px-5 `}
              >
                BTC+
              </button>
            </div>
          </div>
        </div>

        <ToastContainer />

        {activeButton === CHAIN_TYPE.PWR && <Pwr />}
        {/* {activeButton === CHAIN_TYPE.EVM && <EVM />} */}
        {activeButton === CHAIN_TYPE.BTC && <BTC />}
      </div>

      <FooterComponent activeButton={activeButton}></FooterComponent>
    </main>
  );
}
