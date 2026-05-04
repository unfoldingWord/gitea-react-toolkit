import { applyPatch, createPatch } from 'diff'
import {
  get, updateContent, ensureContent, deleteContent, decodeBase64ToUtf8, createContent, patchContent, createBranch,
} from '../..';

export const ensureFile = async ({
  config, authentication, repository, branch, filepath, defaultContent, message, onOpenValidation,
}) => {
  const _config = (authentication) ? authentication.config : { ...config };
  const { owner: { username: owner }, name: repo } = repository;
  let _message = message;
  let author;

  if (authentication) {
    const { user: _author, token: { name: tokenid } } = authentication;
    author = _author;
    _message = message || `Created '${filepath}' using '${tokenid}'`;
  }

  const file = await ensureContent({
    config: _config, owner, repo, branch, filepath,
    content: defaultContent, message: _message, author,
    onOpenValidation,
  });
  
  return file;
};

export const deleteFile = async ({
  authentication, repository, branch, file, message,
}) => {
  const {
    user: author, config, token: { name: tokenid },
  } = authentication;
  const { owner: { username: owner }, name: repo } = repository;
  const { path: filepath, sha } = file;
  const _message = message || `Deleted '${filepath}' using '${tokenid}'`;
  const deleted = await deleteContent({
    config, owner, repo, branch, filepath, message: _message, author, sha,
  });
  return deleted;
};

// NOTE: something in this function can throw an error.
// thus it needs to be wrapped in a try / catch.
export const getContentFromFile = async (file) => {
  const {
    content, encoding, download_url, git_url,
  } = file;
  let _content;

  if (content) {
    if ('base64' === encoding) {
      _content = decodeBase64ToUtf8(content);
    } else {
      _content = content;
    }
  } else if (!content && download_url) {
    _content = await get({ url: download_url, noCache: true });
  } else if (!content && git_url) {
    const blobObject = await get({ url: git_url, noCache: true });

    if (blobObject.content && blobObject.encoding === 'base64') {
      _content = decodeBase64ToUtf8(blobObject.content);
    }
  }
  return _content;
};

export const saveFile = async ({
  authentication, repository, branch, file, content, message,
}) => {
  const {
    user: author, config, token: { name: tokenid },
  } = authentication;
  const { owner: { username: owner }, name: repo } = repository;
  const { path: filepath, sha } = file;
  const _message = message || `Edit '${filepath}' using '${tokenid}'`;
  let response;
  try {
    response = await updateContent({
      config, owner, repo, branch, filepath,
      content, message: _message, author, sha,
    });
  } catch {
    response = await createContent({
      config, owner, repo, branch, filepath, content, message: _message, author, sha
    });
  }
  return response;
};

export const saveFilePatch = async ({
   authentication, repository, branch, file, content, message,
 }) => {
const {
  user: author, config, token: { name: tokenid },
} = authentication;
  const { owner: { username: owner }, name: repo } = repository;
  const { path: filepath, sha, last_commit_sha } = file;
  const _sha = sha || last_commit_sha;
  const _message = message || `Edit '${filepath}' using '${tokenid}'`;
  let response;
  try {
    response = await patchContent({
      config, owner, repo, branch, filepath,
      content, message: _message, author, sha: _sha,
    });
  } catch (e) {
    const error_response = e?.response?.data?.message;
    if (error_response?.includes( "branch does not exist")) {
      if (!config.dontCreateBranch) { // if branch doesn't exist, create it first
        response = await createBranch({
          config, owner, repo, newBranchName: branch, oldBranchName: 'master'
        });
  
        // try again to patch the content
        response = await patchContent({
          config, owner, repo, branch, filepath,
          content, message: _message, author, sha: _sha,
        });
      }
    }
  }
  return response;
};

const REGEX_TSV_BOOK_ABBREVIATION = /^\w*_(\w*)\.tsv$/i;

export const manifestFileComparer = ({
  repository, item1, item2,
}) => {
  const item1Path = item1?.path;
  const item2Path = item2?.path;
  
  let compare = 0;

  if (item1Path && item2Path && repository && repository.books)
  {
    const book1Matches = item1Path.match(REGEX_TSV_BOOK_ABBREVIATION);
    const book2Matches = item2Path.match(REGEX_TSV_BOOK_ABBREVIATION);

    const isTsvFiles = (book1Matches && book2Matches)?true:false;
    if (isTsvFiles)
    {
      const book1 = book1Matches[1];
      const book2 = book2Matches[1];
      
      let iiBook1 = 0;
      let iiBook2 = 0;
      for (let ii=0; ii < repository.books.length; ii++)
      {
        if (repository.books[ii].toLowerCase() == book1.toLowerCase())
        {
          iiBook1 = ii;
        }
        if (repository.books[ii].toLowerCase() == book2.toLowerCase())
        {
          iiBook2 = ii;
        }
      }

      if (iiBook1 < iiBook2)
      {
        compare = -1;
      }
      else if (iiBook2 < iiBook1)
      {
        compare = 1;
      }
      else
      {
        compare = 0;
      }
    }
    else // BOTH are NOT TSV file: (could be manifest file).
    {
      if (book1Matches)
      {
        // Book1 is a TSV, but book2 is a non-TSV file.
        return 1;
      }
      else if (book2Matches)
      {
        // Book2 is the TSV file; but book1 is NOT.
        return -1;
      }
      else
      {
        compare = item1Path.localeCompare(item2Path);
      }
    }
  }
  else // item1/item2 don't exist:
  {
    compare = 0;
  }

  return compare;
};

/**
 * replace any characters that are not compatible with a json string content
 * @param {string} diffFile
 * @return {string} escaped text
 */
export function escapeJsonStringChars(diffFile) {
  let newDiff = diffFile.replaceAll('\\', '\\\\')
  newDiff = newDiff.replaceAll('\n\r', '\\n')
  newDiff = newDiff.replaceAll('\n', '\\n')
  newDiff = newDiff.replaceAll('"', '\\"')
  return newDiff
}

/**
 * create a patch of the differences between the contents of originalFile and editedFile
 * @param {string} fileName - name of the file being changed
 * @param {string} originalFileContents - original file contents
 * @param {string} editedFileContents - new file contents
 * @param {boolean} jsonEscape - if true then we escape characters to fit in json string contents
 * @param {number} contextLines - number of context lines to include in patch
 * @return {string} - differences between files
 */
export function getPatch(fileName, originalFileContents, editedFileContents, jsonEscape = false, contextLines = 4) {
  let diffResult = createPatch(fileName, originalFileContents, editedFileContents, undefined, undefined, { context: contextLines })

  if (jsonEscape) {
    diffResult = escapeJsonStringChars(diffResult)
  }
  return diffResult
}

/**
 * Apply a patch to a string and return the modified content
 * @param {string} originalText - original file contents
 * @param {string} diff - patch/diff to apply to the original text
 * @return {string} - updated file contents
 */
export function applyPatchToString(originalText, diff) {
  let newContents = applyPatch(originalText, diff)
  return newContents
}

