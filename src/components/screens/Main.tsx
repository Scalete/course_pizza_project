import { FC } from "react";
import { Categories, Sorting } from "../shared";

const Main: FC = () => {
  return (
    <div className="flex items-center justify-between">
      <Categories />
      <Sorting />
    </div>
  );
};

export default Main;
