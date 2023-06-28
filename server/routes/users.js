const  express  =  require("express");

const router = express.Router();
 const getInfo=  require("../controllers/users.js");
const  {verifyToken}  = require("../middleware/auth.js");


/* READ */
router.get("/:id", verifyToken , getInfo.getUser);

router.get("/:id/friends", verifyToken, getInfo.getUserFriends);

/* UPDATE */
router.patch("/:id/:friendId", verifyToken, getInfo.addRemoveFriend);

module.exports = router;
