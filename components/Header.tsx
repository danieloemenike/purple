'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Logo from "@/public/assets/Purple.png"
import Link from 'next/link'


type Props = {}

export default function Header({ }: Props) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    }, [])
  
    const menuList = [
        {
            id: 1,
            title: "About",
            path: "#",
            color: "black"
        },
        {
            id: 2,
            title: "SeaBaaS",
            path: "#",
            color: "black"
        },
        {
            id: 3,
            title: "Contact",
            path: "#",
            color: "black"
        },
        {
            id: 4,
            title: "Blog",
            path: "#",
            color: "black"
        }
    ]
    
  return (
      <>
          <header className="flex md:pr-[162px] md:pl-[116px]  w-full md:justify-between md:items-center h-[70px] border-b-[#C8C8C8]-[32%] border-solid border-2">
              
                <div className="pt-4">
                    <Image src={Logo} alt="Purple Logo" priority />
              </div>
              <nav className='md:flex hidden '>
                  { menuList.map(menu => (
                     
                      <Link key={menu.id} href={ menu.path } className={`text-${menu.color} md:p-[32px] text-sm font-medium `}>
                          
                          {menu.title}
                        </Link>
                      
                  )
                  )
                  }
            </nav>
          </header>
          
      </>
  )
}