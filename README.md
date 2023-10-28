


###  Setup

1. open the terminal and clone the project then run "npm i"

2. run `docker-compose up` in the root directory

### postman collection

+ [Api Collection on postman](https://elements.getpostman.com/redirect?entityId=29211253-6e1f9810-ed35-431f-a436-8f0b7d911795&entityType=collection)
+ please go to the Enviroment inside the postman then to the global and assign http://localhost:8080/root to baseUrl 


# routes

    #Note : to add the excel sheet data to DB please use this endpoint : POST  /pokemon/inject it will Inject the data

+ GET /pokemons

    #### params
    + page: by defalut 1
    + pageSize: by defalut is 10
    + filters you can use any filter you want here  
    you can choose more than one or you can just remove it 
    is an example 
       {{baseUrl}}/pokemon?page=1&pageSize=2&filters={"type1":"water" }


+ GET /pokemons/:id
    + res: { pokemon }

+ POST /pokemon
    + res: { pokemon: Pokemon }

+ DELETE /pokemons/:id
    + res: { message that pokemon is deleted}

+ PATCH /pokemons/:id 
    + res: { pokemon: Pokemon }




## For Testing please follow the steps 
    1- run the project using 'docker-compose up'
    2- open a new terminal and run `docker-compose exec app sh 
    3- when # apear 'run npm run coverage' OR 'npm run test'


### Technologies 

+ nodejs
+ express
+ postgres
+ docker
+ jest
