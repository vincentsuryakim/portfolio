import { FC } from "react";

import LeftSide from "./leftSide";
import RightSide from "./rightSide";

const GetToKnowMe: FC = () => (
  <div className="flex gap-x-4 h-[600px]">
    <LeftSide />    
    <RightSide />
  </div>
);

export default GetToKnowMe;
