"use client";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function MainPlayPage() {
  const router = useRouter();
  useEffect(() => {
    if (!getCookie("signed")) {
      router.push("/sign");
    }
  }, []);
  return <div className="w-[100vw] h-[100vh]"></div>;
}
