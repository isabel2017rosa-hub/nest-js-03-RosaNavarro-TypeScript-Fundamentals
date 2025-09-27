// BaseEmployee.ts
import { User, Department } from "../interfaces/types";

// Clase abstracta BaseEmployee** (1.0 puntos)
abstract class BaseEmployee {
  protected id: number;
  protected name: string;
  protected age: number;
  protected email: string;
  protected gender: string;
  protected department: Department;

  constructor(user: User, id: number, department: Department) {
    // TODO: Implementar constructor
    this.id = id;
    this.name = user.name;
    this.age = user.age;
    this.email = user.email;
    this.gender = user.gender;
    this.department = department;
  }

  // ✅ Getter para acceder al ID de manera segura
  getId(): number {
    return this.id;
  }

  // Método común para obtener los detalles del empleado
  getDetails(): string {
    return `ID: ${this.id}, Nombre: ${this.name}, Edad: ${this.age}, Email: ${this.email}, Género: ${this.gender}, Departamento: ${this.department}`;
  }

  // Método abstracto que debe implementarse en las subclases
  abstract calculateSalary(): number;
}

export default BaseEmployee;
