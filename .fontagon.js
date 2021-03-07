const fontagon = require("fontagon");

fontagon({
  files: ["icons/**/*.svg"],
  dist: "dist/",
  fontName: "fontagon-icons",
  style: "all",
  classOptions: {
    baseClass: "fontagon-icons",
    classPrefix: "ft",
  },
})
  .then((opts) => {
    console.log("done! ", opts);
  })
  .catch((err) => {
    console.log("fail! ", err);
  });
