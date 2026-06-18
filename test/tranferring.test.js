request = require('supertest');
const { expect } = require('chai');
require('dotenv').config();
const { getToken } = require('../helpers/authentication');
const postTransferring = require('../fixtures/postTransferring.json')

describe('Transferring', () => {
    describe('POST /transferencias', () => {

        let token

        beforeEach(async () => {
            token = await getToken('marcos.evandro', '123456');
        })

        it('Must return a 201 status code if the transferring value is equal or more than 10', async() => {

            const bodyTransferring = {...postTransferring}

            const response = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send(bodyTransferring)                    

            expect(response.status).to.equal(201)
    
        })
        it('Must return a 422 status code if the transferring value is less than or equal to 10', async() => {
            
            const bodyTransferring = {...postTransferring}
            bodyTransferring.valor = 5

            const response = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send(bodyTransferring)                    

            expect(response.status).to.equal(422)
        })
    })
})