const token = 'YOUR_TOKEN_HERE'
fetch('https://api.github.com/user/repos', {
  headers: {
<<<<<<< HEAD
    Authorization: `token ${token}`
=======
    Authorization: `token 47fa3a304f088f7a690bf5582efacd5ec73f207a`
>>>>>>> fa905821256cf3f4ba298fa7eb1c38ec1a177d16
  }
}).then(res => res.json()).then(json => console.log(json));
