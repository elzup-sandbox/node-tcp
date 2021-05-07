const net = require('net')
const answer = process.env.ANSWER

function numcheck(str) {
  return str
    .split('')
    .slice(0, answer.length)
    .map((c, i) => {
      if (c === answer[i]) return 'H'
      if (answer.includes(c)) return 'B'
      return 'x'
    })
    .join('')
}

const server = net
  .createServer(function (conn) {
    console.log('server-> tcp server created')

    conn.on('data', function (data) {
      // YourName:try answer

      const [name, ans] = data.toString().split(':')
      if (!ans) return console.log('format invalid')
      const res = numcheck(ans)
      console.log(`${res} :${name}`)
      conn.write(res)
    })
    conn.on('close', function () {
      console.log('server-> disconnected')
    })
  })
  .listen(3000)

console.log('listening on port 3001')
