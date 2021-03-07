import { Box } from "@chakra-ui/react";
import { format } from "date-fns";
import { es } from "date-fns/locale";

interface IDatePlaceInformation {}

const DatePlaceInformation: React.FC<IDatePlaceInformation> = () => {
  return (
    <Box textAlign="right">
      <Box as="p" fontSize="1.125rem">
        Hoy, {format(new Date(), "EEEE dd 'de' MMMM 'del' yyyy", { locale: es })}
      </Box>
      <Box as="p" fontSize="1.5rem" fontWeight="bold">
        Perú, Región Lima, Provincia Lima
      </Box>
    </Box>
  );
};

export default DatePlaceInformation;
