"use client";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { HeaderBHQ } from "./components/Header";

export default function MainPlayPage() {
  const [mainStatePipe, setMainStatePipe] = useState({});
  const router = useRouter();
  useEffect(() => {
    if (!getCookie("signed")) {
      router.push("/sign");
    }
  }, []);
  return (
    <div className="w-[100vw] h-[100vh]">
      <HeaderBHQ />
    </div>
  );
}
