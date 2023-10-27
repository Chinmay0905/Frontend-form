import React from 'react'

// The is the Navbar of the Page.

export default function Navbar() {
        return (
                <div>
                        <nav class="bg-white  md:block hidden w-full   dark:bg-gray-900 fixed  z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                                <div class=" flex flex-wrap items-center justify-between  mx-auto p-4">
                                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Logo</span>

                                        <div class="items-center justify-between  hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                                                <ul class="flex flex-col gap-20 p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                                        <li class="flex flex-col">
                                                                <a href="#" class=" relative w-fit block text-2xl py-2 pl-3 pr-4 text-green-700 rounded  md:p-0 after:block after:content-[''] after:absolute after:h-[3px] after:bg-green-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" aria-current="page">Home</a>
                                                        </li>
                                                        <li>
                                                                <a href="#" class=" relative w-fit block text-2xl py-2 pl-3 pr-4 text-black rounded  md:p-0 after:block after:content-[''] after:absolute after:h-[3px] after:bg-green-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">Services</a>
                                                        </li>
                                                        <li>
                                                                <a href="#" class=" relative w-fit block text-2xl py-2 pl-3 pr-4 text-black rounded  md:p-0 after:block after:content-[''] after:absolute after:h-[3px] after:bg-green-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">Blog</a>
                                                        </li>
                                                        <li>
                                                                <a href="#" class=" relative w-fit block text-2xl py-2 pl-3 pr-4 text-black rounded  md:p-0 after:block after:content-[''] after:absolute after:h-[3px] after:bg-green-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">Offers</a>
                                                        </li>
                                                        <li>
                                                                <a href="#" class=" relative w-fit block text-2xl py-2 pl-3 pr-4 text-black rounded  md:p-0 after:block after:content-[''] after:absolute after:h-[3px] after:bg-green-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">About Us</a>
                                                        </li>
                                                </ul>
                                        </div>
                                        <div class="items-center justify-between  hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                                                <ul class="flex flex-col gap-10 p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                                        <li>
                                                                <svg class="w-6 h-6 cursor-pointer text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                                                </svg>
                                                        </li>
                                                        <li>
                                                                <svg class="w-6 h-6 cursor-pointer text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 21">
                                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C17 15.4 17 16 16.462 16H3.538C3 16 3 15.4 3 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 10 3.464ZM1.866 8.832a8.458 8.458 0 0 1 2.252-5.714m14.016 5.714a8.458 8.458 0 0 0-2.252-5.714M6.54 16a3.48 3.48 0 0 0 6.92 0H6.54Z" />
                                                                </svg>
                                                        </li>
                                                        <li>
                                                                <svg class="w-6 h-6 cursor-pointer text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 11 14H9a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 10 19Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                                </svg>
                                                        </li>
                                                </ul>
                                        </div>

                                </div>
                        </nav>
                </div>
        )
}
