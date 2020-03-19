const client = require('./client');

const index = process.argv[2];
let q = process.argv[3];
console.log(`q=${q}`);

q = q.replace('　', ' ');
const queries = q.split(' ');
console.log(queries.length);

client.search({
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
      "multi_match":{
        "query": q,
        "type": "most_fields",
        "fields": [
          "jan_code",
          "item_name",
          "brand_name^3",
          "tag_name^4",
          "color_name",
          "category_name^3"
        ],
        "operator": "and",
        // "type": "cross_fields",
        "minimum_should_match": queries.length
      }
    }
  },
  "size":100,
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
