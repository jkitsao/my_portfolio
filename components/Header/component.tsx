/* eslint-disable prettier/prettier */
import { Container, Logo } from "components";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import React, {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useState,
} from "react";
import { HiMoon, HiSun } from "react-icons/hi";
import useSound from "use-sound";

import { useHeaderVisible } from "./libs/useHeaderVisible";

enum Themes {
  light = "light",
  dark = "dark",
}

enum Languages {
  en = "en",
  ru = "ru",
}

export const Header: FC = () => {
  const [playOnDark] = useSound("/sounds/dark-on.mp3");
  const [playOnLight] = useSound("/sounds/light-on.mp3");
  const visible = useHeaderVisible();

  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const [language, setLanguage] = useState<string>(
    router.locale || Languages.en
  );

  const toggleTheme = useCallback(() => {
    if (theme === Themes.light) {
      playOnLight();
    } else {
      playOnDark();
    }

    setTheme(theme === Themes.light ? Themes.dark : Themes.light);
  }, [setTheme, theme, playOnDark, playOnLight]);

  const toggleLanguage = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLSelectElement>) => {
      setLanguage(value);
      if (value == Languages.ru) {
        playOnLight();
      } else {
        playOnDark();
      }
      router.push("/", "/", { locale: value });
    },
    [playOnLight, playOnDark, router]
  );

  useEffect(() => setMounted(true), []);

  return (
    <motion.div
      className="fixed z-20 w-full bg-lightTheme dark:bg-darkTheme opacity-90"
      initial="initial"
      variants={{
        initial: {
          top: 0,
        },
        hidden: {
          top: -120,
        },
      }}
      animate={visible ? "initial" : "hidden"}
      transition={{
        duration: 0.3,
      }}
    >
      <Container className="flex items-center justify-between w-auto py-5 md:py-9 text-black-900 dark:text-white-900">
        <Link href="/">
          <a href="/">
            {/* <Logo className="w-24 fill-current md:w-28 dark:text-white-900 text-black-900" /> */}
            <h2 className="text-3xl font-semibold dark:text-lightOrange text-darkOrange">@kitsao</h2>
          </a>
        </Link>
        <div className="flex items-center">
          <button
            className="items-center justify-center w-12 h-12 rounded-md dark:bg-gray-900 bg-pink focus:outline-none focus:ring-2 ring-blue-700 d-flex"
            onClick={toggleTheme}
          >
            {mounted ? (
              theme === Themes.light ? (
                <HiMoon className="inline w-6 h-6 ml-1" />
              ) : (
                <HiSun className="inline w-6 h-6" />
              )
            ) : null}
          </button>
          {/* <div className="relative ml-2 md:ml-4">
            <select
              value={language}
              className="py-2 pl-3 text-base font-medium rounded appearance-none pr-9 focus:outline-none focus:ring-2 focus:ring-blue-700 bg-none"
              style={{ backgroundColor: "inherit" }}
              onChange={toggleLanguage}
            >
              <option value={Languages.en}>EN</option>
              <option value={Languages.ru}>RU</option>
            </select>
            <span className="absolute top-0 right-0 flex items-center justify-center w-10 h-full text-center pointer-events-none">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4"
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </div> */}
        </div>
      </Container>
    </motion.div>
  );
};
