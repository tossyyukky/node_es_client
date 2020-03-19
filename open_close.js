const client = require('./client');

const index = process.argv[2];

client.indices.open({
  index: index
}).then(body => {
  console.log(body);
});

const params = {}
if (index) {
  params.index = index;
}

client.indices.close(params)
.then(body => {
  console.log(body);
});