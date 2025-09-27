import BaseEmployee from "./BaseEmployee";
import { User, Department } from "../interfaces/types";

// Clase concreta Developer que hereda de BaseEmployee
class Developer extends BaseEmployee {
  constructor(user: User, id: number, department: Department) {
    // Llama al constructor de la clase base
    super(user, id, department);
  }

  // Implementación del método abstracto de BaseEmployee
  calculateSalary(): number {
    return 3000; // Ejemplo salario
  }
}

export default Developer;

