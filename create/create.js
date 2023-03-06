import FF from '../fileSystem.js'
import fs from 'fs'

const create = {
    createDataBase(dataBasename) {
        FF.createfile(dataBasename)
    },
    createChalk(type, dataBaseName, chalkName, colums) {
        const database = fs.readFileSync(String(dataBaseName))
        const JsonData = JSON.parse(database)
        const Ct = JSON.parse(fs.readFileSync(String(type) + '.json'))

        Ct.Template.data.name = String(chalkName)

        Ct.Template.chalk[0] = colums

        JsonData.data.chalkName = Ct.Template

        JsonData.DBta.Chalks = JsonData.DBta.Chalks + 1

        FF.saveFile('DB.json', JSON.stringify(JsonData))
    }
}

export default create