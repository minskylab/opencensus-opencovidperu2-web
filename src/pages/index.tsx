import { Box, Container, Flex } from "@chakra-ui/react";
import { NextPage } from "next";
import Router from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

import ImageModeButton from "#root/components/shared/ImageModeButton";
import Header from "#root/components/shared/Header";
import { COVID, PREVENTION } from "#root/constants/modes";
import { setModo } from "#root/store/ducks/profile";

const IndexPage: NextPage = () => {
  const dispatch = useDispatch();

  return (
    <Container maxW="xl" centerContent>
      <Header />
      <Box>Bienvenid@, escoge tu perfil</Box>
      <Flex direction="row" align="center" justify="space-around" width="50vw">
        <ImageModeButton
          title="COVID"
          description="Tengo un caso confirmado cercano"
          onClick={() => {
            dispatch(setModo(COVID));
            Router.push("/location");
          }}
        />
        <ImageModeButton
          title="PREVENCIÓN"
          description="Voy a salir y necesito información"
          onClick={() => {
            dispatch(setModo(PREVENTION));
            Router.push("/location");
          }}
        />
      </Flex>
    </Container>
  );
};

export default IndexPage;
