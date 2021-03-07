import { List } from "@chakra-ui/react";
import IAlertInformation from "#root/interfaces/AlertInformation";
import indicators from "#root/constants/indicators";

import Indicator from "./Indicator";

interface IRegionIndicator {
  value: IAlertInformation;
}

const RegionIndicator: React.FC<IRegionIndicator> = ({ value }) => {
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
      <h5>Nivel de alerta extremo</h5>
      <p>desde el 1 hasta el 14 de marzo</p>
    </div>
  );
};

export default RegionIndicator;
