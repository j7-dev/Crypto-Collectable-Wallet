import { Image, Heading, Button } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Link, useParams, useLocation } from "react-router-dom";
import { useReadMore, useOne } from "@/hooks";
import noimage from "@/assets/noimage.png";
import { LoadingPage } from "@/components";

const index = () => {
  const { id } = useParams<{ id: string }>();
  const { state } = useLocation();
  const tokenId: string = state?.tokenId;
  const contractAddress: string = state?.contractAddress;

  const { data, isLoading } = useOne({
    resource: "asset",
    pathParams: [contractAddress, tokenId],
  });
  const asset = data?.data;
  const name = asset?.name || "";
  const permalink = asset?.permalink || "";
  const imgUrl = asset?.image_url || noimage;
  const description = asset?.description || "";

  const { renderText } = useReadMore({
    originText: description,
  });

  return isLoading ? (
    <LoadingPage />
  ) : (
    <div className="-mx-4 xl:-mx-8 pb-16">
      <div className="flex justify-center items-center relative h-8 mb-4">
        <Link to="/" className="absolute left-4">
          <ChevronLeftIcon w={8} h={8} color="gray.700" />
        </Link>
        {name}
      </div>
      <Image
        src={imgUrl}
        alt={name}
        className="w-full aspect-square object-contain"
      />
      <div className="p-8">
        <Heading as="h1" size="xl">
          {name}
        </Heading>
        <p className="text-xs text-gray-400">#{id}</p>

        <div className="mt-8 text-justify">{renderText()}</div>
      </div>
      {!!permalink && (
        <div className="fixed bottom-0 bg-white py-4 w-full px-4">
          <a href={permalink} target="_blank">
            <Button colorScheme="blue" className="w-full">
              Permalink
            </Button>
          </a>
        </div>
      )}
    </div>
  );
};

export default index;
