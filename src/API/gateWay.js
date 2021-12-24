const baseUrl = 'https://6140a15a357db50017b3d77d.mockapi.io/api/v1/notation';

export const getNotations = () =>
  fetch(baseUrl).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Internal Server Error. Can't display notations");
  });

export const updateNotation = (notationId, notationObj) =>
  fetch(`${baseUrl}/${notationId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(notationObj),
  }).then(response => {
    if (!response.ok) throw new Error("Internal Server Error. Can't display events");
  });

export const deleteNotation = notationId =>
  fetch(`${baseUrl}/${notationId}`, {
    method: 'DELETE',
  }).then(response => {
    if (!response.ok) {
      throw new Error("Internal Server Error. Can't delete notation");
    }
  });

export const createNotation = notationObj =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(notationObj),
  }).then(response => {
    if (!response.ok) {
      throw new Error("Internal Server Error. Can't create notation");
    }
    return response.json();
  });
