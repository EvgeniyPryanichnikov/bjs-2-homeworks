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
   

        if(this.a + this.b < this.c || this.a + this.c < this.b || this.b + this.c < this.a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }  
    
    get perimeter() {
       let per = this.a + this.b + this.c;
       return per;
    }

    get area() {
        let result = (this.а + this.b + this.c) / 2;
        let total = Math.sqrt(result * (result - this.a) * (result - this.b) * (result - this.c));
        return total.toFixed(3);
    }
}   

function getTriangle(a, b, c) {
    try {
        let trngl = new Triangle(a, b, c)
        return trngl

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
  
// Добрый день, я не понимаю где ошибка. Тесты ругаются на вычисление площади 
