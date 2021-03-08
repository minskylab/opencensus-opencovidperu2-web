import { Box, Image } from "@chakra-ui/react";

import PersonHealthy from "#root/assets/person-healthy.png";
import PersonDoctor from "#root/assets/person-nurse.png";

interface IImageModeButton {
  description: string;
  title: string;
  onClick: () => any;
}

const ImageModeButton: React.FC<IImageModeButton> = ({ description, onClick, title }) => {
  return (
    <Box
      as="button"
      onClick={onClick}
      _hover={{ bg: "#ebedf0" }}
      backgroundColor="gray.100"
      marginTop="2rem"
      padding="2rem 0.75rem"
      border="2px solid rgba(0, 0, 0, 1)"
      boxShadow="3px 4px 0px 0px rgba(0, 0, 0, 1)"
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

export default ImageModeButton;
