import {
  bounceAnimation,
  linkAnimation,
  menuItemAnimation,
  navigationAnimation,
  sidebarAnimation,
  staggeredAnimation,
} from "~/utils/animations";
import { motion, useCycle } from "framer-motion";

import Container from "~/components/container";
import Link from "next/link";
import { mainMenu } from "~/config/navigation";
import { socials } from "~/config/socials";
import { useDimensions } from "~/utils/useDimensions";
import { useRef } from "react";

const Path = (props: {
  d?: string;
  variants?: any;
  transition?: any;
  initial?: string;
  animate?: string;
}) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }: { toggle: () => void }) => (
  <button
    onClick={toggle}
    className="fixed left-[13px] top-[14px] z-30 flex h-14 w-14 items-center justify-center rounded-full border-none outline-none"
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

function MobileNavigation({ open }: { open: boolean }) {
  return (
    <motion.ul
      className={`width-72 padding-6 fixed top-24 flex h-screen flex-col gap-y-12  text-2xl text-black ${
        open ? "z-30" : "z-0"
      }`}
      variants={navigationAnimation}
    >
      {mainMenu.map((item) => (
        <motion.li
          key={item.title}
          variants={menuItemAnimation}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link className="flex w-full" href={item.path}>
            {item.title}
          </Link>
        </motion.li>
      ))}
      <div className="flex flex-row justify-between">
        {socials.map((item) => (
          <motion.li
            key={item.name}
            variants={menuItemAnimation}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link className="flex w-full" href={item.href }>
              <item.icon className=" h-16 w-16" />
            </Link>
          </motion.li>
        ))}
      </div>
    </motion.ul>
  );
}

function MobileNavbar() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const dimensions = useDimensions(containerRef);
  const height = dimensions ? dimensions.height : 0;
  return (
    <main>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        className=" flex lg:hidden"
      >
        <motion.div className="background" variants={sidebarAnimation} />
        <MobileNavigation open={isOpen} />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
      <motion.a
        variants={bounceAnimation}
        className="absolute right-[12px] top-[14px] font-coolvetica text-3xl uppercase text-white lg:hidden"
      >
        TIMMAC
      </motion.a>
    </main>
  );
}

function DesktopNavbar() {
  return (
    <motion.header
      initial="initial"
      animate="animate"
      variants={staggeredAnimation}
      className="hidden items-center justify-between p-5 lg:flex lg:flex-row "
    >
      <motion.a
        variants={bounceAnimation}
        className="z-10 hidden font-coolvetica text-3xl uppercase text-white lg:flex"
      >
        TIMMAC
      </motion.a>
      <motion.ul
        variants={bounceAnimation}
        className="mt-2 hidden w-full flex-col lg:mt-0 lg:flex lg:w-auto lg:flex-row lg:text-lg"
      >
        {mainMenu.map((item) => (
          <Link
            key={item.title}
            href={item.path}
            className=" z-10 cursor-pointer text-white lg:mx-4"
            passHref
          >
            <motion.div
              variants={linkAnimation}
              initial="initial"
              whileHover="hover"
            >
              {item.title}
            </motion.div>
          </Link>
        ))}
      </motion.ul>

      <motion.ul
        variants={bounceAnimation}
        className="mt-2 hidden w-full flex-col lg:mt-0 lg:flex lg:w-auto lg:flex-row lg:gap-x-4 lg:text-lg"
      >
        {socials.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className=" z-10 cursor-pointer text-white"
            passHref
          >
            <motion.div
              variants={linkAnimation}
              initial="initial"
              whileHover="hover"
            >
              <item.icon className=" h-8 w-8" />
            </motion.div>
          </Link>
        ))}
      </motion.ul>
    </motion.header>
  );
}

export default function Navbar() {
  return (
    <Container>
      <MobileNavbar />
      <DesktopNavbar />
    </Container>
  );
}
