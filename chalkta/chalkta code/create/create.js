import fileFunctions from '../fileSystem.js'

const create = {
    createDataBase(dataBasename) {
        fileFunctions.createfile(dataBasename)
    }
}

export default create