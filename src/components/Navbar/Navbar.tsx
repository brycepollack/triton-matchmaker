import React, { forwardRef } from "react";
import Image from "next/image";
import { Link } from "@chakra-ui/next-js";
import { Box, BoxProps, Container, Flex, Heading } from "@chakra-ui/react";

import { NavbarLink } from "@/components/Navbar";
import { tritonlogo } from "@/assets";

type NavbarProps = {
  tabs: string[];
} & BoxProps;

const Navbar = forwardRef<HTMLDivElement, NavbarProps>(({ tabs, ...props }, ref) => {
  return (
    <Box as="header" mt={4} py={6} ref={ref} {...props}>
      <Flex as={Container} justify="space-between">
        <Link
          href="/"
          _hover={{
            textDecor: "none",
          }}
        >
          <Flex align="center">
            <Box>
              <Image src={tritonlogo} alt="Logo" />
            </Box>
            <Heading as="h2" size="md" ml={4}>
              Triton Matchmaker
            </Heading>
          </Flex>
        </Link>
        <Flex gap={8} align="center" display={["none", null, "flex"]}>
          {tabs.map((tab) => (
            <NavbarLink href={tab} key={tab}>
              {tab}
            </NavbarLink>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;