// BaseEmployee.ts
import { User, Department } from "../interfaces/types";

// Clase abstracta BaseEmployee
abstract class BaseEmployee {
  protected id: number;
  protected name: string;
  protected age: number;
  protected email: string;
  protected gender: string;
  protected department: Department;

  constructor(user: User, id: number, department: Department) {
    this.id = id;
    this.name = user.name;
    this.age = user.age;
    this.email = user.email;
    this.gender = user.gender;
    this.department = department;
  }

  getId(): number {
    return this.id;
  }

  getDetails(): string {
    return `ID: ${this.id}, Nombre: ${this.name}, Edad: ${this.age}, Email: ${this.email}, Género: ${this.gender}, Departamento: ${this.department}`;
  }

  abstract calculateSalary(): number;
}

export default BaseEmployee;

