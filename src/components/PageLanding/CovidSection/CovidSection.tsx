import BoxRecomendation from "#root/components/shared/BoxRecomendation";
import ImageInfo from "#root/components/shared/ImageInfo";

interface ICovidSection {
  graphUrl: string;
}

const CovidSection: React.FC<ICovidSection> = ({ graphUrl }) => {
  return (
    <section>
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
    </section>
  );
};

export default CovidSection;
