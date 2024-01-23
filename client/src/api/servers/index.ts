import { Server } from "@/@types";
import api from "@/api/baseApi";

export async function fetchServersList(): Promise<Server> {
  try {
    const response = await api.get("/servers");

    return Promise.resolve(response.data);
  } catch (err) {
    return Promise.reject(err);
  }
}
