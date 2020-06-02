import express, { response } from 'express';

const app = express();

app.use(express.json());

const users = [
    'Leonardo',
    'Diego',
    'Marjori'
]

app.get('/users', (req, res) => {

    const search = String(req.query.search);

    const filteredUsers = search ? users.filter(usuario => usuario.includes(search)) : users;

    return res.json(filteredUsers);

});

app.get('/users/:id', (req, res) => {

    let id = Number(req.params.id);

    const user = users[id];

    return res.json(user);

})

app.post('/users', (req, res) => {

    const { nome, email } = req.body;

    const user = {
        nome,
        email
    };

    return res.json(user);
});

app.listen(3000);