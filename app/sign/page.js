"use client";
import { HeaderBHQ } from "../components/Header";
import { getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeHandler, ThemeHandlerConst } from "../components/ThemeApplier";

export default function Sign() {
  const router = useRouter();
  const [mainStatePipe, setMainStatePipe] = useState({});
  useEffect(() => {
    if (getCookie("signed")) {
      router.push("/");
    }
  }, []);

  function handleUsername(event) {
    setMainStatePipe({ ...mainStatePipe, username: event.target.value });
  }
  function handlePassword(event) {
    setMainStatePipe({ ...mainStatePipe, password: event.target.value });
  }
  async function handleSignIn() {
    if (mainStatePipe.username && mainStatePipe.password) {
      await fetch(
        "http://localhost:8080/user/" +
          mainStatePipe.username +
          "/" +
          mainStatePipe.password
      )
        .then((res) => res.json())
        .then((text) => {
          if (text.length > 0) {
            setCookie("signed", mainStatePipe.username);
            router.push("/");
          } else {
            setMainStatePipe({ ...mainStatePipe, isNotValidSign: true });
          }
        });
    }
  }
  return (
    <div
      style={ThemeHandler()}
      className="w-[100vw] h-[100vh] flex justify-center items-center"
    >
      <HeaderBHQ loginPage={true} />

      <div
        style={{ backgroundColor: ThemeHandlerConst.accentColor }}
        className="flex rounded-[20px] w-[50vw] h-[60vh] justify-center gap-[20px] flex-col items-center text-center"
      >
        <h1 className="text-[25px]">login to mors ludo</h1>
        <h1 className="text-[#444444]">tic tac toe game</h1>
        <input
          onChange={handleUsername}
          placeholder="username"
          className="defaultInput"
          spellCheck="false"
        ></input>
        {mainStatePipe.isNotValidSign ? (
          <p className="text-[18px] text-[#9e0000]">
            please enter valid password or username
          </p>
        ) : null}
        <input
          onChange={handlePassword}
          type="password"
          placeholder="password"
          className="defaultInput"
        ></input>
        <button
          style={{ backgroundColor: ThemeHandlerConst.accentColor2 }}
          className="default_button"
          onClick={() => handleSignIn()}
        >
          Let's Go!
        </button>
        <button
          onClick={() => {
            router.push("createAccount");
          }}
        >
          No Accounts Yet?
        </button>
      </div>
    </div>
  );
}
