interface IHeader {}

const Header: React.FC<IHeader> = () => {
  return (
    <header>
      <div>Logo</div>
      <div>Perfil</div>
      <div>Región</div>
      <div>Provincia</div>
    </header>
  );
};

export default Header;
