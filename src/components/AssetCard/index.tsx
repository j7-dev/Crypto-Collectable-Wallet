import { Card, CardBody, Image, Stack, Heading, Text } from "@chakra-ui/react";
import { TAsset } from "@/types";
import noimage from "@/assets/noimage.png";
import { Link } from "react-router-dom";

export const AssetCard: React.FC<{ asset: TAsset }> = ({ asset }) => {
  const imageUrl = asset?.image_url || noimage;
  const name = asset?.name || "No name";
  const description = asset?.description || "";
  const collectionName = asset?.collection?.name || "";
  const collectionImageUrl = asset?.collection?.image_url || "";
  const tokenId = asset?.token_id || "";
  const contractAddress = asset?.asset_contract?.address || "";

  return (
    <Link
      to={`/detail/${asset?.id}`}
      state={{
        tokenId,
        contractAddress,
      }}
    >
      <Card maxW="xl">
        <CardBody>
          <Image
            src={imageUrl}
            alt={name}
            className="w-full aspect-square object-contain"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{name}</Heading>
            <Text noOfLines={2}>{description}</Text>
            {!!collectionName && (
              <div className="flex bg-blue-400 items-center text-white text-xs px-3 py-1 rounded-xl w-fit">
                {!!collectionImageUrl && (
                  <Image
                    className="h-4 w-4 mr-2"
                    src={collectionImageUrl}
                    alt={name}
                    borderRadius="full"
                  />
                )}
                {collectionName}
              </div>
            )}
          </Stack>
        </CardBody>
      </Card>
    </Link>
  );
};

export default AssetCard;
