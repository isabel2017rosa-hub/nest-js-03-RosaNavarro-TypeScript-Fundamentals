// Intern.ts
import BaseEmployee from "./BaseEmployee";
import { User, Department } from "../interfaces/types";

export default class Intern extends BaseEmployee {
  constructor(user: User, id: number, department: Department) {
    super(user, id, department);
  }

  calculateSalary(): number {
    return 1000; // Salario fijo
  }

  getInternshipDuration(): string {
    return "3 meses";
  }

  getDetails(): string {
    return `${super.getDetails()}, Tipo: Intern`;
  }
}
