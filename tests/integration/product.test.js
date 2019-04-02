const request = require('supertest');
const Product = require('../../models/product');
const User = require('../../models/user');
const config = require('config');

var server;

describe('Check Product Routes ', () => {
    beforeEach(() => { server = require('../../bin/www'); })
    afterEach(async () => { server.close(); });

    let tokenId; 

    var header = {
        'api-key': config.get('api.key'),
        'api-secret': config.get('api.secret'),
        'Content-type': 'application/json'
    }
  
    const noProductExec = () => {
      return request(server).get('/v1/products')
      .set({Authorization: tokenId.accessToken })
      .set(header);
    }
  
    const product =  new Product();

    beforeEach(async () => {

        let user =  new User();
        tokenId = await user.generateAuthenticationToken();
    });
  
    it('should return 404 - no products', async () => {

       
        await product.delete();

        let res = await noProductExec();
        expect(res.status).toBe(404);
    });


    const productExec = () => {
        return request(server).get('/v1/products')
        .set({Authorization: tokenId.accessToken })
        .set(header);
      }

    it('should return 200 - product available', async () => {

        let data = []
        data["p_title"] = "Product 1";
        data["p_desc"] = "Product 1 description";
        data["p_price"] = 100;
        data["p_qty"] = 1;

        await product.insert(data);

        let res = await productExec();
        expect(res.status).toBe(200);
    });

  
  });