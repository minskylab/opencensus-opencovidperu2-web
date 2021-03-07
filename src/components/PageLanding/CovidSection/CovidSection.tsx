import { Box, Flex } from "@chakra-ui/react";

import BoxRecomendation from "#root/components/shared/BoxRecomendation";
import ImageInfo from "#root/components/shared/ImageInfo";

interface ICovidSection {
  graphUrl: string;
}

const CovidSection: React.FC<ICovidSection> = ({ graphUrl }) => {
  return (
    <Box as="section" width="100%">
      <h3>Sobre centros de salud, medicamentos y recursos </h3>
      <Flex align="center" justify="space-between" marginTop="2rem">
        <ImageInfo
          icon="/assets/icons/hospital-bed.png"
          title="CAMAS NO UCI"
          available={72}
          lastUpdated="07/03/2021"
          sourceText="MINSA"
          sourceUrl="#"
          total={200}
        />
        <ImageInfo
          icon="/assets/icons/hospital-bed.png"
          title="CAMAS UCI"
          available={12}
          lastUpdated="07/03/2021"
          sourceText="MINSA"
          sourceUrl="#"
          total={20}
        />
        <ImageInfo
          icon="/assets/icons/fire-extinguisher.png"
          title="OXIGENO EN HOSPITALES"
          available={20}
          lastUpdated="07/03/2021"
          sourceText="MINSA"
          sourceUrl="#"
          total={100}
        />
        <ImageInfo
          icon="/assets/icons/sell-points.png"
          title="VENTA DE OXÍGENO"
          available={25}
          lastUpdated="07/03/2021"
          sourceText="oxigenoperu.info"
          sourceUrl="#"
        />
      </Flex>
      <div>
        <h4>Información general</h4>
        <iframe src={graphUrl} width="800" height="600"></iframe>
      </div>
      <div>
        <h4>Recomendaciones</h4>
        <BoxRecomendation
          title={"Paciente con síntomas leves"}
          description={
            "Si debe salir, utilice mascarilla simple. Trate de estar en un ambiente ventilado y lavarse frecuentemente."
          }
        />
      </div>
    </Box>
  );
};

export default CovidSection;
