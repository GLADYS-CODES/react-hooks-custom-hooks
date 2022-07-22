import { useEffect } from "react";

function useDocumentTitle(pageTitle) {
  useEffect(() => {
    document.title = "Underreacted | Home";
  }, [pageTitle]);
}

export default useDocumentTitle;
