const jwt = require("jsonwebtoken");

function authorize(roles = []) {
  return (req, res, next) => {

    if(!eq.user){
      return res.status(401).json({'message': 'Unauthorized user'});
    }

    if(roles.length && !roles.includes(req.user.role)){
      return res.status(403).json({'message': 'Forbidden access'});
    }

    next();

  } 

}

module.exports = {authorize};
