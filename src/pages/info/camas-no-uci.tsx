import { Box, Container } from "@chakra-ui/react";

import Header from "#root/components/shared/Header";
interface IPageCamasNoUCI {}

const PageCamasNoUCI: React.FC<IPageCamasNoUCI> = () => {
  return (
    <Container maxW="xl" centerContent>
      <Header />
      <Box width="100%">PageCamasNoUCI</Box>
    </Container>
  );
};

export default PageCamasNoUCI;
