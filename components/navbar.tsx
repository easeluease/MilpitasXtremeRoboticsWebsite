"use client";

import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

export function NavbarDemo() {
  const pathname = usePathname();
  const desktopNavRef = useRef<HTMLDivElement | null>(null);
  const desktopItemRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [bubble, setBubble] = useState({ x: 0, width: 0, opacity: 0 });

  const navItems = [
    { name: "Home", link: "/" },
    {
      name: "About",
      link: "/about-us",
      children: [
        { name: "Officers", link: "/about-us/officers" },
        { name: "Achievements", link: "/about-us/achievements" },
      ],
    },
    {
      name: "VEX",
      link: "/programs/vex",
      children: [
        { name: "TEAM 1669X", link: "/programs/vex/1669x" },
        { name: "TEAM 1669Y", link: "/programs/vex/1669y" },
      ],
    },
    { name: "FTC", link: "/programs/ftc" },
    {
      name: "Outreach",
      link: "/outreach",
      children: [
        { name: "MARS", link: "/outreach/mars" },
        { name: "LEGO ROBOTICS", link: "/outreach/lego-robotics" },
      ],
    },
    { name: "Sponsors", link: "/sponsors" },
    { name: "Blog", link: "/blog" },
    {
      name: "More",
      clickable: false,
      children: [
        { name: "Contact", link: "/contact" },
        { name: "Socials", link: "/socials" },
        { name: "Constitution", link: "/constitution" },
      ],
    },
  ];

  const mobileNavItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about-us" },
    { name: "About - Officers", link: "/about-us/officers" },
    { name: "About - Achievements", link: "/about-us/achievements" },
    { name: "VEX", link: "/programs/vex" },
    { name: "VEX - TEAM 1669X", link: "/programs/vex/1669x" },
    { name: "VEX - TEAM 1669Y", link: "/programs/vex/1669y" },
    { name: "FTC", link: "/programs/ftc" },
    { name: "Outreach", link: "/outreach" },
    { name: "Outreach - MARS", link: "/outreach/mars" },
    { name: "Outreach - LEGO ROBOTICS", link: "/outreach/lego-robotics" },
    { name: "Sponsors", link: "/sponsors" },
    { name: "Blog", link: "/blog" },
    { name: "More - Contact", link: "/contact" },
    { name: "More - Socials", link: "/socials" },
    { name: "More - Constitution", link: "/constitution" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  useEffect(() => {
    const resolveActiveItem = () => {
      if (!pathname || pathname === "/") {
        setActiveItem("Home");
        return;
      }

      for (const item of navItems) {
        if (item.link === "/" && pathname === "/") {
          setActiveItem(item.name);
          return;
        }

        if (item.link && item.link !== "/" && pathname.startsWith(item.link)) {
          setActiveItem(item.name);
          return;
        }

        if (item.children?.some((child) => pathname.startsWith(child.link))) {
          setActiveItem(item.name);
          return;
        }
      }

      setActiveItem("Home");
    };

    resolveActiveItem();
    window.addEventListener("popstate", resolveActiveItem);
    return () => window.removeEventListener("popstate", resolveActiveItem);
  }, [pathname]);

  useLayoutEffect(() => {
    const updateBubble = () => {
      const container = desktopNavRef.current;
      const activeElement = desktopItemRefs.current[activeItem];

      if (!container || !activeElement) {
        setBubble((prev) => ({ ...prev, opacity: 0 }));
        return;
      }

      const containerRect = container.getBoundingClientRect();
      const activeRect = activeElement.getBoundingClientRect();

      setBubble({
        x: activeRect.left - containerRect.left,
        width: activeRect.width,
        opacity: 1,
      });
    };

    updateBubble();
    window.addEventListener("resize", updateBubble);
    return () => window.removeEventListener("resize", updateBubble);
  }, [activeItem, pathname]);

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <div className="hidden flex-1 flex-row items-center justify-end text-sm font-medium lg:ml-12 lg:pl-6 lg:flex lg:space-x-2">
          <div ref={desktopNavRef} className="relative flex items-center lg:space-x-2">
            <motion.span
              className="pointer-events-none absolute top-0 z-0 h-full rounded-full bg-neutral-800"
              animate={{ x: bubble.x, width: bubble.width, opacity: bubble.opacity }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />

            {navItems.map((item, idx) => {
              if (!item.children) {
                const isExternal = (item.link || "").startsWith("http");

                if (isExternal) {
                  return (
                    <div
                      key={`desktop-link-wrap-${idx}`}
                      ref={(el) => {
                        desktopItemRefs.current[item.name] = el;
                      }}
                      className="relative z-10 rounded-full"
                    >
                      <a
                        href={item.link || "#"}
                        onClick={() => setActiveItem(item.name)}
                        className={`relative block rounded-full px-4 py-2 transition-colors ${
                          activeItem === item.name ? "text-white" : "text-neutral-300 hover:text-white"
                        }`}
                      >
                        {item.name}
                      </a>
                    </div>
                  );
                }

                return (
                  <div
                    key={`desktop-link-wrap-${idx}`}
                    ref={(el) => {
                      desktopItemRefs.current[item.name] = el;
                    }}
                    className="relative z-10 rounded-full"
                  >
                    <Link
                      href={item.link || "#"}
                      onClick={() => setActiveItem(item.name)}
                      className={`relative block rounded-full px-4 py-2 transition-colors ${
                        activeItem === item.name ? "text-white" : "text-neutral-300 hover:text-white"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </div>
                );
              }

              return (
                <div
                  key={`desktop-dropdown-${idx}`}
                  ref={(el) => {
                    desktopItemRefs.current[item.name] = el;
                  }}
                  className={`group relative z-10 rounded-full px-4 py-2 transition-colors ${
                    activeItem === item.name ? "text-white" : "text-neutral-300 hover:text-white"
                  }`}
                >
                  {item.clickable === false ? (
                    <span className="cursor-default">{item.name}</span>
                  ) : (
                    <Link href={item.link || "#"} onClick={() => setActiveItem(item.name)}>{item.name}</Link>
                  )}
                  <div className="absolute left-1/2 top-full z-50 hidden min-w-45 -translate-x-1/2 rounded-md border border-neutral-800 bg-neutral-950 p-2 group-hover:block">
                    {item.children.map((child, childIdx) => (
                      <Link
                        key={`desktop-child-${childIdx}`}
                        href={child.link}
                        onClick={() => setActiveItem(item.name)}
                        className="block rounded px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-800"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <button
            type="button"
            aria-label="Search"
            className="relative z-10 ml-2 rounded-full bg-white p-2 text-black transition hover:bg-neutral-200"
          >
            <Search size={16} />
          </button>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {mobileNavItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}