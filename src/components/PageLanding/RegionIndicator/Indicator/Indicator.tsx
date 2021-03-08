import { ListItem } from "@chakra-ui/react";

interface IIndicator {
  text: string;
  chosen: string;
  color: string;
}

const Indicator: React.FC<IIndicator> = ({ color, chosen, text }) => {
  if (text === chosen)
    return (
      <ListItem margin="0 2rem 0 0" backgroundColor={color} color="#fff">
        {text}
      </ListItem>
    );

  return <ListItem margin="0 2rem 0 0">{text}</ListItem>;
};

export default Indicator;
