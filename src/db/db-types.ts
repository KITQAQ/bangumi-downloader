import {
  ColumnType,
  Generated,
  Insertable,
  JSONColumnType,
  Selectable,
  Updateable,
} from "npm:kysely";

export interface Database {
  _cache: CacheTable;
  medias: MediaTable;
}

export interface MediaTable {
  id: string;
  file_id: string;
  name: string;
  raw_title: string;
  created_at: ColumnType<Date, string | undefined, never>;
}

export interface CacheTable {
  key: string;
  value: string;
  created_at: ColumnType<Date, string | undefined, never>;
}

export type Cache = Selectable<CacheTable>;
export type NewCache = Insertable<CacheTable>;
export type CacheUpdate = Updateable<CacheTable>;
