import { Box, Button, Flex } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";

const IndexPage: NextPage = () => {
  return (
    <Box width="100%" p={[5, 6, 7]}>
      <Flex flexDirection={["column", "row"]}>
        <Box>
          <Button>ABC</Button>
        </Box>
        <Box>
          <Button bg={"green.400"}>DEF</Button>
        </Box>
      </Flex>

      <Box>
        <Flex></Flex>
      </Box>
    </Box>
  );
};

export default IndexPage;
