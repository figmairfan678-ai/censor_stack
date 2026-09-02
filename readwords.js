var c = require("cenosrify");
console.log(c.getCensoredWords());
console.log(c.censor("Some very sad,bad and mad text."));
c.addcensoredWord("gloomy");
console.log(c.getCensoredWords());
console.log(c.censor("A very gloomy day "));