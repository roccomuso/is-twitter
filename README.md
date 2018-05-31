# is-twitter

[![NPM Version](https://img.shields.io/npm/v/is-twitter.svg)](https://www.npmjs.com/package/is-twitter)
[![Build Status](https://travis-ci.org/roccomuso/is-twitter.svg?branch=master)](https://travis-ci.org/roccomuso/is-twitter)
![node](https://img.shields.io/node/v/is-twitter.svg)
[![Dependency Status](https://david-dm.org/roccomuso/is-twitter.png)](https://david-dm.org/roccomuso/is-twitter)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> Verify that a request is from Twitter crawlers using Twitter's DNS verification steps

You may wish to verify that a web crawler accessing your server is Twitter  and not spammers or other bots scraping your site while claiming to be Twitterbot. Since you cannot rely on the `User-Agent` header which is easily spoofed, you need to use DNS look up to verify that the IP address belongs to Twitter. Twitter is usually scanning URLs to detect metadata.


## Install

`npm install --save is-twitter`

## Example

```javascript
const isTwitter = require('is-twitter')

let ip = '199.59.150.182'
isTwitter(ip).then((outcome) => {
  if (outcome) {
    // it's twitter.
  }
}).catch(console.error)
```

### Example with express

```javascript
app.enable('trust proxy')

app.use((req, res, next) => {
  let ip = req.ip || req.connection.remoteAddress
  isGoogle(ip).then(outcome => {
    if (outcome) {
      res.status(404).text('Nothing to scan') // block twitter crawler
    } else {
      next() // it's a user
    }
  })
})
```

## Tests

`npm test`

## License

MIT

## Author

Rocco Musolino [@roccomuso](https://twitter.com/roccomuso)
