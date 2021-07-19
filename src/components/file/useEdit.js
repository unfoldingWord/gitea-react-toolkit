import { useState } from 'react';
import { ensureContent } from '../..';

export default function useEdit({
  sha,
  repo,
  owner,
  token,
  config,
  branch,
  author,
  content,
  filepath,
  message: _message,
}) {
  const [{ isEditing, isError, error }, setState] = useState({
    isEditing: false,
    isError: false,
    error: null,
  })
  const [editResponse, setEditResponse] = useState(null)
  const { name: tokenid } = token
  const _message = message || `Edit '${filepath}' using '${tokenid}'`;

  async function onSaveEdit() {
    try {
      setState((prevState) => ({
        ...prevState,
        isEditing: true,
        isError: false,
      }))

      const response = await ensureContent({
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

      setEditResponse(response)
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
  }

  return {
    error,
    isError,
    isEditing,
    onSaveEdit,
    editResponse,
  }
}