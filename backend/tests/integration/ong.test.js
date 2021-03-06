const request = require('supertest')

const app = require('../../src/app')
const connection = require('../../src/database')

describe('ONG', ()=>{
    beforeEach(async ()=>{
        await connection.migrate.rollback()
        await connection.migrate.latest()
    })
    it('should be able to a new ONG', async ()=>{
        const response = await request(app).post('/ongs').send({
            name: "APAD2",
            email: "contato@mail.com",
            whatsapp: "4700000000",
            city: "Rio do Sul",
            uf: "SC"
        })
        expect(response.body).toHaveProperty('id')
        expect(response.body.id).toHaveLength(8)
    })
    afterAll(async ()=>{
        await connection.destroy()
    })
})