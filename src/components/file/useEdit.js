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

  async function onSaveEdit(_branch) {
    try {
      // content is the updated string or dirty content.
      if (content) {
        // clear state to remove left over state from a previous edit.
        setState((prevState) => ({
          ...prevState,
          editResponse: null,
          isEditing: true,
          isError: false,
        }))
  
        const response = await updateContent({
          sha,
          repo,
          owner,
          config,
          author,
          content,
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

  async function onSaveEditPatch(_branch) {
    try {
      // content is the updated string or dirty content.
      if (content) {
        // clear state to remove left over state from a previous edit.
        setState((prevState) => ({
          ...prevState,
          editResponse: null,
          isEditing: true,
          isError: false,
        }))

        const response = await patchContent({
          sha,
          repo,
          owner,
          config,
          author,
          content,
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