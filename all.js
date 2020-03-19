const client = require('./client');

// const q = process.argv[2];
// console.log(`q=${q}`);

// client.search({
//   q: q
// })
// const queries = q.split(' ');
client.search({
  index: 'items',
  type: 'items',
  body: {
    query: {
      match_all: {}
    }
  },
  // q: q,
  // q: '912168397972707289',
  _source: "keywords",
  "size":100,
  "from":0,
  "_source":["model_id","keywords","title"]
})
.then((body) => {
  var hits = body.hits.hits;
  console.log(hits);
  console.log(`total: ${hits.length}`)
})
.catch((error) => {
  console.trace(error.message);
});
