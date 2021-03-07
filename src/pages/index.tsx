import { Box, Container, Flex } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";

import ImageWrapper from "#root/components/PageIndex/ImageWrapper";
import Header from "#root/components/PageIndex/Header";

const IndexPage: NextPage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Header />
      <Box>Bienvenid@, escoge tu perfil</Box>
      <Flex direction="row" align="center" justify="center">
        <ImageWrapper title="COVID" description="Tengo un caso confirmado cercano" />
        <ImageWrapper title="PREVENCIÓN" description="Voy a salir y necesito información" />
      </Flex>
    </Container>
  );
};

export default IndexPage;
