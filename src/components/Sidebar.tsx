import React from 'react'

const sidebarList = [
  {
    name: 'Home',
    url: '/',
    icon: <i className="fa-solid fa-house"></i>,
  },
  {
    name: 'Skills',
    url: '/skills',
    icon: <i className="fa-solid fa-award"></i>,
  },
  {
    name: 'Projects',
    url: '/projects',
    icon: <i className="fa-solid fa-list-check"></i>,
  },
  {
    name: 'Social',
    url: '/social',
    icon: <i className="fa-solid fa-users-viewfinder"></i>,
  },
]

export default function Sidebar() {

  const selectedPage = "/"

  return (
    <div className='w-full h-full flex opacity-55 hover:opacity-100'>
      <ul className='h-[500px] flex justify-center items-center w-full flex-col gap-14 m-auto'>
        {
          sidebarList.map((item, index) => {
            const isSelected = selectedPage === item.url
            return <li key={index} className='group/item cursor-pointer relative flex flex-col items-center gap-2 hover:scale-125 transition ease-in-out'>
              <span className={`text-xl ${isSelected ? 'opacity-100' : 'opacity-45'}`}>{item.icon}</span>
              <span className='absolute left-10 text-sm top-[4px] invisible group-hover/item:visible duration-700 transition ease-in-out text-[#dadada]'>{item.name}</span>
            </li>
          })
        }
      </ul>
    </div>
  )
}
