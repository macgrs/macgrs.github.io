"use client"

import type React from "react"
import { Calendar, Briefcase, GraduationCap, FlaskConical, MapPin } from "lucide-react" // Languages, MessageSquareHeart
// import { H1, H2, H3, H4, P, A, C } from "@/components/ui/typography"
import { useTranslation } from "react-i18next"

interface CVEntry {
  id: string
  duration: string
  position: string
  title: string
  location: string
  description: string
}

interface CVSectionProps {
  title: string
  icon: React.ElementType
  entries: CVEntry[]
}

function CVSection({ title, icon: Icon, entries }: CVSectionProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Icon className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <div className="grid gap-4">
        {entries.map((entry) => (
          <div key={entry.id} className="bg-card rounded-sm border p-4 transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-sm font-medium text-primary">
                <Calendar className="h-4 w-4" />
                <span>{entry.duration}</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1 sm:mt-0">
                <MapPin className="h-3 w-3" />
                <span>{entry.location}</span>
              </div>
            </div>
            <div className="mb-2">
              <h3 className="font-bold">{entry.position}</h3>
              <p className="text-sm text-muted-foreground">{entry.title}</p>
            </div>
            {/* <p className="text-sm">{entry.description}</p> */}
            {(entry.description) === "" ?
              <></>
              :
              // <P>{entry.description}</P>
              <p className="text-sm">{entry.description}</p>
            }
          </div>
        ))}
      </div>
    </div>
  )
}

export function CurriculumVitae() {
  const { t } = useTranslation()

  return (
    <div className="w-full p-8 mx-auto"> {/* max-w-8xl */}
      <h1 className="text-2xl font-bold mb-6">{t("cv.title")}</h1>
      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
        <CVSection
          title={t("cv.education.title")}
          icon={GraduationCap}
          entries={t("cv.education.entries", { returnObjects: true }) as CVEntry[]}
        />
        <CVSection
          title={t("cv.research.title")}
          icon={FlaskConical}
          entries={t("cv.research.entries", { returnObjects: true })as CVEntry[]}
        />
        <CVSection
          title={t("cv.experience.title")}
          icon={Briefcase}
          entries={t("cv.experience.entries", { returnObjects: true }) as CVEntry[]}
        />
      </div>
      {/* <div className="flex items-center gap-2 mb-4">
        <Languages className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-bold">Languages</h2>
        <div className="">
          <p className="">French (native), English (C2), Spanish (Conversational)</p>
        </div>
      </div>
      <div className="flex items-center gap-2 mb-4">
        <MessageSquareHeart className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-bold">Interests</h2>
        <div className="">
          <p className=""> Piano, Boxing, Hiking, Litterature, Theatrical Improv’</p>
        </div>
      </div> */}
    </div>
  )
}
