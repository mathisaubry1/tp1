// app.js

const app = require('express')();
const fs = require('fs');
const bodyparser = require('body-parser');

app.use(bodyparser.json());
app.get('/', (req, res) =>
{
    fs.readFile('package.json', 'utf8', (err, data) =>
    {
        if (err)
        {
            res.send(error);
        } else
        {
            res.send(data);  
        }
    }); 
});

// /user

app.get('/user', (req, res) =>
{
    fs.readFile('package.json', 'utf8', (err, data) =>
    {
        if (err)
        {
            res.send(error);
        } else
        {
            var dataObj = JSON.parse(data);
            var ret = [];
            for(i = 0; i < dataObj.user.length; i++)
            {
                ret.push(dataObj.user[i]);
            }
            res.send(ret);  
        }
    }); 
});
app.put('/user', (req, res) =>
{
    fs.readFile('package.json', 'utf8', (err, data) =>
    {
        if (err)
        {
            res.send(error);
        } else
        {
            newUSer = req.body;
            content = JSON.parse(data);
            content.user.push(newUSer);
            fs.writeFile('package.json', JSON.stringify(content), (err) =>
            {
                if (err)
                {
                    console.error(err);
                }
            });
            res.send("put request on /user");
        }
    }); 
});
app.delete('/user', (req, res) =>
{
    fs.readFile('package.json', 'utf8', (err, data) =>
    {
        if (err)
        {
            res.send(err);
        } else
        {
            delUser = req.body;
            content = JSON.parse(data);
            content.user.splice(delUser.id - 1, delUser.id - 1);
            fs.writeFile('package.json', JSON.stringify(content), (err) =>
            {
                if (err)
                {
                    console.error(err);
                }
            });
            res.send("delete request on /user");  
        }
    }); 
});
app.post('/user', (req, res) =>
{
    fs.readFile('package.json', 'utf8', (err, data) =>
    {
        if (err)
        {
            res.send(err);
        } else
        {
            upUser = req.body;
            content = JSON.parse(data);
            content.user[upUser.id] = upUser;
            fs.writeFile('package.json', JSON.stringify(content), (err) =>
            {
                if (err)
                {
                    console.error(err);
                }
            });
            res.send("update request on /user");
        }
    });
});

// /items

app.get('/items', (req, res) =>
{
    fs.readFile('package.json', 'utf8', (err, data) =>
    {
        if (err)
        {
            res.send(error);
        } else
        {
            var dataObj = JSON.parse(data);
            var ret = [];
            for(i = 0; i < dataObj.items.length; i++)
            {
                ret.push(dataObj.items[i]);
            }
            res.send(ret);  
        }
    }); 
});
app.put('/items', (req, res) =>
{
    fs.readFile('package.json', 'utf8', (err, data) =>
    {
        if (err)
        {
            res.send(error);
        } else
        {
            newItems = req.body;
            content = JSON.parse(data);
            content.items.push(newItems);
            fs.writeFile('package.json', JSON.stringify(content), (err) =>
            {
                if (err)
                {
                    console.error(err);
                }
            });
            res.send("put request on /items"); 
        }
    }); 
});
app.delete('/items', (req, res) =>
{
    fs.readFile('package.json', 'utf8', (err, data) =>
    {
        if (err)
        {
            res.send(error);
        } else
        {
            delItems = req.body;
            content = JSON.parse(data);
            content.items.splice(delItems.id - 1, delItems.id - 1);
            fs.writeFile('package.json', JSON.stringify(content), (err) =>
            {
                if (err)
                {
                    console.error(err);
                }
            });
            res.send("delete request on /items");  
        }
    }); 
});
app.post('/items', (req, res) =>
{
    fs.readFile('package.json', 'utf8', (err, data) =>
    {
        if (err)
        {
            res.send(err);
        } else
        {
            upItems = req.body;
            content = JSON.parse(data);
            content.items[upItems.id] = upItems;
            fs.writeFile('package.json', JSON.stringify(content), (err) =>
            {
                if (err)
                {
                    console.error(err);
                }
            });
            res.send("update request on /items");
        }
    });
});

// /list

app.get('/list', (req, res) =>
{
    fs.readFile('package.json', 'utf8', (err, data) =>
    {
        if (err)
        {
            res.send(error);
        } else
        {
            var dataObj = JSON.parse(data);
            var ret = [];
            for(i = 0; i < dataObj.list.length; i++)
            {
                ret.push(dataObj.list[i]);
            }
            res.send(ret);  
        }
    });
});
app.put('/list', (req, res) =>
{
    fs.readFile('package.json', 'utf8', (err, data) =>
    {
        if (err)
        {
            res.send(error);
        } else
        {
            newList = req.body;
            content = JSON.parse(data);
            content.list.push(newList);
            fs.writeFile('package.json', JSON.stringify(content), (err) =>
            {
                if (err)
                {
                    console.error(err);
                }
            });
            res.send("put request on /list");  
        }
    }); 
});
app.delete('/list', (req, res) =>
{
    fs.readFile('package.json', 'utf8', (err, data) =>
    {
        if (err)
        {
            res.send(error);
        } else
        {
            delList = req.body;
            content = JSON.parse(data);
            content.list.splice(delList.id - 1, delList.id - 1);
            fs.writeFile('package.json', JSON.stringify(content), (err) =>
            {
                if (err)
                {
                    console.error(err);
                }
            });
            res.send("delete request on /list");  
        }
    }); 
});
app.post('/list', (req, res) =>
{
    fs.readFile('package.json', 'utf8', (err, data) =>
    {
        if (err)
        {
            res.send(err);
        } else
        {
            upList = req.body;
            content = JSON.parse(data);
            content.list[upList.id] = upList;
            fs.writeFile('package.json', JSON.stringify(content), (err) =>
            {
                if (err)
                {
                    console.error(err);
                }
            });
            res.send("update request on /list");
        }
    });
});

app.listen(9999, () =>
{
    console.log('App listening on port 9999');
});
