"use client";

import { getCookie } from "cookies-next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function HeaderBHQ(prop) {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState(
    useEffect(() => {
      if (window) {
        setCurrentUser(getCookie("signed"));
      }
    }, [])
  );
  if (prop.loginPage) {
    return null;
  }
  return (
    <div className="absolute top-5 flex text-[18px] gap-[20px] w-[100vw] text-[#e2e2e2]">
      <div className="absolute right-[1vw] gap-[15px] flex">
        <button
          onClick={() => {
            router.push("/manageAccount");
          }}
          className=" default_header"
        >
          {currentUser}
        </button>
      </div>
      <input
        placeholder="search players..."
        className="right-[41vw] p-[10px] px-[30px] bg-[#610061] rounded-[10px] outline-none absolute"
      ></input>
      <div className="py-[3px] px-[10px]">
        <Image
          alt="photo"
          priority={true}
          src="/icon.png"
          height={60}
          width={60}
        />
      </div>
    </div>
  );
}
