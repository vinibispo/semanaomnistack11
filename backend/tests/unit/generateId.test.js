const generateId = require('../../src/utils/generateId')

describe('Generate ID', ()=>{
    it('should generate an id', ()=>{
        const id = generateId()
        expect(id).toHaveLength(8)
    })
})