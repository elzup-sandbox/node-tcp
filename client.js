const net = require('net')

const host = '160.16.94.225'
const client = net.connect('3001', 'host', () => {
  console.log('connected to server')
  client.write('hiro:test')
})

client.on('data', (data) => {
  console.log('client-> ' + data)
  client.destroy()
})

client.on('close', () => {
  console.log('client-> connection is closed')
})
