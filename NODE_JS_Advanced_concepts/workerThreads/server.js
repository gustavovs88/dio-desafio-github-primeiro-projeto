import express from 'express';
import { WorkerPool } from './workerPool.js';
import os from 'os';

const app = express();
const pool = new WorkerPool(os.cpus().length, './worker.js');

app.get('/', (req, res) => {
  
  pool.runTask(undefined, (err, result) => {
    console.log(err, result);
    res.send(result)
  });

});

app.get('/fast', (req, res) => {
  res.send('This was fast!');
});

const server = app.listen(3000, ()=> {
  console.log('server listening on port 3000')
  process.once('SIGTERM', grecefullShutDown);
  process.once('SIGINT', grecefullShutDown);
});

function grecefullShutDown() {
  console.log('gracefully shutting down')
  Promise.resolve(new Promise((resolve, reject) => {
    if (server) {
        server.close((err) => {
            if (err)
                return reject(err);
            pool.close()
            console.log('server closed')
            return resolve();
        });
    }
    else {
        resolve();
    }
  }))
} 
