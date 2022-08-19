import express from 'express';
const app = express();

app.get('/', (req, res) => {
  
    let counter = 0;
    while (counter < 1e9) {
        counter++;
    }
    console.log(counter)
    res.send(counter+"")
 
});


 
app.get('/fast', (req, res) => {
  res.send('This was fast!');
});
 
app.listen(3000);