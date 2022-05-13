const request = require("supertest");
const app = require("../app");
const models = require("../models");

describe("/api/usergame", () => {
  test("/POST create new usergame", (done) => {
    request(app)
      .post("/api/usergame")
      .send({
        username: "user1",
        password: "12345",
      })
      .then((res) => {
        expect(res.statusCode).toBe(201);
        expect(res.body.message).toBe("user sucessfully created");
        done();
      });
  });

  test("/GET get all usergame", (done) => {
    request(app)
      .get("/api/usergame")
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe("Success get all user");
        done();
      });
  });

  test("/GET get usergame by id", (done) => {
    request(app)
      .get("/api/usergame/1")
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe("Success get user by id");
        done();
      });
  });

  test("/GET get usergame by id not found", (done) => {
    request(app)
      .get("/api/usergame/100")
      .then((res) => {
        expect(res.statusCode).toBe(404);
        expect(res.body.message).toBe("user id not found");
        done();
      });
  });

  test("/PUT update usergame by id", (done) => {
    request(app)
      .put("/api/usergame/2")
      .send({
        username: "user1",
        password: "12345",
      })
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe("sucessfully update user");
        done();
      });
  });

  test("/PUT update usergame by id not found", (done) => {
    request(app)
      .put("/api/usergame/100")
      .send({
        username: "user1",
        password: "12345",
      })
      .then((res) => {
        expect(res.statusCode).toBe(404);
        expect(res.body.message).toBe("user id not found");
        done();
      });
  });

  test("/DELETE delete usergame by id", (done) => {
    request(app)
      .delete("/api/usergame/2")
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe("successful operation");
        done();
      });
  });

  test("/DELETE delete usergame by id not found", (done) => {
    request(app)
      .delete("/api/usergame/100")
      .then((res) => {
        expect(res.statusCode).toBe(404);
        expect(res.body.message).toBe("user id not found");
        done();
      });
  });
});

afterAll(() => models.sequelize.close());
