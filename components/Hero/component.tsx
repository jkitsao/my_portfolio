/* eslint-disable prettier/prettier */
import { Container, MediaIcon } from "components";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import React, { FC } from "react";
import { FaGithub, FaTelegram, FaTwitter } from "react-icons/fa";

import { HandWave } from "./libs/HandWave";

export const Hero: FC = () => {
  const { t } = useTranslation("common");

  return (
    <Container className="pt-24">
      <motion.img
        src="/images/me.gif"
        alt="me"
        style={{
          objectFit: "cover",
        }}
        className="border border-gray-700 rounded-full w-28 h-28 md:w-32 md:h-32 mt-36"
        variants={{
          hidden: {
            scale: 0,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
          },
        }}
        transition={{
          damping: 5,
          mass: 1,
          delay: 0.2,
        }}
        initial="hidden"
        animate="visible"
      />
      <div className="flex items-center">
        <h1 className="mt-6 mb-6 text-4xl font-bold md:mt-8 md:mb-8 md:text-5xl text-blue-100 dark:text-darkOrange">
          {t("hero.title")}
        </h1>
        <HandWave className="text-4xl md:text-5xl" />
      </div>
      <p className="text-xl font-bold py-2 tracking-normal md:text-3xl text-gray-800 dark:text-lightOrange">
        {t("hero.p0")}
        <br />
        {t("hero.p1")}{" "}
        <motion.a
          href="https://app.mymovies.africa/home"
          target="_blank"
          className="relative text-darkOrange dark:text-gray-200"
          whileHover="visible"
          initial="hidden"
        >
          mymovies.africa
          <motion.span
            className="absolute bottom-0 left-0 w-full bg-blue-700 h-0.5"
            variants={{
              hidden: {
                opacity: 0,
                y: -5,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{
              damping: 2,
              mass: 3,
            }}
          />
        </motion.a>
        <br />
        {t("hero.p2")}{" "}
        <motion.a
          href="https://mymovies.africa"
          target="_blank"
          className="relative text-blue-700"
          whileHover="visible"
          initial="hidden"
        >
          {/* @Citadel */}
          <motion.span
            className="absolute bottom-0 left-0 w-full bg-blue-700 h-0.5"
            variants={{
              hidden: {
                opacity: 0,
                y: -5,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{
              damping: 2,
              mass: 3,
            }}
          />
        </motion.a>
      </p>
      <div className="flex mt-8">
        <MediaIcon
          icon={<FaGithub className="w-6 h-6 md:w-7 md:h-7" />}
          href="https://github.com/jkitsao"
          className="mr-4"
        />
        {/* <MediaIcon
          icon={<FaTelegram className="w-6 h-6 md:w-7 md:h-7" />}
          href="https://t.me/Jacksonkitsao5"
          className="mr-4"
        /> */}
        <MediaIcon
          icon={<FaTwitter className="w-6 h-6 md:w-7 md:h-7" />}
          href="https://twitter.com/Jacksonkitsao5"
        />
      </div>
      <div className="mt-10">
        <p className="mb-8 text-base md:text-xl dark:text-lightOrange text-blue-800">
          {t("hero.des0")}
        </p>
        <p className="mb-8 text-base md:text-xl dark:text-lightOrange text-blue-800">
          {t("hero.des1")}
        </p>
        <p className="mb-8 text-base md:text-xl dark:text-lightOrange text-blue-800">
          {t("hero.des2")}
        </p>
        <p className="mb-8 text-base md:text-xl dark:text-lightOrange text-blue-800">
          {t("hero.des3")}
        </p>
      </div>
    </Container>
  );
};
