'use client'

import { useEffect, useState } from 'react';
import SubscriberForm from './SubscriberForm'
import { Montserrat } from 'next/font/google'
import { cn } from "@/lib/utils";
import localFont from 'next/font/local'

const atypfont = localFont({
    src: '../fonts/AtypText-Semibold.woff2',
    display: 'swap'
})
const montserrat = Montserrat({ subsets: ['latin'] })

type Props = {}

function Banner({ }: Props) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    }, [])
    
  return (
        <>
          <section className=' pt-[87px]'>
              <div className='mb-[16px]'>
                  <h2 className={cn ('text-[#6941C6] text-[14px] leading-6 font-semibold', montserrat.className )}> OUR BLOG </h2>

              </div>
              <div className='md:mb-[16px] md:w-[617px]'>
                  <h3 className={cn ('text-[#0D0C22] md:text-[56px] text-[46px] leading-[96.5%] font-semibold md:tracking-[-4px] tracking-[-2px] mb-[12px]', atypfont.className)}> Stories and interviews </h3>
              </div>
              <div className='md:w-[559px] mb-[16px]'>
                  <p className ={ cn( "md:text-[18px] text-[16px] text-[#6E6D7A] font-normal", montserrat.className)}>
                      Subscribe to learn about new product features, the latest in technology, solutions, and updates.
                  </p>
              </div>
              <SubscriberForm />
        </section>
        </>
  )
}

export default Banner