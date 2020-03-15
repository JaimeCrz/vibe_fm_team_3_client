describe("user can search for song", () => {
  describe("happy path", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/tracks**",
        response: "fixture:song_data.json"
      });
      cy.visit("/");
    });

    it("retrieves song from API", () => {
      cy.get("input#search-field1").type("Vertigo");
      cy.get("button#search-track").click();
      cy.get("#songName").should("contain", "Vertigo");
      cy.get("#artistName").should("contain", "U2");
    });
  });

  describe("SAD PATH user can search for song", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/tracks**",
        status: "400",
        response: {
          error_message:
            "There is no matches for the song you are trying to search"
        }
      });
      cy.visit("/");
    });
    it("User invalid search", () => {
      cy.get("input#search-field1").type("asdasdasdasd");
      cy.get("button#search-track").click();
      cy.get("#errorMessage").should("contain", "no matches for the song");
    });
  });
});
