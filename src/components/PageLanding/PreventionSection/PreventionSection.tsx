import { Box, SimpleGrid } from "@chakra-ui/react";
import BoxRecomendation from "#root/components/shared/BoxRecomendation";

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
            icon="/assets/icons/door-exit.png"
            title={"Movilización "}
            description={
              "El horario de movilización en tu región es de 4AM  a 7PM. Establecimientos comerciales deben cerrar tres (03) horas antes del inicio del toque de queda."
            }
            url="#"
          />
          <BoxRecomendation
            icon="/assets/icons/form-check.png"
            title={"Renueva tu Pase Laboral"}
            description={
              "Renueva tu Pase Laboral cada semana para realizar los desplazamientos que requieres durante el estado de emergencia por Covid-19."
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
          <BoxRecomendation
            icon="/assets/icons/passed-sign.png"
            title={"Solicita por primera vez tu Pase Laboral"}
            description={
              "Si necesitas trabajar durante la inmovilización social obligatoria, debes solicitar un Pase Laboral , en caso tus funciones lo requieran."
            }
            url="#"
          />
        </SimpleGrid>
      </Box>
      <Box width="100%">
        <Box as="h4" fontSize="1.5rem" margin="2rem 0 1rem 0" fontWeight="bold">
          Información general
        </Box>
        <Box width="800" height="600" display="flex" justifyContent="center">
          <iframe src={graphUrl} width="90%" height="90%"></iframe>
        </Box>
      </Box>
    </section>
  );
};

export default PreventionSection;
