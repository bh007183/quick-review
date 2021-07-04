const express = require("express")
const app = express()
const PORT = process.env.PORT || 8080
const db = require("./config/connection")
const {ApolloServer} = require("apollo-express-server")
const {typeDefs, resolvers} = require("./schema")


const server = ApolloServer({
    typeDefs,
    resolvers

})

server.applyMiddleware({app})
app.use(express.urlencoded({extended: true}))
app.use(express.json())

db.once("open", function(){
    app.listen(PORT)
})
