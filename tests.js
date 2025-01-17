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

    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello("World")).toBe("Hello, World!");
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

    it('should return true if input is 5 ', function() {
        expect(isFive(5)).toBe(true);
    });

    it('should return true if input is "5" ', function() {
        expect(isFive("5")).toBe(true);
    });

});



describe('isEven', function() {
    it('should be a defined function', function() {
        expect(typeof isEven).toBe('function');
    });

    it('should return a boolean when called', function() {
        expect(typeof isEven()).toBe("boolean");
    });

    it('should return true if input is 2 ', function() {
        expect(isEven(2)).toBe(true);
    });

    it('should return true if input is -4 ', function() {
        expect(isEven(-4)).toBe(true);
    });

    it('should return false if input is 3 ', function() {
        expect(isEven(3)).toBe(false);
    });

    it('should return false if input is "banana" ', function() {
        expect(isEven("banana")).toBe(false);
    });

    it('should return true if input is "8" ', function() {
        expect(isEven("8")).toBe(true);
    });

    it('should return false if input is Infinity ', function() {
        expect(isEven(Infinity)).toBe(false);
    });

    it('should return false if input is a boolean ', function() {
        expect(isEven(true)).toBe(false);
    });

    it('should return false if there is no input ', function() {
        expect(isEven()).toBe(false);
    });

});



describe('isVowel', function() {
    it('should be a defined function', function() {
        expect(typeof isVowel).toBe('function');
    });

    it('should return a boolean when called', function() {
        expect(typeof isVowel()).toBe("boolean");
    });

    it('should return true if input is "a" ', function() {
        expect(isVowel("a")).toBe(true);
    });

    it('should return true if input is "A" ', function() {
        expect(isVowel("A")).toBe(true);
    });

    it('should return false if input is "y" ', function() {
        expect(isVowel("y")).toBe(false);
    });

    it('should return false if input is 4 ', function() {
        expect(isVowel(4)).toBe(false);
    });

    it('should return false if input is a boolean ', function() {
        expect(isVowel(true)).toBe(false);
    })

    it('should return false if input is "banana" ', function() {
        expect(isVowel("banana")).toBe(false);
    })

    it('should return false if there is no input ', function() {
        expect(isVowel()).toBe(false);
    });

});

describe('add', function() {
    it('should be a defined function', function() {
        expect(typeof add).toBe('function');
    });

    it('should be return 5 when 2 & 3 are inputs', function() {
        expect(add(2, 3)).toBe(5);
    });

    it('should be return -12 when -3 & -9 are inputs', function() {
        expect(add(-3, -9)).toBe(-12);
    });

    it('should be return 11 when "5" & 6 are inputs', function() {
        expect(add("5", 6)).toBe(11);
    });

    it('should be return 6 when "-4" & "-10" are inputs', function() {
        expect(add("-4", "10")).toBe(6);
    });

    it('should be return NaN when "banana" & "split" are inputs', function() {
        expect(add("banana", "split")).toBeNaN();
    });

    it('should be return NaN when 2 & "apples" are inputs', function() {
        expect(add(2, "apples")).toBeNaN();
    });

    it('should be return NaN when there is no input', function() {
        expect(add()).toBeNaN();
    });

});