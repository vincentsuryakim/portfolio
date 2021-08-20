import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface LocationContextValue {
  locAboutMe: number;
  setLocAboutMe: Dispatch<SetStateAction<number>>;
  locResume: number;
  setLocResume: Dispatch<SetStateAction<number>>;
  locProjects: number;
  setLocProjects: Dispatch<SetStateAction<number>>;
  locContactMe: number;
  setLocContactMe: Dispatch<SetStateAction<number>>;
  scrollVisible: boolean;
  setScrollVisible: Dispatch<SetStateAction<boolean>>;
  scrollMotionData: string;
  setScrollMotionData: Dispatch<SetStateAction<string>>;
}

const LocationContext = createContext<LocationContextValue | undefined>(
  undefined
);

export interface LocationProviderProps {}

export const LocationProvider: React.FC<LocationProviderProps> = ({
  children,
}) => {
  const [locAboutMe, setLocAboutMe] = useState<number>(0);
  const [locResume, setLocResume] = useState<number>(0);
  const [locProjects, setLocProjects] = useState<number>(0);
  const [locContactMe, setLocContactMe] = useState<number>(0);

  const [scrollVisible, setScrollVisible] = useState<boolean>(false);

  const [scrollMotionData, setScrollMotionData] = useState<string>("up");

  const value = {
    locAboutMe,
    setLocAboutMe,
    locResume,
    setLocResume,
    locProjects,
    setLocProjects,
    locContactMe,
    setLocContactMe,
    scrollVisible,
    setScrollVisible,
    scrollMotionData,
    setScrollMotionData,
  };

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocationContext = () => {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw Error(
      "Error using Location Context"
    );
  } else {
    return context;
  }
};
