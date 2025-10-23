import React from 'react'
import { assets } from '../../assets/frontend_assets/assets'

function AppDownload() {
  return (
    <div className='app-download m-auto mt-25 text-center font-semibold text-2xl sm:text-4xl ' id = 'app-download'>
      <p>For Better Experience Download <br /> Tomato App</p>
      <div className="app-download-platforms flex items-center justify-center gap-2.5 sm:gap-[2vw] mt-10 ">
        <img className='cursor-pointer w-30 sm:w-[30vw] max-w-45 hover:scale-[1.05] transition' src={assets.play_store} alt="playStore" />
        <img className='cursor-pointer w-30 sm:w-[30vw] max-w-45 hover:scale-[1.05] transition' src={assets.app_store} alt="AppleStore" />
      </div>
    </div>
  )
}

export default AppDownload
