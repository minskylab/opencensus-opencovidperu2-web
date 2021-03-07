import { Box } from "@chakra-ui/react";
import Link from "next/link";

interface IImageInfo {
  available: number;
  lastUpdated: string;
  sourceText: string;
  sourceUrl: string;
  title: string;
  total?: number;
  units?: string;
}

const ImageInfo: React.FC<IImageInfo> = ({
  available,
  lastUpdated,
  sourceText,
  sourceUrl,
  title,
  total,
  units = "",
}) => {
  return (
    <Box border="1px solid">
      {/* {image} */}
      <h6>{title}</h6>
      {total && <p>{`${available}/${total}`}</p>}

      {total ? (
        <p>{`${available} ${units} disponibles`}</p>
      ) : (
        <p>{`${available} puntos de venta}`}</p>
      )}

      <p>Actualizado hace {lastUpdated} días</p>
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        <Link href={sourceUrl}>{sourceText}</Link>
      </Box>
    </Box>
  );
};

export default ImageInfo;
