const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router()
const middlewares = jsonServer.defaults()

const inventories = require('./inventories.json');

server.get('/api/organizations', (req, res) => {
  res.json({  
    "data":[  
       {  
          "id":21,
          "name":"ACU"
       },
       {  
          "id":13,
          "name":"ASH"
       }
    ],
    "errors":null,
    "success":true,
    "extras":null
 })
});


server.post('/api/login', (req, res) => {
  res.json({  
    "data":{  
       "user":{  
          "id":30401,
          "name":"EMRE",
          "surname":"ABLAY",
          "email":"emre.ablay@acibadem.com.tr",
          "gender":1,
          "birthday":"1984-02-27T00:00:00",
          "username":null,
          "title":null,
          "tc_no":"50749185964",
          "image_path":null
       },
       "departments":[  
          {  
             "id":2,
             "name":"BIO"
          },
          {  
             "id":1,
             "name":"BT"
          }
       ],
       "permissions":[  
          "INVENTORY.UPDATELOCATION",
          "INVENTORY.VIEWALL"
       ],
       "menus":[  
          "NEWINVENTORY",
          "SEARCHINVENTORY"
       ],
       "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozMDQwMSwibmFtZSI6IkVNUkUiLCJzdXJuYW1lIjoiQUJMQVkiLCJlbWFpbCI6ImVtcmUuYWJsYXlAYWNpYmFkZW0uY29tLnRyIiwiZ2VuZGVyIjoxLCJiaXJ0aGRheSI6IlwvRGF0ZSg0NDY2ODA4MDAwMDApXC8iLCJ1c2VybmFtZSI6bnVsbCwidGl0bGUiOm51bGwsInRjX25vIjoiNTA3NDkxODU5NjQiLCJpbWFnZV9wYXRoIjpudWxsfSwicGVybWlzc2lvbnMiOlsiSU5WRU5UT1JZLlVQREFURUxPQ0FUSU9OIiwiSU5WRU5UT1JZLlZJRVdBTEwiXSwibWVudXMiOlsiTkVXSU5WRU5UT1JZIiwiU0VBUkNISU5WRU5UT1JZIl0sInVzZXJfbGFzdF91cGRhdGUiOiJcL0RhdGUoMTUxNDM4NDk4NTAxMilcLyIsInBlcm1pc3Npb25fbGFzdF91cGRhdGUiOiJcL0RhdGUoMTUxNDM4NDk4NTAxMilcLyIsIm1lbnVfbGFzdF91cGRhdGUiOiJcL0RhdGUoMTUxNDM4NDk4NTAxMilcLyJ9.XG9I6g6j-gUu9PHldXPjT-7lP6s-dIiJuRxmKU4ApPc",
       "timestamp":636499925850133058
    },
    "errors":null,
    "success":true,
    "extras":null
 });
})



server.post('/api/inventory', (req, res) => {
  res.json(inventories);
});



server.get('/api/branches', (req, res) => {
  res.json({  
    "data":[  
       {  
          "id":"60",
          "name":"Acıbadem Hst. Kocaeli"
       },
       {  
          "id":"71",
          "name":"Acıbadem Hst. Taksim"
       }
    ],
    "errors":null,
    "success":true,
    "extras":null
 })
});

server.get('/api/buildings', (req, res) => {
  res.json({  
    "data":[  
       {  
          "id":2,
          "name":"MERKEZ",
          "branch_id":"60"
       }
    ],
    "errors":null,
    "success":true,
    "extras":null
 });
});

server.get('/api/floors', (req, res) => {
  res.json({  
    "data":[  
       {  
          "id":5,
          "name":"1. KAT"
       },
       {  
          "id":6,
          "name":"2. KAT"
       },
       {  
          "id":7,
          "name":"3. KAT"
       },
       {  
          "id":8,
          "name":"4. KAT"
       }
    ],
    "errors":null,
    "success":true,
    "extras":null
 });
});

server.get('/api/stations', (req, res) => {
  res.json({  
    "data":[  
       {  
          "id":17,
          "name":"Ameliyathane"
       },
       {  
          "id":20,
          "name":"Bekleme Salonu"
       },
       {  
          "id":19,
          "name":"Yemekhane"
       },
       {  
          "id":18,
          "name":"Yoğun Bakım"
       }
    ],
    "errors":null,
    "success":true,
    "extras":null
 });
});

server.get('/api/devicelocations', (req, res) => {
  res.json({  
    "data":[  
       {  
          "id":243,
          "name":"ANA HOL"
       },
       {  
          "id":231,
          "name":"Acil Giriş"
       },
       {  
          "id":233,
          "name":"Ambulans Giriş"
       },
       {  
          "id":237,
          "name":"Doktor Odası"
       },
       {  
          "id":239,
          "name":"Hemşire Odası"
       },
       {  
          "id":229,
          "name":"Muayenehane"
       },
       {  
          "id":235,
          "name":"Revir"
       },
       {  
          "id":241,
          "name":"YAN GİRİŞ"
       }
    ],
    "errors":null,
    "success":true,
    "extras":null
 });
});



server.listen(8090, () => {
  console.log('JSON Server is running')
})