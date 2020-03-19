const client = require('./client');

const index = process.argv[2];
const q = process.argv[3];
console.log(`q=${q}`);

// client.search({
//   q: q
// })
const queries = q.split(' ');
client.search({
  // index: 'items',
  // type: 'items',
  // body: {
  //   query: {
  //     match: {keywords: q}
  //   }
  // },
  // q: q,
  // q: '912168397972707289',
  // _source: "keywords",
  // size: 100
  "index": index,
  "type":index,
  "body":{
    "sort":[
      {
        "importance":"desc"
      },
      "_score"
    ],
    "query":{
      "match":{
        "tag_name": q
      }
    }
  },
  "size":10,
  "from":61,
  "_source":[
    "model_id",
    "jan_code",
    "tag_name",
    "item_name",
    "keywords",
    "title",
    "color_number",
    "color_name",
    "brand_name"
  ]
})
.then((body) => {
  const hits = body.hits.hits;
  const total = body.hits.total;
  // console.log(hits);
  console.log(total);
})
.catch((error) => {
  console.trace(error.message);
});
