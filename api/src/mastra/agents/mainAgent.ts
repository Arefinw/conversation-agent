import { Mastra } from "@mastra/core";
import { storage } from "../utility/postgresStore";

export const mastra = new Mastra({
  storage: storage,
});
