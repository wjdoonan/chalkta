import fs from 'fs'

const FF = {
    createfile(name) {
        fs.appendFileSync(name + '.json', '{"data": {}}')
    },
    readFile(name) {
        fs.readFileSync(name)
    },
    saveFile(name, data) {
        fs.writeFileSync(name, data)
    }
}

// console.log(JSON.parse(fs.readFileSync('DB.json')))

export default FF