import React from "react";
import { Card, CardBody, Image, Stack, Heading, Text } from "@chakra-ui/react";
import { TAsset } from "@/types";
import noimage from "@/assets/noimage.png";
import { Link } from "react-router-dom";
import { ImageTag } from "@/components";

const Component: React.FC<{ asset: TAsset }> = ({ asset }) => {
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
              <ImageTag label={collectionName} imageUrl={collectionImageUrl} />
            )}
          </Stack>
        </CardBody>
      </Card>
    </Link>
  );
};

export const AssetCard = React.memo(Component);
