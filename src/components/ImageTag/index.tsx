import React from "react";
import { Image } from "@chakra-ui/react";

const Component: React.FC<{
  label: string;
  imageUrl?: string;
}> = ({ label, imageUrl = "" }) => {
  return (
    <div className="flex bg-blue-400 items-center text-white text-xs px-3 py-1 rounded-xl w-fit">
      {!!imageUrl && (
        <Image
          className="h-4 w-4 mr-2"
          src={imageUrl}
          alt={label}
          borderRadius="full"
        />
      )}
      {label}
    </div>
  );
};

export const ImageTag = React.memo(Component);
