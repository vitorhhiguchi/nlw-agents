import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { env } from '../env.ts'
import { schema } from './schema/index.ts'

export const sql = postgres(env.DATABASE_URL)
export const db = drizzle(sql, {
  schema,
  casing: 'camelCase', // No tutorial usaram snake_case, mas eu prefiro camelCase, lembrar disso.
})
