describe("user can search for artist", () => {
  describe("happy path", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/tracks**",
        response: "fixture:artist_top_songs_data.json"
      });
      cy.visit("/");
    });

    it("retrieves artist from API", () => {
      cy.get("input#search-field").type("U2");
      cy.get("button#search").click();
      cy.get("#artistName").should("contain", "U2");
    });
  });

  describe("SAD PATH user can search for song", () => {
    beforeEach(() => {
      cy.server();
    });
    it("User invalid search", () => {
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/tracks**",
        status: "400",
        response: {
          song_not_found: [
            "There are no matches for the artist you are trying to search for"
          ]
        }
      });
      cy.visit("/");
      cy.get("input#search-field").type("asdasdasdasd");
      cy.get("button#search").click();
      cy.get("#output").should("contain", "no matches for the artist");
    });
  });
});
