const token = '43cbc04ccf9b32dec7ce692d0aba1303ded440cc'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
