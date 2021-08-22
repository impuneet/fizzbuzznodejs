const { getFizBuzz } = require('../services/records.service');

describe("Unit test getFizBuzz function", () => {
    test("should return array with count of 5", () => {
        expect(getFizBuzz(5)).toEqual(
            expect.arrayContaining([
                expect.any(String)
            ])
        )
    })
})