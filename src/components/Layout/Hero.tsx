import { Image } from "@chakra-ui/next-js";
import {
  Button,
  ButtonGroup,
  Container,
  ContainerProps,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { tritonlogo } from "@/assets";

const Hero = (props: ContainerProps) => {
  return (
    <>
      {props.children}
      <Container py={20} {...props}>
        <Heading size="4xl" lineHeight="1.15em">
          Welcome to the {""} <br />
          <Text as="span" variant="highlight" >
            Triton Matchmaker
          </Text>{" "}
        </Heading>
      </Container>
    </>
  );
};

export default Hero;