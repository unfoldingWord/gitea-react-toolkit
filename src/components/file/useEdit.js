import { useState } from 'react';
import { patchContent, updateContent } from '../..';

/**
 * Custom hook for editing content of translation helps resources
 * @param {string} sha
 * @param {string} repo
 * @param {string} owner
 * @param {string} token
 * @param {object} config - config settings for fetches (timeout, cache, etc.)
 * @param {string} branch - branch name.
 * @param {string} author - author of the edit.
 * @param {string} email - email of the author.
 * @param {string} content - Edited/updated content.
 * @param {string} message - Optional commit message.
 * @param {string} filePath - file path, file path for the file being edited.
 * @return {{error: object, isError: boolean, isEditing: boolean, onSaveEdit: (function(_branch: string)), editResponse: object}}
 */
export default function useEdit({
  sha,
  repo,
  owner,
  token,
  config,
  branch,
  author,
  email,
  content,
  message,
  filepath,
}) {
  const initialState = {
    editResponse: null,
    isEditing: false,
    isError: false,
    error: null,
  }
  const [{ isEditing, isError, error, editResponse }, setState] = useState(initialState)
  const { name: tokenid } = token || {}
  const _message = message || `Edit '${filepath}' using '${tokenid}'`;

  /**
   * Upload new content to given branch in DCS.
   * Sets state necessary to indicate that content is saving and then that
   * we have finished editing. 
   * @async
   * @param {string} _branch - branch name to save content to 
   * @param {string} newContent - Stringified content to be saved to DCS
   * @param {string|null} fileSha - optional file sha to be used, if not passed then sha will be used
   * @returns {Promise<Object>} - Response after saving the content.
   */
  async function saveContent(_branch, newContent, fileSha = null) {
    setState((prevState) => ({
      ...prevState,
      editResponse: null,
      isEditing: true,
      isError: false,
    }))

    const _sha = fileSha || sha
    const response = await updateContent({
      sha: _sha,
      repo,
      owner,
      config,
      author,
      content: newContent,
      filepath,
      message: _message,
      // Use branch passed to function or branch passed to custom hook. 
      branch: _branch || branch,
    });

    setState((prevState) => ({
      ...prevState,
      editResponse: response,
      isEditing: false,
    }))
    return response
  }

  /**
   * Saves edited content to given branch and catches any errors that happen 
   * during the save.
   * @async
   * @param {string} _branch - branch name to save content to 
   * @param {string} newContent - optional Stringified content to be saved to DCS, if not passed then value in content will be used
   * @param {string|null} fileSha - optional file sha to be used, if not passed then sha will be used
   * @returns {Promise<boolean>} - Returns true if successful, otherwise false.
   */
  async function onSaveEdit(_branch, newContent='', fileSha = null) {
    try {
      if (newContent) {
        if (content && content === newContent) {
          return true
        }
        await saveContent(_branch, newContent, fileSha)
      } else if (content) {
        await saveContent(_branch, content, fileSha)
      } else {
        console.warn('Content and newContent values are empty')
      }
      return true
    } catch (error) {
      setState((prevState) => ({
        ...prevState,
        isError: true,
        error,
        isEditing: false,
      }))
      return false
    }
  }

  /**
   * Saves a patch to given branch and catches any errors that happen
   * during the save.
   * @async
   * @param {string} _branch - branch name to save content to
   * @param {string} newContent - optional patched content to be saved to DCS, if not passed then value in content will be used
   * @param {string|null} fileSha - optional file sha to be used, if not passed then sha will be used
   * @returns {Promise<boolean>} - Returns true if successful, otherwise false.
   */
  async function onSaveEditPatch(_branch, newContent= '', fileSha = null) {
    try {
      const _content = newContent || content
      const _sha = fileSha || sha
      if (_content) {
        // clear state to remove left over state from a previous edit.
        setState((prevState) => ({
          ...prevState,
          editResponse: null,
          isEditing: true,
          isError: false,
        }))

        const response = await patchContent({
          sha: _sha,
          repo,
          owner,
          config,
          author,
          email,
          content: _content,
          filepath,
          message: _message,
          // Use branch passed to function or branch passed to custom hook. 
          branch: _branch || branch,
        });

        setState((prevState) => ({
          ...prevState,
          editResponse: response,
          isEditing: false,
        }))
        return true
      } else {
        console.warn('Content value is empty')
      }
    } catch (error) {
      setState((prevState) => ({
        ...prevState,
        isError: true,
        error,
        isEditing: false,
      }))
      return false
    }
  }

  return {
    error,
    isError,
    isEditing,
    onSaveEdit,
    editResponse,
    onSaveEditPatch,
  }
}