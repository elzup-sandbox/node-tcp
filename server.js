const net = require('net')
const answer = process.env.ANSWER
const port = 3001

function numcheck(str) {
  if (str === answer) return 'Congratulations!!'
  return str
    .split('')
    .slice(0, answer.length)
    .map((c, i) => {
      if (c === answer[i]) return 'O'
      if (answer.includes(c)) return 'o'
      return 'x'
    })
    .join('')
}

const server = net
  .createServer(function (socket) {
    console.log('server-> tcp server created')
    socket.on('error', (err) => {
      console.error(err.stack)
    })

    socket.on('data', function (data) {
      // YourName:try answer

      const [name, ans] = data.toString().split(':')
      if (!ans) return console.log('format invalid')
      const res = numcheck(ans)
      console.log(`${res} :${name}`)
      socket.write(res)
    })
    socket.on('close', function () {
      console.log('server-> disconnected')
    })
  })
  .listen(port)

console.log(`listening on port ${port}`)
