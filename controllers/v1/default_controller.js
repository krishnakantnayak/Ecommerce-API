//default controller to route unreachable routes
module.exports.default=function(req,res){
    res.send({
        status : 404,
        message: "Not Found!"
    });
}