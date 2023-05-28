import { SimpleGrid, Box } from "@chakra-ui/react";
import AssetCard from "./AssetCard";

const index = () => {
  return (
    <div className="mx-auto w-[1080px] p-8 bg-gray-200">
      <SimpleGrid columns={2} spacing="2rem">
        {new Array(10).fill(0).map((_, i) => (
          <AssetCard key={i} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default index;
