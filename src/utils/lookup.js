import fs from 'fs'

const lookup = (namespace) => {
  fs.readdir('/', (err, files) => {
    files.forEach(file => {
      if ( file !== namespace ) {
        // create new file based on template
      }
    });
  })
}

export default lookup
