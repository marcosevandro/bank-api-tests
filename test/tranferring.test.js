request = require('supertest');
const { expect } = require('chai');
require('dotenv').config();
const { getToken } = require('../helpers/authentication');

describe('Transfer', () => {
    describe('POST /transferencias', () => {
        it('Must return a 201 status code if the transferring value is equal or more than 10', async() => {

            const token = await getToken('marcos.evandro', '123456');

            const response = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send({
                        contaOrigem: 1,
                        contaDestino: 2,
                        valor: 11,
                        token: ""
                    })

            expect(response.status).to.equal(201)
    
        })
        it('Must return a 422 status code if the transferring value is less than or equal to 10', async() => {

            const token = await getToken('marcos.evandro', '123456');

            const response = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send({
                        contaOrigem: 1,
                        contaDestino: 2,
                        valor: 5,
                        token: ""
                    })

            expect(response.status).to.equal(422)
        })
    })
})