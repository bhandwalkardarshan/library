const jwt = require('jsonwebtoken');
const  secretKey = "jwtsecret"

function authenticateMiddleware(req, res, next) {
  // Get the token from the request headers, query parameters, or cookies
  const token = req.headers.authorization || req.query.token || req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  // Verify the token
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }

    // If the token is valid, attach the decoded user to the request object
    req.user = decoded;
    next(); // Continue with the next middleware or route handler
  });
}

module.exports = authenticateMiddleware;
