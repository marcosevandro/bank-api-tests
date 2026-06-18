request = require('supertest');

const getToken = async (user, password) => {
     const loginResponse = await request(process.env.BASE_URL)
                .post('/login')
                .set('Content-Type', 'application/json')
                .send({
                    'username': user,
                    'senha': password
                })

            return loginResponse.body.token

}

module.exports = {
    getToken
}