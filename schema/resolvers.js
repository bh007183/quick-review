const {User, Pet} = require("../models")
const {ValidationError} = require("")


const resolvers = {
    Query:{
        getUser: async function(parent, {username},context){
            const data = await User.findOne({username})
            if(!data){
                throw new ValidationError({
                    msg: "new ERror"
                })
            }

        },
        getAllUser: async function(parent, arg, context){
            return User.find()

        }
    },
    Mutation:{
        addUser
    }
}