import Image from "next/image";

export function HeaderBHQ(prop) {
  if (prop.loginPage) {
    return "ZL";
  }
  return (
    <div className="absolute top-5 flex text-[18px] gap-[20px] w-[100vw] ">
      <div className="absolute right-[1vw] gap-[15px] flex">
        <button className="default_header_text p-[10px]">login</button>
        <button className=" default_header">sign up</button>
      </div>
      <input className="right-[41vw] p-[10px] px-[30px] bg-[#610061] rounded-[10px] outline-none absolute"></input>
      <div className="py-[3px] px-[10px]">
        <Image src="/icon.png" height={60} width={60} />
      </div>
    </div>
  );
}
