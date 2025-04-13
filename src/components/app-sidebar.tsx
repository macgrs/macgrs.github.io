import * as React from "react"
import { useTranslation } from 'react-i18next';

import {
  AudioWaveform,
  BookOpen,
  Bot,
  // Command,
  Frame,
  GalleryVerticalEnd,
  // Map,
  // PieChart,
  // Settings2,
  // SquareTerminal,
} from "lucide-react"

import { NavFlat } from "@/components/nav-flat.tsx"
import { NavMain } from "@/components/nav-main.tsx"
// import { NavProjects } from "@/components/nav-projects"
import { NavMore } from "@/components/nav-more.tsx"
// import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher.tsx"
import {
  Sidebar,
  SidebarContent,
  // SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar.tsx"



export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { t } = useTranslation();

  const data = {
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    teams: [
      {
        name: "Antoine Gros",
        logo: GalleryVerticalEnd,
        plan: "Phd. Eng/Msc. Arch",
      },
      // {
      //   name: "Acme Corp.",
      //   logo: AudioWaveform,
      //   plan: "Startup",
      // },
      // {
      //   name: "Evil Corp.",
      //   logo: Command,
      //   plan: "Free",
      // },
    ],
    navFlat: [
      {
        name: t('sidebar.home'),
        url: "/",
        icon: Frame,
      },
    ],
    navAcademics: [
      {
        title: t('sidebar.projects'),
        url: "/academics",
        icon: Bot,
        isActive: true,
        items: [
          {
            title: t('sidebar.acadeproj.astragale'),
            url: "/academics/astragale",
            year: "21-25",
          },
          {
            title: t('sidebar.acadeproj.reperage'),
            url: "/academics/reperage",
            year: "20-23",
          },
          {
            title: t('sidebar.acadeproj.ndstruct'),
            url: "/academics/ndstruct",
            year: "20",
          },
          {
            title: t('sidebar.acadeproj.cartothem'),
            url: "/academics/cartothem",
            year: "19-20",
          },
          {
            title: t('sidebar.acadeproj.camillo'),
            url: "/academics/camillo",
            year: "18",
          },
          {
            title: t('sidebar.acadeproj.urbania'),
            url: "/academics/urbania",
            year: "17-18",
          },
        ],
      },
      {
        title: t('sidebar.courses'),
        url: "#",
        icon: BookOpen,
        items: [
          {
            title: "Introduction",
            url: "#",
          },
          {
            title: "Get Started",
            url: "#",
          },
          {
            title: "Tutorials",
            url: "#",
          },
          {
            title: "Changelog",
            url: "#",
          },
        ],
      },
    ],
    navMore: [
      {
        title: t('sidebar.projects'),
        url: "#",
        icon: Bot,
        isActive: true,
        items: [
          {
            title: "(2025+) LMP",
            url: "more/projects/lmp",
          },
          {
            title: "Explorer",
            url: "#",
          },
          {
            title: "Quantum",
            url: "#",
          },
        ],
      },
      {
        title: t('sidebar.music'),
        url: "#",
        icon: AudioWaveform,
        // items: [
        //   {
        //     title: "Introduction",
        //     url: "#",
        //   },
        //   {
        //     title: "Get Started",
        //     url: "#",
        //   },
        //   {
        //     title: "Tutorials",
        //     url: "#",
        //   },
        //   {
        //     title: "Changelog",
        //     url: "#",
        //   },
        // ],
      },
    ],
  }

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavFlat projects={data.navFlat} />
        <NavMain items={data.navAcademics} />
        <NavMore items={data.navMore} />
      </SidebarContent>
      {/* <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter> */}
      <SidebarRail />
    </Sidebar>
  )
}
