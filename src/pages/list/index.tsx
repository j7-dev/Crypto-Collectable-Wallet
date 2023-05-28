import { SimpleGrid, Box } from "@chakra-ui/react";
import AssetCard from "./AssetCard";

const index = () => {
  return (
    <div className="">
      <SimpleGrid columns={2} spacing="2rem">
        {new Array(10).fill(0).map((_, i) => (
          <AssetCard key={i} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default index;
