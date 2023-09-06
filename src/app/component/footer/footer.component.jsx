import Image from "next/image";
import Link from "next/link";

export default function FooterComponent() {
  const socials = [
    {
      icon: () => (
        <Image
          className="w-auto h-auto"
          src="/twitter.svg"
          width={20}
          height={20}
          alt=""
        />
      ),
      label: "Join our Twitter",
      href: "#",
    },
    {
      icon: () => (
        <Image
          className="w-auto h-auto"
          src="/telegram.svg"
          width={20}
          height={20}
          alt=""
        />
      ),
      label: "Join our Telegram",
      href: "#",
    },
    {
      icon: () => (
        <Image
          className="w-auto h-auto"
          src="/discord.svg"
          width={20}
          height={20}
          alt=""
        />
      ),
      label: "Join our Discord",
      href: "#",
    },
  ];

  return (
    <div className="flex justify-center bg-[#F9F8FF] py-20">
      <div className="">
        {/* Logo */}
        <Image
          className="w-auto h-auto mx-auto"
          src="/pwr-logo.svg"
          width={100}
          height={100}
          alt=""
        />

        {/* rights */}
        <h1 className="mt-6 text-sm text-[#1E1F31] text-center font-medium h-[24px] py-1">
          @WOM Protocol Pte. Ltd. All Rights reserved
        </h1>

        {/* Socials */}
        <div className="flex justify-center items-center gap-x-4 mt-9">
          {socials.map((social, index) => (
            <Link
              href={social.href}
              key={index}
              className="flex gap-x-4 items-center bg-[#1E1F31] rounded-2xl w-[134px] h-[60px] px-4 py-3"
            >
              {social.icon()}
              <span className="text-xs text-white font-medium leading-[18px]">
                {social.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
