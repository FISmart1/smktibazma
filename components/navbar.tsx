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
  SearchIcon,
  Logo,
  ChevronDown
} from "@/components/icons";
import { Button } from "@nextui-org/button";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { IconSchool, IconUsers, IconHeadset, IconClipboardData, IconId, IconBrandInstagram } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { subtitle } from "./primitives";
import { CoolMode } from "./magicui/cool-mode";

const icons = {
  chevron: <ChevronDown fill="currentColor" size={16} />,
  profile: <IconSchool className="text-primary" stroke={2} size={30} />,
  partners: <IconUsers className="text-primary" stroke={2} size={30} />,
  service: <IconHeadset className="text-primary" stroke={2} size={30} />,
  sismako: <IconClipboardData className="text-primary" stroke={2} size={30} />,
  saas: <IconId className="text-primary" stroke={2} size={30} />,
}
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <NextUINavbar
      maxWidth="xl"
      position="sticky"
      className={clsx(
        "backdrop-blur-md transition-colors duration-300",
        isScrolled ? "bg-white shadow-md text-black" : "bg-white/10 text-white"
      )}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className={subtitle({ class: clsx("text-bold text-xl", isScrolled ? "text-black" : "text-white") })}>
              SMK TI BAZMA
            </p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full items-center"
        justify="end"
      >
        <ul className="hidden lg:flex gap-5 items-center ml-2">
          <NavbarItem className="hidden lg:flex">
            <CoolMode>
              <Button
                isExternal
                target="_self"
                as={Link}
                className={clsx(
                  "text-sm font-semibold p-0 bg-transparent data-[hover=true]:bg-transparent text-md",
                  isScrolled ? "text-black" : "text-white"
                )}
                href='/beranda'
                variant="flat"
              >
                Beranda
              </Button>
            </CoolMode>
          </NavbarItem>
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className={clsx(
                    "p-0 bg-transparent data-[hover=true]:bg-transparent text-md font-semibold",
                    isScrolled ? "text-black" : "text-white"
                  )}
                  endContent={icons.chevron}
                  radius="sm"
                  variant="light"
                >
                  Profil
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
                Profil Asrama
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-bold font-semibold",
                  isScrolled ? "text-black" : "text-white"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className={clsx(
                    "p-0 bg-transparent data-[hover=true]:bg-transparent text-md font-semibold",
                    isScrolled ? "text-black" : "text-white"
                  )}
                  endContent={icons.chevron}
                  radius="sm"
                  variant="light"
                >
                  Portofolio
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
                href="https://best.smktibazma.com"
                startContent={icons.sismako}
              >
                Catalog Talent
              </DropdownItem>
              <DropdownItem
                key="usage_metrics"
                href="https://smartpkl.smktibazma.com"
                description="Sistem Absensi Sekolah"
                startContent={icons.saas}
              >
                Smart PKL
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavbarItem className="hidden lg:flex">
            <CoolMode>
              <Button
                isExternal
                target="_self"
                as={Link}
                className={clsx(
                  "text-sm font-semibold p-0 bg-transparent data-[hover=true]:bg-transparent text-md",
                  isScrolled ? "text-black" : "text-white"
                )}
                href='/ppdb'
                variant="flat"
              >
                PPDB
              </Button>
            </CoolMode>
          </NavbarItem>
        </ul>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link
          href="https://www.instagram.com/smktibazma"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandInstagram color={isScrolled ? "black" : "white"} />
        </Link>
        <NavbarItem className="hidden lg:flex">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarMenuToggle />
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
                    Profil
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
                Profil Asrama
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
                Catalog Talent
              </DropdownItem>
              <DropdownItem
                key="usage_metrics"
                description="Sistem Absensi Sekolah"
                startContent={icons.saas}
                href="/404"
              >
                Smart PKL
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
