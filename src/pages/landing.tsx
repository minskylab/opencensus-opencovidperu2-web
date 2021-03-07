import { format } from "date-fns";
import { es } from "date-fns/locale";
import { useState } from "react";

import BoxRecomendation from "#root/components/PageLanding/BoxRecomendation";
import Header from "#root/components/PageLanding/Header";
import ImageInfo from "#root/components/PageLanding/ImageInfo";
import RegionIndicator from "#root/components/PageLanding/RegionIndicator";
import IAlertInformation from "#root/interfaces/AlertInformation";
import getIframeUrl from "#root/helpers/getIframeUrl";

interface ILanding {
  iframeUrl: string;
}

const Landing: React.FC<ILanding> = ({ iframeUrl }) => {
  const [currentMode] = useState("");
  const regionValue: IAlertInformation = {
    alertLevel: "extremo",
    range: [new Date("01-03-2021"), new Date("14-03-2021")],
  };

  return (
    <div>
      <Header />

      <div>
        <RegionIndicator value={regionValue} />
        <p>{format(new Date(), "EEEE dd-MM-yyyy", { locale: es })}</p>
      </div>

      {/* COVID Section  */}
      {currentMode === "COVID" && (
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
              allowTransparency
              src={iframeUrl}
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
      {currentMode !== "PREVENCIÓN" && (
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
              allowTransparency
              src={iframeUrl}
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
    </div>
  );
};

export const getServerSideProps = async () => {
  const iframeUrl = getIframeUrl();

  return {
    props: { iframeUrl },
  };
};

export default Landing;
