import { Box } from "@chakra-ui/react";
import Router from "next/router";

interface IImageWrapper {
  description: string;
  title: string;
}

const ImageWrapper: React.FC<IImageWrapper> = ({ description, title }) => {
  return (
    <Box
      as="button"
      onClick={() => {
        Router.push("/landing");
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </Box>
  );
};

export default ImageWrapper;
