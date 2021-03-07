import { Box, Flex, SimpleGrid } from "@chakra-ui/react";

import BoxRecomendation from "#root/components/shared/BoxRecomendation";
import ImageInfo from "#root/components/shared/ImageInfo";

interface ICovidSection {
  graphUrl: string;
}

const CovidSection: React.FC<ICovidSection> = ({ graphUrl }) => {
  return (
    <Box as="section" width="100%">
      <Box as="h4" fontSize="1.5rem" margin="2rem 0 1rem 0" fontWeight="bold">
        Sobre centros de salud, medicamentos y recursos
      </Box>
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
      <Box>
        <Box as="h4" fontSize="1.5rem" margin="2rem 0 1rem 0" fontWeight="bold">
          Recomendaciones
        </Box>
        <SimpleGrid columns={2} spacing={10}>
          <BoxRecomendation
            icon="/assets/icons/cough01.png"
            title={"Paciente con síntomas leves"}
            description={
              "Si debe salir, utilice mascarilla simple. Trate de estar en un ambiente ventilado y lavarse frecuentemente."
            }
            url="#"
          />
          <BoxRecomendation
            icon="/assets/icons/sell-points.png"
            title={"Mitos sobre el coronavirus"}
            description={
              "Si debe salir, utilice mascarilla simple. Trate de estar en un ambiente ventilado y lavarse frecuentemente."
            }
            url="#"
          />
          <BoxRecomendation
            icon="/assets/icons/cough02.png"
            title={"Puntos COVID (Laboratorios para prueba)"}
            description={
              "Acudir a los puntos COVID instalados en los Centros de Salud, la atención es gratuita. Para la evaluación clínica te harán una prueba de descarte."
            }
            url="#"
          />
        </SimpleGrid>
      </Box>
      <Box width="100%">
        <Box as="h4" fontSize="1.5rem" margin="2rem 0 1rem 0" fontWeight="bold">
          Información general
        </Box>
        <Box width="800" height="600">
          <iframe src={graphUrl} width="90%" height="90%"></iframe>
        </Box>
      </Box>
    </Box>
  );
};

export default CovidSection;
