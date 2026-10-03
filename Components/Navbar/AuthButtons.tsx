'use client'

import { signOut, useSession } from '@/app/api/auth/[...all]/auth-client';
import Link from 'next/link';
import React from 'react';

const AuthButtons = () => {
    const { data: session } = useSession()
    return (
        <div className='space-x-4'>
            {
                session?.user ? <div className='flex flex-col justify-between items-center gap-2'>
                    <h2 className='flex flex-row justify-start items-center gap-2'>অভিনন্দন <span className='text-emerald-800 font-bold text-xl'>{session.user.name}</span></h2>
                    <button onClick={() => signOut()} 
                    className="cursor-pointer text-sm font-medium text-white 
                    bg-emerald-700 hover:bg-emerald-800 px-4 
                    py-1.5 rounded-md transition-colors shadow-sm">
                        সাইন আউট
                    </button>
                </div>
                : <>
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
                </>
            }
        </div>
    );
};

export default AuthButtons;