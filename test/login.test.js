request = require ('supertest');
const { expect } = require ('chai');

describe('Login', () => {
    describe('POST /login', () => {
        it('Must return 200 status code with a token as a string', async () => {
            const response = await request('http://localhost:3000')
                .post('/login')
                .set('Content-Type', 'application/json')
                .send({
                    'username': 'marcos.evandro',
                    'senha': '123456'

            })
            expect(response.status).to.equal(200);
            expect(response.body.token).to.be.a('string')
        })
    })
})