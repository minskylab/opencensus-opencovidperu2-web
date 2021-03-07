import { Image, Spacer } from "@chakra-ui/react";
import { CSSProperties } from "react";
import Router from "next/router";

import Logo from "#root/assets/opencovidperu01-black.png";

interface INavbar {}

const headerStyles: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "80vw",
  margin: "4rem 0",
};

const Navbar: React.FC<INavbar> = () => {
  return (
    <header style={headerStyles}>
      <Image src={Logo} alt="Logo" onClick={() => Router.push("/")} />
      <Spacer />
      <div>Logo</div>
      <div>Perfil</div>
      <div>Región</div>
      <div>Provincia</div>
    </header>
  );
};

export default Navbar;
