# TodoApi
A simple todo api created using Node.js and Mongodb

To run the api make sure to run the mongodb local server at port 27017
When the mongodb server is running then start the nodejs server by typing following in terminal.
```node app.js```

Now the api is running and can be accessed at http://localhost:8080/api/todos/

Routes:

GET(returns all the todos): http://localhost:8080/api/todos/

GET with id(return single todo belonging to that id): http://localhost:8080/api/todos/{id}

POST (insert a todo, pass the todo in json format like this {text: "Go shopping"}): http://localhost:8080/api/todos/

PUT (change todo at given id, pass todo in json format): http://localhost:8080/api/todos/{id}

DELETE (deletes todo at id): http://localhost:8080/api/todos/{id}
