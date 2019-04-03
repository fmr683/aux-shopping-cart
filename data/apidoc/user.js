/************ Customer Registration ************/
 
/**
 * @api {post} http://<base-url>/v1/user/ Customer Registration
 * @apiDescription Customer Registration. The end point is used to customer registration.
 * - Single customer record will be created.
 * - Response - "Common Response" with userId,email,fname,accessToken. Possible status codes are
 * <br/>SUCCESS
 * <br/>FAIL
 * <br/>DUPLICATE_RECORD
 * 
 * @apiName UserRegistration
 * @apiGroup User
 * 
 * @apiParam {String} email User email address
 * @apiParam {String} password User password
 * @apiParam {String} fname User first name
 * @apiParam {String} lname User Last name
 *
 * @apiExample Example Request:
 *{
 *	"email": "frm683@gmail.com",
 *	"password": "123456",
 *	"fname": "Fazlul",
 *	"lname": "Mohideen"
 *	
 *}
 *
 * @apiSuccessExample Success-Response:
 * {
 *   "code": "SUCCESS",
 *   "attribute": null,
 *   "data": {
 *       user": {
 *           "userId": 111,
 *           "email": "frm68366sdfdsfsdfdferfffer333df2323kj2ffff3@gmail.com",
 *           "fname": "Fazlul",
 *           "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjExMSwiZW1haWwiOiJmcm02ODM2NnNkZmRzZnNkZmRmZXJmZmZlcjMzM2RmMjMyM2tqMmZmZmYzQGdtYWlsLmNvbSIsImZuYW1lIjoiRmF6bHVsIiwiaWF0IjoxNTU0MjMyOTI2fQ.rurxxhEOzFm_785-N2O2dskEa47pKyP0BvUtSI6gWDM"
 *       }
 *    },
 *   "message": ""
 *   }
 *
 */

/************ Customer Login ************/

/**
 * @api {post} http://<base-url>/v1/user/login Customer Login
 * @apiDescription Customer Login. The end point is used to customer login.
 * - Customer Login end point
 * - Response - "Common Response" with userId,email,fname,accessToken. Possible status codes are
 * <br/>SUCCESS
 * <br/>FAIL
 * 
 * @apiName UserLogin
 * @apiGroup User
 * 
 * @apiParam {String} email User email address
 * @apiParam {String} password User password
 *
 * @apiExample Example Request:
 *{
 *	"email": "frm683@gmail.com",
 *	"password": "123456",
 *}
 *
 * @apiSuccessExample Success-Response:
 * {
 *   "code": "SUCCESS",
 *   "attribute": null,
 *   "data": {
 *       user": {
 *           "userId": 111,
 *           "email": "frm68366sdfdsfsdfdferfffer333df2323kj2ffff3@gmail.com",
 *           "fname": "Fazlul",
 *           "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjExMSwiZW1haWwiOiJmcm02ODM2NnNkZmRzZnNkZmRmZXJmZmZlcjMzM2RmMjMyM2tqMmZmZmYzQGdtYWlsLmNvbSIsImZuYW1lIjoiRmF6bHVsIiwiaWF0IjoxNTU0MjMyOTI2fQ.rurxxhEOzFm_785-N2O2dskEa47pKyP0BvUtSI6gWDM"
 *       }
 *    },
 *   "message": ""
 *   }
 *
 */


/************ Customer Details update ************/

/**
 * @api {put} http://<base-url>/v1/user Customer Details Update
 * @apiDescription Customer Login. The end point is used to modify Customer details 
 * - User must execute the Login/Registration end point before execute this API.
 * - Customer Details update end point. Can send any valid user attribute to update the attribute value
 * - Response - "Common Response" with userId,email,fname,accessToken. Possible status codes are
 * <br/>SUCCESS
 * <br/>FAIL
 * <br/>DUPLICATE_RECORD
 * <br/>USER_NOT_LOGGED_IN
 * <br/>AUTH_FAILED
 * 
 * @apiName UserUpdate
 * @apiGroup User
 *
 * @apiParam {String} [email] User email address
 * @apiParam {String} [password] User password
 * @apiParam {String} [fname] User first name
 * @apiParam {String} [lname] User Last name
 * 
 * @apiExample Example Request:
 *{
 *	"fname": "Faz RM",
 *}
 *
 * @apiSuccessExample Success-Response:
 * {
 *   "code": "SUCCESS",
 *   "attribute": null,
 *   "data": "",
 *   "message": ""
 *   }
 *
 */
