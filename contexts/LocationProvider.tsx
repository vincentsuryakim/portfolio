import {
  createContext,
  useContext,
  useState,
  useRef,
  Dispatch,
  SetStateAction,
  MutableRefObject,
} from "react";

interface LocationContextValue {
  aboutMeRef: MutableRefObject<HTMLDivElement | null>;
  resumeRef: MutableRefObject<HTMLDivElement | null>;
  projectsRef: MutableRefObject<HTMLDivElement | null>;
  contactMeRef: MutableRefObject<HTMLDivElement | null>;
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
  const aboutMeRef = useRef<HTMLDivElement | null>(null);
  const resumeRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactMeRef = useRef<HTMLDivElement | null>(null);

  const [scrollVisible, setScrollVisible] = useState<boolean>(false);

  const [scrollMotionData, setScrollMotionData] = useState<string>("up");

  const value = {
    aboutMeRef,
    resumeRef,
    projectsRef,
    contactMeRef,
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
    throw Error("Error using Location Context");
  } else {
    return context;
  }
};
