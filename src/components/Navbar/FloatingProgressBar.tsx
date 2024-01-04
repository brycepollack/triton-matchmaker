import React, { Dispatch, memo, SetStateAction, useCallback, useState } from "react";
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

type ProgressBarProps = {
    progress: number;
} & ButtonGroupProps;

const ProgressBar = ({ progress, ...props }: ProgressBarProps) => (
  <ButtonGroup isAttached {...props}>
    <Box mt={4}>
        <Progress value={progress} />
        <Text>
            Progress Bar
        </Text>
    </Box>
  </ButtonGroup>
);

const FloatingProgressBar = ({ isActive, progress }: FloatingProgressBarProps) => {

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.5, type: "spring" }}
          transformTemplate={(_, generated) => `translateX(-50%) ${generated}`}
          style={{
            position: "fixed",
            top: 8,
            left: "50%",
            zIndex: 100,
          }}
        >
          <ProgressBar
            progress={progress}
            border="1px solid"
            borderColor="whiteAlpha.300"
            borderRadius="full"
            backdropFilter="blur(16px)"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingProgressBar;