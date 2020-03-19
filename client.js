var elasticsearch = require('elasticsearch');

console.log(process.env.NODE_ENV);
let host = '';
if (process.env.NODE_ENV === 'dev') {
    host = 'localhost:9200';
} else if (process.env.NODE_ENV === 'stg') {
    host = 'st-api.noin.tv:9200';
} else if (process.env.NODE_ENV === 'esstg') {
    host = '172.31.21.41:9200';
} else if (process.env.NODE_ENV === 'prd') {
    host = 'api.noin.tv:9200'
}

var client = new elasticsearch.Client({
  host: host,
  log: 'trace'
});
module.exports = client;