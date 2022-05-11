// Exemplo 1
function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

async function test() {
  console.log('start timer');
  await delay(2000);
  console.log('after 2 seconds');
}

test();

// Exemplo 2
function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

delay(2000).then(() => console.log('ran after 2 seconds passed'));
