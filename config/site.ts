export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Donasi",
      href: "/donation",
    },
    {
      label: "Team Development",
      href: "https://sismako.smktibazma.sch.id/smktibazma.sch.id",
    },
  ],
  navMenuItems: [
    {
      label: "Donasi",
      href: "/donation",
    },
    {
      label: "Progres Siswa",
      href: "https://sismako.smktibazma.sch.id/smktibazma.sch.id",
    },
    {
      label: "PPDB",
      href: "/404",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
