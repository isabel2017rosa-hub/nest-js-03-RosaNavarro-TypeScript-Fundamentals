// EmployeeService.ts
import ApiService from "./ApiService";
import BaseEmployee from "../classes/BaseEmployee";
import Developer from "../classes/Developer";
import Manager from "../classes/Manager";
import { User, Department } from "../interfaces/types";

class EmployeeService {
  private employees: BaseEmployee[] = [];

  constructor(private apiService: ApiService) {
    // TODO: Inyectar ApiService
    // ApiService se recibe desde fuera para que la clase no dependa de su creación interna.
  }

  async loadEmployeesFromApi(): Promise<void> {

    try {
      //Se cargar usuarios desde la API
      const users: User[] = await this.apiService.getUsers();

      //Se crear 2 developers y 1 manager usando datos de la API
      const developer1 = new Developer(users[0], 1, Department.IT);
      const developer2 = new Developer(users[1], 2, Department.IT);
      const manager1 = new Manager(users[2], 3, Department.HR);

      //Agregamos los empleados al arreglo privado
      this.employees.push(developer1, developer2, manager1);
    } catch (error) {
      console.error("Error al cargar empleados desde la API:", error);
    }
  }

  getEmployeeById(id: number): BaseEmployee | undefined {
    //Buscar empleado por ID usando el getter
    return this.employees.find((employee) => employee.getId() === id);
  }

  getAllEmployees(): BaseEmployee[] {
    //Retornar todos los empleados
    return this.employees;
  }

  addEmployee(employee: BaseEmployee): void {
    //Agregar nuevo empleado
    this.employees.push(employee);
  }
}

export default EmployeeService;
