import React, {
  Dispatch,
  memo,
  SetStateAction,
  useCallback,
  useState,
} from "react";
import {
  Box,
  ButtonGroup,
  ButtonGroupProps,
  Button as CButton,
  Text,
  useColorModeValue,
  Progress,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

type FloatingProgressBarProps = {
  isActive: boolean;
  progress: number;
};

const FloatingProgressBar = ({
  isActive,
  progress,
}: FloatingProgressBarProps) => {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.5, type: "tween" }}
          transformTemplate={(_, generated) => `translateX(-50%) ${generated}`}
          style={{
            position: "fixed",
            top: 0,
            left: "50%",
            zIndex: 100,
            width: "100%"
          }}
        >
        <Progress colorScheme='teal' height='16px' value={progress} position="fixed" top={0} zIndex={999} width={"100%"}/>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


export default FloatingProgressBar;
