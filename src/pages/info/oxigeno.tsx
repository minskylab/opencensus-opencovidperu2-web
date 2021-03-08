import { Box, Container } from "@chakra-ui/react";

import Header from "#root/components/shared/Header";
interface IPageOxygen {}

const PageOxygen: React.FC<IPageOxygen> = () => {
  return (
    <Container maxW="xl" centerContent>
      <Header />
      <Box width="100%">PageOxygen</Box>
    </Container>
  );
};

export default PageOxygen;
