function createErrorMessage (error){
    return error.message.includes("Path")
    ? "Please fullfil all fields"
    : error.message.split(": ")[error.message.split(": ").length - 1];
}

function renderMessage (error,res,next) {
    if(error.name === "ValidationError") {
        const message = createErrorMessage(error);
        res.send({message}); return;
    }
    if(error.name === "MongoError"){
        const field = Object.keys(error.keyValue)[0][0].toUpperCase()+ Object.keys(error.keyValue)[0].substring(1) 
        const message = `${field} is already taken`
        res.send({message}); return;
    }
    next(error);

}

module.exports= renderMessage;