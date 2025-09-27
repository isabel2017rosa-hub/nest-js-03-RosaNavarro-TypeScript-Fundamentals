import { User } from "../interfaces/types";

class ApiService {
  private apiUrl = "https://dummyjson.com/users";

  //Método genérico para hacer fetch a cualquier endpoint
  private async _fetch<T>(url: string): Promise<T | null> {
    try {
      const response = await fetch(url);
      if (!response.ok) return null;
      return await response.json();
    } catch (error) {
      console.error("Error al obtener datos:", error);
      return null;
    }
  }

  //Mapea el objeto de la API al tipo User definido en interfaces/types.ts
  private mapUser(apiUser: { firstName: string; age: number; email: string; gender: string }): User {
    return {
      name: apiUser.firstName,
      age: apiUser.age,
      email: apiUser.email,
      gender: apiUser.gender,
    };
  }

  // TODO: Hacer fetch a la API y mapear solo name, age, email, gender

  async getUsers(): Promise<User[]> {
    const data = await this._fetch<{ users: any[] }>(this.apiUrl);
    if (!data) return [];
    return data.users.map((u) => this.mapUser(u));
  }
  
// TODO: Obtener un usuario específico de la API
  async getUserById(id: number): Promise<User | null> {
    const url = `${this.apiUrl}/${id}`;
    const data = await this._fetch<any>(url);
    if (!data) return null;
    return this.mapUser(data);
  }
}

export default ApiService;
