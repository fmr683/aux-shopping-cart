const request = require('supertest');
const User = require('../../models/user');
const config = require('config');

var server;

describe('Check User Authentication ', () => {
    beforeEach(() => { server = require('../../bin/www'); })
    afterEach(async () => { server.close(); });

    let tokenId; 

    var header = {
        'api-key': config.get('api.key'),
        'api-secret': config.get('api.secret'),
        'Content-type': 'application/json'
    }
  
    const noTokenExec = () => {
      return request(server).post('/v1/users/login')
        .send({
            "email": "frm683@gmail.com",
            "password": "123456"
            
        })
        .set('Accept', 'application/json');
    }
  
    beforeEach(async () => {
        let user =  new User();
        tokenId = await user.generateAuthenticationToken();
    });
  
    it('should return 401 - no token', async () => {
        let res = await noTokenExec();
        expect(res.status).toBe(401);
    });

    const invalidEmail = () => {
        return request(server).post('/v1/users/login')
            .send({
                "email": "frm683gmail.com",
                "password": "123456"
            })
            .set(header);
    }

    it('should return 422 - invalid email', async () => {
        let res = await invalidEmail();
        expect(res.status).toBe(422);
    });

    const tokenExec = () => {
        return request(server).post('/v1/users/login')
            .send({
                "email": "frm683@gmail.com",
                "password": "123456"
            })
            .set(header);
    }

    it('should return 200 - with valid token and credentials', async () => {
        let res = await tokenExec();
        expect(res.status).toBe(200);
    });

    let getTime = new Date().getTime();

    const createUserExec = () => {
        return request(server).post('/v1/users/')
            .send({
                "email": getTime + "@gmail.com",
                "password": "123456",
                "fname": "Fazlul",
                "lname": "RMsdfsdf "
                
            })
            .set(header);
    }

    it('should return 200 - user creation success ', async () => {
        let res = await createUserExec();
        expect(res.status).toBe(200);
    });

    const createDuplicateUserExec = () => {
        return request(server).post('/v1/users/')
            .send({
                "email": getTime + "@gmail.com",
                "password": "123456",
                "fname": "<script>alert('1')</script>Fazlul",
                "lname": "RMsdfsdf "
                
            })
            .set(header);
    }

    it('should return 422 - duplicate email address check ', async () => {
        let res = await createDuplicateUserExec();
        expect(res.status).toBe(422);
    });
  
    const updateUserExec = () => {

        return request(server).put('/v1/users/')
            .send({
                "fname": "New"
            })
            .set({Authorization: tokenId.accessToken })
            .set(header);
    }

    it('should return 403 - Authentication is pass ', async () => {
        let res = await updateUserExec();
        expect(res.status).toBe(403);
    });

  });