import { Card, CardBody, Image, Stack, Heading, Text } from "@chakra-ui/react";
import { TAssetCard } from "./types";
import noimage from "@/assets/noimage.png";

export * from "./types";
export const AssetCard: React.FC<{ asset: TAssetCard }> = ({ asset }) => {
  const imageUrl = asset?.image_url || noimage;
  const name = asset?.name || "No name";
  const description = asset?.description || "";
  const collectionName = asset?.collection?.name || "";
  const collectionImageUrl = asset?.collection?.image_url || "";

  return (
    <Card maxW="xl">
      <CardBody>
        <Image src={imageUrl} alt={name} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
          <Text>{description}</Text>
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
  );
};

export default AssetCard;
