import { useCallback, useState } from "react";
import { useDeepCompareCallback } from "use-deep-compare";
import useDeepCompareEffect from "use-deep-compare-effect";
import deepEqual from "deep-equal";

import { fetchCatalogContent } from "./dcsCatalogNextApis";
import { getContentFromFile } from "./helpers";

export default function useFileContent ({
  authentication,
  repository,
  config,
  file,
  onLoadCache,
}) {
  const defaultState = {
    file: undefined,
    content: undefined,
    publishedContent: undefined,
  };
  const [state, setState] = useState(defaultState);

  const _onLoadCache = useDeepCompareCallback( async () => {
    let cachedFile;
    if (onLoadCache && file?.html_url) {
      cachedFile = await onLoadCache({
        authentication,
        repository,
        branch: file.branch,
        html_url: file.html_url,
        file: file
      });
    };
    console.log("useFileContent._onLoadCache():", cachedFile);
    return cachedFile;
  }, [
    authentication,
    repository,
    file,
  ]);

  const _fetchCatalogContent = useDeepCompareCallback( async ({prodTag}) => {
    const publishedContent = await fetchCatalogContent(
      'unfoldingword',
      repository.name,
      prodTag,
      file.filepath,
      config,
    );
    console.log("useFileContent._fetchCatalogContent():", publishedContent);
    return publishedContent;
  }, [
    repository,
    file,
    config,
  ]);

  const load = useDeepCompareCallback( async () => {
    if (file) {
      const cachedFile = await _onLoadCache();
      // Load autosaved content:
      let content = cachedFile?.content;
      let publishedContent;
  
      if (!content) content = await getContentFromFile(file);

      if (!publishedContent) {
        // Check catalog next:
        const prodTag = repository.catalog?.prod?.branch_or_tag_name;
        if ( prodTag ) {
          publishedContent = await _fetchCatalogContent({prodTag});
        }
      };
      console.log("useFileContent.load():", publishedContent);
      setState({ content, publishedContent });
    };
  }, [file, _onLoadCache, _fetchCatalogContent]);

  const reset = useCallback(() => {
    setState(defaultState);
  }, []);

  useDeepCompareEffect(() => {
    if (!file && state.file) reset();
    if (state.file && !deepEqual(file, state.file)) reset();
    if (file && !state.file) {
      load();
    };
  }, [file, state.file, reset, load]);

  return { state };
};