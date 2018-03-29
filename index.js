const token = 'YOUR_TOKEN_HERE'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token bdb70fd22ad9c062429ec8b4b2d1ae140972ef2d`
  }
}).then(res => res.json()).then(json => console.log(json));
