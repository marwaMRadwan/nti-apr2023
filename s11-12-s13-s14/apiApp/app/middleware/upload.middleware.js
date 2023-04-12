const multer  = require('multer')
const upload = multer({ dest: 'public/' })
module.exports = upload