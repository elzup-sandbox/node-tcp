const net = require('net')

const client = net.connect('3000', 'localhost', () => {
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
