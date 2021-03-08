import { Box, Image } from "@chakra-ui/react";
import Link from "next/link";
import { differenceInCalendarDays } from "date-fns";
import CustomBar from "./CustomBar";

interface IImageInfo {
  available: number;
  icon: string;
  lastUpdated: string;
  seeMoreUrl?: string;
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
  seeMoreUrl,
  sourceText,
  sourceUrl,
  title,
  total,
  units = "",
}) => {
  return (
    <Box
      backgroundColor="#fff"
      border="2px solid"
      boxShadow="3px 4px 0px 0px rgba(0, 0, 0, 1)"
      padding="1.25rem"
      minHeight="15rem"
    >
      <Image src={icon} alt={title} />

      {total && <CustomBar available={available} total={total} />}

      <Box as="h6" fontWeight="bold">
        {title.toUpperCase()}
      </Box>

      {total ? (
        <p>{`${available} ${units} disponibles`}</p>
      ) : (
        <p>{`${available} puntos de venta`}</p>
      )}

      <Box as="p" color="gray.400">
        {`Actualizado hace ${differenceInCalendarDays(new Date(lastUpdated), new Date())} días.`}
      </Box>
      <Box as="span" color="gray.400">
        Fuente:{" "}
        <Box as="a" textDecoration="underline">
          <Link href={sourceUrl}>{sourceText}</Link>
        </Box>
      </Box>
      {seeMoreUrl && (
        <Box as="p" mt="1.5rem" color="gray.400" fontSize="sm" float="right">
          <Box as="a" textDecoration="underline" target="_blank" rel="noopener noreferrer">
            <Link href={seeMoreUrl}>Ver más</Link>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ImageInfo;
