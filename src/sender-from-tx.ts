import pkg from '@ethereumjs/tx'
const { Transaction } = pkg

const args = process.argv.slice(2)

const signedTx = args[0]
const buf = Buffer.from(signedTx.slice(2), 'hex')
const tx = Transaction.fromSerializedTx(buf)
console.log('address: ' + tx.getSenderAddress().toString())
console.log('nonce: ' + tx.nonce.toString())
