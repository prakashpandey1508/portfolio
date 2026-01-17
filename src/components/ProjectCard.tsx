"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { IProject } from "@/data/types";

export default function ProjectCard({
  title,
  description,
  thumbnail,
  githubLink,
  demoLink,
}: IProject) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    mainControls.start("visible");
  }, [isInView]);
  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <CardContainer className="inter-var">
        <CardBody className="bg-dark-color-2 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-dark-color-2  border-white/[0.2] w-auto sm:w-[26rem] h-[31rem] rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-white dark:text-white"
          >
            {title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-300 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {description}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={thumbnail}
              height="800"
              width="800"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-8">
            <CardItem
              translateZ={20}
              as={Link}
              href={demoLink}
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Try now →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              onClick={() => {
                window.open(githubLink);
              }}
              className="px-4 py-2 rounded-xl bg-white dark:bg-white text-black text-xs font-bold"
            >
              GitHub
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </motion.div>
  );
}
