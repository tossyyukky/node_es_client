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
      "bool":{
        "should":[
          {"bool":{
            "must":[
              {"match":{
                "keywords": q
              }}
            ]
          }},
          {"bool":{
            "must":[
              {"match":{
                "title": q
              }}
            ]
          }},
        ]
      }
    }
  },
  "size":10,
  "from":0,
  "_source":[
    "keywords",
    "title",
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
