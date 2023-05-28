import React from "react";
import { FaInbox } from "react-icons/fa";

const Component = () => {
  return (
    <div className="h-[calc(100vh-4rem)] w-full flex flex-col justify-center items-center">
      <FaInbox className="text-[10rem] text-gray-400" />
      <p className="text-xl  text-gray-400">Nothing Found</p>
    </div>
  );
};
export const EmptyPage = React.memo(Component);
