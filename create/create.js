import FF from '../fileSystem.js'
import fs from 'fs'

const create = {
    createDataBase(dataBasename) {
        FF.createfile(dataBasename)
    },
    createChalk(type, dataBaseName, chalkName, colums) {
        const database = fs.readFileSync(String(dataBaseName) + '.json')
        const JsonData = JSON.parse(database)
        const Ct = JSON.parse(fs.readFileSync(String(type) + '.json'))


        if (String(type).toUpperCase() == 'TABLE') {
            if (!colums) {
                return console.log('please provide at least one column')
            }

            Ct.Template.data.name = String(chalkName)

            Ct.Template.chalk[0] = colums

            JsonData.data.chalkName = Ct.Template

            JsonData.DBta.Chalks = JsonData.DBta.Chalks + 1

        } else if (String(type).toUpperCase() == 'OBJECT') {
            // some code here
        } else if (String(type).toUpperCase() == 'KEY-VALUE') {

        }



        FF.saveFile(String(dataBaseName) + '.json', JSON.stringify(JsonData))
        console.log('chalk created')
    }
}

export default create