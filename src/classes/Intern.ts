// Intern.ts
import BaseEmployee from "./BaseEmployee";
import { User, Department } from "../interfaces/types";

export default class Intern extends BaseEmployee {
  constructor(user: User, id: number, department: Department) {
    super(user, id, department);
  }

  // Salario fijo de 1000
  calculateSalary(): number {
    return 1000;
  }

  // Método especial del intern
  getInternshipDuration(): string {
    return "3 meses"; // ejemplo
  }

  getDetails(): string {
    return `${super.getDetails()}, Tipo: Intern`;
  }
}
