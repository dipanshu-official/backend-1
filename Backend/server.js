import express from 'express';
const app = express();


app.get('/', (req, res) => {
    res.send('hello world my darling');
})
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            tittle: 'A joke',
            content: 'This is a joke'
        },
        {
            id: 2,
            tittle: 'Another joke',
            content: 'This is another joke'
        },
        {
            id: 3,
            tittle: 'Another third joke',
            content: 'This is another third joke'
        },
        {
            id: 4,
            tittle: 'Another fourth joke',
            content: 'This is fourth joke'
        },
        {
            id: 5,
            tittle: 'Another fifth joke',
            content: 'This is fifth joke'
        }

    ]
    res.send(jokes);
})

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});