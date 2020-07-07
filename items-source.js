const items = JSON.stringify({
  tools: [
    {
      name: "Deno",
      url: "https://deno.land/",
    },
    {
      name: "Editor Config",
      url: "https://editorconfig.org/",
    },
    {
      name: "Firefox Dev Tools",
      url: "https://developer.mozilla.org/en-US/docs/Tools",
    },
    {
      name: "Git",
      url: "https://git-scm.com/",
    },
    {
      name: "Lighthouse",
      url: "https://developers.google.com/web/tools/lighthouse/",
    },
    {
      name: "nvs",
      url: "https://github.com/jasongin/nvs",
    },
    {
      name: "Squoosh",
      url: "https://squoosh.app/",
    },
    {
      name: "Visual Studio Code",
      url: "https://code.visualstudio.com/",
    },
    {
      name: "Windows Terminal",
      url: "https://github.com/Microsoft/Terminal",
    },
  ],
  services: [
    {
      name: "GitHub",
      url: "https://github.com/",
    },
    {
      name: "Google Domains",
      url: "https://domains.google/",
    },
    {
      name: "Migadu",
      url: "https://www.migadu.com/",
    },
    {
      name: "Netlify",
      url: "https://www.netlify.com/",
    },
    {
      name: "Who Hosts This",
      url: "https://www.who-hosts-this.com/",
    },
  ],
  references: [
    {
      name: "CanIUse",
      url: "https://caniuse.com/",
    },
    {
      name: "javascript.info",
      url: "https://javascript.info",
    },
    {
      name: "MDN",
      url: "https://developer.mozilla.org/",
    },
  ],
  specs: [
    {
      name: "CSS Custom Properties",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS/--*",
    },
    {
      name: "CSS Grid",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout",
    },
    {
      name: "CSS Logical Properties",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties",
    },
    {
      name: "ES Modules",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",
    },
    {
      name: "Fetch API",
      url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
    },
    {
      name: "HTML Picture element",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture",
    },
    {
      name: "JS Await",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await",
    },
    {
      name: "JS Destructuring Assignment",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment",
    },
  ],
  potential: [
    {
      name: "Import Maps",
      url: "https://github.com/WICG/import-maps",
    },
  ],
  sunset: [
    {
      name: "24 ways",
      url: "https://24ways.org/",
    },
  ],
});

Deno.writeTextFileSync('dist/js/items.js', `export const utilityBeltItems = JSON.parse('${items}')`);
