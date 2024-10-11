import React from 'react'
import { FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiTailwindcss,SiJavascript, SiBootstrap } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaHtml5 />
            </span>
            <span className="bannerIcon">
              <FaCss3 />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
            <span className="bannerIcon">
              <SiBootstrap />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media