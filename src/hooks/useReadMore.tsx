import { useState, useEffect } from "react";

export const useReadMore = ({
  originText,
  limit = 200,
}: {
  originText: string;
  limit?: number;
}) => {
  const [text, setText] = useState("");
  const [showReadMore, setShowReadMore] = useState<boolean | null>(null);

  useEffect(() => {
    console.log("originText", limit);
    if (originText.length > limit) {
      const newText = `${originText.substring(0, 200)} ... `;
      setText(newText);
      setShowReadMore(true);
    } else {
      setText(originText);
      setShowReadMore(null);
    }
  }, [originText]);

  const handleMore = () => {
    setText(originText);
    setShowReadMore(false);
  };

  const handleLess = () => {
    setText(originText.substring(0, 200) + " ...");
    setShowReadMore(true);
  };

  const renderText = () => {
    if (showReadMore === null) return text;

    return (
      <>
        {text}
        {showReadMore ? (
          <span
            onClick={handleMore}
            className="text-blue-500 text-decoration underline cursor-pointer ml-4"
          >
            read more
          </span>
        ) : (
          <span
            onClick={handleLess}
            className="text-blue-500 text-decoration underline cursor-pointer ml-4"
          >
            read less
          </span>
        )}
      </>
    );
  };

  return {
    renderText,
  };
};
