import fs from 'fs'

const fileFunctions = {
    createfile(name) {
        fs.append(name, '{}')
    }
}

export default fileFunctions