import { Box, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";

interface IBoxRecomendation {
  description: string;
  icon: string;
  title: string;
  url: string;
}

const BoxRecomendation: React.FC<IBoxRecomendation> = ({ description, icon, title, url }) => {
  return (
    <Flex
      backgroundColor="#fff"
      border="2px solid"
      boxShadow="3px 4px 0px 0px rgba(0, 0, 0, 1)"
      padding="1.25rem"
      align="center"
      justify="space-between"
    >
      <Image src={icon} alt={title} margin="0 1rem" />
      <Box padding="1rem 0.75rem">
        <Box as="h5" fontSize="1rem" fontWeight="bold" margin="0.25rem 0 ">
          {title}
        </Box>
        <p>{description}</p>

        <Box as="span" mt="1.25rem" color="gray.400">
          <Link href={url}>Ver más</Link>
        </Box>
      </Box>
    </Flex>
  );
};

export default BoxRecomendation;
