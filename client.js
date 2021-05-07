const net = require('net')
const host = process.env.SERVER_HOST

const client = net.connect('3001', host, () => {
  console.log('connected to server')
  client.write('hiro:HeHHHHHHHH')
})

client.on('data', (data) => {
  console.log('client-> ' + data)
  client.destroy()
})

client.on('close', () => {
  console.log('client-> connection is closed')
})
