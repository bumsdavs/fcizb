'use client';

import Image from 'next/image';
import fcdiLogo from "../../assets/fdic.svg"

export default function Header() {
  return (
    <div className="w-full">
      <div className="flex bg-[#153145] text-white p-4 px-6 gap-1">
        <Image src={fcdiLogo} width={230} height={28} className="w-[50px] h-[20px] invert brightness-0" alt="logo" />
        <span className="text-sm text-white italic text-left">FDIC-Insured - Backed by the full faith and credit of the U.S. Government</span>
      </div>
    </div>
  );
}
