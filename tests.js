// Unit tests for the helloWorld function
 describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be defined as a function', function () {
        expect(typeof sayHello).toBe('function');
    });

    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });

    it('should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });

    it('should return the string "Hello, Alex!" when executed', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });

    it('should return the string "Hello, Pat!" when executed', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });

    it('should return "Hello, World!" = true when executed', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });

    it('should return "Hello, World!" = false when executed', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });

});

describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });

    it('should return a boolean when called', function() {
        expect(typeof isFive()).toBe("boolean");
    });

    it('should return true if input is "5" ', function() {
        expect(isFive(true)).toBe("5");
    });


});