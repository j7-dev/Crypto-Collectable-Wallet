import { SimpleGrid } from "@chakra-ui/react";
import { AssetCard, TAssetCard } from "@/components";
import { useMany } from "@/hooks";
import { owner } from "@/utils";

const index = () => {
  const result = useMany({
    resource: "asset",
    args: {
      owner,
      limit: "20",
      offset: "0",
    },
  });
  const assets = result?.data?.data?.assets || [];

  return (
    <div className="">
      <SimpleGrid columns={2} spacing="2rem">
        {assets.map((asset: TAssetCard) => (
          <AssetCard key={asset?.id} asset={asset} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default index;
