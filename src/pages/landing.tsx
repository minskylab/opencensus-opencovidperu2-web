import { Container, Flex } from "@chakra-ui/react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { useSelector, shallowEqual } from "react-redux";

import BoxRecomendation from "#root/components/PageLanding/BoxRecomendation";
import Navbar from "#root/components/PageLanding/Navbar";
import ImageInfo from "#root/components/PageLanding/ImageInfo";
import RegionIndicator from "#root/components/PageLanding/RegionIndicator";
import IAlertInformation from "#root/interfaces/AlertInformation";
import getIframeUrl from "#root/helpers/getIframeUrl";

import { COVID } from "#root/constants/modes";
import { IReducer } from "#root/store";

interface ILanding {
  iframeUrl: string;
}

const LandingPage: React.FC<ILanding> = ({ iframeUrl }) => {
  const { modo } = useSelector(({ profile }: IReducer) => profile, shallowEqual);

  const regionValue: IAlertInformation = {
    alertLevel: "extremo",
    range: [new Date("01-03-2021"), new Date("14-03-2021")],
  };

  return (
    <Container maxW="xl" centerContent>
      <Navbar />

      <Flex direction="row" align="center" justify="space-between">
        <RegionIndicator value={regionValue} />
        <p>{format(new Date(), "EEEE dd-MM-yyyy", { locale: es })}</p>
      </Flex>

      {/* COVID Section  */}
      {modo === COVID ? (
        <div>
          <h3>Sobre centros de salud, medicamentos y recursos </h3>
          <div>
            <ImageInfo
              title="CAMAS NO UCI"
              available={72}
              lastUpdated="07/03/2021"
              sourceText="MINSA"
              sourceUrl="#"
              total={200}
            />
            <ImageInfo
              title="CAMAS UCI"
              available={12}
              lastUpdated="07/03/2021"
              sourceText="MINSA"
              sourceUrl="#"
              total={20}
            />
            <ImageInfo
              title="OXIGENO EN HOSPITALES"
              available={20}
              lastUpdated="07/03/2021"
              sourceText="MINSA"
              sourceUrl="#"
              total={100}
            />
            <ImageInfo
              title="VENTA DE OXÍGENO"
              available={25}
              lastUpdated="07/03/2021"
              sourceText="oxigenoperu.info"
              sourceUrl="#"
            />
          </div>
          <div>
            <h4>Información general</h4>
            <iframe
              src={iframeUrl}
              // allowtransparency
              // frameborder="0"
              width="800"
              height="600"
            ></iframe>
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
        </div>
      ) : (
        <div>
          <h3>Sobre tu distrito: Lince, Lima, Perú </h3>
          <div>
            <BoxRecomendation
              title={"Movilización"}
              description={"El horario de movilización en tu región es de 4 AM a 7PM."}
            />
          </div>
          <div>
            <h4>Información general</h4>
            <iframe
              src={iframeUrl}
              // allowTransparency
              // frameborder="0"
              width="800"
              height="600"
            ></iframe>
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
        </div>
      )}
    </Container>
  );
};

export const getServerSideProps = async () => {
  const iframeUrl = getIframeUrl();

  return {
    props: { iframeUrl },
  };
};

export default LandingPage;
