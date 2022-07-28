/* eslint-disable prettier/prettier */
import { Section } from "components";
import { useTranslation } from "next-i18next";
import React, { FC, useMemo } from "react";

import { ProjectCard } from "./libs/ProjectCard";

export const Projects: FC = () => {
  const { t } = useTranslation("common");

  const projects = useMemo(
    () => [
      {
        title: "Birdbox",
        subtitle: t("projects.birdbox.subtitle"),
        description: t("projects.birdbox.description"),
        technologies: ["Software development", "Game development", "Artificial inteligence"],
        externalLink: "https://birdbox-ten.vercel.app/",
        githubLink: "",
        imageLink: `/images/birdbox.png`,
      },
      // {
      //   title: "Tipjarr",
      //   subtitle: t("projects.tipjarr.subtitle"),
      //   description: t("projects.tipjarr.description"),
      //   technologies: ["React", "Nextjs", "Markdown"],
      //   externalLink: "https://tipjarr.net",
      //   githubLink: "https://github.com/jkitsao",
      //   imageLink: `/images/tipjarr.png`,
      // },
      // {
      //   title: "zemo",
      //   subtitle: t("projects.zemo.subtitle"),
      //   description: t("projects.zemo.description"),
      //   technologies: ["React", "WebRTC", "Nodejs", "socket.io"],
      //   externalLink: "https://devcrib.herokuapp.com/",
      //   githubLink: "https://github.com/jkitsao",
      //   imageLink: `/images/zemo.png`,
      // },
      // {
      //   title: "bloglint",
      //   subtitle: t("projects.bloglint.subtitle"),
      //   description: t("projects.bloglint.description"),
      //   technologies: ["Nextjs", "Mongodb", "Nodejs", "express"],
      //   externalLink: "https://bloglint.com/",
      //   githubLink: "https://github.com/jkitsao",
      //   imageLink: `/images/bloglint.png`,
      // },
      // {
      //   title: "Linkr",
      //   subtitle: t("projects.linkr.subtitle"),
      //   description: t("projects.linkr.description"),
      //   technologies: ["Nextjs", "firebase", "cloudinary"],
      //   externalLink: "https://linkr.vercel.app/",
      //   githubLink: "https://github.com/jkitsao",
      //   imageLink: `/images/linkr.png`,
      // },
      // {
      //   title: "shopfast",
      //   subtitle: t("projects.shopfast.subtitle"),
      //   description: t("projects.shopfast.description"),
      //   technologies: ["React", "serverless", "nextjs"],
      //   externalLink: "https://shopfast.vercel.app",
      //   githubLink: "https://github.com/jkitsao",
      //   imageLink: `/images/shopfast.png`,
      // },
    ],
    [t]
  );

  return (
    <Section
      className="md:mt-20 mt-14 dark:text-darkOrange text-darkOrange"
      title={t("projects.title")}
      description={t("projects.description")}
    >
      <div className="px-4 mx-auto mt-10 md:mt-20 md:px-8 max-w-screen-lg">
        {projects.map((project, i) => (
          <ProjectCard key={i} rightShift={i % 2 === 0} {...project} />
        ))}
      </div>
    </Section>
  );
};
