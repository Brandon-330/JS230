let request = new XMLHttpRequest();
request.open('POST', 'https://ls-230-web-store-demo.herokuapp.com/v1/products');
request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
request.setRequestHeader('Authorization', 'token AUTH_TOKEN');
let json = JSON.stringify({name: 'ABCDEF', SKU: 'asv', price: 5000});
request.addEventListener('load', e => {
  console.log('Item added');
});

request.send(json);