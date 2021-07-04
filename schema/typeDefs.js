const {gql} = require("apollo-express-server")

const typeDefs = gql`
type User{
    _id: ID
    username: !String
    email: !String
    password: !String
    pets: [Pet]
}

type Pet{
    _id: ID
    species: !String
}

type Query{
    getUser(username: !String): User
    getAllUser: [User]
}
`