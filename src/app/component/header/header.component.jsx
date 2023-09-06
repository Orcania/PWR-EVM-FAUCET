import Image from "next/image"

export default function HeaderComponent() {
    return (
        <div className="bg-white" style={{
            boxShadow: '8px 8px 56px 0px rgba(174, 174, 192, 0.16)',
            fontFamily: 'Space Grotesk, sans-serif',
        }}>
            <div className="flex justify-between items-center mx-[90px] h-[80px]">
                <Image className="w-auto h-auto" src='/pwr-logo.svg'  width={100} height={100} alt="" />
                <button className="border border-[#F2F3F7] bg-[#F2F3F7] rounded-[32px] h-[36px] text-sm px-4 py-2">Learn More</button>
            </div>
        </div>
    )
}