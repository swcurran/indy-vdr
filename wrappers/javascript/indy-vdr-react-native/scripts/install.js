const { downloadBinaryIfNeeded } = require('@hyperledger/indy-vdr-shared/installBinary')
const path = require('path')

const { binary } = require('../package.json')

const packageName = binary.packageName

downloadBinaryIfNeeded({
  packageName,
  host: binary.host,
  version: binary.version,
  targetDirectory: path.join(__dirname, '../native'),
})
