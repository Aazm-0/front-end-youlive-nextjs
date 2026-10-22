"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [num, setNum] = useState(0);
  useEffect(() => {
    
  },[])

  // console.log(process.env.NEXT_PUBLIC_EXPRESS_MONOLITH_BACKEND_URL);
  

  return (
    <>
      <div>{num}</div>
      <button
        className="bg-amber-950 rounded-3xl border border-red-950 w-fit"
        onClick={(e) => {
          setNum(num + 1);
          setNum((prev) => prev + 1);
        }}
      >
        Click me
      </button>
    </>
  );
}
