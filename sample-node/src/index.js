import express from 'express';
import bodyparser from 'body-parser';
import route from './routes/studentRoute';

const app = express();


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(route);

route.get('/api', (req, res) => {
    res.send('Hi welcome');
})

app.get('/', (req, res) => {
    res.send("<h1>Hello World</h1>");
    res.end();
});

app.listen('3000', () => {
    console.log('Server is listening at port no 3000');
});