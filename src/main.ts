// main.ts - Punto de entrada de la aplicación
import ApiService from "./services/ApiService";
import EmployeeService from "./services/EmployeeService";
import BaseEmployee from "./classes/BaseEmployee";

async function main(): Promise<void> {
  try {
    //Crear instancias de los servicios (inyección de dependencias)
    const apiService = new ApiService();
    const employeeService = new EmployeeService(apiService);

    //Cargar empleados desde la API
    await employeeService.loadEmployeesFromApi();

    //Obtener todos los empleados cargados
    const employees: BaseEmployee[] = employeeService.getAllEmployees();

    console.log("=== SISTEMA DE EMPLEADOS ===");

    //Mostrar detalles y salarios de cada empleado
    employees.forEach((employee) => {
      console.log(employee.getDetails());
      console.log("Salario:", employee.calculateSalary());
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

//Ejecutar la función principal
main();
