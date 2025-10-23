import React from 'react'
import { menu_list } from '../../assets/frontend_assets/assets'

function ExploreMenu({category, setCategory}) {

  return (
    <div className='explore-menu flex flex-col gap-5 mt-4' id = "explore-menu">

        <h1 className='text-3xl font-semibold text-[#262626] mt-5'>Explore our menu</h1>
        <p className='explore-menu-text md:w-2/3 '>
            Choose from a diverse menu featuring a delectable array of dishes. Our Mission is to satisy your 
            Cravings and elevate your dining experience, one delicious meal at a time.
        </p>

        <div className="explore-menu-list flex justify-between items-center gap-8 text-center my-5 mx-0 overflow-x-scroll scrollbar-hidden">
            { menu_list.map((menu, i) => (
                <div onClick={() => setCategory(prev => prev === menu.menu_name ? "All" : menu.menu_name)} className='Explore-menu-list-item' key = {i}>
                    <img  src={menu.menu_image} alt="menu-image" className={`w-[7.5vw] min-w-[80px] cursor-pointer rounded-full transition ${category === menu.menu_name && "p-0.5 border-3 border-tomato" }`} />
                    <p className='mt-3.5 lg:text-[1.4vw] cursor-pointer'> {menu.menu_name} </p>
                </div>
            )) }
        </div>
        <hr className='my-3.5 mx-0 h-0.5 bg-[#e2e2e2] border-none' />
    </div>
  )
}

export default ExploreMenu
