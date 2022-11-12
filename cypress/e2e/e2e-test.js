import sources from "../../src/assets/sources";

/* Dynamically driven Cypress test suite */
// Random number generator for sources level test subject
const randomSourceSelection = () => {
  return Math.floor(Math.random() * sources.length);
};
const sourcesIndex = randomSourceSelection();

// Random number generator for topics level test subject
const randomSecondSourceSelection = () => {
  if (sources[sourcesIndex].topics.length === undefined) {
    return cy.log("No Topics Found!");
  }
  return Math.floor(Math.random() * sources[sourcesIndex].topics.length);
};

let articlesLength = 0;

// E2E Test Suite
describe("Visits RSS Feed Home Page", () => {
  // ENV Selector function
  const ENV = (env = 0) => {
    return env !== 0 ? Cypress.env("PROD_ENV") : Cypress.env("DEV_ENV");
  };

  it("Visit the page", () => {
    // enter param 1 into TEST_ENV to test prod, leave it empty to test development
    cy.visit(ENV());
  });

  it("Open Random RSS Source", () => {
    cy.get(`[data-cy="actions-source-${sourcesIndex}"]`).click();
  });

  if (sources[sourcesIndex].topics.length > 1) {
    it("Open Random Topic", () => {
      cy.get(
        `[data-cy="actions-topic-${randomSecondSourceSelection()}"]`
      ).click();
    });

    it("Click Random Article", () => {
      // Upon get response, get total div articles elements found inside article wrapper, and pass it to random selector function
      cy.get('[data-cy="actions-article-wrapper"]')
        .children("div")
        .then((articles) => {
          articlesLength = Cypress.$(articles).length;
          const randomArticle = Math.floor(Math.random() * articlesLength);
          cy.get(`[data-cy="actions-article-${randomArticle}"]`).wait(3000).click();
        });
    });

    it("Back to Second Nav", () => {
      cy.get('[data-cy ="actions-back-button"]').click();
    });

    it("Back to Home Page", () => {
      cy.get('[data-cy ="actions-back-button"]').click();
    });
  } else {
    it("Click Random Article", () => {
      // Upon get response, get total div articles elements found inside article wrapper, and pass it to random selector function
      cy.get('[data-cy="actions-article-wrapper"]')
        .children("div")
        .then((articles) => {
          articlesLength = Cypress.$(articles).length;
          const randomArticle = Math.floor(Math.random() * articlesLength);
          cy.get(`[data-cy="actions-article-${randomArticle}"]`).wait(3000).click();
        });
    });

    it("Back to Home Page", () => {
      cy.get('[data-cy ="actions-back-button"]').click();
    });
  }
});