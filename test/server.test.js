const server = require("../server")
const chai = require("chai")
const chaiHttp = require("chai-http")

const { expect } = chai
chai.use(chaiHttp);
describe('ExpressJS server', () => {
  it("Prints out Hello World", done => {
    chai
      .request(server)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200)
        expect(res.body.status).to.equals('success')
        expect(res.body.message).to.equals('Hello World!')
        done()
      })
  })
})