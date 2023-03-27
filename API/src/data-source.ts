import "dotenv/config";
import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import path from "path";
import { Client } from "./entities/client.entity";
import { Contacts } from "./entities/contact.entity";
import { initial1679587071705 } from "./migrations/1679587071705-initial";
import { addpassword1679883329814 } from "./migrations/1679883329814-addpassword";

const dataSourceConfig = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, "./entities/**.{ts,js}");
  const migrationsPath: string = path.join(
    __dirname,
    "./migrations/**.{ts,js}"
  );

  const nodeEnv: string | undefined = process.env.NODE_ENV;

  if (nodeEnv === "test") {
    return {
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      entities: [entitiesPath],
    };
  }

  const dbUrl: string | undefined = process.env.DATABASE_URL;

  if (!dbUrl) {
    throw new Error("Env var DATABASE_URL does not exists");
  }

  return {
    type: "postgres",
    url: dbUrl,
    synchronize: false,
    logging: true,
    migrations: [initial1679587071705, addpassword1679883329814],
    entities: [Client, Contacts],
  };
};

const AppDataSource = new DataSource(dataSourceConfig());

export { AppDataSource };
