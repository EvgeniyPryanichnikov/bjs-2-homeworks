// -----Задача 1-----

function parseCount (num) {
   let res = Number.parseFloat(num);

    if (Number.isNaN(res)) {
        throw new Error("Невалидное значение");
    } 

    return res
    
}

function validateCount(num) {
    try {
        return parseCount(num)
      } catch (error) {
        return error;
      }
}

// -----Задача 2-----

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
   

        if(a + b < c || a + c < b || b + c < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }  
    
    get perimeter() {
       return this.a + this.b + this.c;
    }

    get area() {
        let result = this.perimeter / 2;
        let total = Math.sqrt(result * (result - this.a) * (result - this.b) * (result - this.c));
        return +total.toFixed(3);
    }
}   

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c)
    } catch (error) {
        return {
            get perimeter() {
                return "Ошибка! Треугольник не существует"
            },

            get area() {
                return "Ошибка! Треугольник не существует"
            }
        }

    }
}

// Спасибо за подробное объяснение)
  
