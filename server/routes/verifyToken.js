const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization || req.headers.Authorization
  if(token == null) return res.status(401).json("Unauthorized")

  jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
    if(err) return res.status(403).json("Forbidden")
    req.user = user
    next()
  })


  // const authHeader = req.headers.token;
  // if (authHeader) {
  //   const token = authHeader && authHeader.split(' ')[1];
  //   if(token === null) return res.status(401)
  //   jwt.verify(token, process.env.JWT_SEC, (err, user) => {
  //     if (err) res.status(403).json("Token is not valid!");
  //     req.user = user;
  //     next();
  //   });
  // } else {
  //   return res.status(401).json("You are not authenticated!");
  // }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};