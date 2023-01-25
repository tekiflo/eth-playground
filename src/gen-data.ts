import Web3 from 'web3'

const web3 = new Web3(
  new Web3.providers.HttpProvider(
    'https://mainnet.infura.io/v3/af757350f72b44c5a8534a27167e75b9'
  )
)

const args = process.argv.slice(2)

const url = args[0]

function genData (url: string) {
  return web3.eth.abi.encodeFunctionCall({
    name: 'fish',
    type: 'function',
    inputs: [
      {
        type: 'string',
        name: '_url'
      }
    ]
  }, [url])
}

console.log('data: ' + genData(url))
