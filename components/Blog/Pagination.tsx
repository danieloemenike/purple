'use client'
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import IconPrev from "@/public/assets/Iconprev.png"
import IconNext from "@/public/assets/IconNext.png"
import Image from 'next/image';


const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const itemsPerPage = 1; // Change this to your desired items per page


export function PaginatedItems() {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);



  return (
    <div className="">
   

      <ReactPaginate
        breakLabel="..."
              nextLabel={ <div className='flex w-100  h-full absolute right-2  bottom-2 top-4  '> 
                  <h2 className="text-[14px] text-[#667085] hover:text-[#7F56D9]">Next </h2>
            <Image src = {IconNext} alt = "Next " className='w-[18px] h-[18px] items-center ml-[10px] object-fit ' />
        </div>}
        pageRangeDisplayed={3}
        pageCount={pageCount}   
        previousLabel={ <div className='flex flex-row-reverse w-100 absolute left-0 bottom-2 top-4'> 
        <h2 className="text-[14px] text-[#667085] ml-[10px]">Previous </h2>
  <Image src = {IconPrev} alt = "Previous " className='w-[18px] h-[18px] items-center  object-fit' />
</div>}
        containerClassName="flex w-full items-center justify-center relative h-[61px]"
        pageClassName="cursor-pointer transition-colors duration-300 hover:bg-[#7F56D9] hover:text-white p-3 justify-center  mr-34 "
        activeClassName="bg-[#F9F5FF] rounded item-center  text-[#7F56D9]   "
       
      />
    </div>
  );
}
