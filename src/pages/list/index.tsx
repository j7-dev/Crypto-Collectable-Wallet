import { useState } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { AssetCard, EmptyPage, LoadingCard } from "@/components";
import { useMany, useInfinityScroll } from "@/hooks";
import { owner } from "@/utils";
import { TAsset, TQuerryParams } from "@/types";
import { FaInbox } from "react-icons/fa";

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
  });

  if (copyList.length === 0 && !isLoading) {
    return <EmptyPage />;
  }

  if (copyList.length > 0) {
    return (
      <>
        <SimpleGrid columns={2} spacing="2rem">
          {copyList.map((asset: TAsset) => (
            <AssetCard key={asset?.id} asset={asset} />
          ))}
          {isBottom && enabled && (
            <>
              {new Array(10).fill(0).map((_, i) => (
                <LoadingCard key={i} />
              ))}
            </>
          )}
        </SimpleGrid>
        {!enabled && (
          <div className="flex justify-center items-center px-4 pt-6 pb-12 text-center text-2xl text-gray-400">
            <FaInbox className="mr-4 text-[2rem]" />
            <span>No More Data</span>
          </div>
        )}
      </>
    );
  }

  if (isLoading) {
    return (
      <SimpleGrid columns={2} spacing="2rem">
        {new Array(20).fill(0).map((_, i) => (
          <LoadingCard key={i} />
        ))}
      </SimpleGrid>
    );
  }

  return null;
};

export default index;
