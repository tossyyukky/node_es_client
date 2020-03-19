const client = require('./client');

const index = process.argv[2];

client.indices.open({
  index: index
}).then(body => {
  console.log(body);
});
