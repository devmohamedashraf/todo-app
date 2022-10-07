import React from 'react'

const Menu = ({ modalCreate, setModalCreate }) => {
  return (
      <div className="flex justify-between border-b-2 border-[#1C1D22] border-opacity-10 dark:border-white dark:border-opacity-10 mb-4 relative">
        <div>
          <ul className='!mb-0'>
            <li className="inline-block after:conetent[''] after:w-full after:bg-[#1C1D22] dark:after:bg-white after:h-0.5 after:absolute after:-bottom-3.5 pb-2 pr-4 relative">
              <button className="flex items-center gap-2 text-base font-semibold pl-2 text-[#1C1D22] dark:text-white">
                <svg className='fill-[#1C1D22] dark:fill-[#fff]' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.25 2.25C15.0784 2.25 15.75 2.92157 15.75 3.75V6.75C15.75 7.57843 15.0784 8.25 14.25 8.25L3.75 8.25C2.92157 8.25 2.25 7.57843 2.25 6.75L2.25 3.75C2.25 2.92157 2.92157 2.25 3.75 2.25L14.25 2.25ZM14.25 6.75V3.75L3.75 3.75L3.75 6.75L14.25 6.75Z"></path>
                  <path d="M14.25 9.75C15.0784 9.75 15.75 10.4216 15.75 11.25V14.25C15.75 15.0784 15.0784 15.75 14.25 15.75H3.75C2.92157 15.75 2.25 15.0784 2.25 14.25L2.25 11.25C2.25 10.4216 2.92157 9.75 3.75 9.75L14.25 9.75ZM14.25 14.25V11.25L3.75 11.25L3.75 14.25H14.25Z"></path>
                </svg>                    
                Board view
              </button>
            </li>
            <li className="inline-block pb-2 pr-4 relative">
              <button className="flex items-center gap-2 text-base font-semibold pl-2 text-[#1C1D22] text-opacity-50 dark:text-white dark:text-opacity-50">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="9" cy="9" r="9" className='fill-[#1C1D22] dark:fill-white' fill="" fillOpacity="0.08"></circle>
                  <g className='opacity-40 dark:opacity-100'>
                    <path d="M12 9H6" className='stroke-[#1C1D22] dark:stroke-white opacity-40' strokeWidth="2" strokeLinecap="round"></path>
                    <path d="M9 12L9 6" className='stroke-[#1C1D22] dark:stroke-white opacity-40'  strokeWidth="2" strokeLinecap="round"></path>
                  </g>
                </svg>                                    
                Add view
              </button>
            </li>
          </ul>
        </div>
        <div className="relative mb-3">
          <button className="btn-add p-1.5 px-4 bg-[#1C1D22] dark:bg-[#4B69FF] rounded-full text-white font-semibold text-sm" onClick={() => setModalCreate(!modalCreate)}>
            Add new task
          </button>
        </div>
      </div>
  )
}

export default Menu