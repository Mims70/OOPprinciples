# OOPprinciples

# Animal Classification System

This project implements a simple classification system for animals belonging to the Kingdom Animalia using JavaScript. It demonstrates the use of object-oriented programming (OOP) principles such as encapsulation, inheritance, abstraction, and polymorphism.

## Principles of OOP Utilized

### 1. Encapsulation

Encapsulation is achieved by bundling the properties and methods of each animal class within itself, ensuring that the internal state of an object is protected from outside interference.

In the code:
- Each animal class (`Animal`, `Arthropoda`, `Fish`, `Amphibia`, `Reptiles`, `AVES`, `Mammals`) encapsulates its properties (`name`, `backbone`, `coldBlooded`) within its constructor.
- Encapsulation is demonstrated when initializing the properties using `super()` in the subclass constructors.

### 2. Inheritance

Inheritance allows subclasses to inherit properties and methods from a parent class, promoting code reuse and establishing an "is-a" relationship between classes.

In the code:
- Subclasses (`Arthropoda`, `Fish`, `Amphibia`, `Reptiles`, `AVES`, `Mammals`) inherit from the base class (`Animal`).
- This relationship is established using the `extends` keyword in class definitions.

### 3. Abstraction

Abstraction refers to the process of hiding the complex implementation details and showing only the necessary features of an object.

In the code:
- The `displayInfo` method in the base class (`Animal`) provides an abstract way to display information about an animal.
- Subclasses utilize this method to expose specific details about themselves without revealing their internal implementation.

### 4. Polymorphism

Polymorphism allows objects of different classes to be treated as objects of a common superclass, providing a unified interface.

In the code:
- Instances of different animal classes (`spider`, `goldfish`, `frog`, etc.) are created and displayed using a common interface (`displayInfo` method).
- This demonstrates polymorphism, as objects of different subclasses can be treated uniformly.

## Usage

To run the code, simply execute it in a JavaScript environment. Each animal's information will be displayed in the console.

```javascript
// Insert the provided JavaScript code here
```

## Contributors

This project was developed by [Your Name] as a demonstration of OOP principles in JavaScript.

## License

This project is licensed under the [MIT License](LICENSE).
