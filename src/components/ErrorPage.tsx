import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Component = () => {
  const navigate = useNavigate();
  const handleReload = () => {
    navigate(0);
  };
  return (
    <div className="h-[calc(100vh-4rem)] w-full flex flex-col justify-center items-center">
      <IoIosCloseCircle className="text-[10rem] text-red-400" />
      <p className="text-xl  text-gray-400 mb-2">
        OOPS! Seems you get an Error
      </p>
      <p className="text-xl  text-gray-400 mb-4">
        Please email us{" "}
        <a
          className="text-blue-500"
          href="mailto:admin@example.com"
          target="_blank"
        >
          admin@example.com
        </a>
      </p>

      <Button onClick={handleReload}>Try Again</Button>
    </div>
  );
};
export const ErrorPage = React.memo(Component);
