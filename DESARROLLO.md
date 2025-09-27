# Desarrollo del Taller 02 - TypeScript Fundamentals

## 1. Clases implementadas

### BaseEmployee
- **Qué hice:** Creé una clase base para todos los empleados, con propiedades como nombre, salario y métodos comunes.
- **Por qué:** Permite que las demás clases (Developer y Manager) hereden funcionalidades comunes, evitando duplicación de código.
- **Dificultades:** Inicialmente no estaba segura de qué métodos incluir; se resolvió analizando funciones compartidas por todos los empleados.

### Developer
- **Qué hice:** Hereda de BaseEmployee e incluye propiedades y métodos específicos de desarrolladores.
- **Por qué:** Mantener la especialización de cada tipo de empleado.
- **Dificultades:** Asegurar la correcta herencia de propiedades de BaseEmployee.

### Manager
- **Qué hice:** Hereda de BaseEmployee, con métodos para manejo de subordinados y reportes.
- **Por qué:** Permite modelar roles jerárquicos dentro del proyecto.
- **Dificultades:** Coordinación de listas de empleados y métodos de agregación de datos.

---

## 2. Tipos de usuario y departamento
- Se crearon tipos en `types.ts` para mantener consistencia y seguridad de tipos en el proyecto.
- Facilita la validación de datos y el desarrollo con TypeScript, evitando errores en compilación.

---

## 3. Servicios

### ApiService
- **Qué hice:** Servicio encargado de obtener datos de usuarios desde una API externa usando `fetch`.
- **Por qué:** Separar la obtención de datos de la lógica del proyecto facilita mantenimiento y pruebas.
- **Dificultades:** Manejo de promesas y datos asincrónicos. Se solucionó usando `async/await`.

### EmployeeService
- **Qué hice:** Servicio que recibe `ApiService` como dependencia para obtener empleados, filtrar información y calcular salarios.
- **Por qué:** La inyección de `ApiService` permite desacoplar servicios y facilitar pruebas unitarias.
- **Dificultades:** Inicialmente instancié `ApiService` dentro del servicio, lo que dificultaba pruebas. La solución fue usar inyección de dependencias.

---

## 4. Punto de entrada (`main.ts`)
- Se instancia `EmployeeService` y se muestran empleados y sus salarios.
- Configurado para que compile sin errores y ejecute correctamente.

---

## 5. Problema con los commits

### Situación
Durante el desarrollo del proyecto olvidé hacer commits parciales por cada módulo o clase implementada.  
Al intentar hacer commits individuales, Git siempre indicaba **“nothing to commit”** porque **todos los archivos ya estaban incluidos en un único commit** en la rama principal (`main`).

### Decisión final
- Consolidé todo el desarrollo en un **único commit** en `main`.  
- Para justificar esto, documenté detalladamente cada clase, servicio y decisión en este archivo (`DESARROLLO.md`).  

### Aprendizaje
- La importancia de hacer **commits frecuentes y parciales** mientras se desarrolla un proyecto.  
- Cómo documentar correctamente decisiones y dificultades cuando un commit gigante es inevitable.

---

## 6. Inyección de dependencias
- `EmployeeService` recibe `ApiService` como parámetro en su constructor.
- Permite separar responsabilidades, mantener el código modular y facilitar pruebas unitarias.

---

## 7. Dificultades y aprendizajes generales
- Manejo de TypeScript y rutas: Aprendí a configurar correctamente `tsconfig.json` y organizar servicios y clases.  
- Manejo de archivos ignorados (`node_modules` y `dist`) usando `.gitignore`.  
- Consolidación de commits: Justificado mediante documentación detallada.
