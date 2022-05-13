const request = require("supertest");
const app = require("../app");
const models = require("../models");

describe("/api/history", () => {
  test("/POST create new history", (done) => {
    request(app)
      .post("/api/history")
      .send({
        user_id: 1,
        score: 100,
      })
      .then((res) => {
        expect(res.statusCode).toBe(201);
        expect(res.body.message).toBe("History added successfully");
        done();
      });
  });

  test("/GET get all history", (done) => {
    request(app)
      .get("/api/history")
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe("Success get all history");
        done();
      });
  });

  test("/GET get history by id", (done) => {
    request(app)
      .get("/api/history/1")
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe("Success get history by id");
        done();
      });
  });

  test("/GET get history by id not found", (done) => {
    request(app)
      .get("/api/history/100")
      .then((res) => {
        expect(res.statusCode).toBe(404);
        expect(res.body.message).toBe("History not found");
        done();
      });
  });

  test("/PUT update history by id", (done) => {
    request(app)
      .put("/api/history/1")
      .send({
        user_id: 1,
        score: 100,
      })
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe("Success update history");
        done();
      });
  });

  test("/PUT update history by id not found", (done) => {
    request(app)
      .put("/api/history/100")
      .send({
        user_id: 1,
        score: 100,
      })
      .then((res) => {
        expect(res.statusCode).toBe(404);
        expect(res.body.message).toBe("History not found");
        done();
      });
  });

  test("/DELETE delete history by id", (done) => {
    request(app)
      .delete("/api/history/1")
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe("Success delete history");
        done();
      });
  });

  test("/DELETE delete history by id not found", (done) => {
    request(app)
      .delete("/api/history/100")
      .then((res) => {
        expect(res.statusCode).toBe(404);
        expect(res.body.message).toBe("History not found");
        done();
      });
  });
});

afterAll(() => models.sequelize.close());
