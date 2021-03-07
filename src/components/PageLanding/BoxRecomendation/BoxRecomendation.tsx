interface IBoxRecomendation {
  title: string;
  description: string;
}

const BoxRecomendation: React.FC<IBoxRecomendation> = ({ description, title }) => {
  return (
    <div>
      {/* {image} */}
      <h5>{title}</h5>
      <p>{description}</p>
      <button onClick={() => console.log("open modal")}> Ver más</button>
    </div>
  );
};

export default BoxRecomendation;
