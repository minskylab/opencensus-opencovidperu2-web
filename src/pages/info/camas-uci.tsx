import { Box, Container } from "@chakra-ui/react";

import Header from "#root/components/shared/Header";
interface IPageCamasUCI {}

const PageCamasUCI: React.FC<IPageCamasUCI> = () => {
  return (
    <Container maxW="xl" centerContent>
      <Header />
      <Box width="100%">PageCamasUCI</Box>
    </Container>
  );
};

export default PageCamasUCI;
