/* ============================================
   coffee.js
   COMP1073 Client-Side JavaScript
   Classes, Subclasses, and Inheritance Exercise
============================================ */

/* ============================================
   PARENT CLASS: Coffee
   Reviewed from the class exercise.
   Defines the shared properties/behaviour that
   every type of coffee drink will inherit.
============================================ */
class Coffee {
  constructor(size, isDecaf) {
    this.size = size;       // e.g. "small", "medium", "large"
    this.isDecaf = isDecaf; // true/false
  }

  // Returns a simple serving message built from the base properties.
  // Any subclass that extends Coffee automatically inherits this method.
  serveIt() {
    return `Here's your ${this.size}${this.isDecaf ? " decaf" : ""} coffee!`;
  }
}

/* ============================================
   SUBCLASS: Mocha
   Inherits from Coffee using the "extends" keyword.
   Adds two properties unique to a Mocha: shots and flavour.
============================================ */
class Mocha extends Coffee {
  constructor(size, isDecaf, shots, flavour) {
    // super() passes size and isDecaf up to the Coffee constructor,
    // so the parent class handles setting those two properties.
    super(size, isDecaf);

    // Properties unique to Mocha (beyond size and isDecaf)
    this.shots = shots;     // number of espresso shots
    this.flavour = flavour; // e.g. "caramel", "vanilla", "hazelnut"
  }

  // Builds and returns a full description string for this Mocha,
  // combining inherited properties with Mocha's own properties.
  mochaDesc() {
    const shotWord = this.shots === 1 ? "shot" : "shots";
    return `A ${this.size}${this.isDecaf ? " decaf" : ""} Mocha with ` +
           `${this.shots} ${shotWord} and ${this.flavour} syrup.`;
  }
}

/* ============================================
   Instantiate two Mocha objects with different
   property values to show the class in action.
============================================ */
let mocha1 = new Mocha("large", false, 2, "caramel");
let mocha2 = new Mocha("small", true, 1, "vanilla");

/* ============================================
   Call serveIt() (inherited from Coffee) and
   mochaDesc() (defined in Mocha) on each object,
   then build up the output as HTML lines.
============================================ */
let outputHTML = "";

outputHTML += mocha1.serveIt() + "<br>";
outputHTML += mocha1.mochaDesc() + "<br><br>";

outputHTML += mocha2.serveIt() + "<br>";
outputHTML += mocha2.mochaDesc() + "<br>";

// Display everything inside the single <p id="output"> element in the HTML
document.getElementById("output").innerHTML = outputHTML;

// Also log to the console for easy debugging/inspection
console.log(mocha1.serveIt());
console.log(mocha1.mochaDesc());
console.log(mocha2.serveIt());
console.log(mocha2.mochaDesc());
