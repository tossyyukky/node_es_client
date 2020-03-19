const client = require('./client');

const index = process.argv[2];
const text = process.argv[3];

console.log(index, text);
// process.exit(1);

let body = {};
const env = process.env.NODE_ENV
console.log(env);
if (env === 'dev') {
    body = {
        analyzer: 'ja_analyzer',
        text: text
    }
} else {
    body = {
        analyzer: 'ja_analyzer',
        text: text
    }
}

client.indices.analyze({
    index: index,
    body: body
}, (body) => {
    console.log(body);
});