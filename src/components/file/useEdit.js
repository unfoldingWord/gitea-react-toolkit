import { useState, useCallback } from 'react';
import { ensureContent, updateContent } from '../..';

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

  const onSaveEdit = useCallback(async () => {
    try {
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
        branch,
        author,
        content,
        filepath,
        message: _message,
      });

      setState((prevState) => ({
        ...prevState,
        editResponse: response,
      }))
    } catch (error) {
      setState((prevState) => ({
        ...prevState,
        isError: true,
        error,
      }))
    } finally {
      setState((prevState) => ({
        ...prevState,
        isEditing: false,
      }))
    }
  }, [sha, repo, owner, config, branch, author, content, filepath, _message])

  return {
    error,
    isError,
    isEditing,
    onSaveEdit,
    editResponse,
  }
}