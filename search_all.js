const client = require('./client');

const index = process.argv[2];
const q = process.argv[3];
console.log(`q=${q}`);

// client.search({
//   q: q
// })
// const queries = q.split(' ');
// minimum_should_match
let query = {
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
      "match_all": {}
    }
  },
  "size":10,
  "from":0,
  "_source":[
    "model_id",
    "jan_code",
    "tag_name",
    "item_name",
    "keywords",
    "title",
    "color_number",
    "color_name",
    "brand_name",
    "category_name"
  ]
}
client.search(query)
.then((body) => {
  const hits = body.hits.hits;
  const total = body.hits.total;
  console.log(hits);
  console.log(total);
})
.catch((error) => {
  console.trace(error.message);
});
