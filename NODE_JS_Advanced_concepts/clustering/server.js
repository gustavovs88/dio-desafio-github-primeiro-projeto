import cluster from 'cluster'
import os from 'os'
import express from 'express';
// Is the file beig executed in master mode?
if(cluster.isPrimary) {
// Cause index.js to be executed *again* but in child(slave) mode  
const numberOfCPUs = new Array(os.cpus().length) 
for(const cpu of numberOfCPUs) {
    cluster.fork();
}

} else {
// I'm a child, im going to act like a server and do nothing else
    const app = express();
    
    app.get('/', (req, res) => {
        let counter = 0;
        while (counter < 1e7) {
          counter++;
        }
        console.log(counter)
        res.send(counter+'')
    });

    app.get('/fast', (req, res) => {
        res.send('This is fast get');
    });

    app.listen(3000);
}

