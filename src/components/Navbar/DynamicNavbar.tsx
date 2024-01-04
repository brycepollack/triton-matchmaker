"use client";

import React, { useRef } from "react";
import { Box, Progress } from "@chakra-ui/react";
import { FloatingProgressBar, FloatingNavbar, Navbar } from "@/components/Navbar";
import { useInView } from "@/hooks";

type DynamicNavbarProps = {
  progressBar: boolean;
  progress: number;
  tabs: string[];
};

const DynamicNavbar = ({ progressBar, progress, tabs }: DynamicNavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useInView(ref);

  return (
    <>
      <Navbar ref={ref} tabs={tabs} />
      {progressBar && (
        <FloatingProgressBar isActive={!onScreen} progress={progress} />
      )}
    </>
  );
};

export default DynamicNavbar;