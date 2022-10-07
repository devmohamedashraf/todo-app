import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'

const Sidebar = () => {
  const {openSidebar, setOpenSidebar} = useContext(ThemeContext)
  return (
    <>
        <div className={`lg:block fixed z-50 h-full bg-[#1C1D22] max-w-[90px] w-full text-white ${openSidebar ? '' : 'hidden'}`}>
          <div className="p-4 h-full flex flex-col justify-between items-center">
            <div className="flex flex-col items-center gap-6">
                <button className='lg:hidden block' onClick={() => setOpenSidebar(!openSidebar)}>
                  <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.1" d="M14.3399 -9.15527e-05H5.66991C2.27991 -9.15527e-05 -9.15527e-05 2.37991 -9.15527e-05 5.91991V14.0899C-9.15527e-05 17.6199 2.27991 19.9999 5.66991 19.9999H14.3399C17.7299 19.9999 19.9999 17.6199 19.9999 14.0899V5.91991C19.9999 2.37991 17.7299 -9.15527e-05 14.3399 -9.15527e-05Z" fill="white"/>
                    <path d="M13.0156 11.7704L11.2366 9.99241L13.0146 8.21441C13.3566 7.87341 13.3566 7.31841 13.0146 6.97741C12.6726 6.63341 12.1196 6.63441 11.7776 6.97641L9.99861 8.75441L8.21961 6.97441C7.87761 6.63241 7.32361 6.63441 6.98161 6.97441C6.64061 7.31641 6.64061 7.87141 6.98161 8.21241L8.76161 9.99241L6.98561 11.7674C6.64361 12.1094 6.64361 12.6644 6.98561 13.0044C7.15661 13.1764 7.37961 13.2614 7.60361 13.2614C7.82861 13.2614 8.05161 13.1764 8.22261 13.0054L9.99861 11.2294L11.7786 13.0084C11.9496 13.1794 12.1726 13.2644 12.3966 13.2644C12.6206 13.2644 12.8446 13.1784 13.0156 13.0084C13.3576 12.6664 13.3576 12.1124 13.0156 11.7704Z" fill="white"/>
                  </svg>
                </button>
                <div className="flex flex-col items-center gap-10">
                  <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 8.88887L14 4V5.46663L22.5 9.62219L14 13.7777V26L24 21.1111V8.88887Z" fill="white"/>
                      <path d="M0 17.1111L10 22V20.5334L1.49996 16.3778L10 12.2222V-7.62939e-06L0 4.88887V17.1111Z" fill="white"/>
                  </svg>
                  <ul className="flex flex-col gap-2">
                    <li className="flex items-center gap-3 p-4 hover:bg-white hover:bg-opacity-10 rounded-full cursor-pointer [&>svg]:hover:fill-white [&>svg]:hover:!opacity-100">
                      <svg className="fill-white opacity-50" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.75 2.58333C0.75 1.57081 1.57081 0.75 2.58333 0.75H6.25C7.26252 0.75 8.08333 1.57081 8.08333 2.58333V6.25C8.08333 7.26252 7.26252 8.08333 6.25 8.08333H2.58333C1.57081 8.08333 0.75 7.26252 0.75 6.25V2.58333ZM6.25 2.58333H2.58333V6.25H6.25V2.58333ZM9.91667 2.58333C9.91667 1.57081 10.7375 0.75 11.75 0.75H15.4167C16.4292 0.75 17.25 1.57081 17.25 2.58333V6.25C17.25 7.26252 16.4292 8.08333 15.4167 8.08333H11.75C10.7375 8.08333 9.91667 7.26252 9.91667 6.25V2.58333ZM15.4167 2.58333H11.75V6.25H15.4167V2.58333ZM0.75 11.75C0.75 10.7375 1.57081 9.91667 2.58333 9.91667H6.25C7.26252 9.91667 8.08333 10.7375 8.08333 11.75V15.4167C8.08333 16.4292 7.26252 17.25 6.25 17.25H2.58333C1.57081 17.25 0.75 16.4292 0.75 15.4167V11.75ZM6.25 11.75H2.58333V15.4167H6.25V11.75ZM9.91667 11.75C9.91667 10.7375 10.7375 9.91667 11.75 9.91667H15.4167C16.4292 9.91667 17.25 10.7375 17.25 11.75V15.4167C17.25 16.4292 16.4292 17.25 15.4167 17.25H11.75C10.7375 17.25 9.91667 16.4292 9.91667 15.4167V11.75ZM15.4167 11.75H11.75V15.4167H15.4167V11.75Z" />
                      </svg>
                    </li>
                    <li className="p-4 hover:bg-white hover:bg-opacity-10 rounded-full cursor-pointer [&>svg]:hover:fill-white [&>svg]:hover:!opacity-100">
                      <svg className="fill-white opacity-50" width="18" height="20" viewBox="0 0 18 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 2.66666C6.97496 2.66666 5.33333 4.30828 5.33333 6.33333C5.33333 8.35837 6.97496 9.99999 9 9.99999C11.025 9.99999 12.6667 8.35837 12.6667 6.33333C12.6667 4.30828 11.025 2.66666 9 2.66666ZM3.5 6.33333C3.5 3.29576 5.96243 0.833328 9 0.833328C12.0376 0.833328 14.5 3.29576 14.5 6.33333C14.5 9.37089 12.0376 11.8333 9 11.8333C5.96243 11.8333 3.5 9.37089 3.5 6.33333ZM5.33333 15.5C3.81455 15.5 2.58333 16.7312 2.58333 18.25C2.58333 18.7563 2.17293 19.1667 1.66667 19.1667C1.16041 19.1667 0.75 18.7563 0.75 18.25C0.75 15.7187 2.80203 13.6667 5.33333 13.6667H12.6667C15.198 13.6667 17.25 15.7187 17.25 18.25C17.25 18.7563 16.8396 19.1667 16.3333 19.1667C15.8271 19.1667 15.4167 18.7563 15.4167 18.25C15.4167 16.7312 14.1854 15.5 12.6667 15.5H5.33333Z" />
                      </svg>                                    
                    </li>
                    <li className="p-4 hover:bg-white hover:bg-opacity-10 rounded-full cursor-pointer [&>svg]:hover:fill-white [&>svg]:hover:!opacity-100">
                      <svg className="fill-white opacity-50" width="18" height="19" viewBox="0 0 18 19"  xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.25 0.833344C6.75626 0.833344 7.16667 1.24375 7.16667 1.75001V2.66668H10.8333V1.75001C10.8333 1.24375 11.2437 0.833344 11.75 0.833344C12.2563 0.833344 12.6667 1.24375 12.6667 1.75001V2.66668H15.4167C16.4292 2.66668 17.25 3.48749 17.25 4.50001V16.4167C17.25 17.4292 16.4292 18.25 15.4167 18.25H2.58333C1.57081 18.25 0.75 17.4292 0.75 16.4167V4.50001C0.75 3.48749 1.57081 2.66668 2.58333 2.66668H5.33333V1.75001C5.33333 1.24375 5.74374 0.833344 6.25 0.833344ZM5.33333 4.50001H2.58333V7.25001H15.4167V4.50001H12.6667V5.41668C12.6667 5.92294 12.2563 6.33334 11.75 6.33334C11.2437 6.33334 10.8333 5.92294 10.8333 5.41668V4.50001H7.16667V5.41668C7.16667 5.92294 6.75626 6.33334 6.25 6.33334C5.74374 6.33334 5.33333 5.92294 5.33333 5.41668V4.50001ZM15.4167 9.08334H2.58333V16.4167H15.4167V9.08334Z" />
                      </svg>                                                   
                    </li>
                  </ul>
                </div>
            </div>
            <div>
              <div className="p-4 hover:bg-white hover:bg-opacity-10 rounded-full cursor-pointer [&>svg]:hover:fill-white [&>svg]:hover:!opacity-100">   
                <svg className="fill-white opacity-50" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10.0833 18.3333C10.0833 17.8271 9.67293 17.4167 9.16667 17.4167H4.58333V4.58333H9.16667C9.67293 4.58333 10.0833 4.17293 10.0833 3.66667C10.0833 3.1604 9.67293 2.75 9.16667 2.75H4.58333C3.57081 2.75 2.75 3.57081 2.75 4.58333V17.4167C2.75 18.4292 3.57081 19.25 4.58333 19.25H9.16667C9.67293 19.25 10.0833 18.8396 10.0833 18.3333Z" fill="white"/>
                  <path d="M19.9041 11.6422C19.9891 11.5557 20.0534 11.4565 20.0971 11.3509C20.1416 11.2436 20.1663 11.126 20.1667 11.0027L20.1667 11L20.1667 10.9973C20.166 10.7636 20.0765 10.5301 19.8982 10.3518L16.2315 6.68515C15.8735 6.32717 15.2931 6.32717 14.9352 6.68515C14.5772 7.04313 14.5772 7.62353 14.9352 7.98151L17.037 10.0833H8.25C7.74374 10.0833 7.33333 10.4937 7.33333 11C7.33333 11.5063 7.74374 11.9167 8.25 11.9167H17.037L14.9352 14.0185C14.5772 14.3765 14.5772 14.9569 14.9352 15.3148C15.2931 15.6728 15.8735 15.6728 16.2315 15.3148L19.8975 11.6488L19.9041 11.6422Z" fill="white"/>
                </svg>                               
              </div>
            </div>
          </div>
        </div>
        {/* <div className="fixed h-full max-w-[318px] w-full bg-white ml-[90px]">
          <div className="p-4 h-full flex flex-col justify-between">
            <div className="flex flex-col gap-12">
              <div className="flex justify-between items-center text-[#1C1D22]">
                  <span className="text-3xl font-bold">Projects️</span>
                  <svg className="cursor-pointer" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="14" cy="14" r="14" fill="#1C1D22" fillOpacity="0.08"/>
                    <g opacity="0.4">
                    <path d="M18 14L10 14" stroke="#1C1D22" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M14 18L14 10" stroke="#1C1D22" strokeWidth="2" strokeLinecap="round"/>
                    </g>
                  </svg>                
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-2">
                    <div className="p-3 rounded-md hover:bg-gray-100 flex justify-between items-center font-bold text-base cursor-pointer">
                      Tasks
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 1L5 5L1 1" stroke="#1C1D22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>                      
                    </div>
                    <ul className="flex flex-col gap-4 pl-6 mx-3 border-l-2 border-[#1C1D22] border-opacity-10">
                      <li className="relative before:content-[''] before:absolute before:-left-6 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-0.5 before:bg-[#1C1D22] before:bg-opacity-10 text-[#1C1D22] text-opacity-50 font-semibold">
                        All tasks (11)
                      </li>
                      <li className="relative before:content-[''] before:absolute before:-left-6 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-0.5 before:bg-[#1C1D22] before:bg-opacity-10 text-[#1C1D22] text-opacity-50 font-semibold">
                        To do (4)
                      </li>
                      <li className="relative before:content-[''] before:absolute before:-left-6 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-0.5 before:bg-[#1C1D22] before:bg-opacity-10 text-[#1C1D22] text-opacity-50 font-semibold">
                        In progress (4)
                      </li>
                      <li className="relative before:content-[''] before:absolute before:-left-6 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-0.5 before:bg-[#1C1D22] before:bg-opacity-10 text-[#1C1D22] text-opacity-50 font-semibold">
                        Done (3)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div>
              Hello
            </div>
          </div>
        </div> */}
    </>
  )
}

export default Sidebar