'use client'
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
  ChevronDown
} from "@/components/icons";
import { Button } from "@nextui-org/button";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { IconSchool, IconUsers, IconHeadset, IconClipboardData, IconId, IconBrandInstagram } from "@tabler/icons-react";
import React from "react";
import { subtitle } from "./primitives";
// import { useRouter } from "next/router";
const icons = {
  chevron: <ChevronDown fill="currentColor" size={16} />,
  profile: <IconSchool className="text-primary" stroke={2} size={30} />,
  partners: <IconUsers className="text-primary" stroke={2} size={30} />,
  service: <IconHeadset className="text-primary" stroke={2} size={30} />,
  sismako: <IconClipboardData className="text-primary" stroke={2} size={30} />,
  saas: <IconId className="text-primary" stroke={2} size={30} />,
}
export const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false); // State untuk mengontrol tampilan menu

    // Menggunakan useEffect untuk menghapus menu saat refresh
    React.useEffect(() => {
      // Setiap kali komponen dimuat, sembunyikan menu
      setShowMenu(false);
    }, []);
  
    // Fungsi untuk menampilkan menu saat tombol diklik
    const handleMenuToggle = () => {
      setShowMenu((prev) => !prev); // Toggle menu
    };

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className={subtitle({ class: 'text-bold text-xl' })}>SMK TI BAZMA</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full items-center"
        justify="end"
      >
        <ul className="hidden lg:flex gap-5 items-center ml-2">
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent text-md"
                  endContent={icons.chevron}
                  radius="sm"
                  variant="light"
                >
                  <h1 className="font-semibold">

                    Tentang Kami
                  </h1>
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="ACME features"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem

                description="Informasi tentang SMK TI BAZMA"
                href="/about"
                startContent={icons.profile}
              >
                Profil Sekolah
              </DropdownItem>
              <DropdownItem
                key="usage_metrics"
                href="/partner"
                description="Informasi tentang Mitra SMK TI BAZMA"

                startContent={icons.partners}
              >
                Mitra Kami
              </DropdownItem>
              <DropdownItem
                description="Layanan, Masukan & Saran"
                href="/service"
                startContent={icons.service}
              >
                Layanan & Masukan
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent text-md"
                  endContent={icons.chevron}
                  radius="sm"
                  variant="light"
                >
                  <h1 className="font-semibold">

                    Portofolio
                  </h1>
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="ACME features"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem

                description="Sistem Manajemen Sekolah"
                href="https://sismako.smktibazma.sch.id/"
                startContent={icons.sismako}
              >
                SISMAKO
              </DropdownItem>
              <DropdownItem
                key="usage_metrics"
                href="/404"
                description="Sistem Absensi Sekolah"

                startContent={icons.saas}
              >
                SAAS
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-bold font-semibold",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
          {/* <NavbarItem className="hidden lg:flex">
            <ThemeSwitch />
          </NavbarItem> */}
          <NavbarItem className="hidden lg:flex">
            <Button
              isExternal
              as={Link}
              className="text-sm font-semibold bg-blue-600 text-white"
              href='/404'
              variant="flat"
            >
              Progres Siswa
            </Button>
          </NavbarItem>


        </ul>
        {/* <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
            <TwitterIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
            <DiscordIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-default-600 bg-default-100"
            href={siteConfig.links.sponsor}
            startContent={<HeartFilledIcon className="text-danger" />}
            variant="flat"
          >
            Sponsor
          </Button>
        </NavbarItem> */}
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link
          href="https://www.instagram.com/smktibazma"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandInstagram color="black" />
        </Link>
        {/* <NavbarItem className="hidden lg:flex">
            <ThemeSwitch />
          </NavbarItem> */}
        <NavbarMenuToggle onClick={handleMenuToggle}/>
      </NavbarContent>

      <NavbarMenu id="menubar">
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent text-md"
                  endContent={icons.chevron}
                  radius="sm"
                  variant="light"
                >
                  <h1 className="font-semibold">

                    Tentang Kami
                  </h1>
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="ACME features"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem

                description="Informasi tentang SMK TI BAZMA"
                href="/about"
                startContent={icons.profile}
              >
                Profil Sekolah
              </DropdownItem>
              <DropdownItem
                key="usage_metrics"
                href="/partner"
                description="Informasi tentang Mitra SMK TI BAZMA"

                startContent={icons.partners}
              >
                Mitra Kami
              </DropdownItem>
              <DropdownItem
                description="Layanan, Masukan & Saran"
                href="/service"
                startContent={icons.service}
              >
                Layanan & Masukan
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent text-md"
                  endContent={icons.chevron}
                  radius="sm"
                  variant="light"
                >
                  <h1 className="font-semibold">

                    Portofolio
                  </h1>
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="ACME features"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem

                description="Sistem Manajemen Sekolah"
                href="https://sismako.smktibazma.sch.id/"
                startContent={icons.sismako}
              >
                SISMAKO
              </DropdownItem>
              <DropdownItem
                key="usage_metrics"
                description="Sistem Absensi Sekolah"
                startContent={icons.saas}
                href="/404"
                // onClick={handleNotFound}
                >
                SAAS
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
