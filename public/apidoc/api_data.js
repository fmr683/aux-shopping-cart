define({ "api": [
  {
    "type": "get",
    "url": "/",
    "title": "",
    "description": "<p>These header needs to available in each API end point</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "api-key",
            "description": "<p>Q0E0MUExMkVBMjgyOERCQzQ5Q0RCR</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "api-secret",
            "description": "<p>C40CB2B60C53AF5267D03AACA9416</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Authorization",
            "description": "<p>User token value from the login/register response.</p>"
          }
        ]
      }
    },
    "name": "AuthHeader",
    "group": "AuthHeader",
    "version": "0.0.0",
    "filename": "data/apidoc/aauth-header.js",
    "groupTitle": "AuthHeader"
  },
  {
    "type": "post",
    "url": "http://<base-url>/v1/cart",
    "title": "Add Product to Cart",
    "description": "<p>Add to cart</p> <ul> <li>Response - &quot;Common Response&quot; with cart attributes. Possible status codes are <br/>SUCCESS <br/>FAIL <br/>USER_NOT_LOGGED_IN <br/>AUTH_FAILED</li> </ul>",
    "name": "AddToCart",
    "group": "Cart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array[Object]",
            "optional": false,
            "field": "item",
            "description": "<p>Item object</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "p_id",
            "description": "<p>Product id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "p_qty",
            "description": "<p>Product quantity.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example Request:",
        "content": "{\n\t\"item\":[\n\t    {\"p_id\":121, \"p_qty\": 4},\n\t    {\"p_id\":3635, \"p_qty\": 6}\n\t]\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"code\": \"SUCCESS\",\n  \"attribute\": \"\",\n  \"data\": {\n      \"cart\": [\n          {\n              \"p_id\": \"121\",\n              \"qty\": \"4\"\n          },\n          {\n              \"p_id\": \"3635\",\n              \"qty\": \"6\"\n          }\n      ]\n  },\n  \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "data/apidoc/cart.js",
    "groupTitle": "Cart"
  },
  {
    "type": "delete",
    "url": "http://<base-url>/v1/cart",
    "title": "Delete items from cart",
    "description": "<p>Delete from cart</p> <ul> <li> <p>Response - &quot;Common Response&quot; with cart attributes. Possible status codes are <br/>SUCCESS <br/>FAIL <br/>USER_NOT_LOGGED_IN <br/>AUTH_FAILED</p> </li> <li> <p>Return the updated cart response or empty cart array.</p> </li> </ul>",
    "name": "DeleteFromCart",
    "group": "Cart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "item",
            "description": "<p>Array with product id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example Request:",
        "content": "{\n\t\"item\":[3635]\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"code\": \"SUCCESS\",\n  \"attribute\": \"\",\n  \"data\": {\n      \"cart\": [\n          {\n              \"p_id\": \"121\",\n              \"qty\": \"4\"\n          }\n      ]\n  },\n  \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "data/apidoc/cart.js",
    "groupTitle": "Cart"
  },
  {
    "type": "get",
    "url": "http://<base-url>/v1/cart",
    "title": "Get Customer Cart Details",
    "description": "<p>Add Products</p> <ul> <li>Response - &quot;Common Response&quot; with cart attributes. Possible status codes are <br/>SUCCESS <br/>FAIL <br/>USER_NOT_LOGGED_IN <br/>AUTH_FAILED</li> </ul>",
    "name": "GetCart",
    "group": "Cart",
    "examples": [
      {
        "title": "Example Request:",
        "content": "{\n\t\"item\":[\n\t    {\"p_id\":121, \"p_qty\": 4},\n\t    {\"p_id\":3635, \"p_qty\": 6}\n\t]\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"code\": \"SUCCESS\",\n  \"attribute\": \"\",\n  \"data\": {\n      \"cart\": [\n          {\n              \"p_id\": \"121\",\n              \"qty\": \"4\"\n          },\n          {\n              \"p_id\": \"3635\",\n              \"qty\": \"6\"\n          }\n      ]\n  },\n  \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "data/apidoc/cart.js",
    "groupTitle": "Cart"
  },
  {
    "type": "get",
    "url": "http://<base-url>/v1/products",
    "title": "Product List",
    "description": "<p>Get all products</p> <ul> <li>Response - &quot;Common Response&quot; with product attributes. Possible status codes are <br/>SUCCESS <br/>FAIL <br/>DUPLICATE_RECORD <br/>AUTH_FAILED</li> </ul>",
    "name": "GetProductsList",
    "group": "Product",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"code\": \"SUCCESS\",\n  \"attribute\": null,\n  \"data\": {\n      \"product\": [\n          {\n              \"id\": 2,\n              \"p_title\": \"Product 2\",\n              \"p_desc\": \"Product 2 Description\",\n              \"p_price\": 20,\n              \"p_qty\": 60,\n              \"created_at\": null,\n              \"update_at\": null\n          },\n          {\n              \"id\": 1,\n              \"p_title\": \"Product 1\",\n              \"p_desc\": \"Product 1 Description \",\n              \"p_price\": 1.99,\n              \"p_qty\": 14,\n              \"created_at\": null,\n              \"update_at\": null\n          }\n      ]\n   },\n  \"message\": \"\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "data/apidoc/product.js",
    "groupTitle": "Product"
  },
  {
    "type": "post",
    "url": "http://<base-url>/v1/user/login",
    "title": "Customer Login",
    "description": "<p>Customer Login. The end point is used to customer login.</p> <ul> <li>Customer Login end point</li> <li>Response - &quot;Common Response&quot; with userId,email,fname,accessToken. Possible status codes are <br/>SUCCESS <br/>FAIL</li> </ul>",
    "name": "UserLogin",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example Request:",
        "content": "{\n\t\"email\": \"frm683@gmail.com\",\n\t\"password\": \"123456\",\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"code\": \"SUCCESS\",\n  \"attribute\": null,\n  \"data\": {\n      user\": {\n          \"userId\": 111,\n          \"email\": \"frm68366sdfdsfsdfdferfffer333df2323kj2ffff3@gmail.com\",\n          \"fname\": \"Fazlul\",\n          \"accessToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjExMSwiZW1haWwiOiJmcm02ODM2NnNkZmRzZnNkZmRmZXJmZmZlcjMzM2RmMjMyM2tqMmZmZmYzQGdtYWlsLmNvbSIsImZuYW1lIjoiRmF6bHVsIiwiaWF0IjoxNTU0MjMyOTI2fQ.rurxxhEOzFm_785-N2O2dskEa47pKyP0BvUtSI6gWDM\"\n      }\n   },\n  \"message\": \"\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "data/apidoc/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "http://<base-url>/v1/user/",
    "title": "Customer Registration",
    "description": "<p>Customer Registration. The end point is used to customer registration.</p> <ul> <li>Single customer record will be created.</li> <li>Response - &quot;Common Response&quot; with userId,email,fname,accessToken. Possible status codes are <br/>SUCCESS <br/>FAIL <br/>DUPLICATE_RECORD</li> </ul>",
    "name": "UserRegistration",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fname",
            "description": "<p>User first name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lname",
            "description": "<p>User Last name</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example Request:",
        "content": "{\n\t\"email\": \"frm683@gmail.com\",\n\t\"password\": \"123456\",\n\t\"fname\": \"Fazlul\",\n\t\"lname\": \"Mohideen\"\n\t\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"code\": \"SUCCESS\",\n  \"attribute\": null,\n  \"data\": {\n      user\": {\n          \"userId\": 111,\n          \"email\": \"frm68366sdfdsfsdfdferfffer333df2323kj2ffff3@gmail.com\",\n          \"fname\": \"Fazlul\",\n          \"accessToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjExMSwiZW1haWwiOiJmcm02ODM2NnNkZmRzZnNkZmRmZXJmZmZlcjMzM2RmMjMyM2tqMmZmZmYzQGdtYWlsLmNvbSIsImZuYW1lIjoiRmF6bHVsIiwiaWF0IjoxNTU0MjMyOTI2fQ.rurxxhEOzFm_785-N2O2dskEa47pKyP0BvUtSI6gWDM\"\n      }\n   },\n  \"message\": \"\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "data/apidoc/user.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "http://<base-url>/v1/user",
    "title": "Customer Details Update",
    "description": "<p>Customer Login. The end point is used to modify Customer details</p> <ul> <li>User must execute the Login/Registration end point before execute this API.</li> <li>Customer Details update end point. Can send any valid user attribute to update the attribute value</li> <li>Response - &quot;Common Response&quot; with userId,email,fname,accessToken. Possible status codes are <br/>SUCCESS <br/>FAIL <br/>DUPLICATE_RECORD <br/>USER_NOT_LOGGED_IN <br/>AUTH_FAILED</li> </ul>",
    "name": "UserUpdate",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>User email address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>User password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "fname",
            "description": "<p>User first name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lname",
            "description": "<p>User Last name</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example Request:",
        "content": "{\n\t\"fname\": \"Faz RM\",\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"code\": \"SUCCESS\",\n  \"attribute\": null,\n  \"data\": \"\",\n  \"message\": \"\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "data/apidoc/user.js",
    "groupTitle": "User"
  }
] });
