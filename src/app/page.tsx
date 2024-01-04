"use client";

import { useRef } from "react";
import { Box, Heading, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
import Link from 'next/link';

import { Hero, Section } from "@/components/Layout";
import { DynamicNavbar } from "@/components/Navbar";

const tabs: string[] = ["home", "about", "questionnaire", "contact"];

const Home = () => {

  return (
    <>
      <Box position="relative">
        <Box
          position="absolute"
          insetX={0}
          top={-40}
          zIndex={-10}
          overflow="hidden"
          aria-hidden="true"
          filter="auto"
          blur="10rem"
        >
          <Box
            position="relative"
            left={["calc(50%-11rem)", "calc(50%-30rem)"]}
            aspectRatio="1155/678"
            w={["36.125rem", "72.1875rem"]}
            transform="translateX(-50%) rotate(30deg)"
            clipPath="polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            bgGradient={useColorModeValue(
              "linear(to-tr, #ff80b5, #9089fc)",
              "linear(to-tr, #4f46e5, #80caff)"
            )}
            opacity={0.3}
          />
        </Box>
        
        <Hero>
          <DynamicNavbar progressBar={false} progress={0} tabs={tabs} />
        </Hero>
        
      </Box>

      <Section id="about" variant="container">
        <Heading as="h1" size="xl" mb={8}>
          About
        </Heading>
        This is the about section
      </Section>

      <Section id="questionnaire" variant="container">
        <Heading as="h1" size="xl" mb={8}>
          Questionnaire
        </Heading>
        <Link href="/questionnaire">
          Go to Questionnaire
        </Link>
      </Section>

      <Section id="contact" variant="container">
        <Heading as="h1" size="xl" mb={8}>
          Contact
        </Heading>
        <SimpleGrid columns={[1, null, 2]} spacing={8} pos="relative">
          
          <Box>
            Get in touch
          </Box>
        </SimpleGrid>
      </Section>
    </>
  );
};

export default Home;