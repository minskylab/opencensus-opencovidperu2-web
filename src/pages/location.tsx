import { Button, Container, Flex, Select } from "@chakra-ui/react";
import { NextPage } from "next";
import Router from "next/router";
import React from "react";
import { useSelector, shallowEqual } from "react-redux";

import ImageModeButton from "#root/components/shared/ImageModeButton";
import Header from "#root/components/shared/Header";
import { COVID } from "#root/constants/modes";
import { IReducer } from "#root/store";
import { useRegionsAndProvincesQuery } from "#root/integration/graphql";

const IndexPage: NextPage = () => {
    const { modo } = useSelector(({ profile }: IReducer) => profile, shallowEqual);

    const [{ data, fetching, error }] = useRegionsAndProvincesQuery();

    return (
        <Container maxW="xl" centerContent>
            <Header />
            {/* <Box>Bienvenid@, escoge tu perfil</Box> */}
            <Flex direction="row" align="center" justify="space-around" width="50vw">
                {modo === COVID ? (
                    <ImageModeButton title="COVID" description="Tengo un caso confirmado cercano" onClick={() => {}} />
                ) : (
                    <ImageModeButton
                        title="PREVENCIÓN"
                        description="Voy a salir y necesito información"
                        onClick={() => {}}
                    />
                )}

                <div>
                    <h3>¿Dónde te encuentras?</h3>
                    <div style={{ width: "19rem" }}>
                        <Select placeholder="Seleccione su región">
                            {data?.regions?.map((region) => (
                                <option key={region.id} value={region.name}>
                                    {region.name}
                                </option>
                            ))}
                        </Select>

                        <Select placeholder="Seleccione su provincia">
                            {data?.provinces?.map((province) => (
                                <option key={province.id} value={province.name}>
                                    {province.name}
                                </option>
                            ))}
                        </Select>
                    </div>
                    <Button
                        colorScheme="blue"
                        onClick={() => {
                            Router.push("/landing");
                        }}
                    >
                        Navegar
                    </Button>
                </div>
            </Flex>
        </Container>
    );
};

export default IndexPage;
