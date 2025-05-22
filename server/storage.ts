import { users, projectRequests, type User, type InsertUser, type ProjectRequest, type InsertProjectRequest } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createProjectRequest(request: InsertProjectRequest): Promise<ProjectRequest>;
  getProjectRequests(): Promise<ProjectRequest[]>;
  getProjectRequest(id: number): Promise<ProjectRequest | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private projectRequests: Map<number, ProjectRequest>;
  private currentUserId: number;
  private currentProjectRequestId: number;

  constructor() {
    this.users = new Map();
    this.projectRequests = new Map();
    this.currentUserId = 1;
    this.currentProjectRequestId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createProjectRequest(insertRequest: InsertProjectRequest): Promise<ProjectRequest> {
    const id = this.currentProjectRequestId++;
    const request: ProjectRequest = {
      ...insertRequest,
      id,
      createdAt: new Date().toISOString(),
    };
    this.projectRequests.set(id, request);
    return request;
  }

  async getProjectRequests(): Promise<ProjectRequest[]> {
    return Array.from(this.projectRequests.values()).sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async getProjectRequest(id: number): Promise<ProjectRequest | undefined> {
    return this.projectRequests.get(id);
  }
}

export const storage = new MemStorage();
