const {Schema, model} = require("mongoose")

const userSchema = new Schema({
    username: {
        type: String    
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    pets:{
        type: Schema.Types.ObjectId,
        ref: "Pets"
    }

})
userSchema.pre('save', function(next){
    const user = this
    if(!user.isModified('password')){
        return next
    }
    user.password = bcrypt.hash(user.password, salt)
    next()
})

userSchema.method.checkPass = function(){
    return bcrypt.compare(password, this.password)
}

const User = model("User", userSchema)
module.exports = User