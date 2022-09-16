setTimeout(() => {
  // console.log(self);
  postMessage('OO')
}, 3000)

onmessage = function(e) {
  console.log(e.data);
}