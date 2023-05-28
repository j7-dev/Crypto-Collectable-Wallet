import { Image, Heading, Button } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useReadMore } from "@/hooks";

const index = () => {
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
        name
      </div>
      <Image
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Green double couch with wooden legs"
      />
      <div className="p-8">
        <Heading as="h1" size="xl">
          Basic text writing, including headings, body text, lists, and more.
        </Heading>

        <div className="mt-8 text-justify">{renderText()}</div>
      </div>
      <div className="fixed bottom-4 w-full px-4">
        <Button colorScheme="blue" className="w-full">
          Permalink
        </Button>
      </div>
    </div>
  );
};

export default index;
