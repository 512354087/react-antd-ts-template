const fs = require('fs')
const path = require('path')
const packageFile = require('../package.json')
console.info(`APP version:  ${packageFile.version}`)
const envList = [
  path.resolve(__dirname, '..', '.env.development'),
  path.resolve(__dirname, '..', '.env.production'),
  // path.resolve(__dirname, '..', '.env.production-test')
]
const reg = /="\d.\d.\d/

for (const env of envList) {
  fs.readFile(env, (err, data) => {
    if (err) {
      console.log(err)
    }
    const write = data.toString().replace(reg, '="' + packageFile.version)
    fs.writeFileSync(env, write)
  })
}
