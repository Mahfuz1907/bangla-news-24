'use client'

import { signOut, useSession } from '@/app/api/auth/[...all]/auth-client';
import Link from 'next/link';
import React from 'react';

const AuthButtons = () => {
    const { data: session } = useSession()

    console.log('user session',session)
    return (
        <div className='space-x-4'>
            {
                session?.user ? <div className='flex flex-col justify-between items-center gap-2'>
                    <h2 className='flex flex-row justify-start items-center gap-2 text-sm md:text-lg'>
                        অভিনন্দন 
                        <span className='text-emerald-800 font-bold text-base md:text-xl text-center'>
                            {session.user.name}
                        </span>
                    </h2>
                    <button onClick={() => signOut()} 
                    className="cursor-pointer text-sm font-medium text-white 
                    bg-emerald-700 hover:bg-emerald-800 px-4 
                    py-1.5 rounded-md transition-colors shadow-sm">
                        সাইন আউট
                    </button>
                </div>
                : <div className='flex flex-col md:flex-row justify-between md:justify-end items-start md:items-center gap-2'>
                    <Link
            href="/sign-in"
            className="text-sm font-medium text-emerald-800 hover:text-emerald-900 transition-colors"
          >
            সাইন ইন
          </Link>
          <Link
            href="/sign-up"
            className="text-sm font-medium text-white bg-emerald-700 hover:bg-emerald-800 px-4 py-1.5 rounded-md transition-colors shadow-sm"
          >
            সাইন আপ
          </Link>
                </div>
            }
        </div>
    );
};

export default AuthButtons;