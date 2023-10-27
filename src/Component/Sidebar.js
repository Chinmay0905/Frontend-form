import { useState } from "react";

// This is the sidebar of the page.
// We have also given the button which collapses like a drawer after clicking.
// We have divided it into 4 divisions as : My Dashboard, TOTM links, Daily Summary, Bank Details.

function Sidebar() {
        const [isOpen, setIsOpen] = useState(false);
        const [selected, setSelected] = useState(4);
        return (
                <>
                        {!isOpen ?
                                (
                                        <div>
                                                <button onClick={() => setIsOpen(!isOpen)}>
                                                        <svg
                                                                className="fixed  z-30 flex items-center cursor-pointer left-10 top-6 md:top-20"
                                                                viewBox="0 0 100 80"
                                                                width="30"
                                                                height="30"
                                                        >
                                                                <rect width="100" height="10"></rect>
                                                                <rect y="30" width="100" height="10"></rect>
                                                                <rect y="60" width="100" height="10"></rect>
                                                        </svg>
                                                </button>
                                                <div className="h-0.5 bg-gray-200"></div>
                                        </div>

                                )

                                :
                                (
                                        <div className="top-0 left-0 bg-white fixed w-[90vw] md:w-[20vw] h-full md:mt-16  py-3 border-2 ">
                                                <div className="px-8 mb-3 ">

                                                        <button onClick={() => { setIsOpen(!isOpen) }}>
                                                                <svg class="w-8 h-8 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                                                                </svg>
                                                        </button>
                                                </div>

                                                <div onClick={() => setSelected(1)} className=" mb-4 flex flex-col">
                                                        <div className={selected === 1 ? `flex py-2.5 bg-green-50 text-green-600  justify-between cursor-pointer ` : `flex py-2.5  justify-between cursor-pointer hover:text-green-500`}>
                                                                <div className=" pl-6 flex gap-5 hover:text-green-500">
                                                                        <svg class={selected === 1 ? "w-5 h-5 mt-4 text-green-600 dark:text-white" : "w-5 h-5 mt-4 text-gray-800 dark:text-white"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                                                                <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                                                        </svg>
                                                                        <span className="mt-3 text-lg font-semibold md:font-normal">My Dashboard</span>
                                                                </div>
                                                                <svg class={selected === 1 ? "mr-8 w-5 h-5 mt-4 text-green-600 dark:text-white" : "mr-8 w-5 h-5 mt-4 text-gray-800 dark:text-white"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                                                                </svg>
                                                        </div>

                                                </div>

                                                <div onClick={() => setSelected(2)} className=" mb-4 flex flex-col" >
                                                        <div className={selected === 2 ? `flex py-2.5 bg-green-50 text-green-500  justify-between cursor-pointer ` : `flex py-2.5  justify-between cursor-pointer hover:text-green-500`}>
                                                                <div className="pl-6 flex gap-5 hover:text-green-500z">
                                                                        <svg class={selected === 2 ? "w-6 h-6 mt-4 text-green-600 dark:text-white" : "w-6 h-6 mt-4 text-gray-800 dark:text-white"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 19">
                                                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.013 7.962a3.519 3.519 0 0 0-4.975 0l-3.554 3.554a3.518 3.518 0 0 0 4.975 4.975l.461-.46m-.461-4.515a3.518 3.518 0 0 0 4.975 0l3.553-3.554a3.518 3.518 0 0 0-4.974-4.975L10.3 3.7" />
                                                                        </svg>
                                                                        <span className="mt-3 text-lg font-semibold md:font-normal">TOTM links</span>
                                                                </div>
                                                                <svg class={selected === 2 ? "mr-8 w-5 h-5 mt-4 text-green-600 dark:text-white" : "mr-8 w-5 h-5 mt-4 text-gray-800 dark:text-white"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                                                                </svg>
                                                        </div>

                                                </div>
                                                <div onClick={() => setSelected(3)} className=" mb-4 flex flex-col">
                                                        <div className={selected === 3 ? `flex py-2.5 bg-green-50 text-green-600  justify-between cursor-pointer ` : `flex py-2.5  justify-between cursor-pointer hover:text-green-500`}>
                                                                <div className=" pl-6 flex gap-5 hover:text-green-500">
                                                                        <svg class={selected === 3 ? "w-6 h-6 mt-4 text-green-600 dark:text-white" : "w-6 h-6 mt-4 text-gray-800 dark:text-white"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                                                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.828 10h6.239m-6.239 4h6.239M6 1v4a1 1 0 0 1-1 1H1m14-4v16a.97.97 0 0 1-.933 1H1.933A.97.97 0 0 1 1 18V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2Z" />
                                                                        </svg>
                                                                        <span className="mt-3 text-lg font-semibold md:font-normal">Daily Summary</span>
                                                                </div>
                                                                <svg class={selected === 3 ? "mr-8 w-5 h-5 mt-4 text-green-600 dark:text-white" : "mr-8 w-5 h-5 mt-4 text-gray-800 dark:text-white"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                                                                </svg>
                                                        </div>
                                                </div>
                                                <div onClick={() => setSelected(4)} className="mb-4 flex flex-col">
                                                        <div className={selected === 4 ? `flex py-2.5 bg-green-50 text-green-500  justify-between cursor-pointer ` : `flex py-2.5  justify-between cursor-pointer hover:text-green-500`}>
                                                                <div className=" pl-6 flex gap-5 hover:text-green-500">
                                                                        <img className={selected === 4 ? "w-7 h-7 mt-3" : "w-7 h-7 mt-3"} src="https://img.icons8.com/pastel-glyph/64/bank-building--v2.png" alt="bank-building--v2" />
                                                                        <span className="mt-3 text-lg font-semibold md:font-normal">Bank Details</span>
                                                                </div>
                                                                <svg class={selected === 4 ? "mr-8 w-5 h-5 mt-4 text-green-600 dark:text-white" : "mr-8 w-5 h-5 mt-4 text-gray-800 dark:text-white"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                                                                </svg>
                                                        </div>

                                                </div>
                                        </div>
                                )

                        }
                </>

        );
}

export default Sidebar;