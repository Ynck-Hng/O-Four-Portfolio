exports.errorCatcher = (fn) => {return (req,res,next) => {
    return fn(req,res,next).catch(next);
}}

exports.errorCollector = (err,req,res,next) => {
    const status = err.status || 500;
    res.status(status).send({message: err.message});
}

exports.notFound = (req,res,next) => {
    const err = new Error("Cette recette n'existe pas...");
    err.status = 404;
    next(err);
}