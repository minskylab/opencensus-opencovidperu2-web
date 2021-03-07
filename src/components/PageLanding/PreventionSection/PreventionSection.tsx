import { Box, SimpleGrid } from "@chakra-ui/react";
import BoxRecomendation from "#root/components/shared/BoxRecomendation";
// import ImageInfo from "#root/components/shared/ImageInfo";

interface IPreventionSection {
  graphUrl: string;
}

const PreventionSection: React.FC<IPreventionSection> = ({ graphUrl }) => {
  return (
    <section>
      <h3>Sobre tu distrito: Lince, Lima, Perú </h3>
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
            title={"Puntos COVID"}
            description={
              "Acudir a los puntos COVID instalados en los Centros de Salud, la atención es gratuita. Para la evaluación clínica te harán una prueba de descarte"
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
    </section>
  );
};

export default PreventionSection;
