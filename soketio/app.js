const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
var users = [];

function getClientsId(list)
{
    var idList = [];
    
    for (client in list)
    {       
        idList.push(client);
    }
    return (idList);
}

function updateUsers()
{   
    connectedUsers = getClientsId(io.engine.clients);

    for (i = 0; i < users.length; i++)
    {
        users[i].connected = "no";
        for (j = 0; j < connectedUsers.length; j++)
        {
            if (users[i].id == connectedUsers[j])
            {
                users[i].connected = "yes";
            }
        }
    }
}

io.on('connection', socket =>
{
    socket.on('loaded', (data) =>
    {
        var isUpdate = 0;

        data.id = socket.id;

        for (i = 0; i < users.length; i++)
        {
            if (data.id == users[i].id)
            {
                users[i] = data;
                isUpdate = 1;
            }
        }
        if (isUpdate == 0)
        {
            users.push(data);
        }   
        updateUsers();
        io.emit('userlist', { users : users })
    });
    // Lorqu'un message est émis
    socket.on('message', (data) =>
    {
        data.id = socket.id;
        io.emit('message', data);
    });
    // Lors de la reception d'un message privé
    socket.on('private', (data) =>
    {
        id = data.id;
        data.id = socket.id;
        io.to(id).emit('message', data);
    });
    // Lors de la deconection
    socket.on('disconnect', () =>
    {
        io.emit('news', { userList :  getClientsId(io.engine.clients) });
    });
});

app.get('/', (req, res) =>
{
    res.sendFile(__dirname + '/views/index.html');
});

http.listen(3000, () =>
{
    console.log('Server is up and running on http://localhost:3000');
});