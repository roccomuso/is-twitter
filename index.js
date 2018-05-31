const dns = require('dns')

function isTwitter (ip) {
  return new Promise((resolve, reject) => {
    dns.reverse(ip, (err, domains) => {
      if (err) {
        return reject(err)
      }
      const hostname = domains[0]
      if (!(hostname.endsWith('.twttr.com'))) {
        return resolve(false)
      }

      dns.lookup(domains[0], (err, addr) => {
        if (err) {
          return reject(err)
        }
        const outcome = addr === ip
        return resolve(outcome)
      })
    })
  })
}

module.exports = isTwitter
