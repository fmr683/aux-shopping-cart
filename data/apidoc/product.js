/************ Product Details ************/
 
/**
 * @api {get} http://<base-url>/v1/products Product List
 * @apiDescription Get all products 
 * - Response - "Common Response" with product attributes. Possible status codes are
 * <br/>SUCCESS
 * <br/>FAIL
 * <br/>DUPLICATE_RECORD
 * <br/>AUTH_FAILED
 * 
 * @apiName GetProductsList
 * @apiGroup Product
 *
 *
 * @apiSuccessExample Success-Response:
 * {
 *   "code": "SUCCESS",
 *   "attribute": null,
 *   "data": {
 *       "product": [
 *           {
 *               "id": 2,
 *               "p_title": "Product 2",
 *               "p_desc": "Product 2 Description",
 *               "p_price": 20,
 *               "p_qty": 60,
 *               "created_at": null,
 *               "update_at": null
 *           },
 *           {
 *               "id": 1,
 *               "p_title": "Product 1",
 *               "p_desc": "Product 1 Description ",
 *               "p_price": 1.99,
 *               "p_qty": 14,
 *               "created_at": null,
 *               "update_at": null
 *           }
 *       ]
 *    },
 *   "message": ""
 *   }
 *
 */