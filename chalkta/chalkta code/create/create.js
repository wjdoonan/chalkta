import FF from '../fileSystem.js'

const create = {
    createDataBase(dataBasename) {
        FF.createfile(dataBasename)
    },
    createTable(dataBasename, tableName) {
        const database = FF.readFile(dataBasename)
        const JsonData = JSON.parse(database)
        console.log(JsonData)
        const tt = JSON.parse(FF.readFile('./table.json'))
        JsonData.data.tt
        FF.saveFile(dataBasename, JSON.stringify(JsonData))
    }
}

export default create