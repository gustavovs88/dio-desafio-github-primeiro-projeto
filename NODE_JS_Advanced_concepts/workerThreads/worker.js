import { parentPort } from 'worker_threads';
 
parentPort.on('message', () => {
  let counter = 0;
  while (counter < 1e7) {
    counter++;
  }
 
  parentPort.postMessage('' + counter);
});