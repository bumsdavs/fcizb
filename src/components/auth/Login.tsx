'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { mockAccounts } from '../mockData/MockData';
import Header from '../header/Header';
import Image from 'next/image';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userAccount = mockAccounts.find(account => account.holder.username === username);
    if (!userAccount) {
      setError('User not found');
      return;
    }
    if (userAccount.holder.password !== password) {
      setError('Invalid password');
      return;
    }
    // Store user data in localStorage
    localStorage.setItem('loggedInUser', JSON.stringify(userAccount));
    router.push('/dashboard');
  };

  return (
    <div className="bg-[#f5f5f5] h-screen relative">
      <Header />
      <div className="flex flex-col gap-2 items-center justify-center px-4 mt-10">
        <Image src="https://i.imgur.com/GRBoL5k.png" width={40} height={40} className="w-[40px] h-[40px]" alt="logo" />
        <span className="text-lg text-[#153145] font-semibold">Welcome Back</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="mt-3">{error && <p className="text-[20px] text-center mx-auto max-w-[200px] rounded-md flex items-center justify-center text-red-600">{error}</p>}</div>
      </div>
      <div className="px-6 p-4">
        <div className="mx-auto w-full py-7 pt-0">
          <div className="flex relative flex-col gap-2 mb-3">
            <label htmlFor="LOGIN TYPE" className="absolute left-4 top-2 text-[#153145] text-xs">
              LOGIN TYPE
            </label>
            <input
              type="text"
              placeholder="First Citizens Digital Banking"
              disabled
              className="p-4 pt-7 pb-2 rounded-xl placeholder:text-[#153145] placeholder:text-sm placeholder:font-semibold border bg-white border-gray-400 text-[#153145] outline-none"
            />
          </div>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-3">
              <div className="flex relative flex-col gap-2">
                <label htmlFor="Username" className="absolute left-4 top-2 text-[#153145] text-base">
                  User ID
                </label>
                <input
                  type="text"
                  placeholder="Enter your ID"
                  value={username}
                  className="p-4 pt-7 pb-2 rounded-xl border border-gray-400 text-[#153145] outline-none"
                  onChange={e => setUsername(e.target.value)}
                />
              </div>
              <div className="flex relative flex-col gap-3">
                <label htmlFor="Username" className="absolute left-4 top-2 text-[#153145] text-base">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password*"
                  value={password}
                  className="p-4 pt-7 pb-2 rounded-xl border border-gray-400 text-[#153145] outline-none"
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full items-center justify-between gap-2 mt-3">
                <button type="submit" className="p-4 py-3 bg-[#007255] rounded-xl w-full text-white font-semibold">
                  Log In
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full min-h-[70px] text-sm text-white text-center flex flex-col gap-3 items-center absolute bottom-0 z-50 bg-[#153145] px-6 p-[20px]">
        <p>©2025 First-Citizens Bnk & Trust Company. All rights reserved. First Citizens Bnk is a registered trademark of First Citizens BancShares, Inc.</p>
        <p>Member FDIC | Equal Housing Lender</p>
        <Image src="https://i.imgur.com/pty7j0s.png" width={230} height={28} className="w-[50px] h-[20px]" alt="logo" />
      </div>
    </div>
  );
}
