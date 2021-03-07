import BoxRecomendation from "#root/components/shared/BoxRecomendation";
// import ImageInfo from "#root/components/shared/ImageInfo";

interface IPreventionSection {
  graphUrl: string;
}

const PreventionSection: React.FC<IPreventionSection> = ({ graphUrl }) => {
  return (
    <section>
      <h3>Sobre tu distrito: Lince, Lima, Perú </h3>
      <div>
        <BoxRecomendation
          title={"Movilización"}
          description={"El horario de movilización en tu región es de 4 AM a 7PM."}
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

export default PreventionSection;
