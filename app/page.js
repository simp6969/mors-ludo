"use client";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { HeaderBHQ } from "./components/Header";
import { ThemeHandler, ThemeHandlerConst } from "./components/ThemeApplier";

export default function MainPlayPage() {
  const [mainStatePipe, setMainStatePipe] = useState({});
  const router = useRouter();
  useEffect(() => {
    if (!getCookie("signed")) {
      router.push("/sign");
    }
  }, []);
  return (
    <div className="w-[100vw] h-[100vh]" style={ThemeHandler()}>
      <HeaderBHQ />
      <div className="w-[100%] h-[100%] flex justify-center items-center">
        <div className=""></div>
      </div>
    </div>
  );
}
