import React from 'react'
import Image from 'next/image'
import { SignIn } from './signIn'
import { SignOut } from './signOut'
import { auth } from '@/auth'
import Link from 'next/link'
type Props = {}

const Navbar = async (props: Props) => {
    const session = await auth()

    if(!session) return null

    if(!session.user) return null

  return (
    <div className='container bg-slate-300 p-4  '>
        <div className='flex justify-between items-center px-6'>
        <div className='flex gap-8 items-center'>
            <Link href="/">
            <Image src="/bid-logo.png" alt='logo' width={80} height={80}/>
            <span className='text-2xl font-bold text-slate-800'>Buddy</span>
            </Link>
            <div>
        <Link href="/create/bid">
           <h2 className='text-lg hover:underline focus:outline-fuchsia-400'>Create Auction</h2>
            </Link>
        </div>
        </div>
       
        <div className='flex gap-2 justify-center items-center'>
        <h2> {session.user.name}</h2>
        {!session.user ? (
  <SignIn/>
      ): (
        <SignOut/>

      )}
        </div>
      </div>
    </div>
  )
}

export default Navbar