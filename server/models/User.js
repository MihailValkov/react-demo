const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { String, ObjectId } = mongoose.Schema.Types;
const userSchema = new mongoose.Schema({
  email : {
  type: String,
    required: true,
    unique: true,
    minlength : [6 , "Username should be at least 6 characters long !"],
    validate: {
      validator : (x)=> {
        return /^[a-zA-z-_0-9]+@[a-zA-z]+\.[a-zA-Z]{2,3}$/.test(x)
      },
      message : () => 'Email should be valid!'
    }
  },
  username: {
    type: String,
    required: true,
    unique: true,
    minlength : [6 , "Username should be at least 6 characters long !"],
    validate: {
      validator : (x)=> {
        return /^[A-Za-z0-9]+$/.test(x)
      },
      message : () => 'Username should contain only English characters and numbers!'
    }
  },
  password: {
    type: String,
    required: true,
    minlength : [6 , "Password should be at least 6 characters long !"]
  },
  gender : {
    type:String
  },
  friends:[{type : mongoose.Schema.Types.ObjectId , ref:'Friends'}],
  createdEvents:[{type : mongoose.Schema.Types.ObjectId , ref:'CreatedEvents'}],
  joinedEvents:[{type : mongoose.Schema.Types.ObjectId , ref:'JoinedEvents'}],
  followers:[{type : mongoose.Schema.Types.ObjectId , ref:'Followers'}],
  posts:[{type : mongoose.Schema.Types.ObjectId , ref:'Posts'}],
  userInfo : {type : Object } 
});

userSchema.methods = {
  checkPasswords: function (password) {
    return bcrypt.compare(password, this.password);
  },
};

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(this.password, salt);
      this.password = hash;
      next(); return;
    } catch (error) {
      next(error);
    }
  }
  next();
});

module.exports = mongoose.model("User", userSchema);
