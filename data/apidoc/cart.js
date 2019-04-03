/************ Cart Details ************/
 
/**
 * @api {post} http://<base-url>/v1/cart Add Product to Cart
 * @apiDescription Add to cart
 * - Response - "Common Response" with cart attributes. Possible status codes are
 * <br/>SUCCESS
 * <br/>FAIL
 * <br/>USER_NOT_LOGGED_IN
 * <br/>AUTH_FAILED
 * 
 * @apiName AddToCart
 * @apiGroup Cart
 *
 * @apiParam {Array[Object]} item Item object
 * @apiParam {Number} p_id Product id
 * @apiParam {Number} p_qty Product quantity.
 * @apiExample Example Request:
 *{
 *	"item":[
 *	    {"p_id":121, "p_qty": 4},
 *	    {"p_id":3635, "p_qty": 6}
 *	]
 *}
 *
 * @apiSuccessExample Success-Response:
 *{
 *   "code": "SUCCESS",
 *   "attribute": "",
 *   "data": {
 *       "cart": [
 *           {
 *               "p_id": "121",
 *               "qty": "4"
 *           },
 *           {
 *               "p_id": "3635",
 *               "qty": "6"
 *           }
 *       ]
 *   },
 *   "message": ""
 *}
 *
 */

/************ Get Cart Details of the customer ************/
 
/**
 * @api {get} http://<base-url>/v1/cart Get Customer Cart Details
 * @apiDescription Add Products 
 * - Response - "Common Response" with cart attributes. Possible status codes are
 * <br/>SUCCESS
 * <br/>FAIL
 * <br/>USER_NOT_LOGGED_IN
 * <br/>AUTH_FAILED
 * 
 * @apiName GetCart
 * @apiGroup Cart
 *
 * @apiExample Example Request:
 *{
 *	"item":[
 *	    {"p_id":121, "p_qty": 4},
 *	    {"p_id":3635, "p_qty": 6}
 *	]
 *}
 *
 * @apiSuccessExample Success-Response:
 *{
 *   "code": "SUCCESS",
 *   "attribute": "",
 *   "data": {
 *       "cart": [
 *           {
 *               "p_id": "121",
 *               "qty": "4"
 *           },
 *           {
 *               "p_id": "3635",
 *               "qty": "6"
 *           }
 *       ]
 *   },
 *   "message": ""
 *}
 *
 */

 /************ Delete Cart Details ************/
 
/**
 * @api {delete} http://<base-url>/v1/cart Delete items from cart
 * @apiDescription Delete from cart
 * - Response - "Common Response" with cart attributes. Possible status codes are
 * <br/>SUCCESS
 * <br/>FAIL
 * <br/>USER_NOT_LOGGED_IN
 * <br/>AUTH_FAILED
 * 
 * - Return the updated cart response or empty cart array.
 * 
 * @apiName DeleteFromCart
 * @apiGroup Cart
 *
 * @apiParam {Array} item Array with product id
 * @apiExample Example Request:
 *{
 *	"item":[3635]
 *}
 *
 * @apiSuccessExample Success-Response:
 *{
 *   "code": "SUCCESS",
 *   "attribute": "",
 *   "data": {
 *       "cart": [
 *           {
 *               "p_id": "121",
 *               "qty": "4"
 *           }
 *       ]
 *   },
 *   "message": ""
 *}
 *
 */