import { useState, useEffect } from "react";
import { debounce } from "lodash-es";
import { TQuerryParams } from "@/types";

export function useInfinityScroll<T>({
  setQueryParams,
  setEnabled,
  isLoading,
  list,
}: {
  setQueryParams: React.Dispatch<React.SetStateAction<TQuerryParams>>;
  setEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  list: T[];
}) {
  const [copyList, setCopyList] = useState<T[]>([]);
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const distanceToBottom = documentHeight - (scrollTop + windowHeight);
      // start fetching when the distance to bottom is over threshold
      const threshold = 0.5 * documentHeight;

      if (distanceToBottom <= threshold) {
        setQueryParams((pre) => {
          const offset = parseInt(pre?.offset || "0", 10);
          const limit = parseInt(pre?.limit || "0", 10);

          return {
            ...pre,
            offset: (offset + 1 * limit).toString(),
          };
        });
        setIsBottom(true);
      } else {
        setIsBottom(false);
      }
    }, 500);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isLoading && list.length > 0) {
      setCopyList((pre) => [...pre, ...list]);
    }
    if (!isLoading && list.length === 0) {
      setEnabled(false);
    }
  }, [list.length, isLoading]);

  return {
    copyList,
    isBottom,
  };
}
