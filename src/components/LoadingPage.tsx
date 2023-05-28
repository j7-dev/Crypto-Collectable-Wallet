import React from "react";
import { Spinner } from "@chakra-ui/react";
const Component = () => {
  return (
    <div className="h-[calc(100vh-4rem)] w-full flex flex-col justify-center items-center">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
      <p className="text-md  text-gray-400 mt-4">Loading</p>
    </div>
  );
};
export const LoadingPage = React.memo(Component);
