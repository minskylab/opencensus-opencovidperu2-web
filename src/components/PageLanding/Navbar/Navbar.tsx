import { Box, Image, Select, Spacer } from "@chakra-ui/react";
import Router from "next/router";
import { CSSProperties } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import Logo from "#root/assets/opencovidperu01-black.png";
import { COVID, PREVENTION } from "#root/constants/modes";
import { IReducer } from "#root/store";
import { setModo, setRegion, setProvincia } from "#root/store/ducks/profile";
import { useRegionsAndProvincesQuery } from "#root/integration/graphql";

interface INavbar {}

const headerStyles: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "80vw",
    margin: "4rem 0",
};

const Navbar: React.FC<INavbar> = () => {
    const dispatch = useDispatch();
    const { modo } = useSelector(({ profile }: IReducer) => profile, shallowEqual);

    const [{ data, fetching, error }] = useRegionsAndProvincesQuery();

    const modos = [
        { name: "COVID", value: COVID },
        { name: "PREVENCIÓN", value: PREVENTION },
    ];

    // const regiones = [
    //   { name: "region1", value: "region1" },
    //   { name: "region2", value: "region2" },
    // ];

    // const provincias = [
    //   { name: "provincia1", value: "provincia1" },
    //   { name: "provincia2", value: "provincia2" },
    // ];

    return (
        <header style={headerStyles}>
            <Image src={Logo} alt="Logo" cursor="pointer" onClick={() => Router.push("/")} />
            <Spacer />

            <Box display="flex" alignItems="center" justifyContent="center">
                <Select
                    placeholder="Seleccione su perfil"
                    onChange={(evt) => {
                        dispatch(setModo(evt.target.value));
                    }}
                    value={modo}
                >
                    {modos.map((modo, idx) => (
                        <option key={idx} value={modo.value}>
                            {modo.name}
                        </option>
                    ))}
                </Select>

                <Select
                    placeholder="Seleccione su región"
                    disabled={fetching}
                    onChange={(evt) => {
                        dispatch(setRegion(evt.target.value));
                    }}
                >
                    {data?.regions?.map((region, idx) => (
                        <option key={idx} value={region.name}>
                            {region.name}
                        </option>
                    ))}
                </Select>
                <Select
                    placeholder="Seleccione su provincia"
                    disabled={fetching}
                    onChange={(evt) => {
                        dispatch(setProvincia(evt.target.value));
                    }}
                >
                    {data?.provinces?.map((provincia, idx) => (
                        <option key={idx} value={provincia.name}>
                            {provincia.name}
                        </option>
                    ))}
                </Select>
            </Box>
        </header>
    );
};

export default Navbar;
