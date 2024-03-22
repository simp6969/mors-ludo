"use client";
import { HeaderBHQ } from "../components/Header";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Sign() {
  const router = useRouter();
  useEffect(() => {
    if (getCookie("sign")) {
      router.push("/");
    }
  }, []);
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <HeaderBHQ />
      <div className=""></div>
    </div>
  );
}
