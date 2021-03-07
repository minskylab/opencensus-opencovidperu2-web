import { Box, Image } from "@chakra-ui/react";
import Router from "next/router";

import PersonHealthy from "#root/assets/person-healthy.png";
import PersonDoctor from "#root/assets/person-nurse.png";

interface IImageWrapper {
  description: string;
  title: string;
}

const ImageWrapper: React.FC<IImageWrapper> = ({ description, title }) => {
  return (
    <Box
      as="button"
      onClick={() => Router.push("/landing")}
      _hover={{ bg: "#ebedf0" }}
      backgroundColor="gray.100"
      marginTop="2rem"
      padding="2rem 0.75rem"
      width="19rem"
    >
      <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
        {title}
      </Box>

      <p>{description}</p>
      {title === "PREVENCIÓN" && (
        <Image alt="Persona sana" src={PersonHealthy} margin="1rem auto" />
      )}
      {title === "COVID" && <Image alt="Doctor" src={PersonDoctor} margin="1rem auto" />}
    </Box>
  );
};

export default ImageWrapper;
