import express from 'express';

const app = express();

app.get('/users', (req, res) => {
    console.log('Listagem de usuários');
    res.json([
        'Leonardo',
        'Diego',
        'Marjori'
    ]);
});

app.listen(3000);