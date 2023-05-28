import { Image, Heading, Button } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Link, useParams, useLocation } from "react-router-dom";
import { useReadMore, useOne } from "@/hooks";
import noimage from "@/assets/noimage.png";

const index = () => {
  const { id } = useParams<{ id: string }>();
  const { state } = useLocation();
  const tokenId: string = state?.tokenId;
  const contractAddress: string = state?.contractAddress;

  const result = useOne({
    resource: "asset",
    pathParams: [contractAddress, tokenId],
  });
  const asset = result?.data?.data;
  const name = asset?.name || "";
  const permalink = asset?.permalink || "";
  const imgUrl = asset?.image_url || noimage;
  console.log("🚀 ~ file: index.tsx:8 ~ index ~ result:", asset);

  const { renderText } = useReadMore({
    originText:
      "Excepteur ex sunt dolore Lorem id ad sit qui excepteur id aliqua. Est pariatur duis sit ad elit id ipsum. Culpa in amet consequat labore nostrud laborum voluptate nisi. Enim sit aliquip officia esse exercitation officia esse aliquip. Eiusmod ad Lorem consectetur sunt dolor eiusmod aliquip incididunt.Non officia eu enim consequat. Exercitation voluptate consequat aliquip consectetur culpa sunt anim amet ea incididunt. Elit ipsum dolor sit fugiat labore.Tempor dolore aliquip adipisicing labore mollit laborum dolore dolore pariatur nisi enim nisi mollit. Reprehenderit incididunt velit labore sunt ea labore adipisicing do nostrud non quis eu. Reprehenderit culpa exercitation veniam sit excepteur officia mollit dolor ea. Qui ex dolore nostrud magna est aliquip adipisicing incididunt veniam tempor. Minim fugiat minim aliqua pariatur excepteur aute et veniam velit pariatur do ipsum. Aliquip labore id aliquip sit cillum labore aute consectetur. Minim et nulla consectetur consectetur aute pariatur proident amet irure.Cupidatat fugiat cillum officia esse exercitation voluptate est elit qui sint velit. Occaecat qui fugiat excepteur commodo in in quis consectetur eu. Velit eiusmod aliqua consequat ea.",
  });
  return (
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
