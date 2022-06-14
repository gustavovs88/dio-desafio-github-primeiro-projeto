import { Pool } from "pg";

const connectionString =
  "postgres://gvlnjiza:BHwM5x4J1dRkS_TQCx1QQT3aQ9ZhfJN0@tuffi.db.elephantsql.com/gvlnjiza";

const db = new Pool({ connectionString });

export default db;
