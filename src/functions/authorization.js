export function getAuthorizeUrl() {
  fetch('http://localhost:5000/api/authorize/getAuthorizeUrl')
  .then(res => res.json())
  .then((data) => {window.open(data['authorizeURL'], '_self')
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

export function setTokens(urlCode) {
  fetch(`http://localhost:5000/api/authorize/setTokens/${urlCode}`, {
    method: 'PUT'
  })
  .then(res => res.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}