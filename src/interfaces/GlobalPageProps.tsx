import { Dispatch, SetStateAction } from "react";

interface IGlobalPageProps {
  currentMode?: string;
  setCurrentMode: Dispatch<SetStateAction<string>>;
}

export default IGlobalPageProps;
