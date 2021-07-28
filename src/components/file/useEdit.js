import { useState } from 'react';
import { updateContent } from '../..';

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
  const [{ isEditing, isError, error, editResponse }, setState] = useState({
    editResponse: null,
    isEditing: false,
    isError: false,
    error: null,
  })
  const { name: tokenid } = token || {}
  const _message = message || `Edit '${filepath}' using '${tokenid}'`;

  async function onSaveEdit(_branch) {
    try {
      if (content) {
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
      }))
      return false
    } finally {
      setState((prevState) => ({
        ...prevState,
        isEditing: false,
      }))
    }
  }

  return {
    error,
    isError,
    isEditing,
    onSaveEdit,
    editResponse,
  }
}