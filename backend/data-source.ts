import { DataSource } from "typeorm"
import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    synchronize: true,
    logging: true,
    entities: ['src/models/*.ts'],
    subscribers: [],
    migrations: [],
})