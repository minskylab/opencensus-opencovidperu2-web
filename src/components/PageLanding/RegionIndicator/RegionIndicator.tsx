import IAlertInformation from "#root/interfaces/AlertInformation";

interface IRegionIndicator {
  value: IAlertInformation;
}

const RegionIndicator: React.FC<IRegionIndicator> = ({ value }) => {
  const indicators = ["moderado", "alto", "muy alto", "extremo"];
  return (
    <div>
      <ul>
        {indicators.map((indicator, idx) => {
          return (
            <li key={idx} style={value.alertLevel === indicator ? { fontWeight: "bold" } : {}}>
              {indicator}
            </li>
          );
        })}
      </ul>
      <h5>Nivel de alerta extremo</h5>
      <p>desde el 1 hasta el 14 de marzo</p>
    </div>
  );
};

export default RegionIndicator;
