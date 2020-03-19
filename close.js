const client = require('./client');

const index = process.argv[2];

const params = {}
if (index) {
  params.index = index;
}

console.log(params)

client.indices.close(params)
.then(body => {
  console.log(body);
});