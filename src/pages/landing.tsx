import { Container, Flex } from "@chakra-ui/react";
import { useSelector, shallowEqual } from "react-redux";

import Navbar from "#root/components/PageLanding/Navbar";
import RegionIndicator from "#root/components/PageLanding/RegionIndicator";
import IAlertInformation from "#root/interfaces/AlertInformation";
import getIframeUrl from "#root/helpers/getIframeUrl";

import { COVID } from "#root/constants/modes";
import { IReducer } from "#root/store";

import CovidSection from "#root/components/PageLanding/CovidSection";
import PreventionSection from "#root/components/PageLanding/PreventionSection";
import DatePlaceInformation from "#root/components/PageLanding/DatePlaceInformation";

interface ILanding {
  iframeUrl: string;
}

const LandingPage: React.FC<ILanding> = ({ iframeUrl }) => {
  const { modo } = useSelector(({ profile }: IReducer) => profile, shallowEqual);

  const regionValue: IAlertInformation = {
    alertLevel: "extremo",
  };

  const datesRange = ["2021/03/01", "2021/03/14"];

  return (
    <Container maxW="container.xl" centerContent>
      <Navbar />

      <Flex direction="row" align="center" justify="space-between" width="100%">
        <RegionIndicator value={regionValue} range={datesRange} />
        <DatePlaceInformation />
      </Flex>

      {modo === COVID ? (
        <CovidSection graphUrl={iframeUrl} />
      ) : (
        <PreventionSection graphUrl={iframeUrl} />
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
