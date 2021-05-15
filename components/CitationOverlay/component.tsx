import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import React, { FC,useState } from "react";

import { Container } from "../Container";
// import { NinjaIcon } from "./libs/NinjaIcon";
import { Props } from "./props";

const textVariants = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const CitationOverlay: FC<Props> = ({ citation }: Props) => {
  // const { t } = useTranslation();

  const [quotes] = useState([
    "Entities should not be multiplied unnecessarily",
    "Leisure is the mother of philosophy",
    "Metaphysics is a dark ocean without shores or lighthouse, strewn with many a philosophic wreck",
    "Philosophy is at once the most sublime and the most trivial of human pursuits",
    "The mind is furnished with ideas by experience alone",
    "Philosophers have hitherto only interpreted the world in various ways; the point, however, is to change it",
  ]);
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  console.log(quote)
  return (
    <motion.div
      className="absolute flex items-center justify-center w-full"
      variants={{
        initial: {
          opacity: 1,
          height: "100%",
        },
        invisible: {
          opacity: 0,
          height: 0,
        },
      }}
      transition={{
        duration: 0.6,
      }}
      initial="initial"
      animate={citation ? "initial" : "invisible"}
    >
      <Container>
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="visible"
          transition={{
            delay: 3.0,
            duration: 1.2,
          }}
        >
          {/* <NinjaIcon className="w-10 mb-2 fill-current md:ml-auto dark:text-white-900 text-black-900" /> */}
        </motion.div>
        <motion.p
          className="mt-4 mb-2 text-xl font-medium leading-none md:text-2xl dark:text-white-900 text-black-900 md:my-0"
          variants={textVariants}
          initial="initial"
          animate="visible"
          transition={{
            delay: 1.0,
            duration: 1.2,
          }}
        >
        
          "{quote}"
        </motion.p>
        <motion.p
          className="text-base md:text-right dark:text-white-700 text-black-700"
          initial="initial"
          animate="visible"
          variants={textVariants}
          transition={{
            delay: 2.0,
            duration: 1.2,
          }}
        >
          {/* {t("citation.author")} */}
        </motion.p>
      </Container>
    </motion.div>
  );
};
