import { useEffect } from "react";

export default function usePageTitle(Title: string) {
  const BASE_TITLE = "AlgaNews";
  useEffect(() => {
    document.title = `${BASE_TITLE} - ${Title}`;
  }, []); //eslint-disable-line
}
