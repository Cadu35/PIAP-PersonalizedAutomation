import { users, projectRequests, type User, type InsertUser, type ProjectRequest, type InsertProjectRequest, type LoginData } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";
import bcrypt from "bcrypt";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  authenticateUser(credentials: LoginData): Promise<User | null>;
  createProjectRequest(request: InsertProjectRequest): Promise<ProjectRequest>;
  getProjectRequests(): Promise<ProjectRequest[]>;
  getProjectRequest(id: number): Promise<ProjectRequest | undefined>;
  getCriadoresByEspecialidade(especialidade: string): Promise<User[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const hashedPassword = await bcrypt.hash(insertUser.password, 10);
    const [user] = await db
      .insert(users)
      .values({
        ...insertUser,
        password: hashedPassword,
      })
      .returning();
    return user;
  }

  async authenticateUser(credentials: LoginData): Promise<User | null> {
    const user = await this.getUserByEmail(credentials.email);
    if (!user) return null;

    const isValidPassword = await bcrypt.compare(credentials.password, user.password);
    if (!isValidPassword) return null;

    return user;
  }

  async createProjectRequest(insertRequest: InsertProjectRequest): Promise<ProjectRequest> {
    const [request] = await db
      .insert(projectRequests)
      .values({
        ...insertRequest,
        createdAt: new Date().toISOString(),
      })
      .returning();
    return request;
  }

  async getProjectRequests(): Promise<ProjectRequest[]> {
    return await db.select().from(projectRequests);
  }

  async getProjectRequest(id: number): Promise<ProjectRequest | undefined> {
    const [request] = await db.select().from(projectRequests).where(eq(projectRequests.id, id));
    return request || undefined;
  }

  async getCriadoresByEspecialidade(especialidade: string): Promise<User[]> {
    return await db
      .select()
      .from(users)
      .where(eq(users.tipo, "criador"));
  }
}

export const storage = new DatabaseStorage();
