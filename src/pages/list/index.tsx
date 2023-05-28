import { useState } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { AssetCard } from "@/components";
import { useMany, useInfinityScroll } from "@/hooks";
import { owner } from "@/utils";
import { TAsset, TQuerryParams } from "@/types";

const index = () => {
  const [enabled, setEnabled] = useState(true);
  const [queryParams, setQueryParams] = useState<TQuerryParams>({
    owner,
    limit: "20",
    offset: "0",
  });
  const { data, isLoading } = useMany({
    resource: "asset",
    args: queryParams,
    queryOptions: {
      enabled,
    },
  });
  const assets = data?.data?.assets || [];

  const { copyList, isBottom } = useInfinityScroll<TAsset>({
    setQueryParams,
    setEnabled,
    isLoading: isLoading,
    list: assets,
    limit: 20,
  });

  if (copyList.length === 0 && !isLoading) {
    return <>Empty</>;
  }

  if (copyList.length > 0) {
    return (
      <div className="">
        <SimpleGrid columns={2} spacing="2rem">
          {copyList.map((asset: TAsset) => (
            <AssetCard key={asset?.id} asset={asset} />
          ))}
        </SimpleGrid>
      </div>
    );
  }

  if (isLoading) {
    return <>Loading</>;
  }
};

export default index;
