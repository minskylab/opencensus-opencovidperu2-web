import { Box, Image } from "@chakra-ui/react";
import Link from "next/link";
import { differenceInCalendarDays } from "date-fns";

interface IImageInfo {
  available: number;
  icon: string;
  lastUpdated: string;
  sourceText: string;
  sourceUrl: string;
  title: string;
  total?: number;
  units?: string;
}

const ImageInfo: React.FC<IImageInfo> = ({
  available,
  icon,
  lastUpdated,
  sourceText,
  sourceUrl,
  title,
  total,
  units = "",
}) => {
  return (
    <Box border="2px solid" boxShadow="3px 4px 0px 0px rgba(0, 0, 0, 1)" padding="1.25rem">
      <Image src={icon} alt={title} />
      <h6>{title}</h6>
      {total && <p>{`${available}/${total}`}</p>}

      {total ? (
        <p>{`${available} ${units} disponibles`}</p>
      ) : (
        <p>{`${available} puntos de venta`}</p>
      )}

      <p>
        {`Actualizado hace ${differenceInCalendarDays(new Date(lastUpdated), new Date())} días.`}
      </p>
      <Box as="span" ml="2" color="gray.400" fontSize="sm" float="right">
        <Link href={sourceUrl}>{sourceText}</Link>
      </Box>
    </Box>
  );
};

export default ImageInfo;
