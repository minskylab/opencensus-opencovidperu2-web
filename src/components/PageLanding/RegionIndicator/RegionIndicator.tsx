import { Box, List } from "@chakra-ui/react";
import { format } from "date-fns";
import { es } from "date-fns/locale";

import IAlertInformation from "#root/interfaces/AlertInformation";
import indicators from "#root/constants/indicators";

import Indicator from "./Indicator";

interface IRegionIndicator {
  range: string[];
  value: IAlertInformation;
}

const RegionIndicator: React.FC<IRegionIndicator> = ({ range, value }) => {
  return (
    <div>
      <List display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
        {indicators.map((indicator, idx) => (
          <Indicator
            chosen={value.alertLevel}
            color={indicator.color}
            key={idx}
            text={indicator.value}
          />
        ))}
      </List>
      <Box as="h5" fontSize="1.125rem" textDecoration="underline">
        Nivel de alerta extremo
      </Box>
      <Box as="p">
        Desde el {format(new Date(range[0]), "dd 'de' MMMM", { locale: es })} hasta el{" "}
        {format(new Date(range[1]), "dd 'de' MMMM", { locale: es })}
      </Box>
    </div>
  );
};

export default RegionIndicator;
