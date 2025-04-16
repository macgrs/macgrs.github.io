"use client"

// // REACT // //
import React from "react"
import { useTranslation} from 'react-i18next';
// import { Link } from 'react-router-dom'
import { ConstructionIcon } from "lucide-react"


const ConstructionPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full p-8 mx-auto">
      {/* Hero Section */}
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center">
            {/* Leader photo */}
            <div className="shrink-0">
              <ConstructionIcon />
              {/* <div className={`relative w-64 overflow-hidden rounded-sm `}>
                <img 
                  src={"https://sharedocs.huma-num.fr/wl/?id=EImY4WUngZwA6gKh34C9GU6XgUfep9Bg&download=1"}
                  alt="Photo profil"
                  className="object-cover" />
              </div> */}
            </div>

            {/* Leader info */}
            <div className="flex flex-col gap-4 max-w-2xl">
              <div>
                <p className={`font-medium`}>{t("construction.disclaimer")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ConstructionPage
