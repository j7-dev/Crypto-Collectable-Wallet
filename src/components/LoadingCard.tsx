import React from "react";

const Component: React.FC<{
  aspect?: string;
}> = ({ aspect = "aspect-[3/4]" }) => {
  return (
    <div
      className={`animate-pulse bg-slate-700 rounded-xl w-full ${aspect}`}
    ></div>
  );
};

export const LoadingCard = React.memo(Component);
