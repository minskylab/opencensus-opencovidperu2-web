import { Image, Spacer } from "@chakra-ui/react";
import { CSSProperties } from "react";
import Router from "next/router";

import Logo from "#root/assets/opencovidperu01.png";

interface IHeader {}

const headerStyles: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "80vw",
  margin: "4rem 0",
};

const Header: React.FC<IHeader> = () => {
  return (
    <header style={headerStyles}>
      <Image src={Logo} alt="Logo" cursor="pointer" onClick={() => Router.push("/")} />
      <Spacer />
    </header>
  );
};

export default Header;
