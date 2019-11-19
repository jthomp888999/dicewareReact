const fetchPass = data => {
  return fetch('/passphrase', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json'
    }
  });
};

export default fetchPass;
