const jwt = require('jsonwebtoken');
require('dotenv').config();

const auth = (info, callback) => {
  //any method to get auth key for security
  //`ws://localhost:3000/realtime/ws?authkey=${token}`
  const token = info.req.url.split("authkey=")[1];
  console.log(token)
  if (!token) {
    return callback(new Error('No token, authorization denied'), false);
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    info.req.user = decoded; // Attach decoded user to the request
    callback(null, true);
  } catch (error) {
    callback(new Error('Invalid Token, Please Refresh'), false);
  }
};



module.exports = auth;