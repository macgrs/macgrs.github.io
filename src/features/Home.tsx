"use client"

// // REACT // //
import React from "react"
import { useTranslation} from 'react-i18next';
import { Link } from 'react-router-dom'
import { Github, LinkedinIcon } from "lucide-react"
import { Button } from "@/components/ui/button.tsx"


const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full p-8 mx-auto">
      {/* Hero Section */}
      <div className={`w-full`}>
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            {/* Leader photo */}
            <div className="shrink-0">
              <div className={`relative w-64 overflow-hidden rounded-sm `}>
                <img 
                  src={"https://sharedocs.huma-num.fr/wl/?id=EImY4WUngZwA6gKh34C9GU6XgUfep9Bg&download=1"}
                  alt="Photo profil"
                  className="object-cover" />
              </div>
            </div>

            {/* Leader info */}
            <div className="flex flex-col gap-4 max-w-2xl">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mt-2">Antoine Gros</h1>
                <p className={`font-medium`}>{t("homepage.titles")}</p>
              </div>
              <blockquote className={`border-l-4 pl-4 italic text-lg`}>
                "{t("homepage.catchphrase")}"
              </blockquote>
              <p className="text-muted-foreground">{t("homepage.description")}</p>

              <div className="flex flex-wrap gap-3 mt-2">
                {/* <Button className="">View Profile</Button>
                <Button variant="outline">Contact</Button> */}
                <Button variant="outline" className="hover:bg-stone-200" asChild>
                  <Link to="https://github.com/macgrs"><Github />Github</Link>
                </Button>
                <Button variant="outline" className="hover:bg-blue-500" asChild>
                  <Link to="https://www.linkedin.com/in/antoine-gros-225425147/"><LinkedinIcon />Linkedin</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
