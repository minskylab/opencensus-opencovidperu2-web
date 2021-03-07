import { Box } from "@chakra-ui/react";

interface ICustomBar {
  available: number;
  total: number;
}

const CustomBar: React.FC<ICustomBar> = ({ available, total }) => {
  return <Box margin="0.75rem 0" width="100%">{`${available}/${total}`}</Box>;
};

export default CustomBar;
