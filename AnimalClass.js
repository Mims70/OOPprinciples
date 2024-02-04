// Principle 1: Encapsulation

// Base class for animals
class Animal {
    // Constructor for encapsulation
    constructor(name) {
      this.name = name;
    }
  
    // Encapsulation: Displaying information about the animal
    displayInfo() {
      console.log(`Name: ${this.name}`);
    }
  }
  
  // Mixin for cold-blooded behavior
  const ColdBloodedMixin = superclass => class extends superclass {
    // Constructor for encapsulation
    constructor(name) {
      super(name);
      this.coldBlooded = true;
    }
  };
  
  // Mixin for warm-blooded behavior
  const WarmBloodedMixin = superclass => class extends superclass {
    // Constructor for encapsulation
    constructor(name) {
      super(name);
      this.coldBlooded = false;
    }
  };
  
  // Mixin for invertebrate behavior
  const InvertebrateMixin = superclass => class extends superclass {
    // Constructor for encapsulation
    constructor(name) {
      super(name);
      this.backbone = false;
    }
  };
  
  // Mixin for vertebrate behavior
  const VertebrateMixin = superclass => class extends superclass {
    // Constructor for encapsulation
    constructor(name) {
      super(name);
      this.backbone = true;
    }
  };
  
  // Principle 2: Inheritance
  
  // Subclass for Arthropoda (without backbone and cold-blooded)
  class Arthropoda extends InvertebrateMixin(ColdBloodedMixin(Animal)) {
    // Encapsulation: Calling the base class constructor using super()
    constructor(name) {
      super(name);
    }
  }
  
  // Subclass for Fish (with backbone and cold-blooded)
  class Fish extends VertebrateMixin(ColdBloodedMixin(Animal)) {
    // Encapsulation: Calling the base class constructor using super()
    constructor(name) {
      super(name);
    }
  }
  
  // Subclass for Amphibia (with backbone and cold-blooded)
  class Amphibia extends VertebrateMixin(ColdBloodedMixin(Animal)) {
    // Encapsulation: Calling the base class constructor using super()
    constructor(name) {
      super(name);
    }
  }
  
  // Subclass for Reptiles (with backbone and cold-blooded)
  class Reptiles extends VertebrateMixin(ColdBloodedMixin(Animal)) {
    // Encapsulation: Calling the base class constructor using super()
    constructor(name) {
      super(name);
    }
  }
  
  // Subclass for AVES (with backbone and warm-blooded)
  class AVES extends VertebrateMixin(WarmBloodedMixin(Animal)) {
    // Encapsulation: Calling the base class constructor using super()
    constructor(name) {
      super(name);
    }
  }
  
  // Subclass for Mammals (with backbone and warm-blooded)
  class Mammals extends VertebrateMixin(WarmBloodedMixin(Animal)) {
    // Encapsulation: Calling the base class constructor using super()
    constructor(name) {
      super(name);
    }
  }
  
  // Principle 3: Abstraction
  
  // Abstraction: Displaying information about each animal using a common method
  function displayAnimalInfo(animal) {
    animal.displayInfo();
  }
  
  // Principle 4: Polymorphism
  
  // Polymorphism: Creating instances of different classes but using a common interface
  
  // Create instances of each animal class
  const spider = new Arthropoda("Butterfly");
  const goldfish = new Fish("Goldfish");
  const frog = new  Amphibia("Frog");
  const snake = new Reptiles("Turtle");
  const eagle = new AVES("Eagle");
  const dog = new Mammals("Cat");
  
  // Polymorphism: Calling the common interface to display information about each animal
  displayAnimalInfo(spider);
  displayAnimalInfo(goldfish);
  displayAnimalInfo(frog);
  displayAnimalInfo(snake);
  displayAnimalInfo(eagle);
  displayAnimalInfo(dog);
  