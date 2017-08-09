describe("Routes for root", () => {
  describe("Route GET /", () => {
    it("should return a welcome message", done => {
      request
        .get('/')
        .end((err, res) => {
          expect(res.body.msg).to.be.eql('Bem-vindo a API do Museu do Audio');
          done(err);
        });
    });
  });
});
