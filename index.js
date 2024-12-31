const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname,'files', 'starter.txt'), 'utf8');
        console.log(data);
    }catch (err) {
        console.error(err)
    }
}

fileOps();


/* fs.writeFile(path.join(__dirname,'files', 'reply.txt'), 'Nice to meet you', (err) => {
    if (err) throw err;
    console.log("Write Complete")

    fs.appendFile(path.join(__dirname,'files', 'reply.txt'), `\n\nYes it is`, (err) => {
        if (err) throw err;
        console.log("Append  Complete");

        fs.renameFile(path.join(__dirname,'files', 'reply.txt'), `\n\nYes it is`, (err) => {
            if (err) throw err;
            console.log("Append  Complete");
        })
    })
}) */




// exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})