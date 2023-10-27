export const fetchRequest = (
  url,
  httpMethod = 'GET',
  payload,
  contentType = 'application/json'
) => {
  return fetch(url, {
    method: httpMethod,
    body: payload,
    headers: {
      'Content-type': contentType
    }
  }).then((res) => {
    return res.json()
  })
}
