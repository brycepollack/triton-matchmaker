"use client";

import React, { useRef } from "react";
import { Box } from "@chakra-ui/react";
import { FloatingProgressBar, FloatingNavbar, Navbar } from "@/components/Navbar";
import { useInView } from "@/hooks";

type DynamicNavbarProps = {
  progressBar: boolean;
  progressBarPercentage: number;
  tabs: string[];
};

const DynamicNavbar = ({ progressBar, progressBarPercentage, tabs }: DynamicNavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useInView(ref);

  return (
    <>
      <Navbar ref={ref} tabs={tabs} />
      {progressBar && (
        <FloatingProgressBar isActive={!onScreen} progress={progressBarPercentage} />
      )}
    </>
  );
};

export default DynamicNavbar;