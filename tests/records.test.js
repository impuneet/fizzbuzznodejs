const request = require("supertest");
const httpStatus = require("http-status");

const app = require("../app");
describe("Record routes", () => {
  describe("POST /v1/records", () => {
    beforeEach(() => {
      validPayload = {
        count: 88
      };
      maxCountPayload = {
        count: 103
      };
      minCountPayload = {
        count: -103
      };
      inValidPayload = {
        count: "three"
      };
    });

    test("should return 200 and apply the default query options", async () => {
      const res = await request(app)
        .post("/v1/records")
        .send(validPayload)
        .expect(httpStatus.OK);

        expect(res.body).toEqual({
            output: expect.any(Array),
        });
    });

    test("should return 500 because of invalid payload", async () => {
        const res = await request(app)
          .post("/v1/records")
          .send(maxCountPayload)
          .expect(httpStatus.INTERNAL_SERVER_ERROR);

          expect(res.body).toEqual({
            success: false,
            code: 1,
            msg: "Fail",
            internalMessage: "\"count\" must be less than or equal to 100"
          });
      });

      test("should return 500 because of invalid payload", async () => {
        const res = await request(app)
          .post("/v1/records")
          .send(minCountPayload)
          .expect(httpStatus.INTERNAL_SERVER_ERROR);

          expect(res.body).toEqual({
            success: false,
            code: 1,
            msg: "Fail",
            internalMessage: "\"count\" must be greater than or equal to 1"
          });
      });

      test("should return 500 because of invalid payload", async () => {
        const res = await request(app)
          .post("/v1/records")
          .send(inValidPayload)
          .expect(httpStatus.INTERNAL_SERVER_ERROR);

          expect(res.body).toEqual({
            success: false,
            code: 1,
            msg: "Fail",
            internalMessage: "\"count\" must be a number"
          });
      });

  });
});
