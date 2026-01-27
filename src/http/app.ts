import { Credentials } from "../../Types";
import { api } from "./client";

// Auth service
export const login = (credentials: Credentials) =>
  api.post("/auth/login", credentials);
