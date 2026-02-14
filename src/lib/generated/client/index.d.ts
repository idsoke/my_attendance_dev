
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Jenjang
 * 
 */
export type Jenjang = $Result.DefaultSelection<Prisma.$JenjangPayload>
/**
 * Model Upa
 * 
 */
export type Upa = $Result.DefaultSelection<Prisma.$UpaPayload>
/**
 * Model Dpc
 * 
 */
export type Dpc = $Result.DefaultSelection<Prisma.$DpcPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Activity
 * 
 */
export type Activity = $Result.DefaultSelection<Prisma.$ActivityPayload>
/**
 * Model Attendance
 * 
 */
export type Attendance = $Result.DefaultSelection<Prisma.$AttendancePayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model Pertanyaan
 * 
 */
export type Pertanyaan = $Result.DefaultSelection<Prisma.$PertanyaanPayload>
/**
 * Model Translation
 * 
 */
export type Translation = $Result.DefaultSelection<Prisma.$TranslationPayload>
/**
 * Model Menu
 * 
 */
export type Menu = $Result.DefaultSelection<Prisma.$MenuPayload>
/**
 * Model RoleAccess
 * 
 */
export type RoleAccess = $Result.DefaultSelection<Prisma.$RoleAccessPayload>
/**
 * Model ApplicationConfig
 * 
 */
export type ApplicationConfig = $Result.DefaultSelection<Prisma.$ApplicationConfigPayload>
/**
 * Model Presensi
 * 
 */
export type Presensi = $Result.DefaultSelection<Prisma.$PresensiPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  EDITOR: 'EDITOR',
  USER: 'USER',
  PENGGUNA: 'PENGGUNA',
  SEKRETARIS: 'SEKRETARIS'
};

export type Role = (typeof Role)[keyof typeof Role]


export const UserStatus: {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  SUSPENDED: 'SUSPENDED'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const TipeJawaban: {
  TEXTBOX: 'TEXTBOX',
  OPTION: 'OPTION',
  TANGGAL: 'TANGGAL',
  LISTBOX: 'LISTBOX'
};

export type TipeJawaban = (typeof TipeJawaban)[keyof typeof TipeJawaban]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type TipeJawaban = $Enums.TipeJawaban

export const TipeJawaban: typeof $Enums.TipeJawaban

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Jenjangs
 * const jenjangs = await prisma.jenjang.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Jenjangs
   * const jenjangs = await prisma.jenjang.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.jenjang`: Exposes CRUD operations for the **Jenjang** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jenjangs
    * const jenjangs = await prisma.jenjang.findMany()
    * ```
    */
  get jenjang(): Prisma.JenjangDelegate<ExtArgs>;

  /**
   * `prisma.upa`: Exposes CRUD operations for the **Upa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Upas
    * const upas = await prisma.upa.findMany()
    * ```
    */
  get upa(): Prisma.UpaDelegate<ExtArgs>;

  /**
   * `prisma.dpc`: Exposes CRUD operations for the **Dpc** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dpcs
    * const dpcs = await prisma.dpc.findMany()
    * ```
    */
  get dpc(): Prisma.DpcDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.activity`: Exposes CRUD operations for the **Activity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activities
    * const activities = await prisma.activity.findMany()
    * ```
    */
  get activity(): Prisma.ActivityDelegate<ExtArgs>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **Attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.AttendanceDelegate<ExtArgs>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs>;

  /**
   * `prisma.pertanyaan`: Exposes CRUD operations for the **Pertanyaan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pertanyaans
    * const pertanyaans = await prisma.pertanyaan.findMany()
    * ```
    */
  get pertanyaan(): Prisma.PertanyaanDelegate<ExtArgs>;

  /**
   * `prisma.translation`: Exposes CRUD operations for the **Translation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Translations
    * const translations = await prisma.translation.findMany()
    * ```
    */
  get translation(): Prisma.TranslationDelegate<ExtArgs>;

  /**
   * `prisma.menu`: Exposes CRUD operations for the **Menu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Menus
    * const menus = await prisma.menu.findMany()
    * ```
    */
  get menu(): Prisma.MenuDelegate<ExtArgs>;

  /**
   * `prisma.roleAccess`: Exposes CRUD operations for the **RoleAccess** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoleAccesses
    * const roleAccesses = await prisma.roleAccess.findMany()
    * ```
    */
  get roleAccess(): Prisma.RoleAccessDelegate<ExtArgs>;

  /**
   * `prisma.applicationConfig`: Exposes CRUD operations for the **ApplicationConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApplicationConfigs
    * const applicationConfigs = await prisma.applicationConfig.findMany()
    * ```
    */
  get applicationConfig(): Prisma.ApplicationConfigDelegate<ExtArgs>;

  /**
   * `prisma.presensi`: Exposes CRUD operations for the **Presensi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Presensis
    * const presensis = await prisma.presensi.findMany()
    * ```
    */
  get presensi(): Prisma.PresensiDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Jenjang: 'Jenjang',
    Upa: 'Upa',
    Dpc: 'Dpc',
    User: 'User',
    Activity: 'Activity',
    Attendance: 'Attendance',
    AuditLog: 'AuditLog',
    Pertanyaan: 'Pertanyaan',
    Translation: 'Translation',
    Menu: 'Menu',
    RoleAccess: 'RoleAccess',
    ApplicationConfig: 'ApplicationConfig',
    Presensi: 'Presensi'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "jenjang" | "upa" | "dpc" | "user" | "activity" | "attendance" | "auditLog" | "pertanyaan" | "translation" | "menu" | "roleAccess" | "applicationConfig" | "presensi"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Jenjang: {
        payload: Prisma.$JenjangPayload<ExtArgs>
        fields: Prisma.JenjangFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JenjangFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenjangPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JenjangFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenjangPayload>
          }
          findFirst: {
            args: Prisma.JenjangFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenjangPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JenjangFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenjangPayload>
          }
          findMany: {
            args: Prisma.JenjangFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenjangPayload>[]
          }
          create: {
            args: Prisma.JenjangCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenjangPayload>
          }
          createMany: {
            args: Prisma.JenjangCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.JenjangDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenjangPayload>
          }
          update: {
            args: Prisma.JenjangUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenjangPayload>
          }
          deleteMany: {
            args: Prisma.JenjangDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JenjangUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JenjangUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenjangPayload>
          }
          aggregate: {
            args: Prisma.JenjangAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJenjang>
          }
          groupBy: {
            args: Prisma.JenjangGroupByArgs<ExtArgs>
            result: $Utils.Optional<JenjangGroupByOutputType>[]
          }
          count: {
            args: Prisma.JenjangCountArgs<ExtArgs>
            result: $Utils.Optional<JenjangCountAggregateOutputType> | number
          }
        }
      }
      Upa: {
        payload: Prisma.$UpaPayload<ExtArgs>
        fields: Prisma.UpaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UpaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UpaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpaPayload>
          }
          findFirst: {
            args: Prisma.UpaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UpaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpaPayload>
          }
          findMany: {
            args: Prisma.UpaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpaPayload>[]
          }
          create: {
            args: Prisma.UpaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpaPayload>
          }
          createMany: {
            args: Prisma.UpaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UpaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpaPayload>
          }
          update: {
            args: Prisma.UpaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpaPayload>
          }
          deleteMany: {
            args: Prisma.UpaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UpaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UpaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpaPayload>
          }
          aggregate: {
            args: Prisma.UpaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUpa>
          }
          groupBy: {
            args: Prisma.UpaGroupByArgs<ExtArgs>
            result: $Utils.Optional<UpaGroupByOutputType>[]
          }
          count: {
            args: Prisma.UpaCountArgs<ExtArgs>
            result: $Utils.Optional<UpaCountAggregateOutputType> | number
          }
        }
      }
      Dpc: {
        payload: Prisma.$DpcPayload<ExtArgs>
        fields: Prisma.DpcFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DpcFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DpcPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DpcFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DpcPayload>
          }
          findFirst: {
            args: Prisma.DpcFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DpcPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DpcFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DpcPayload>
          }
          findMany: {
            args: Prisma.DpcFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DpcPayload>[]
          }
          create: {
            args: Prisma.DpcCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DpcPayload>
          }
          createMany: {
            args: Prisma.DpcCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DpcDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DpcPayload>
          }
          update: {
            args: Prisma.DpcUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DpcPayload>
          }
          deleteMany: {
            args: Prisma.DpcDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DpcUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DpcUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DpcPayload>
          }
          aggregate: {
            args: Prisma.DpcAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDpc>
          }
          groupBy: {
            args: Prisma.DpcGroupByArgs<ExtArgs>
            result: $Utils.Optional<DpcGroupByOutputType>[]
          }
          count: {
            args: Prisma.DpcCountArgs<ExtArgs>
            result: $Utils.Optional<DpcCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Activity: {
        payload: Prisma.$ActivityPayload<ExtArgs>
        fields: Prisma.ActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findFirst: {
            args: Prisma.ActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findMany: {
            args: Prisma.ActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          create: {
            args: Prisma.ActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          createMany: {
            args: Prisma.ActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          update: {
            args: Prisma.ActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          deleteMany: {
            args: Prisma.ActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          aggregate: {
            args: Prisma.ActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivity>
          }
          groupBy: {
            args: Prisma.ActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityCountAggregateOutputType> | number
          }
        }
      }
      Attendance: {
        payload: Prisma.$AttendancePayload<ExtArgs>
        fields: Prisma.AttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findFirst: {
            args: Prisma.AttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findMany: {
            args: Prisma.AttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          create: {
            args: Prisma.AttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          createMany: {
            args: Prisma.AttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          update: {
            args: Prisma.AttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          deleteMany: {
            args: Prisma.AttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.AttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      Pertanyaan: {
        payload: Prisma.$PertanyaanPayload<ExtArgs>
        fields: Prisma.PertanyaanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PertanyaanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PertanyaanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PertanyaanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PertanyaanPayload>
          }
          findFirst: {
            args: Prisma.PertanyaanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PertanyaanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PertanyaanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PertanyaanPayload>
          }
          findMany: {
            args: Prisma.PertanyaanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PertanyaanPayload>[]
          }
          create: {
            args: Prisma.PertanyaanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PertanyaanPayload>
          }
          createMany: {
            args: Prisma.PertanyaanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PertanyaanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PertanyaanPayload>
          }
          update: {
            args: Prisma.PertanyaanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PertanyaanPayload>
          }
          deleteMany: {
            args: Prisma.PertanyaanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PertanyaanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PertanyaanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PertanyaanPayload>
          }
          aggregate: {
            args: Prisma.PertanyaanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePertanyaan>
          }
          groupBy: {
            args: Prisma.PertanyaanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PertanyaanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PertanyaanCountArgs<ExtArgs>
            result: $Utils.Optional<PertanyaanCountAggregateOutputType> | number
          }
        }
      }
      Translation: {
        payload: Prisma.$TranslationPayload<ExtArgs>
        fields: Prisma.TranslationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TranslationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TranslationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload>
          }
          findFirst: {
            args: Prisma.TranslationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TranslationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload>
          }
          findMany: {
            args: Prisma.TranslationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload>[]
          }
          create: {
            args: Prisma.TranslationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload>
          }
          createMany: {
            args: Prisma.TranslationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TranslationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload>
          }
          update: {
            args: Prisma.TranslationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload>
          }
          deleteMany: {
            args: Prisma.TranslationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TranslationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TranslationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload>
          }
          aggregate: {
            args: Prisma.TranslationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTranslation>
          }
          groupBy: {
            args: Prisma.TranslationGroupByArgs<ExtArgs>
            result: $Utils.Optional<TranslationGroupByOutputType>[]
          }
          count: {
            args: Prisma.TranslationCountArgs<ExtArgs>
            result: $Utils.Optional<TranslationCountAggregateOutputType> | number
          }
        }
      }
      Menu: {
        payload: Prisma.$MenuPayload<ExtArgs>
        fields: Prisma.MenuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          findFirst: {
            args: Prisma.MenuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          findMany: {
            args: Prisma.MenuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>[]
          }
          create: {
            args: Prisma.MenuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          createMany: {
            args: Prisma.MenuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MenuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          update: {
            args: Prisma.MenuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          deleteMany: {
            args: Prisma.MenuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MenuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MenuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          aggregate: {
            args: Prisma.MenuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenu>
          }
          groupBy: {
            args: Prisma.MenuGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenuCountArgs<ExtArgs>
            result: $Utils.Optional<MenuCountAggregateOutputType> | number
          }
        }
      }
      RoleAccess: {
        payload: Prisma.$RoleAccessPayload<ExtArgs>
        fields: Prisma.RoleAccessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleAccessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleAccessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleAccessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleAccessPayload>
          }
          findFirst: {
            args: Prisma.RoleAccessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleAccessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleAccessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleAccessPayload>
          }
          findMany: {
            args: Prisma.RoleAccessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleAccessPayload>[]
          }
          create: {
            args: Prisma.RoleAccessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleAccessPayload>
          }
          createMany: {
            args: Prisma.RoleAccessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoleAccessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleAccessPayload>
          }
          update: {
            args: Prisma.RoleAccessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleAccessPayload>
          }
          deleteMany: {
            args: Prisma.RoleAccessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleAccessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoleAccessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleAccessPayload>
          }
          aggregate: {
            args: Prisma.RoleAccessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoleAccess>
          }
          groupBy: {
            args: Prisma.RoleAccessGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleAccessGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleAccessCountArgs<ExtArgs>
            result: $Utils.Optional<RoleAccessCountAggregateOutputType> | number
          }
        }
      }
      ApplicationConfig: {
        payload: Prisma.$ApplicationConfigPayload<ExtArgs>
        fields: Prisma.ApplicationConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationConfigPayload>
          }
          findFirst: {
            args: Prisma.ApplicationConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationConfigPayload>
          }
          findMany: {
            args: Prisma.ApplicationConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationConfigPayload>[]
          }
          create: {
            args: Prisma.ApplicationConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationConfigPayload>
          }
          createMany: {
            args: Prisma.ApplicationConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ApplicationConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationConfigPayload>
          }
          update: {
            args: Prisma.ApplicationConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationConfigPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ApplicationConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationConfigPayload>
          }
          aggregate: {
            args: Prisma.ApplicationConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplicationConfig>
          }
          groupBy: {
            args: Prisma.ApplicationConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationConfigCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationConfigCountAggregateOutputType> | number
          }
        }
      }
      Presensi: {
        payload: Prisma.$PresensiPayload<ExtArgs>
        fields: Prisma.PresensiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PresensiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresensiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PresensiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresensiPayload>
          }
          findFirst: {
            args: Prisma.PresensiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresensiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PresensiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresensiPayload>
          }
          findMany: {
            args: Prisma.PresensiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresensiPayload>[]
          }
          create: {
            args: Prisma.PresensiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresensiPayload>
          }
          createMany: {
            args: Prisma.PresensiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PresensiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresensiPayload>
          }
          update: {
            args: Prisma.PresensiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresensiPayload>
          }
          deleteMany: {
            args: Prisma.PresensiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PresensiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PresensiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresensiPayload>
          }
          aggregate: {
            args: Prisma.PresensiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePresensi>
          }
          groupBy: {
            args: Prisma.PresensiGroupByArgs<ExtArgs>
            result: $Utils.Optional<PresensiGroupByOutputType>[]
          }
          count: {
            args: Prisma.PresensiCountArgs<ExtArgs>
            result: $Utils.Optional<PresensiCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type JenjangCountOutputType
   */

  export type JenjangCountOutputType = {
    users: number
  }

  export type JenjangCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | JenjangCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * JenjangCountOutputType without action
   */
  export type JenjangCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenjangCountOutputType
     */
    select?: JenjangCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JenjangCountOutputType without action
   */
  export type JenjangCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type UpaCountOutputType
   */

  export type UpaCountOutputType = {
    users: number
    activities: number
  }

  export type UpaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UpaCountOutputTypeCountUsersArgs
    activities?: boolean | UpaCountOutputTypeCountActivitiesArgs
  }

  // Custom InputTypes
  /**
   * UpaCountOutputType without action
   */
  export type UpaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpaCountOutputType
     */
    select?: UpaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UpaCountOutputType without action
   */
  export type UpaCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UpaCountOutputType without action
   */
  export type UpaCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
  }


  /**
   * Count Type DpcCountOutputType
   */

  export type DpcCountOutputType = {
    upas: number
  }

  export type DpcCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    upas?: boolean | DpcCountOutputTypeCountUpasArgs
  }

  // Custom InputTypes
  /**
   * DpcCountOutputType without action
   */
  export type DpcCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DpcCountOutputType
     */
    select?: DpcCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DpcCountOutputType without action
   */
  export type DpcCountOutputTypeCountUpasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UpaWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    mentees: number
    activities: number
    auditLogs: number
    attendances: number
    presensi: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentees?: boolean | UserCountOutputTypeCountMenteesArgs
    activities?: boolean | UserCountOutputTypeCountActivitiesArgs
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs
    attendances?: boolean | UserCountOutputTypeCountAttendancesArgs
    presensi?: boolean | UserCountOutputTypeCountPresensiArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMenteesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPresensiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PresensiWhereInput
  }


  /**
   * Count Type ActivityCountOutputType
   */

  export type ActivityCountOutputType = {
    attendances: number
  }

  export type ActivityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendances?: boolean | ActivityCountOutputTypeCountAttendancesArgs
  }

  // Custom InputTypes
  /**
   * ActivityCountOutputType without action
   */
  export type ActivityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityCountOutputType
     */
    select?: ActivityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ActivityCountOutputType without action
   */
  export type ActivityCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }


  /**
   * Count Type MenuCountOutputType
   */

  export type MenuCountOutputType = {
    accesses: number
  }

  export type MenuCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accesses?: boolean | MenuCountOutputTypeCountAccessesArgs
  }

  // Custom InputTypes
  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCountOutputType
     */
    select?: MenuCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeCountAccessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleAccessWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Jenjang
   */

  export type AggregateJenjang = {
    _count: JenjangCountAggregateOutputType | null
    _min: JenjangMinAggregateOutputType | null
    _max: JenjangMaxAggregateOutputType | null
  }

  export type JenjangMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JenjangMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JenjangCountAggregateOutputType = {
    id: number
    code: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JenjangMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JenjangMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JenjangCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JenjangAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jenjang to aggregate.
     */
    where?: JenjangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jenjangs to fetch.
     */
    orderBy?: JenjangOrderByWithRelationInput | JenjangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JenjangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jenjangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jenjangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jenjangs
    **/
    _count?: true | JenjangCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JenjangMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JenjangMaxAggregateInputType
  }

  export type GetJenjangAggregateType<T extends JenjangAggregateArgs> = {
        [P in keyof T & keyof AggregateJenjang]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJenjang[P]>
      : GetScalarType<T[P], AggregateJenjang[P]>
  }




  export type JenjangGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JenjangWhereInput
    orderBy?: JenjangOrderByWithAggregationInput | JenjangOrderByWithAggregationInput[]
    by: JenjangScalarFieldEnum[] | JenjangScalarFieldEnum
    having?: JenjangScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JenjangCountAggregateInputType | true
    _min?: JenjangMinAggregateInputType
    _max?: JenjangMaxAggregateInputType
  }

  export type JenjangGroupByOutputType = {
    id: string
    code: string
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: JenjangCountAggregateOutputType | null
    _min: JenjangMinAggregateOutputType | null
    _max: JenjangMaxAggregateOutputType | null
  }

  type GetJenjangGroupByPayload<T extends JenjangGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JenjangGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JenjangGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JenjangGroupByOutputType[P]>
            : GetScalarType<T[P], JenjangGroupByOutputType[P]>
        }
      >
    >


  export type JenjangSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Jenjang$usersArgs<ExtArgs>
    _count?: boolean | JenjangCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jenjang"]>


  export type JenjangSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JenjangInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Jenjang$usersArgs<ExtArgs>
    _count?: boolean | JenjangCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $JenjangPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Jenjang"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["jenjang"]>
    composites: {}
  }

  type JenjangGetPayload<S extends boolean | null | undefined | JenjangDefaultArgs> = $Result.GetResult<Prisma.$JenjangPayload, S>

  type JenjangCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<JenjangFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: JenjangCountAggregateInputType | true
    }

  export interface JenjangDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Jenjang'], meta: { name: 'Jenjang' } }
    /**
     * Find zero or one Jenjang that matches the filter.
     * @param {JenjangFindUniqueArgs} args - Arguments to find a Jenjang
     * @example
     * // Get one Jenjang
     * const jenjang = await prisma.jenjang.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JenjangFindUniqueArgs>(args: SelectSubset<T, JenjangFindUniqueArgs<ExtArgs>>): Prisma__JenjangClient<$Result.GetResult<Prisma.$JenjangPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Jenjang that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {JenjangFindUniqueOrThrowArgs} args - Arguments to find a Jenjang
     * @example
     * // Get one Jenjang
     * const jenjang = await prisma.jenjang.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JenjangFindUniqueOrThrowArgs>(args: SelectSubset<T, JenjangFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JenjangClient<$Result.GetResult<Prisma.$JenjangPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Jenjang that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenjangFindFirstArgs} args - Arguments to find a Jenjang
     * @example
     * // Get one Jenjang
     * const jenjang = await prisma.jenjang.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JenjangFindFirstArgs>(args?: SelectSubset<T, JenjangFindFirstArgs<ExtArgs>>): Prisma__JenjangClient<$Result.GetResult<Prisma.$JenjangPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Jenjang that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenjangFindFirstOrThrowArgs} args - Arguments to find a Jenjang
     * @example
     * // Get one Jenjang
     * const jenjang = await prisma.jenjang.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JenjangFindFirstOrThrowArgs>(args?: SelectSubset<T, JenjangFindFirstOrThrowArgs<ExtArgs>>): Prisma__JenjangClient<$Result.GetResult<Prisma.$JenjangPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Jenjangs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenjangFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jenjangs
     * const jenjangs = await prisma.jenjang.findMany()
     * 
     * // Get first 10 Jenjangs
     * const jenjangs = await prisma.jenjang.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jenjangWithIdOnly = await prisma.jenjang.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JenjangFindManyArgs>(args?: SelectSubset<T, JenjangFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JenjangPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Jenjang.
     * @param {JenjangCreateArgs} args - Arguments to create a Jenjang.
     * @example
     * // Create one Jenjang
     * const Jenjang = await prisma.jenjang.create({
     *   data: {
     *     // ... data to create a Jenjang
     *   }
     * })
     * 
     */
    create<T extends JenjangCreateArgs>(args: SelectSubset<T, JenjangCreateArgs<ExtArgs>>): Prisma__JenjangClient<$Result.GetResult<Prisma.$JenjangPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Jenjangs.
     * @param {JenjangCreateManyArgs} args - Arguments to create many Jenjangs.
     * @example
     * // Create many Jenjangs
     * const jenjang = await prisma.jenjang.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JenjangCreateManyArgs>(args?: SelectSubset<T, JenjangCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Jenjang.
     * @param {JenjangDeleteArgs} args - Arguments to delete one Jenjang.
     * @example
     * // Delete one Jenjang
     * const Jenjang = await prisma.jenjang.delete({
     *   where: {
     *     // ... filter to delete one Jenjang
     *   }
     * })
     * 
     */
    delete<T extends JenjangDeleteArgs>(args: SelectSubset<T, JenjangDeleteArgs<ExtArgs>>): Prisma__JenjangClient<$Result.GetResult<Prisma.$JenjangPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Jenjang.
     * @param {JenjangUpdateArgs} args - Arguments to update one Jenjang.
     * @example
     * // Update one Jenjang
     * const jenjang = await prisma.jenjang.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JenjangUpdateArgs>(args: SelectSubset<T, JenjangUpdateArgs<ExtArgs>>): Prisma__JenjangClient<$Result.GetResult<Prisma.$JenjangPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Jenjangs.
     * @param {JenjangDeleteManyArgs} args - Arguments to filter Jenjangs to delete.
     * @example
     * // Delete a few Jenjangs
     * const { count } = await prisma.jenjang.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JenjangDeleteManyArgs>(args?: SelectSubset<T, JenjangDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jenjangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenjangUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jenjangs
     * const jenjang = await prisma.jenjang.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JenjangUpdateManyArgs>(args: SelectSubset<T, JenjangUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Jenjang.
     * @param {JenjangUpsertArgs} args - Arguments to update or create a Jenjang.
     * @example
     * // Update or create a Jenjang
     * const jenjang = await prisma.jenjang.upsert({
     *   create: {
     *     // ... data to create a Jenjang
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jenjang we want to update
     *   }
     * })
     */
    upsert<T extends JenjangUpsertArgs>(args: SelectSubset<T, JenjangUpsertArgs<ExtArgs>>): Prisma__JenjangClient<$Result.GetResult<Prisma.$JenjangPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Jenjangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenjangCountArgs} args - Arguments to filter Jenjangs to count.
     * @example
     * // Count the number of Jenjangs
     * const count = await prisma.jenjang.count({
     *   where: {
     *     // ... the filter for the Jenjangs we want to count
     *   }
     * })
    **/
    count<T extends JenjangCountArgs>(
      args?: Subset<T, JenjangCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JenjangCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jenjang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenjangAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JenjangAggregateArgs>(args: Subset<T, JenjangAggregateArgs>): Prisma.PrismaPromise<GetJenjangAggregateType<T>>

    /**
     * Group by Jenjang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenjangGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JenjangGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JenjangGroupByArgs['orderBy'] }
        : { orderBy?: JenjangGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JenjangGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJenjangGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Jenjang model
   */
  readonly fields: JenjangFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Jenjang.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JenjangClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Jenjang$usersArgs<ExtArgs> = {}>(args?: Subset<T, Jenjang$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Jenjang model
   */ 
  interface JenjangFieldRefs {
    readonly id: FieldRef<"Jenjang", 'String'>
    readonly code: FieldRef<"Jenjang", 'String'>
    readonly name: FieldRef<"Jenjang", 'String'>
    readonly description: FieldRef<"Jenjang", 'String'>
    readonly createdAt: FieldRef<"Jenjang", 'DateTime'>
    readonly updatedAt: FieldRef<"Jenjang", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Jenjang findUnique
   */
  export type JenjangFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jenjang
     */
    select?: JenjangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenjangInclude<ExtArgs> | null
    /**
     * Filter, which Jenjang to fetch.
     */
    where: JenjangWhereUniqueInput
  }

  /**
   * Jenjang findUniqueOrThrow
   */
  export type JenjangFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jenjang
     */
    select?: JenjangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenjangInclude<ExtArgs> | null
    /**
     * Filter, which Jenjang to fetch.
     */
    where: JenjangWhereUniqueInput
  }

  /**
   * Jenjang findFirst
   */
  export type JenjangFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jenjang
     */
    select?: JenjangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenjangInclude<ExtArgs> | null
    /**
     * Filter, which Jenjang to fetch.
     */
    where?: JenjangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jenjangs to fetch.
     */
    orderBy?: JenjangOrderByWithRelationInput | JenjangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jenjangs.
     */
    cursor?: JenjangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jenjangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jenjangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jenjangs.
     */
    distinct?: JenjangScalarFieldEnum | JenjangScalarFieldEnum[]
  }

  /**
   * Jenjang findFirstOrThrow
   */
  export type JenjangFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jenjang
     */
    select?: JenjangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenjangInclude<ExtArgs> | null
    /**
     * Filter, which Jenjang to fetch.
     */
    where?: JenjangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jenjangs to fetch.
     */
    orderBy?: JenjangOrderByWithRelationInput | JenjangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jenjangs.
     */
    cursor?: JenjangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jenjangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jenjangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jenjangs.
     */
    distinct?: JenjangScalarFieldEnum | JenjangScalarFieldEnum[]
  }

  /**
   * Jenjang findMany
   */
  export type JenjangFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jenjang
     */
    select?: JenjangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenjangInclude<ExtArgs> | null
    /**
     * Filter, which Jenjangs to fetch.
     */
    where?: JenjangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jenjangs to fetch.
     */
    orderBy?: JenjangOrderByWithRelationInput | JenjangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jenjangs.
     */
    cursor?: JenjangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jenjangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jenjangs.
     */
    skip?: number
    distinct?: JenjangScalarFieldEnum | JenjangScalarFieldEnum[]
  }

  /**
   * Jenjang create
   */
  export type JenjangCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jenjang
     */
    select?: JenjangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenjangInclude<ExtArgs> | null
    /**
     * The data needed to create a Jenjang.
     */
    data: XOR<JenjangCreateInput, JenjangUncheckedCreateInput>
  }

  /**
   * Jenjang createMany
   */
  export type JenjangCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jenjangs.
     */
    data: JenjangCreateManyInput | JenjangCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Jenjang update
   */
  export type JenjangUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jenjang
     */
    select?: JenjangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenjangInclude<ExtArgs> | null
    /**
     * The data needed to update a Jenjang.
     */
    data: XOR<JenjangUpdateInput, JenjangUncheckedUpdateInput>
    /**
     * Choose, which Jenjang to update.
     */
    where: JenjangWhereUniqueInput
  }

  /**
   * Jenjang updateMany
   */
  export type JenjangUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jenjangs.
     */
    data: XOR<JenjangUpdateManyMutationInput, JenjangUncheckedUpdateManyInput>
    /**
     * Filter which Jenjangs to update
     */
    where?: JenjangWhereInput
  }

  /**
   * Jenjang upsert
   */
  export type JenjangUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jenjang
     */
    select?: JenjangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenjangInclude<ExtArgs> | null
    /**
     * The filter to search for the Jenjang to update in case it exists.
     */
    where: JenjangWhereUniqueInput
    /**
     * In case the Jenjang found by the `where` argument doesn't exist, create a new Jenjang with this data.
     */
    create: XOR<JenjangCreateInput, JenjangUncheckedCreateInput>
    /**
     * In case the Jenjang was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JenjangUpdateInput, JenjangUncheckedUpdateInput>
  }

  /**
   * Jenjang delete
   */
  export type JenjangDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jenjang
     */
    select?: JenjangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenjangInclude<ExtArgs> | null
    /**
     * Filter which Jenjang to delete.
     */
    where: JenjangWhereUniqueInput
  }

  /**
   * Jenjang deleteMany
   */
  export type JenjangDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jenjangs to delete
     */
    where?: JenjangWhereInput
  }

  /**
   * Jenjang.users
   */
  export type Jenjang$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Jenjang without action
   */
  export type JenjangDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jenjang
     */
    select?: JenjangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenjangInclude<ExtArgs> | null
  }


  /**
   * Model Upa
   */

  export type AggregateUpa = {
    _count: UpaCountAggregateOutputType | null
    _min: UpaMinAggregateOutputType | null
    _max: UpaMaxAggregateOutputType | null
  }

  export type UpaMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    location: string | null
    dpcId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UpaMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    location: string | null
    dpcId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UpaCountAggregateOutputType = {
    id: number
    code: number
    name: number
    location: number
    dpcId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UpaMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    location?: true
    dpcId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UpaMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    location?: true
    dpcId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UpaCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    location?: true
    dpcId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UpaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Upa to aggregate.
     */
    where?: UpaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Upas to fetch.
     */
    orderBy?: UpaOrderByWithRelationInput | UpaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UpaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Upas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Upas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Upas
    **/
    _count?: true | UpaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UpaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UpaMaxAggregateInputType
  }

  export type GetUpaAggregateType<T extends UpaAggregateArgs> = {
        [P in keyof T & keyof AggregateUpa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUpa[P]>
      : GetScalarType<T[P], AggregateUpa[P]>
  }




  export type UpaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UpaWhereInput
    orderBy?: UpaOrderByWithAggregationInput | UpaOrderByWithAggregationInput[]
    by: UpaScalarFieldEnum[] | UpaScalarFieldEnum
    having?: UpaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UpaCountAggregateInputType | true
    _min?: UpaMinAggregateInputType
    _max?: UpaMaxAggregateInputType
  }

  export type UpaGroupByOutputType = {
    id: string
    code: string
    name: string
    location: string | null
    dpcId: string | null
    createdAt: Date
    updatedAt: Date
    _count: UpaCountAggregateOutputType | null
    _min: UpaMinAggregateOutputType | null
    _max: UpaMaxAggregateOutputType | null
  }

  type GetUpaGroupByPayload<T extends UpaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UpaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UpaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UpaGroupByOutputType[P]>
            : GetScalarType<T[P], UpaGroupByOutputType[P]>
        }
      >
    >


  export type UpaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    location?: boolean
    dpcId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dpc?: boolean | Upa$dpcArgs<ExtArgs>
    users?: boolean | Upa$usersArgs<ExtArgs>
    activities?: boolean | Upa$activitiesArgs<ExtArgs>
    _count?: boolean | UpaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["upa"]>


  export type UpaSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    location?: boolean
    dpcId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UpaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dpc?: boolean | Upa$dpcArgs<ExtArgs>
    users?: boolean | Upa$usersArgs<ExtArgs>
    activities?: boolean | Upa$activitiesArgs<ExtArgs>
    _count?: boolean | UpaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UpaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Upa"
    objects: {
      dpc: Prisma.$DpcPayload<ExtArgs> | null
      users: Prisma.$UserPayload<ExtArgs>[]
      activities: Prisma.$ActivityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      location: string | null
      dpcId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["upa"]>
    composites: {}
  }

  type UpaGetPayload<S extends boolean | null | undefined | UpaDefaultArgs> = $Result.GetResult<Prisma.$UpaPayload, S>

  type UpaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UpaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UpaCountAggregateInputType | true
    }

  export interface UpaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Upa'], meta: { name: 'Upa' } }
    /**
     * Find zero or one Upa that matches the filter.
     * @param {UpaFindUniqueArgs} args - Arguments to find a Upa
     * @example
     * // Get one Upa
     * const upa = await prisma.upa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UpaFindUniqueArgs>(args: SelectSubset<T, UpaFindUniqueArgs<ExtArgs>>): Prisma__UpaClient<$Result.GetResult<Prisma.$UpaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Upa that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UpaFindUniqueOrThrowArgs} args - Arguments to find a Upa
     * @example
     * // Get one Upa
     * const upa = await prisma.upa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UpaFindUniqueOrThrowArgs>(args: SelectSubset<T, UpaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UpaClient<$Result.GetResult<Prisma.$UpaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Upa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpaFindFirstArgs} args - Arguments to find a Upa
     * @example
     * // Get one Upa
     * const upa = await prisma.upa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UpaFindFirstArgs>(args?: SelectSubset<T, UpaFindFirstArgs<ExtArgs>>): Prisma__UpaClient<$Result.GetResult<Prisma.$UpaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Upa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpaFindFirstOrThrowArgs} args - Arguments to find a Upa
     * @example
     * // Get one Upa
     * const upa = await prisma.upa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UpaFindFirstOrThrowArgs>(args?: SelectSubset<T, UpaFindFirstOrThrowArgs<ExtArgs>>): Prisma__UpaClient<$Result.GetResult<Prisma.$UpaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Upas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Upas
     * const upas = await prisma.upa.findMany()
     * 
     * // Get first 10 Upas
     * const upas = await prisma.upa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const upaWithIdOnly = await prisma.upa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UpaFindManyArgs>(args?: SelectSubset<T, UpaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Upa.
     * @param {UpaCreateArgs} args - Arguments to create a Upa.
     * @example
     * // Create one Upa
     * const Upa = await prisma.upa.create({
     *   data: {
     *     // ... data to create a Upa
     *   }
     * })
     * 
     */
    create<T extends UpaCreateArgs>(args: SelectSubset<T, UpaCreateArgs<ExtArgs>>): Prisma__UpaClient<$Result.GetResult<Prisma.$UpaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Upas.
     * @param {UpaCreateManyArgs} args - Arguments to create many Upas.
     * @example
     * // Create many Upas
     * const upa = await prisma.upa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UpaCreateManyArgs>(args?: SelectSubset<T, UpaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Upa.
     * @param {UpaDeleteArgs} args - Arguments to delete one Upa.
     * @example
     * // Delete one Upa
     * const Upa = await prisma.upa.delete({
     *   where: {
     *     // ... filter to delete one Upa
     *   }
     * })
     * 
     */
    delete<T extends UpaDeleteArgs>(args: SelectSubset<T, UpaDeleteArgs<ExtArgs>>): Prisma__UpaClient<$Result.GetResult<Prisma.$UpaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Upa.
     * @param {UpaUpdateArgs} args - Arguments to update one Upa.
     * @example
     * // Update one Upa
     * const upa = await prisma.upa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UpaUpdateArgs>(args: SelectSubset<T, UpaUpdateArgs<ExtArgs>>): Prisma__UpaClient<$Result.GetResult<Prisma.$UpaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Upas.
     * @param {UpaDeleteManyArgs} args - Arguments to filter Upas to delete.
     * @example
     * // Delete a few Upas
     * const { count } = await prisma.upa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UpaDeleteManyArgs>(args?: SelectSubset<T, UpaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Upas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Upas
     * const upa = await prisma.upa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UpaUpdateManyArgs>(args: SelectSubset<T, UpaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Upa.
     * @param {UpaUpsertArgs} args - Arguments to update or create a Upa.
     * @example
     * // Update or create a Upa
     * const upa = await prisma.upa.upsert({
     *   create: {
     *     // ... data to create a Upa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Upa we want to update
     *   }
     * })
     */
    upsert<T extends UpaUpsertArgs>(args: SelectSubset<T, UpaUpsertArgs<ExtArgs>>): Prisma__UpaClient<$Result.GetResult<Prisma.$UpaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Upas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpaCountArgs} args - Arguments to filter Upas to count.
     * @example
     * // Count the number of Upas
     * const count = await prisma.upa.count({
     *   where: {
     *     // ... the filter for the Upas we want to count
     *   }
     * })
    **/
    count<T extends UpaCountArgs>(
      args?: Subset<T, UpaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UpaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Upa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UpaAggregateArgs>(args: Subset<T, UpaAggregateArgs>): Prisma.PrismaPromise<GetUpaAggregateType<T>>

    /**
     * Group by Upa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UpaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UpaGroupByArgs['orderBy'] }
        : { orderBy?: UpaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UpaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUpaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Upa model
   */
  readonly fields: UpaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Upa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UpaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dpc<T extends Upa$dpcArgs<ExtArgs> = {}>(args?: Subset<T, Upa$dpcArgs<ExtArgs>>): Prisma__DpcClient<$Result.GetResult<Prisma.$DpcPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    users<T extends Upa$usersArgs<ExtArgs> = {}>(args?: Subset<T, Upa$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    activities<T extends Upa$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, Upa$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Upa model
   */ 
  interface UpaFieldRefs {
    readonly id: FieldRef<"Upa", 'String'>
    readonly code: FieldRef<"Upa", 'String'>
    readonly name: FieldRef<"Upa", 'String'>
    readonly location: FieldRef<"Upa", 'String'>
    readonly dpcId: FieldRef<"Upa", 'String'>
    readonly createdAt: FieldRef<"Upa", 'DateTime'>
    readonly updatedAt: FieldRef<"Upa", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Upa findUnique
   */
  export type UpaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upa
     */
    select?: UpaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpaInclude<ExtArgs> | null
    /**
     * Filter, which Upa to fetch.
     */
    where: UpaWhereUniqueInput
  }

  /**
   * Upa findUniqueOrThrow
   */
  export type UpaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upa
     */
    select?: UpaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpaInclude<ExtArgs> | null
    /**
     * Filter, which Upa to fetch.
     */
    where: UpaWhereUniqueInput
  }

  /**
   * Upa findFirst
   */
  export type UpaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upa
     */
    select?: UpaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpaInclude<ExtArgs> | null
    /**
     * Filter, which Upa to fetch.
     */
    where?: UpaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Upas to fetch.
     */
    orderBy?: UpaOrderByWithRelationInput | UpaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Upas.
     */
    cursor?: UpaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Upas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Upas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Upas.
     */
    distinct?: UpaScalarFieldEnum | UpaScalarFieldEnum[]
  }

  /**
   * Upa findFirstOrThrow
   */
  export type UpaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upa
     */
    select?: UpaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpaInclude<ExtArgs> | null
    /**
     * Filter, which Upa to fetch.
     */
    where?: UpaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Upas to fetch.
     */
    orderBy?: UpaOrderByWithRelationInput | UpaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Upas.
     */
    cursor?: UpaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Upas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Upas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Upas.
     */
    distinct?: UpaScalarFieldEnum | UpaScalarFieldEnum[]
  }

  /**
   * Upa findMany
   */
  export type UpaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upa
     */
    select?: UpaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpaInclude<ExtArgs> | null
    /**
     * Filter, which Upas to fetch.
     */
    where?: UpaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Upas to fetch.
     */
    orderBy?: UpaOrderByWithRelationInput | UpaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Upas.
     */
    cursor?: UpaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Upas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Upas.
     */
    skip?: number
    distinct?: UpaScalarFieldEnum | UpaScalarFieldEnum[]
  }

  /**
   * Upa create
   */
  export type UpaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upa
     */
    select?: UpaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpaInclude<ExtArgs> | null
    /**
     * The data needed to create a Upa.
     */
    data: XOR<UpaCreateInput, UpaUncheckedCreateInput>
  }

  /**
   * Upa createMany
   */
  export type UpaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Upas.
     */
    data: UpaCreateManyInput | UpaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Upa update
   */
  export type UpaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upa
     */
    select?: UpaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpaInclude<ExtArgs> | null
    /**
     * The data needed to update a Upa.
     */
    data: XOR<UpaUpdateInput, UpaUncheckedUpdateInput>
    /**
     * Choose, which Upa to update.
     */
    where: UpaWhereUniqueInput
  }

  /**
   * Upa updateMany
   */
  export type UpaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Upas.
     */
    data: XOR<UpaUpdateManyMutationInput, UpaUncheckedUpdateManyInput>
    /**
     * Filter which Upas to update
     */
    where?: UpaWhereInput
  }

  /**
   * Upa upsert
   */
  export type UpaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upa
     */
    select?: UpaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpaInclude<ExtArgs> | null
    /**
     * The filter to search for the Upa to update in case it exists.
     */
    where: UpaWhereUniqueInput
    /**
     * In case the Upa found by the `where` argument doesn't exist, create a new Upa with this data.
     */
    create: XOR<UpaCreateInput, UpaUncheckedCreateInput>
    /**
     * In case the Upa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UpaUpdateInput, UpaUncheckedUpdateInput>
  }

  /**
   * Upa delete
   */
  export type UpaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upa
     */
    select?: UpaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpaInclude<ExtArgs> | null
    /**
     * Filter which Upa to delete.
     */
    where: UpaWhereUniqueInput
  }

  /**
   * Upa deleteMany
   */
  export type UpaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Upas to delete
     */
    where?: UpaWhereInput
  }

  /**
   * Upa.dpc
   */
  export type Upa$dpcArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dpc
     */
    select?: DpcSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DpcInclude<ExtArgs> | null
    where?: DpcWhereInput
  }

  /**
   * Upa.users
   */
  export type Upa$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Upa.activities
   */
  export type Upa$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    cursor?: ActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Upa without action
   */
  export type UpaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upa
     */
    select?: UpaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpaInclude<ExtArgs> | null
  }


  /**
   * Model Dpc
   */

  export type AggregateDpc = {
    _count: DpcCountAggregateOutputType | null
    _min: DpcMinAggregateOutputType | null
    _max: DpcMaxAggregateOutputType | null
  }

  export type DpcMinAggregateOutputType = {
    id: string | null
    kodeDpc: string | null
    namaDpc: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DpcMaxAggregateOutputType = {
    id: string | null
    kodeDpc: string | null
    namaDpc: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DpcCountAggregateOutputType = {
    id: number
    kodeDpc: number
    namaDpc: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DpcMinAggregateInputType = {
    id?: true
    kodeDpc?: true
    namaDpc?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DpcMaxAggregateInputType = {
    id?: true
    kodeDpc?: true
    namaDpc?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DpcCountAggregateInputType = {
    id?: true
    kodeDpc?: true
    namaDpc?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DpcAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dpc to aggregate.
     */
    where?: DpcWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dpcs to fetch.
     */
    orderBy?: DpcOrderByWithRelationInput | DpcOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DpcWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dpcs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dpcs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dpcs
    **/
    _count?: true | DpcCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DpcMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DpcMaxAggregateInputType
  }

  export type GetDpcAggregateType<T extends DpcAggregateArgs> = {
        [P in keyof T & keyof AggregateDpc]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDpc[P]>
      : GetScalarType<T[P], AggregateDpc[P]>
  }




  export type DpcGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DpcWhereInput
    orderBy?: DpcOrderByWithAggregationInput | DpcOrderByWithAggregationInput[]
    by: DpcScalarFieldEnum[] | DpcScalarFieldEnum
    having?: DpcScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DpcCountAggregateInputType | true
    _min?: DpcMinAggregateInputType
    _max?: DpcMaxAggregateInputType
  }

  export type DpcGroupByOutputType = {
    id: string
    kodeDpc: string
    namaDpc: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: DpcCountAggregateOutputType | null
    _min: DpcMinAggregateOutputType | null
    _max: DpcMaxAggregateOutputType | null
  }

  type GetDpcGroupByPayload<T extends DpcGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DpcGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DpcGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DpcGroupByOutputType[P]>
            : GetScalarType<T[P], DpcGroupByOutputType[P]>
        }
      >
    >


  export type DpcSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kodeDpc?: boolean
    namaDpc?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    upas?: boolean | Dpc$upasArgs<ExtArgs>
    _count?: boolean | DpcCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dpc"]>


  export type DpcSelectScalar = {
    id?: boolean
    kodeDpc?: boolean
    namaDpc?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DpcInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    upas?: boolean | Dpc$upasArgs<ExtArgs>
    _count?: boolean | DpcCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DpcPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dpc"
    objects: {
      upas: Prisma.$UpaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      kodeDpc: string
      namaDpc: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dpc"]>
    composites: {}
  }

  type DpcGetPayload<S extends boolean | null | undefined | DpcDefaultArgs> = $Result.GetResult<Prisma.$DpcPayload, S>

  type DpcCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DpcFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DpcCountAggregateInputType | true
    }

  export interface DpcDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dpc'], meta: { name: 'Dpc' } }
    /**
     * Find zero or one Dpc that matches the filter.
     * @param {DpcFindUniqueArgs} args - Arguments to find a Dpc
     * @example
     * // Get one Dpc
     * const dpc = await prisma.dpc.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DpcFindUniqueArgs>(args: SelectSubset<T, DpcFindUniqueArgs<ExtArgs>>): Prisma__DpcClient<$Result.GetResult<Prisma.$DpcPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Dpc that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DpcFindUniqueOrThrowArgs} args - Arguments to find a Dpc
     * @example
     * // Get one Dpc
     * const dpc = await prisma.dpc.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DpcFindUniqueOrThrowArgs>(args: SelectSubset<T, DpcFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DpcClient<$Result.GetResult<Prisma.$DpcPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Dpc that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DpcFindFirstArgs} args - Arguments to find a Dpc
     * @example
     * // Get one Dpc
     * const dpc = await prisma.dpc.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DpcFindFirstArgs>(args?: SelectSubset<T, DpcFindFirstArgs<ExtArgs>>): Prisma__DpcClient<$Result.GetResult<Prisma.$DpcPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Dpc that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DpcFindFirstOrThrowArgs} args - Arguments to find a Dpc
     * @example
     * // Get one Dpc
     * const dpc = await prisma.dpc.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DpcFindFirstOrThrowArgs>(args?: SelectSubset<T, DpcFindFirstOrThrowArgs<ExtArgs>>): Prisma__DpcClient<$Result.GetResult<Prisma.$DpcPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Dpcs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DpcFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dpcs
     * const dpcs = await prisma.dpc.findMany()
     * 
     * // Get first 10 Dpcs
     * const dpcs = await prisma.dpc.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dpcWithIdOnly = await prisma.dpc.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DpcFindManyArgs>(args?: SelectSubset<T, DpcFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DpcPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Dpc.
     * @param {DpcCreateArgs} args - Arguments to create a Dpc.
     * @example
     * // Create one Dpc
     * const Dpc = await prisma.dpc.create({
     *   data: {
     *     // ... data to create a Dpc
     *   }
     * })
     * 
     */
    create<T extends DpcCreateArgs>(args: SelectSubset<T, DpcCreateArgs<ExtArgs>>): Prisma__DpcClient<$Result.GetResult<Prisma.$DpcPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Dpcs.
     * @param {DpcCreateManyArgs} args - Arguments to create many Dpcs.
     * @example
     * // Create many Dpcs
     * const dpc = await prisma.dpc.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DpcCreateManyArgs>(args?: SelectSubset<T, DpcCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Dpc.
     * @param {DpcDeleteArgs} args - Arguments to delete one Dpc.
     * @example
     * // Delete one Dpc
     * const Dpc = await prisma.dpc.delete({
     *   where: {
     *     // ... filter to delete one Dpc
     *   }
     * })
     * 
     */
    delete<T extends DpcDeleteArgs>(args: SelectSubset<T, DpcDeleteArgs<ExtArgs>>): Prisma__DpcClient<$Result.GetResult<Prisma.$DpcPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Dpc.
     * @param {DpcUpdateArgs} args - Arguments to update one Dpc.
     * @example
     * // Update one Dpc
     * const dpc = await prisma.dpc.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DpcUpdateArgs>(args: SelectSubset<T, DpcUpdateArgs<ExtArgs>>): Prisma__DpcClient<$Result.GetResult<Prisma.$DpcPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Dpcs.
     * @param {DpcDeleteManyArgs} args - Arguments to filter Dpcs to delete.
     * @example
     * // Delete a few Dpcs
     * const { count } = await prisma.dpc.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DpcDeleteManyArgs>(args?: SelectSubset<T, DpcDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dpcs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DpcUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dpcs
     * const dpc = await prisma.dpc.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DpcUpdateManyArgs>(args: SelectSubset<T, DpcUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Dpc.
     * @param {DpcUpsertArgs} args - Arguments to update or create a Dpc.
     * @example
     * // Update or create a Dpc
     * const dpc = await prisma.dpc.upsert({
     *   create: {
     *     // ... data to create a Dpc
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dpc we want to update
     *   }
     * })
     */
    upsert<T extends DpcUpsertArgs>(args: SelectSubset<T, DpcUpsertArgs<ExtArgs>>): Prisma__DpcClient<$Result.GetResult<Prisma.$DpcPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Dpcs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DpcCountArgs} args - Arguments to filter Dpcs to count.
     * @example
     * // Count the number of Dpcs
     * const count = await prisma.dpc.count({
     *   where: {
     *     // ... the filter for the Dpcs we want to count
     *   }
     * })
    **/
    count<T extends DpcCountArgs>(
      args?: Subset<T, DpcCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DpcCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dpc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DpcAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DpcAggregateArgs>(args: Subset<T, DpcAggregateArgs>): Prisma.PrismaPromise<GetDpcAggregateType<T>>

    /**
     * Group by Dpc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DpcGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DpcGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DpcGroupByArgs['orderBy'] }
        : { orderBy?: DpcGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DpcGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDpcGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dpc model
   */
  readonly fields: DpcFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dpc.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DpcClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    upas<T extends Dpc$upasArgs<ExtArgs> = {}>(args?: Subset<T, Dpc$upasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpaPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Dpc model
   */ 
  interface DpcFieldRefs {
    readonly id: FieldRef<"Dpc", 'String'>
    readonly kodeDpc: FieldRef<"Dpc", 'String'>
    readonly namaDpc: FieldRef<"Dpc", 'String'>
    readonly isActive: FieldRef<"Dpc", 'Boolean'>
    readonly createdAt: FieldRef<"Dpc", 'DateTime'>
    readonly updatedAt: FieldRef<"Dpc", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Dpc findUnique
   */
  export type DpcFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dpc
     */
    select?: DpcSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DpcInclude<ExtArgs> | null
    /**
     * Filter, which Dpc to fetch.
     */
    where: DpcWhereUniqueInput
  }

  /**
   * Dpc findUniqueOrThrow
   */
  export type DpcFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dpc
     */
    select?: DpcSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DpcInclude<ExtArgs> | null
    /**
     * Filter, which Dpc to fetch.
     */
    where: DpcWhereUniqueInput
  }

  /**
   * Dpc findFirst
   */
  export type DpcFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dpc
     */
    select?: DpcSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DpcInclude<ExtArgs> | null
    /**
     * Filter, which Dpc to fetch.
     */
    where?: DpcWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dpcs to fetch.
     */
    orderBy?: DpcOrderByWithRelationInput | DpcOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dpcs.
     */
    cursor?: DpcWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dpcs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dpcs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dpcs.
     */
    distinct?: DpcScalarFieldEnum | DpcScalarFieldEnum[]
  }

  /**
   * Dpc findFirstOrThrow
   */
  export type DpcFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dpc
     */
    select?: DpcSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DpcInclude<ExtArgs> | null
    /**
     * Filter, which Dpc to fetch.
     */
    where?: DpcWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dpcs to fetch.
     */
    orderBy?: DpcOrderByWithRelationInput | DpcOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dpcs.
     */
    cursor?: DpcWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dpcs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dpcs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dpcs.
     */
    distinct?: DpcScalarFieldEnum | DpcScalarFieldEnum[]
  }

  /**
   * Dpc findMany
   */
  export type DpcFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dpc
     */
    select?: DpcSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DpcInclude<ExtArgs> | null
    /**
     * Filter, which Dpcs to fetch.
     */
    where?: DpcWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dpcs to fetch.
     */
    orderBy?: DpcOrderByWithRelationInput | DpcOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dpcs.
     */
    cursor?: DpcWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dpcs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dpcs.
     */
    skip?: number
    distinct?: DpcScalarFieldEnum | DpcScalarFieldEnum[]
  }

  /**
   * Dpc create
   */
  export type DpcCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dpc
     */
    select?: DpcSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DpcInclude<ExtArgs> | null
    /**
     * The data needed to create a Dpc.
     */
    data: XOR<DpcCreateInput, DpcUncheckedCreateInput>
  }

  /**
   * Dpc createMany
   */
  export type DpcCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dpcs.
     */
    data: DpcCreateManyInput | DpcCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dpc update
   */
  export type DpcUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dpc
     */
    select?: DpcSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DpcInclude<ExtArgs> | null
    /**
     * The data needed to update a Dpc.
     */
    data: XOR<DpcUpdateInput, DpcUncheckedUpdateInput>
    /**
     * Choose, which Dpc to update.
     */
    where: DpcWhereUniqueInput
  }

  /**
   * Dpc updateMany
   */
  export type DpcUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dpcs.
     */
    data: XOR<DpcUpdateManyMutationInput, DpcUncheckedUpdateManyInput>
    /**
     * Filter which Dpcs to update
     */
    where?: DpcWhereInput
  }

  /**
   * Dpc upsert
   */
  export type DpcUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dpc
     */
    select?: DpcSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DpcInclude<ExtArgs> | null
    /**
     * The filter to search for the Dpc to update in case it exists.
     */
    where: DpcWhereUniqueInput
    /**
     * In case the Dpc found by the `where` argument doesn't exist, create a new Dpc with this data.
     */
    create: XOR<DpcCreateInput, DpcUncheckedCreateInput>
    /**
     * In case the Dpc was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DpcUpdateInput, DpcUncheckedUpdateInput>
  }

  /**
   * Dpc delete
   */
  export type DpcDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dpc
     */
    select?: DpcSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DpcInclude<ExtArgs> | null
    /**
     * Filter which Dpc to delete.
     */
    where: DpcWhereUniqueInput
  }

  /**
   * Dpc deleteMany
   */
  export type DpcDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dpcs to delete
     */
    where?: DpcWhereInput
  }

  /**
   * Dpc.upas
   */
  export type Dpc$upasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upa
     */
    select?: UpaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpaInclude<ExtArgs> | null
    where?: UpaWhereInput
    orderBy?: UpaOrderByWithRelationInput | UpaOrderByWithRelationInput[]
    cursor?: UpaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UpaScalarFieldEnum | UpaScalarFieldEnum[]
  }

  /**
   * Dpc without action
   */
  export type DpcDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dpc
     */
    select?: DpcSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DpcInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    fullName: string | null
    phoneNumber: string | null
    employeeId: string | null
    role: $Enums.Role | null
    status: $Enums.UserStatus | null
    jenjangId: string | null
    upaId: string | null
    mentorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    fullName: string | null
    phoneNumber: string | null
    employeeId: string | null
    role: $Enums.Role | null
    status: $Enums.UserStatus | null
    jenjangId: string | null
    upaId: string | null
    mentorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    fullName: number
    phoneNumber: number
    employeeId: number
    role: number
    status: number
    jenjangId: number
    upaId: number
    mentorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    fullName?: true
    phoneNumber?: true
    employeeId?: true
    role?: true
    status?: true
    jenjangId?: true
    upaId?: true
    mentorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    fullName?: true
    phoneNumber?: true
    employeeId?: true
    role?: true
    status?: true
    jenjangId?: true
    upaId?: true
    mentorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    fullName?: true
    phoneNumber?: true
    employeeId?: true
    role?: true
    status?: true
    jenjangId?: true
    upaId?: true
    mentorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    fullName: string
    phoneNumber: string | null
    employeeId: string | null
    role: $Enums.Role
    status: $Enums.UserStatus
    jenjangId: string | null
    upaId: string | null
    mentorId: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    fullName?: boolean
    phoneNumber?: boolean
    employeeId?: boolean
    role?: boolean
    status?: boolean
    jenjangId?: boolean
    upaId?: boolean
    mentorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jenjang?: boolean | User$jenjangArgs<ExtArgs>
    upa?: boolean | User$upaArgs<ExtArgs>
    mentor?: boolean | User$mentorArgs<ExtArgs>
    mentees?: boolean | User$menteesArgs<ExtArgs>
    activities?: boolean | User$activitiesArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    attendances?: boolean | User$attendancesArgs<ExtArgs>
    presensi?: boolean | User$presensiArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>


  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    fullName?: boolean
    phoneNumber?: boolean
    employeeId?: boolean
    role?: boolean
    status?: boolean
    jenjangId?: boolean
    upaId?: boolean
    mentorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jenjang?: boolean | User$jenjangArgs<ExtArgs>
    upa?: boolean | User$upaArgs<ExtArgs>
    mentor?: boolean | User$mentorArgs<ExtArgs>
    mentees?: boolean | User$menteesArgs<ExtArgs>
    activities?: boolean | User$activitiesArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    attendances?: boolean | User$attendancesArgs<ExtArgs>
    presensi?: boolean | User$presensiArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      jenjang: Prisma.$JenjangPayload<ExtArgs> | null
      upa: Prisma.$UpaPayload<ExtArgs> | null
      mentor: Prisma.$UserPayload<ExtArgs> | null
      mentees: Prisma.$UserPayload<ExtArgs>[]
      activities: Prisma.$ActivityPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
      attendances: Prisma.$AttendancePayload<ExtArgs>[]
      presensi: Prisma.$PresensiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      fullName: string
      phoneNumber: string | null
      employeeId: string | null
      role: $Enums.Role
      status: $Enums.UserStatus
      jenjangId: string | null
      upaId: string | null
      mentorId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jenjang<T extends User$jenjangArgs<ExtArgs> = {}>(args?: Subset<T, User$jenjangArgs<ExtArgs>>): Prisma__JenjangClient<$Result.GetResult<Prisma.$JenjangPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    upa<T extends User$upaArgs<ExtArgs> = {}>(args?: Subset<T, User$upaArgs<ExtArgs>>): Prisma__UpaClient<$Result.GetResult<Prisma.$UpaPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    mentor<T extends User$mentorArgs<ExtArgs> = {}>(args?: Subset<T, User$mentorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    mentees<T extends User$menteesArgs<ExtArgs> = {}>(args?: Subset<T, User$menteesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    activities<T extends User$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, User$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany"> | Null>
    auditLogs<T extends User$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany"> | Null>
    attendances<T extends User$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, User$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany"> | Null>
    presensi<T extends User$presensiArgs<ExtArgs> = {}>(args?: Subset<T, User$presensiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresensiPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly employeeId: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly jenjangId: FieldRef<"User", 'String'>
    readonly upaId: FieldRef<"User", 'String'>
    readonly mentorId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.jenjang
   */
  export type User$jenjangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jenjang
     */
    select?: JenjangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenjangInclude<ExtArgs> | null
    where?: JenjangWhereInput
  }

  /**
   * User.upa
   */
  export type User$upaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upa
     */
    select?: UpaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpaInclude<ExtArgs> | null
    where?: UpaWhereInput
  }

  /**
   * User.mentor
   */
  export type User$mentorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * User.mentees
   */
  export type User$menteesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.activities
   */
  export type User$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    cursor?: ActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * User.auditLogs
   */
  export type User$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * User.attendances
   */
  export type User$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * User.presensi
   */
  export type User$presensiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presensi
     */
    select?: PresensiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresensiInclude<ExtArgs> | null
    where?: PresensiWhereInput
    orderBy?: PresensiOrderByWithRelationInput | PresensiOrderByWithRelationInput[]
    cursor?: PresensiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PresensiScalarFieldEnum | PresensiScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Activity
   */

  export type AggregateActivity = {
    _count: ActivityCountAggregateOutputType | null
    _avg: ActivityAvgAggregateOutputType | null
    _sum: ActivitySumAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  export type ActivityAvgAggregateOutputType = {
    flag: number | null
    latitude: number | null
    longitude: number | null
    radius: number | null
  }

  export type ActivitySumAggregateOutputType = {
    flag: number | null
    latitude: number | null
    longitude: number | null
    radius: number | null
  }

  export type ActivityMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    date: Date | null
    location: string | null
    flag: number | null
    latitude: number | null
    longitude: number | null
    radius: number | null
    userId: string | null
    upaId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    attendanceToken: string | null
    isActive: boolean | null
  }

  export type ActivityMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    date: Date | null
    location: string | null
    flag: number | null
    latitude: number | null
    longitude: number | null
    radius: number | null
    userId: string | null
    upaId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    attendanceToken: string | null
    isActive: boolean | null
  }

  export type ActivityCountAggregateOutputType = {
    id: number
    title: number
    description: number
    date: number
    location: number
    flag: number
    latitude: number
    longitude: number
    radius: number
    userId: number
    upaId: number
    answers: number
    createdAt: number
    updatedAt: number
    attendanceToken: number
    isActive: number
    _all: number
  }


  export type ActivityAvgAggregateInputType = {
    flag?: true
    latitude?: true
    longitude?: true
    radius?: true
  }

  export type ActivitySumAggregateInputType = {
    flag?: true
    latitude?: true
    longitude?: true
    radius?: true
  }

  export type ActivityMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    date?: true
    location?: true
    flag?: true
    latitude?: true
    longitude?: true
    radius?: true
    userId?: true
    upaId?: true
    createdAt?: true
    updatedAt?: true
    attendanceToken?: true
    isActive?: true
  }

  export type ActivityMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    date?: true
    location?: true
    flag?: true
    latitude?: true
    longitude?: true
    radius?: true
    userId?: true
    upaId?: true
    createdAt?: true
    updatedAt?: true
    attendanceToken?: true
    isActive?: true
  }

  export type ActivityCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    date?: true
    location?: true
    flag?: true
    latitude?: true
    longitude?: true
    radius?: true
    userId?: true
    upaId?: true
    answers?: true
    createdAt?: true
    updatedAt?: true
    attendanceToken?: true
    isActive?: true
    _all?: true
  }

  export type ActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activity to aggregate.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Activities
    **/
    _count?: true | ActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityMaxAggregateInputType
  }

  export type GetActivityAggregateType<T extends ActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivity[P]>
      : GetScalarType<T[P], AggregateActivity[P]>
  }




  export type ActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithAggregationInput | ActivityOrderByWithAggregationInput[]
    by: ActivityScalarFieldEnum[] | ActivityScalarFieldEnum
    having?: ActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityCountAggregateInputType | true
    _avg?: ActivityAvgAggregateInputType
    _sum?: ActivitySumAggregateInputType
    _min?: ActivityMinAggregateInputType
    _max?: ActivityMaxAggregateInputType
  }

  export type ActivityGroupByOutputType = {
    id: string
    title: string
    description: string | null
    date: Date
    location: string | null
    flag: number
    latitude: number | null
    longitude: number | null
    radius: number
    userId: string
    upaId: string
    answers: JsonValue | null
    createdAt: Date
    updatedAt: Date
    attendanceToken: string | null
    isActive: boolean
    _count: ActivityCountAggregateOutputType | null
    _avg: ActivityAvgAggregateOutputType | null
    _sum: ActivitySumAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  type GetActivityGroupByPayload<T extends ActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityGroupByOutputType[P]>
        }
      >
    >


  export type ActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    location?: boolean
    flag?: boolean
    latitude?: boolean
    longitude?: boolean
    radius?: boolean
    userId?: boolean
    upaId?: boolean
    answers?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attendanceToken?: boolean
    isActive?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    upa?: boolean | UpaDefaultArgs<ExtArgs>
    attendances?: boolean | Activity$attendancesArgs<ExtArgs>
    _count?: boolean | ActivityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>


  export type ActivitySelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    location?: boolean
    flag?: boolean
    latitude?: boolean
    longitude?: boolean
    radius?: boolean
    userId?: boolean
    upaId?: boolean
    answers?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attendanceToken?: boolean
    isActive?: boolean
  }

  export type ActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    upa?: boolean | UpaDefaultArgs<ExtArgs>
    attendances?: boolean | Activity$attendancesArgs<ExtArgs>
    _count?: boolean | ActivityCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Activity"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      upa: Prisma.$UpaPayload<ExtArgs>
      attendances: Prisma.$AttendancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      date: Date
      location: string | null
      flag: number
      latitude: number | null
      longitude: number | null
      radius: number
      userId: string
      upaId: string
      answers: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
      attendanceToken: string | null
      isActive: boolean
    }, ExtArgs["result"]["activity"]>
    composites: {}
  }

  type ActivityGetPayload<S extends boolean | null | undefined | ActivityDefaultArgs> = $Result.GetResult<Prisma.$ActivityPayload, S>

  type ActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ActivityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ActivityCountAggregateInputType | true
    }

  export interface ActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Activity'], meta: { name: 'Activity' } }
    /**
     * Find zero or one Activity that matches the filter.
     * @param {ActivityFindUniqueArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityFindUniqueArgs>(args: SelectSubset<T, ActivityFindUniqueArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Activity that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ActivityFindUniqueOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Activity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityFindFirstArgs>(args?: SelectSubset<T, ActivityFindFirstArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Activity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activities
     * const activities = await prisma.activity.findMany()
     * 
     * // Get first 10 Activities
     * const activities = await prisma.activity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityWithIdOnly = await prisma.activity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityFindManyArgs>(args?: SelectSubset<T, ActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Activity.
     * @param {ActivityCreateArgs} args - Arguments to create a Activity.
     * @example
     * // Create one Activity
     * const Activity = await prisma.activity.create({
     *   data: {
     *     // ... data to create a Activity
     *   }
     * })
     * 
     */
    create<T extends ActivityCreateArgs>(args: SelectSubset<T, ActivityCreateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Activities.
     * @param {ActivityCreateManyArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityCreateManyArgs>(args?: SelectSubset<T, ActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Activity.
     * @param {ActivityDeleteArgs} args - Arguments to delete one Activity.
     * @example
     * // Delete one Activity
     * const Activity = await prisma.activity.delete({
     *   where: {
     *     // ... filter to delete one Activity
     *   }
     * })
     * 
     */
    delete<T extends ActivityDeleteArgs>(args: SelectSubset<T, ActivityDeleteArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Activity.
     * @param {ActivityUpdateArgs} args - Arguments to update one Activity.
     * @example
     * // Update one Activity
     * const activity = await prisma.activity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityUpdateArgs>(args: SelectSubset<T, ActivityUpdateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Activities.
     * @param {ActivityDeleteManyArgs} args - Arguments to filter Activities to delete.
     * @example
     * // Delete a few Activities
     * const { count } = await prisma.activity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityDeleteManyArgs>(args?: SelectSubset<T, ActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityUpdateManyArgs>(args: SelectSubset<T, ActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Activity.
     * @param {ActivityUpsertArgs} args - Arguments to update or create a Activity.
     * @example
     * // Update or create a Activity
     * const activity = await prisma.activity.upsert({
     *   create: {
     *     // ... data to create a Activity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activity we want to update
     *   }
     * })
     */
    upsert<T extends ActivityUpsertArgs>(args: SelectSubset<T, ActivityUpsertArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityCountArgs} args - Arguments to filter Activities to count.
     * @example
     * // Count the number of Activities
     * const count = await prisma.activity.count({
     *   where: {
     *     // ... the filter for the Activities we want to count
     *   }
     * })
    **/
    count<T extends ActivityCountArgs>(
      args?: Subset<T, ActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActivityAggregateArgs>(args: Subset<T, ActivityAggregateArgs>): Prisma.PrismaPromise<GetActivityAggregateType<T>>

    /**
     * Group by Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityGroupByArgs['orderBy'] }
        : { orderBy?: ActivityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Activity model
   */
  readonly fields: ActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Activity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    upa<T extends UpaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UpaDefaultArgs<ExtArgs>>): Prisma__UpaClient<$Result.GetResult<Prisma.$UpaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    attendances<T extends Activity$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, Activity$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Activity model
   */ 
  interface ActivityFieldRefs {
    readonly id: FieldRef<"Activity", 'String'>
    readonly title: FieldRef<"Activity", 'String'>
    readonly description: FieldRef<"Activity", 'String'>
    readonly date: FieldRef<"Activity", 'DateTime'>
    readonly location: FieldRef<"Activity", 'String'>
    readonly flag: FieldRef<"Activity", 'Int'>
    readonly latitude: FieldRef<"Activity", 'Float'>
    readonly longitude: FieldRef<"Activity", 'Float'>
    readonly radius: FieldRef<"Activity", 'Int'>
    readonly userId: FieldRef<"Activity", 'String'>
    readonly upaId: FieldRef<"Activity", 'String'>
    readonly answers: FieldRef<"Activity", 'Json'>
    readonly createdAt: FieldRef<"Activity", 'DateTime'>
    readonly updatedAt: FieldRef<"Activity", 'DateTime'>
    readonly attendanceToken: FieldRef<"Activity", 'String'>
    readonly isActive: FieldRef<"Activity", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Activity findUnique
   */
  export type ActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findUniqueOrThrow
   */
  export type ActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findFirst
   */
  export type ActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findFirstOrThrow
   */
  export type ActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findMany
   */
  export type ActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activities to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity create
   */
  export type ActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a Activity.
     */
    data: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
  }

  /**
   * Activity createMany
   */
  export type ActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Activity update
   */
  export type ActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a Activity.
     */
    data: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
    /**
     * Choose, which Activity to update.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity updateMany
   */
  export type ActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
  }

  /**
   * Activity upsert
   */
  export type ActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the Activity to update in case it exists.
     */
    where: ActivityWhereUniqueInput
    /**
     * In case the Activity found by the `where` argument doesn't exist, create a new Activity with this data.
     */
    create: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
    /**
     * In case the Activity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
  }

  /**
   * Activity delete
   */
  export type ActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter which Activity to delete.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity deleteMany
   */
  export type ActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activities to delete
     */
    where?: ActivityWhereInput
  }

  /**
   * Activity.attendances
   */
  export type Activity$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Activity without action
   */
  export type ActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
  }


  /**
   * Model Attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceMinAggregateOutputType = {
    id: string | null
    userId: string | null
    activityId: string | null
    timestamp: Date | null
    status: string | null
  }

  export type AttendanceMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    activityId: string | null
    timestamp: Date | null
    status: string | null
  }

  export type AttendanceCountAggregateOutputType = {
    id: number
    userId: number
    activityId: number
    timestamp: number
    status: number
    _all: number
  }


  export type AttendanceMinAggregateInputType = {
    id?: true
    userId?: true
    activityId?: true
    timestamp?: true
    status?: true
  }

  export type AttendanceMaxAggregateInputType = {
    id?: true
    userId?: true
    activityId?: true
    timestamp?: true
    status?: true
  }

  export type AttendanceCountAggregateInputType = {
    id?: true
    userId?: true
    activityId?: true
    timestamp?: true
    status?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendance to aggregate.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type AttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithAggregationInput | AttendanceOrderByWithAggregationInput[]
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
    having?: AttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }

  export type AttendanceGroupByOutputType = {
    id: string
    userId: string
    activityId: string
    timestamp: Date
    status: string | null
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends AttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    activityId?: boolean
    timestamp?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>


  export type AttendanceSelectScalar = {
    id?: boolean
    userId?: boolean
    activityId?: boolean
    timestamp?: boolean
    status?: boolean
  }

  export type AttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
  }

  export type $AttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendance"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      activity: Prisma.$ActivityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      activityId: string
      timestamp: Date
      status: string | null
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }

  type AttendanceGetPayload<S extends boolean | null | undefined | AttendanceDefaultArgs> = $Result.GetResult<Prisma.$AttendancePayload, S>

  type AttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AttendanceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface AttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendance'], meta: { name: 'Attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {AttendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceFindUniqueArgs>(args: SelectSubset<T, AttendanceFindUniqueArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Attendance that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AttendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceFindFirstArgs>(args?: SelectSubset<T, AttendanceFindFirstArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceWithIdOnly = await prisma.attendance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceFindManyArgs>(args?: SelectSubset<T, AttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Attendance.
     * @param {AttendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
     */
    create<T extends AttendanceCreateArgs>(args: SelectSubset<T, AttendanceCreateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Attendances.
     * @param {AttendanceCreateManyArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceCreateManyArgs>(args?: SelectSubset<T, AttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Attendance.
     * @param {AttendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
     */
    delete<T extends AttendanceDeleteArgs>(args: SelectSubset<T, AttendanceDeleteArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Attendance.
     * @param {AttendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceUpdateArgs>(args: SelectSubset<T, AttendanceUpdateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Attendances.
     * @param {AttendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceDeleteManyArgs>(args?: SelectSubset<T, AttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceUpdateManyArgs>(args: SelectSubset<T, AttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Attendance.
     * @param {AttendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceUpsertArgs>(args: SelectSubset<T, AttendanceUpsertArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends AttendanceCountArgs>(
      args?: Subset<T, AttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendance model
   */
  readonly fields: AttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    activity<T extends ActivityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActivityDefaultArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Attendance model
   */ 
  interface AttendanceFieldRefs {
    readonly id: FieldRef<"Attendance", 'String'>
    readonly userId: FieldRef<"Attendance", 'String'>
    readonly activityId: FieldRef<"Attendance", 'String'>
    readonly timestamp: FieldRef<"Attendance", 'DateTime'>
    readonly status: FieldRef<"Attendance", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Attendance findUnique
   */
  export type AttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findUniqueOrThrow
   */
  export type AttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findFirst
   */
  export type AttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findFirstOrThrow
   */
  export type AttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findMany
   */
  export type AttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendances to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance create
   */
  export type AttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Attendance.
     */
    data: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
  }

  /**
   * Attendance createMany
   */
  export type AttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attendance update
   */
  export type AttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Attendance.
     */
    data: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
    /**
     * Choose, which Attendance to update.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance updateMany
   */
  export type AttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
  }

  /**
   * Attendance upsert
   */
  export type AttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Attendance to update in case it exists.
     */
    where: AttendanceWhereUniqueInput
    /**
     * In case the Attendance found by the `where` argument doesn't exist, create a new Attendance with this data.
     */
    create: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
    /**
     * In case the Attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
  }

  /**
   * Attendance delete
   */
  export type AttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter which Attendance to delete.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance deleteMany
   */
  export type AttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendances to delete
     */
    where?: AttendanceWhereInput
  }

  /**
   * Attendance without action
   */
  export type AttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    action: string | null
    resource: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    action: string | null
    resource: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    action: number
    resource: number
    details: number
    userId: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    action?: true
    resource?: true
    userId?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    action?: true
    resource?: true
    userId?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    action?: true
    resource?: true
    details?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    action: string
    resource: string
    details: JsonValue | null
    userId: string
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    resource?: boolean
    details?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>


  export type AuditLogSelectScalar = {
    id?: boolean
    action?: boolean
    resource?: boolean
    details?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      action: string
      resource: string
      details: Prisma.JsonValue | null
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */ 
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly resource: FieldRef<"AuditLog", 'String'>
    readonly details: FieldRef<"AuditLog", 'Json'>
    readonly userId: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Model Pertanyaan
   */

  export type AggregatePertanyaan = {
    _count: PertanyaanCountAggregateOutputType | null
    _avg: PertanyaanAvgAggregateOutputType | null
    _sum: PertanyaanSumAggregateOutputType | null
    _min: PertanyaanMinAggregateOutputType | null
    _max: PertanyaanMaxAggregateOutputType | null
  }

  export type PertanyaanAvgAggregateOutputType = {
    urutan: number | null
  }

  export type PertanyaanSumAggregateOutputType = {
    urutan: number | null
  }

  export type PertanyaanMinAggregateOutputType = {
    id: string | null
    pertanyaan: string | null
    tipeJawaban: $Enums.TipeJawaban | null
    isRequired: boolean | null
    sourceList: string | null
    type_kegiatan: string | null
    isActive: boolean | null
    urutan: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PertanyaanMaxAggregateOutputType = {
    id: string | null
    pertanyaan: string | null
    tipeJawaban: $Enums.TipeJawaban | null
    isRequired: boolean | null
    sourceList: string | null
    type_kegiatan: string | null
    isActive: boolean | null
    urutan: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PertanyaanCountAggregateOutputType = {
    id: number
    pertanyaan: number
    tipeJawaban: number
    opsiJawaban: number
    isRequired: number
    sourceList: number
    type_kegiatan: number
    isActive: number
    urutan: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PertanyaanAvgAggregateInputType = {
    urutan?: true
  }

  export type PertanyaanSumAggregateInputType = {
    urutan?: true
  }

  export type PertanyaanMinAggregateInputType = {
    id?: true
    pertanyaan?: true
    tipeJawaban?: true
    isRequired?: true
    sourceList?: true
    type_kegiatan?: true
    isActive?: true
    urutan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PertanyaanMaxAggregateInputType = {
    id?: true
    pertanyaan?: true
    tipeJawaban?: true
    isRequired?: true
    sourceList?: true
    type_kegiatan?: true
    isActive?: true
    urutan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PertanyaanCountAggregateInputType = {
    id?: true
    pertanyaan?: true
    tipeJawaban?: true
    opsiJawaban?: true
    isRequired?: true
    sourceList?: true
    type_kegiatan?: true
    isActive?: true
    urutan?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PertanyaanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pertanyaan to aggregate.
     */
    where?: PertanyaanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pertanyaans to fetch.
     */
    orderBy?: PertanyaanOrderByWithRelationInput | PertanyaanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PertanyaanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pertanyaans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pertanyaans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pertanyaans
    **/
    _count?: true | PertanyaanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PertanyaanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PertanyaanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PertanyaanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PertanyaanMaxAggregateInputType
  }

  export type GetPertanyaanAggregateType<T extends PertanyaanAggregateArgs> = {
        [P in keyof T & keyof AggregatePertanyaan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePertanyaan[P]>
      : GetScalarType<T[P], AggregatePertanyaan[P]>
  }




  export type PertanyaanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PertanyaanWhereInput
    orderBy?: PertanyaanOrderByWithAggregationInput | PertanyaanOrderByWithAggregationInput[]
    by: PertanyaanScalarFieldEnum[] | PertanyaanScalarFieldEnum
    having?: PertanyaanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PertanyaanCountAggregateInputType | true
    _avg?: PertanyaanAvgAggregateInputType
    _sum?: PertanyaanSumAggregateInputType
    _min?: PertanyaanMinAggregateInputType
    _max?: PertanyaanMaxAggregateInputType
  }

  export type PertanyaanGroupByOutputType = {
    id: string
    pertanyaan: string
    tipeJawaban: $Enums.TipeJawaban
    opsiJawaban: JsonValue | null
    isRequired: boolean
    sourceList: string | null
    type_kegiatan: string | null
    isActive: boolean
    urutan: number
    createdAt: Date
    updatedAt: Date
    _count: PertanyaanCountAggregateOutputType | null
    _avg: PertanyaanAvgAggregateOutputType | null
    _sum: PertanyaanSumAggregateOutputType | null
    _min: PertanyaanMinAggregateOutputType | null
    _max: PertanyaanMaxAggregateOutputType | null
  }

  type GetPertanyaanGroupByPayload<T extends PertanyaanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PertanyaanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PertanyaanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PertanyaanGroupByOutputType[P]>
            : GetScalarType<T[P], PertanyaanGroupByOutputType[P]>
        }
      >
    >


  export type PertanyaanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pertanyaan?: boolean
    tipeJawaban?: boolean
    opsiJawaban?: boolean
    isRequired?: boolean
    sourceList?: boolean
    type_kegiatan?: boolean
    isActive?: boolean
    urutan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pertanyaan"]>


  export type PertanyaanSelectScalar = {
    id?: boolean
    pertanyaan?: boolean
    tipeJawaban?: boolean
    opsiJawaban?: boolean
    isRequired?: boolean
    sourceList?: boolean
    type_kegiatan?: boolean
    isActive?: boolean
    urutan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $PertanyaanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pertanyaan"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pertanyaan: string
      tipeJawaban: $Enums.TipeJawaban
      opsiJawaban: Prisma.JsonValue | null
      isRequired: boolean
      sourceList: string | null
      type_kegiatan: string | null
      isActive: boolean
      urutan: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pertanyaan"]>
    composites: {}
  }

  type PertanyaanGetPayload<S extends boolean | null | undefined | PertanyaanDefaultArgs> = $Result.GetResult<Prisma.$PertanyaanPayload, S>

  type PertanyaanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PertanyaanFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PertanyaanCountAggregateInputType | true
    }

  export interface PertanyaanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pertanyaan'], meta: { name: 'Pertanyaan' } }
    /**
     * Find zero or one Pertanyaan that matches the filter.
     * @param {PertanyaanFindUniqueArgs} args - Arguments to find a Pertanyaan
     * @example
     * // Get one Pertanyaan
     * const pertanyaan = await prisma.pertanyaan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PertanyaanFindUniqueArgs>(args: SelectSubset<T, PertanyaanFindUniqueArgs<ExtArgs>>): Prisma__PertanyaanClient<$Result.GetResult<Prisma.$PertanyaanPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Pertanyaan that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PertanyaanFindUniqueOrThrowArgs} args - Arguments to find a Pertanyaan
     * @example
     * // Get one Pertanyaan
     * const pertanyaan = await prisma.pertanyaan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PertanyaanFindUniqueOrThrowArgs>(args: SelectSubset<T, PertanyaanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PertanyaanClient<$Result.GetResult<Prisma.$PertanyaanPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Pertanyaan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PertanyaanFindFirstArgs} args - Arguments to find a Pertanyaan
     * @example
     * // Get one Pertanyaan
     * const pertanyaan = await prisma.pertanyaan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PertanyaanFindFirstArgs>(args?: SelectSubset<T, PertanyaanFindFirstArgs<ExtArgs>>): Prisma__PertanyaanClient<$Result.GetResult<Prisma.$PertanyaanPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Pertanyaan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PertanyaanFindFirstOrThrowArgs} args - Arguments to find a Pertanyaan
     * @example
     * // Get one Pertanyaan
     * const pertanyaan = await prisma.pertanyaan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PertanyaanFindFirstOrThrowArgs>(args?: SelectSubset<T, PertanyaanFindFirstOrThrowArgs<ExtArgs>>): Prisma__PertanyaanClient<$Result.GetResult<Prisma.$PertanyaanPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Pertanyaans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PertanyaanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pertanyaans
     * const pertanyaans = await prisma.pertanyaan.findMany()
     * 
     * // Get first 10 Pertanyaans
     * const pertanyaans = await prisma.pertanyaan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pertanyaanWithIdOnly = await prisma.pertanyaan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PertanyaanFindManyArgs>(args?: SelectSubset<T, PertanyaanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PertanyaanPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Pertanyaan.
     * @param {PertanyaanCreateArgs} args - Arguments to create a Pertanyaan.
     * @example
     * // Create one Pertanyaan
     * const Pertanyaan = await prisma.pertanyaan.create({
     *   data: {
     *     // ... data to create a Pertanyaan
     *   }
     * })
     * 
     */
    create<T extends PertanyaanCreateArgs>(args: SelectSubset<T, PertanyaanCreateArgs<ExtArgs>>): Prisma__PertanyaanClient<$Result.GetResult<Prisma.$PertanyaanPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Pertanyaans.
     * @param {PertanyaanCreateManyArgs} args - Arguments to create many Pertanyaans.
     * @example
     * // Create many Pertanyaans
     * const pertanyaan = await prisma.pertanyaan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PertanyaanCreateManyArgs>(args?: SelectSubset<T, PertanyaanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pertanyaan.
     * @param {PertanyaanDeleteArgs} args - Arguments to delete one Pertanyaan.
     * @example
     * // Delete one Pertanyaan
     * const Pertanyaan = await prisma.pertanyaan.delete({
     *   where: {
     *     // ... filter to delete one Pertanyaan
     *   }
     * })
     * 
     */
    delete<T extends PertanyaanDeleteArgs>(args: SelectSubset<T, PertanyaanDeleteArgs<ExtArgs>>): Prisma__PertanyaanClient<$Result.GetResult<Prisma.$PertanyaanPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Pertanyaan.
     * @param {PertanyaanUpdateArgs} args - Arguments to update one Pertanyaan.
     * @example
     * // Update one Pertanyaan
     * const pertanyaan = await prisma.pertanyaan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PertanyaanUpdateArgs>(args: SelectSubset<T, PertanyaanUpdateArgs<ExtArgs>>): Prisma__PertanyaanClient<$Result.GetResult<Prisma.$PertanyaanPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Pertanyaans.
     * @param {PertanyaanDeleteManyArgs} args - Arguments to filter Pertanyaans to delete.
     * @example
     * // Delete a few Pertanyaans
     * const { count } = await prisma.pertanyaan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PertanyaanDeleteManyArgs>(args?: SelectSubset<T, PertanyaanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pertanyaans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PertanyaanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pertanyaans
     * const pertanyaan = await prisma.pertanyaan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PertanyaanUpdateManyArgs>(args: SelectSubset<T, PertanyaanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pertanyaan.
     * @param {PertanyaanUpsertArgs} args - Arguments to update or create a Pertanyaan.
     * @example
     * // Update or create a Pertanyaan
     * const pertanyaan = await prisma.pertanyaan.upsert({
     *   create: {
     *     // ... data to create a Pertanyaan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pertanyaan we want to update
     *   }
     * })
     */
    upsert<T extends PertanyaanUpsertArgs>(args: SelectSubset<T, PertanyaanUpsertArgs<ExtArgs>>): Prisma__PertanyaanClient<$Result.GetResult<Prisma.$PertanyaanPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Pertanyaans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PertanyaanCountArgs} args - Arguments to filter Pertanyaans to count.
     * @example
     * // Count the number of Pertanyaans
     * const count = await prisma.pertanyaan.count({
     *   where: {
     *     // ... the filter for the Pertanyaans we want to count
     *   }
     * })
    **/
    count<T extends PertanyaanCountArgs>(
      args?: Subset<T, PertanyaanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PertanyaanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pertanyaan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PertanyaanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PertanyaanAggregateArgs>(args: Subset<T, PertanyaanAggregateArgs>): Prisma.PrismaPromise<GetPertanyaanAggregateType<T>>

    /**
     * Group by Pertanyaan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PertanyaanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PertanyaanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PertanyaanGroupByArgs['orderBy'] }
        : { orderBy?: PertanyaanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PertanyaanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPertanyaanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pertanyaan model
   */
  readonly fields: PertanyaanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pertanyaan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PertanyaanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pertanyaan model
   */ 
  interface PertanyaanFieldRefs {
    readonly id: FieldRef<"Pertanyaan", 'String'>
    readonly pertanyaan: FieldRef<"Pertanyaan", 'String'>
    readonly tipeJawaban: FieldRef<"Pertanyaan", 'TipeJawaban'>
    readonly opsiJawaban: FieldRef<"Pertanyaan", 'Json'>
    readonly isRequired: FieldRef<"Pertanyaan", 'Boolean'>
    readonly sourceList: FieldRef<"Pertanyaan", 'String'>
    readonly type_kegiatan: FieldRef<"Pertanyaan", 'String'>
    readonly isActive: FieldRef<"Pertanyaan", 'Boolean'>
    readonly urutan: FieldRef<"Pertanyaan", 'Int'>
    readonly createdAt: FieldRef<"Pertanyaan", 'DateTime'>
    readonly updatedAt: FieldRef<"Pertanyaan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pertanyaan findUnique
   */
  export type PertanyaanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pertanyaan
     */
    select?: PertanyaanSelect<ExtArgs> | null
    /**
     * Filter, which Pertanyaan to fetch.
     */
    where: PertanyaanWhereUniqueInput
  }

  /**
   * Pertanyaan findUniqueOrThrow
   */
  export type PertanyaanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pertanyaan
     */
    select?: PertanyaanSelect<ExtArgs> | null
    /**
     * Filter, which Pertanyaan to fetch.
     */
    where: PertanyaanWhereUniqueInput
  }

  /**
   * Pertanyaan findFirst
   */
  export type PertanyaanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pertanyaan
     */
    select?: PertanyaanSelect<ExtArgs> | null
    /**
     * Filter, which Pertanyaan to fetch.
     */
    where?: PertanyaanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pertanyaans to fetch.
     */
    orderBy?: PertanyaanOrderByWithRelationInput | PertanyaanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pertanyaans.
     */
    cursor?: PertanyaanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pertanyaans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pertanyaans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pertanyaans.
     */
    distinct?: PertanyaanScalarFieldEnum | PertanyaanScalarFieldEnum[]
  }

  /**
   * Pertanyaan findFirstOrThrow
   */
  export type PertanyaanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pertanyaan
     */
    select?: PertanyaanSelect<ExtArgs> | null
    /**
     * Filter, which Pertanyaan to fetch.
     */
    where?: PertanyaanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pertanyaans to fetch.
     */
    orderBy?: PertanyaanOrderByWithRelationInput | PertanyaanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pertanyaans.
     */
    cursor?: PertanyaanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pertanyaans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pertanyaans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pertanyaans.
     */
    distinct?: PertanyaanScalarFieldEnum | PertanyaanScalarFieldEnum[]
  }

  /**
   * Pertanyaan findMany
   */
  export type PertanyaanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pertanyaan
     */
    select?: PertanyaanSelect<ExtArgs> | null
    /**
     * Filter, which Pertanyaans to fetch.
     */
    where?: PertanyaanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pertanyaans to fetch.
     */
    orderBy?: PertanyaanOrderByWithRelationInput | PertanyaanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pertanyaans.
     */
    cursor?: PertanyaanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pertanyaans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pertanyaans.
     */
    skip?: number
    distinct?: PertanyaanScalarFieldEnum | PertanyaanScalarFieldEnum[]
  }

  /**
   * Pertanyaan create
   */
  export type PertanyaanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pertanyaan
     */
    select?: PertanyaanSelect<ExtArgs> | null
    /**
     * The data needed to create a Pertanyaan.
     */
    data: XOR<PertanyaanCreateInput, PertanyaanUncheckedCreateInput>
  }

  /**
   * Pertanyaan createMany
   */
  export type PertanyaanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pertanyaans.
     */
    data: PertanyaanCreateManyInput | PertanyaanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pertanyaan update
   */
  export type PertanyaanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pertanyaan
     */
    select?: PertanyaanSelect<ExtArgs> | null
    /**
     * The data needed to update a Pertanyaan.
     */
    data: XOR<PertanyaanUpdateInput, PertanyaanUncheckedUpdateInput>
    /**
     * Choose, which Pertanyaan to update.
     */
    where: PertanyaanWhereUniqueInput
  }

  /**
   * Pertanyaan updateMany
   */
  export type PertanyaanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pertanyaans.
     */
    data: XOR<PertanyaanUpdateManyMutationInput, PertanyaanUncheckedUpdateManyInput>
    /**
     * Filter which Pertanyaans to update
     */
    where?: PertanyaanWhereInput
  }

  /**
   * Pertanyaan upsert
   */
  export type PertanyaanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pertanyaan
     */
    select?: PertanyaanSelect<ExtArgs> | null
    /**
     * The filter to search for the Pertanyaan to update in case it exists.
     */
    where: PertanyaanWhereUniqueInput
    /**
     * In case the Pertanyaan found by the `where` argument doesn't exist, create a new Pertanyaan with this data.
     */
    create: XOR<PertanyaanCreateInput, PertanyaanUncheckedCreateInput>
    /**
     * In case the Pertanyaan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PertanyaanUpdateInput, PertanyaanUncheckedUpdateInput>
  }

  /**
   * Pertanyaan delete
   */
  export type PertanyaanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pertanyaan
     */
    select?: PertanyaanSelect<ExtArgs> | null
    /**
     * Filter which Pertanyaan to delete.
     */
    where: PertanyaanWhereUniqueInput
  }

  /**
   * Pertanyaan deleteMany
   */
  export type PertanyaanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pertanyaans to delete
     */
    where?: PertanyaanWhereInput
  }

  /**
   * Pertanyaan without action
   */
  export type PertanyaanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pertanyaan
     */
    select?: PertanyaanSelect<ExtArgs> | null
  }


  /**
   * Model Translation
   */

  export type AggregateTranslation = {
    _count: TranslationCountAggregateOutputType | null
    _min: TranslationMinAggregateOutputType | null
    _max: TranslationMaxAggregateOutputType | null
  }

  export type TranslationMinAggregateOutputType = {
    id: string | null
    variableName: string | null
    indonesiaValue: string | null
    englishValue: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TranslationMaxAggregateOutputType = {
    id: string | null
    variableName: string | null
    indonesiaValue: string | null
    englishValue: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TranslationCountAggregateOutputType = {
    id: number
    variableName: number
    indonesiaValue: number
    englishValue: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TranslationMinAggregateInputType = {
    id?: true
    variableName?: true
    indonesiaValue?: true
    englishValue?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TranslationMaxAggregateInputType = {
    id?: true
    variableName?: true
    indonesiaValue?: true
    englishValue?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TranslationCountAggregateInputType = {
    id?: true
    variableName?: true
    indonesiaValue?: true
    englishValue?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TranslationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Translation to aggregate.
     */
    where?: TranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Translations to fetch.
     */
    orderBy?: TranslationOrderByWithRelationInput | TranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Translations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Translations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Translations
    **/
    _count?: true | TranslationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TranslationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TranslationMaxAggregateInputType
  }

  export type GetTranslationAggregateType<T extends TranslationAggregateArgs> = {
        [P in keyof T & keyof AggregateTranslation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTranslation[P]>
      : GetScalarType<T[P], AggregateTranslation[P]>
  }




  export type TranslationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TranslationWhereInput
    orderBy?: TranslationOrderByWithAggregationInput | TranslationOrderByWithAggregationInput[]
    by: TranslationScalarFieldEnum[] | TranslationScalarFieldEnum
    having?: TranslationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TranslationCountAggregateInputType | true
    _min?: TranslationMinAggregateInputType
    _max?: TranslationMaxAggregateInputType
  }

  export type TranslationGroupByOutputType = {
    id: string
    variableName: string
    indonesiaValue: string
    englishValue: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: TranslationCountAggregateOutputType | null
    _min: TranslationMinAggregateOutputType | null
    _max: TranslationMaxAggregateOutputType | null
  }

  type GetTranslationGroupByPayload<T extends TranslationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TranslationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TranslationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TranslationGroupByOutputType[P]>
            : GetScalarType<T[P], TranslationGroupByOutputType[P]>
        }
      >
    >


  export type TranslationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    variableName?: boolean
    indonesiaValue?: boolean
    englishValue?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["translation"]>


  export type TranslationSelectScalar = {
    id?: boolean
    variableName?: boolean
    indonesiaValue?: boolean
    englishValue?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $TranslationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Translation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      variableName: string
      indonesiaValue: string
      englishValue: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["translation"]>
    composites: {}
  }

  type TranslationGetPayload<S extends boolean | null | undefined | TranslationDefaultArgs> = $Result.GetResult<Prisma.$TranslationPayload, S>

  type TranslationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TranslationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TranslationCountAggregateInputType | true
    }

  export interface TranslationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Translation'], meta: { name: 'Translation' } }
    /**
     * Find zero or one Translation that matches the filter.
     * @param {TranslationFindUniqueArgs} args - Arguments to find a Translation
     * @example
     * // Get one Translation
     * const translation = await prisma.translation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TranslationFindUniqueArgs>(args: SelectSubset<T, TranslationFindUniqueArgs<ExtArgs>>): Prisma__TranslationClient<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Translation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TranslationFindUniqueOrThrowArgs} args - Arguments to find a Translation
     * @example
     * // Get one Translation
     * const translation = await prisma.translation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TranslationFindUniqueOrThrowArgs>(args: SelectSubset<T, TranslationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TranslationClient<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Translation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationFindFirstArgs} args - Arguments to find a Translation
     * @example
     * // Get one Translation
     * const translation = await prisma.translation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TranslationFindFirstArgs>(args?: SelectSubset<T, TranslationFindFirstArgs<ExtArgs>>): Prisma__TranslationClient<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Translation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationFindFirstOrThrowArgs} args - Arguments to find a Translation
     * @example
     * // Get one Translation
     * const translation = await prisma.translation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TranslationFindFirstOrThrowArgs>(args?: SelectSubset<T, TranslationFindFirstOrThrowArgs<ExtArgs>>): Prisma__TranslationClient<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Translations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Translations
     * const translations = await prisma.translation.findMany()
     * 
     * // Get first 10 Translations
     * const translations = await prisma.translation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const translationWithIdOnly = await prisma.translation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TranslationFindManyArgs>(args?: SelectSubset<T, TranslationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Translation.
     * @param {TranslationCreateArgs} args - Arguments to create a Translation.
     * @example
     * // Create one Translation
     * const Translation = await prisma.translation.create({
     *   data: {
     *     // ... data to create a Translation
     *   }
     * })
     * 
     */
    create<T extends TranslationCreateArgs>(args: SelectSubset<T, TranslationCreateArgs<ExtArgs>>): Prisma__TranslationClient<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Translations.
     * @param {TranslationCreateManyArgs} args - Arguments to create many Translations.
     * @example
     * // Create many Translations
     * const translation = await prisma.translation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TranslationCreateManyArgs>(args?: SelectSubset<T, TranslationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Translation.
     * @param {TranslationDeleteArgs} args - Arguments to delete one Translation.
     * @example
     * // Delete one Translation
     * const Translation = await prisma.translation.delete({
     *   where: {
     *     // ... filter to delete one Translation
     *   }
     * })
     * 
     */
    delete<T extends TranslationDeleteArgs>(args: SelectSubset<T, TranslationDeleteArgs<ExtArgs>>): Prisma__TranslationClient<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Translation.
     * @param {TranslationUpdateArgs} args - Arguments to update one Translation.
     * @example
     * // Update one Translation
     * const translation = await prisma.translation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TranslationUpdateArgs>(args: SelectSubset<T, TranslationUpdateArgs<ExtArgs>>): Prisma__TranslationClient<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Translations.
     * @param {TranslationDeleteManyArgs} args - Arguments to filter Translations to delete.
     * @example
     * // Delete a few Translations
     * const { count } = await prisma.translation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TranslationDeleteManyArgs>(args?: SelectSubset<T, TranslationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Translations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Translations
     * const translation = await prisma.translation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TranslationUpdateManyArgs>(args: SelectSubset<T, TranslationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Translation.
     * @param {TranslationUpsertArgs} args - Arguments to update or create a Translation.
     * @example
     * // Update or create a Translation
     * const translation = await prisma.translation.upsert({
     *   create: {
     *     // ... data to create a Translation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Translation we want to update
     *   }
     * })
     */
    upsert<T extends TranslationUpsertArgs>(args: SelectSubset<T, TranslationUpsertArgs<ExtArgs>>): Prisma__TranslationClient<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Translations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationCountArgs} args - Arguments to filter Translations to count.
     * @example
     * // Count the number of Translations
     * const count = await prisma.translation.count({
     *   where: {
     *     // ... the filter for the Translations we want to count
     *   }
     * })
    **/
    count<T extends TranslationCountArgs>(
      args?: Subset<T, TranslationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TranslationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Translation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TranslationAggregateArgs>(args: Subset<T, TranslationAggregateArgs>): Prisma.PrismaPromise<GetTranslationAggregateType<T>>

    /**
     * Group by Translation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TranslationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TranslationGroupByArgs['orderBy'] }
        : { orderBy?: TranslationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TranslationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTranslationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Translation model
   */
  readonly fields: TranslationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Translation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TranslationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Translation model
   */ 
  interface TranslationFieldRefs {
    readonly id: FieldRef<"Translation", 'String'>
    readonly variableName: FieldRef<"Translation", 'String'>
    readonly indonesiaValue: FieldRef<"Translation", 'String'>
    readonly englishValue: FieldRef<"Translation", 'String'>
    readonly isActive: FieldRef<"Translation", 'Boolean'>
    readonly createdAt: FieldRef<"Translation", 'DateTime'>
    readonly updatedAt: FieldRef<"Translation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Translation findUnique
   */
  export type TranslationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Filter, which Translation to fetch.
     */
    where: TranslationWhereUniqueInput
  }

  /**
   * Translation findUniqueOrThrow
   */
  export type TranslationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Filter, which Translation to fetch.
     */
    where: TranslationWhereUniqueInput
  }

  /**
   * Translation findFirst
   */
  export type TranslationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Filter, which Translation to fetch.
     */
    where?: TranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Translations to fetch.
     */
    orderBy?: TranslationOrderByWithRelationInput | TranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Translations.
     */
    cursor?: TranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Translations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Translations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Translations.
     */
    distinct?: TranslationScalarFieldEnum | TranslationScalarFieldEnum[]
  }

  /**
   * Translation findFirstOrThrow
   */
  export type TranslationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Filter, which Translation to fetch.
     */
    where?: TranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Translations to fetch.
     */
    orderBy?: TranslationOrderByWithRelationInput | TranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Translations.
     */
    cursor?: TranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Translations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Translations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Translations.
     */
    distinct?: TranslationScalarFieldEnum | TranslationScalarFieldEnum[]
  }

  /**
   * Translation findMany
   */
  export type TranslationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Filter, which Translations to fetch.
     */
    where?: TranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Translations to fetch.
     */
    orderBy?: TranslationOrderByWithRelationInput | TranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Translations.
     */
    cursor?: TranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Translations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Translations.
     */
    skip?: number
    distinct?: TranslationScalarFieldEnum | TranslationScalarFieldEnum[]
  }

  /**
   * Translation create
   */
  export type TranslationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * The data needed to create a Translation.
     */
    data: XOR<TranslationCreateInput, TranslationUncheckedCreateInput>
  }

  /**
   * Translation createMany
   */
  export type TranslationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Translations.
     */
    data: TranslationCreateManyInput | TranslationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Translation update
   */
  export type TranslationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * The data needed to update a Translation.
     */
    data: XOR<TranslationUpdateInput, TranslationUncheckedUpdateInput>
    /**
     * Choose, which Translation to update.
     */
    where: TranslationWhereUniqueInput
  }

  /**
   * Translation updateMany
   */
  export type TranslationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Translations.
     */
    data: XOR<TranslationUpdateManyMutationInput, TranslationUncheckedUpdateManyInput>
    /**
     * Filter which Translations to update
     */
    where?: TranslationWhereInput
  }

  /**
   * Translation upsert
   */
  export type TranslationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * The filter to search for the Translation to update in case it exists.
     */
    where: TranslationWhereUniqueInput
    /**
     * In case the Translation found by the `where` argument doesn't exist, create a new Translation with this data.
     */
    create: XOR<TranslationCreateInput, TranslationUncheckedCreateInput>
    /**
     * In case the Translation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TranslationUpdateInput, TranslationUncheckedUpdateInput>
  }

  /**
   * Translation delete
   */
  export type TranslationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Filter which Translation to delete.
     */
    where: TranslationWhereUniqueInput
  }

  /**
   * Translation deleteMany
   */
  export type TranslationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Translations to delete
     */
    where?: TranslationWhereInput
  }

  /**
   * Translation without action
   */
  export type TranslationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
  }


  /**
   * Model Menu
   */

  export type AggregateMenu = {
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  export type MenuAvgAggregateOutputType = {
    order: number | null
  }

  export type MenuSumAggregateOutputType = {
    order: number | null
  }

  export type MenuMinAggregateOutputType = {
    id: string | null
    label: string | null
    path: string | null
    group: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MenuMaxAggregateOutputType = {
    id: string | null
    label: string | null
    path: string | null
    group: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MenuCountAggregateOutputType = {
    id: number
    label: number
    path: number
    group: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MenuAvgAggregateInputType = {
    order?: true
  }

  export type MenuSumAggregateInputType = {
    order?: true
  }

  export type MenuMinAggregateInputType = {
    id?: true
    label?: true
    path?: true
    group?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MenuMaxAggregateInputType = {
    id?: true
    label?: true
    path?: true
    group?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MenuCountAggregateInputType = {
    id?: true
    label?: true
    path?: true
    group?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MenuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Menu to aggregate.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Menus
    **/
    _count?: true | MenuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuMaxAggregateInputType
  }

  export type GetMenuAggregateType<T extends MenuAggregateArgs> = {
        [P in keyof T & keyof AggregateMenu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenu[P]>
      : GetScalarType<T[P], AggregateMenu[P]>
  }




  export type MenuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuWhereInput
    orderBy?: MenuOrderByWithAggregationInput | MenuOrderByWithAggregationInput[]
    by: MenuScalarFieldEnum[] | MenuScalarFieldEnum
    having?: MenuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuCountAggregateInputType | true
    _avg?: MenuAvgAggregateInputType
    _sum?: MenuSumAggregateInputType
    _min?: MenuMinAggregateInputType
    _max?: MenuMaxAggregateInputType
  }

  export type MenuGroupByOutputType = {
    id: string
    label: string
    path: string
    group: string | null
    order: number
    createdAt: Date
    updatedAt: Date
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  type GetMenuGroupByPayload<T extends MenuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuGroupByOutputType[P]>
            : GetScalarType<T[P], MenuGroupByOutputType[P]>
        }
      >
    >


  export type MenuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    path?: boolean
    group?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accesses?: boolean | Menu$accessesArgs<ExtArgs>
    _count?: boolean | MenuCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menu"]>


  export type MenuSelectScalar = {
    id?: boolean
    label?: boolean
    path?: boolean
    group?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MenuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accesses?: boolean | Menu$accessesArgs<ExtArgs>
    _count?: boolean | MenuCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MenuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Menu"
    objects: {
      accesses: Prisma.$RoleAccessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      label: string
      path: string
      group: string | null
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["menu"]>
    composites: {}
  }

  type MenuGetPayload<S extends boolean | null | undefined | MenuDefaultArgs> = $Result.GetResult<Prisma.$MenuPayload, S>

  type MenuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MenuFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MenuCountAggregateInputType | true
    }

  export interface MenuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Menu'], meta: { name: 'Menu' } }
    /**
     * Find zero or one Menu that matches the filter.
     * @param {MenuFindUniqueArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenuFindUniqueArgs>(args: SelectSubset<T, MenuFindUniqueArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Menu that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MenuFindUniqueOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenuFindUniqueOrThrowArgs>(args: SelectSubset<T, MenuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Menu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindFirstArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenuFindFirstArgs>(args?: SelectSubset<T, MenuFindFirstArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Menu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindFirstOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenuFindFirstOrThrowArgs>(args?: SelectSubset<T, MenuFindFirstOrThrowArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Menus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Menus
     * const menus = await prisma.menu.findMany()
     * 
     * // Get first 10 Menus
     * const menus = await prisma.menu.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menuWithIdOnly = await prisma.menu.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MenuFindManyArgs>(args?: SelectSubset<T, MenuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Menu.
     * @param {MenuCreateArgs} args - Arguments to create a Menu.
     * @example
     * // Create one Menu
     * const Menu = await prisma.menu.create({
     *   data: {
     *     // ... data to create a Menu
     *   }
     * })
     * 
     */
    create<T extends MenuCreateArgs>(args: SelectSubset<T, MenuCreateArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Menus.
     * @param {MenuCreateManyArgs} args - Arguments to create many Menus.
     * @example
     * // Create many Menus
     * const menu = await prisma.menu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MenuCreateManyArgs>(args?: SelectSubset<T, MenuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Menu.
     * @param {MenuDeleteArgs} args - Arguments to delete one Menu.
     * @example
     * // Delete one Menu
     * const Menu = await prisma.menu.delete({
     *   where: {
     *     // ... filter to delete one Menu
     *   }
     * })
     * 
     */
    delete<T extends MenuDeleteArgs>(args: SelectSubset<T, MenuDeleteArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Menu.
     * @param {MenuUpdateArgs} args - Arguments to update one Menu.
     * @example
     * // Update one Menu
     * const menu = await prisma.menu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MenuUpdateArgs>(args: SelectSubset<T, MenuUpdateArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Menus.
     * @param {MenuDeleteManyArgs} args - Arguments to filter Menus to delete.
     * @example
     * // Delete a few Menus
     * const { count } = await prisma.menu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MenuDeleteManyArgs>(args?: SelectSubset<T, MenuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Menus
     * const menu = await prisma.menu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MenuUpdateManyArgs>(args: SelectSubset<T, MenuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Menu.
     * @param {MenuUpsertArgs} args - Arguments to update or create a Menu.
     * @example
     * // Update or create a Menu
     * const menu = await prisma.menu.upsert({
     *   create: {
     *     // ... data to create a Menu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Menu we want to update
     *   }
     * })
     */
    upsert<T extends MenuUpsertArgs>(args: SelectSubset<T, MenuUpsertArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCountArgs} args - Arguments to filter Menus to count.
     * @example
     * // Count the number of Menus
     * const count = await prisma.menu.count({
     *   where: {
     *     // ... the filter for the Menus we want to count
     *   }
     * })
    **/
    count<T extends MenuCountArgs>(
      args?: Subset<T, MenuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MenuAggregateArgs>(args: Subset<T, MenuAggregateArgs>): Prisma.PrismaPromise<GetMenuAggregateType<T>>

    /**
     * Group by Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MenuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuGroupByArgs['orderBy'] }
        : { orderBy?: MenuGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MenuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Menu model
   */
  readonly fields: MenuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Menu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accesses<T extends Menu$accessesArgs<ExtArgs> = {}>(args?: Subset<T, Menu$accessesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoleAccessPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Menu model
   */ 
  interface MenuFieldRefs {
    readonly id: FieldRef<"Menu", 'String'>
    readonly label: FieldRef<"Menu", 'String'>
    readonly path: FieldRef<"Menu", 'String'>
    readonly group: FieldRef<"Menu", 'String'>
    readonly order: FieldRef<"Menu", 'Int'>
    readonly createdAt: FieldRef<"Menu", 'DateTime'>
    readonly updatedAt: FieldRef<"Menu", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Menu findUnique
   */
  export type MenuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu findUniqueOrThrow
   */
  export type MenuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu findFirst
   */
  export type MenuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Menus.
     */
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * Menu findFirstOrThrow
   */
  export type MenuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Menus.
     */
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * Menu findMany
   */
  export type MenuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menus to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * Menu create
   */
  export type MenuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * The data needed to create a Menu.
     */
    data: XOR<MenuCreateInput, MenuUncheckedCreateInput>
  }

  /**
   * Menu createMany
   */
  export type MenuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Menus.
     */
    data: MenuCreateManyInput | MenuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Menu update
   */
  export type MenuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * The data needed to update a Menu.
     */
    data: XOR<MenuUpdateInput, MenuUncheckedUpdateInput>
    /**
     * Choose, which Menu to update.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu updateMany
   */
  export type MenuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Menus.
     */
    data: XOR<MenuUpdateManyMutationInput, MenuUncheckedUpdateManyInput>
    /**
     * Filter which Menus to update
     */
    where?: MenuWhereInput
  }

  /**
   * Menu upsert
   */
  export type MenuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * The filter to search for the Menu to update in case it exists.
     */
    where: MenuWhereUniqueInput
    /**
     * In case the Menu found by the `where` argument doesn't exist, create a new Menu with this data.
     */
    create: XOR<MenuCreateInput, MenuUncheckedCreateInput>
    /**
     * In case the Menu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuUpdateInput, MenuUncheckedUpdateInput>
  }

  /**
   * Menu delete
   */
  export type MenuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter which Menu to delete.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu deleteMany
   */
  export type MenuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Menus to delete
     */
    where?: MenuWhereInput
  }

  /**
   * Menu.accesses
   */
  export type Menu$accessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleAccess
     */
    select?: RoleAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleAccessInclude<ExtArgs> | null
    where?: RoleAccessWhereInput
    orderBy?: RoleAccessOrderByWithRelationInput | RoleAccessOrderByWithRelationInput[]
    cursor?: RoleAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleAccessScalarFieldEnum | RoleAccessScalarFieldEnum[]
  }

  /**
   * Menu without action
   */
  export type MenuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
  }


  /**
   * Model RoleAccess
   */

  export type AggregateRoleAccess = {
    _count: RoleAccessCountAggregateOutputType | null
    _min: RoleAccessMinAggregateOutputType | null
    _max: RoleAccessMaxAggregateOutputType | null
  }

  export type RoleAccessMinAggregateOutputType = {
    id: string | null
    role: $Enums.Role | null
    menuId: string | null
    canAccess: boolean | null
  }

  export type RoleAccessMaxAggregateOutputType = {
    id: string | null
    role: $Enums.Role | null
    menuId: string | null
    canAccess: boolean | null
  }

  export type RoleAccessCountAggregateOutputType = {
    id: number
    role: number
    menuId: number
    canAccess: number
    _all: number
  }


  export type RoleAccessMinAggregateInputType = {
    id?: true
    role?: true
    menuId?: true
    canAccess?: true
  }

  export type RoleAccessMaxAggregateInputType = {
    id?: true
    role?: true
    menuId?: true
    canAccess?: true
  }

  export type RoleAccessCountAggregateInputType = {
    id?: true
    role?: true
    menuId?: true
    canAccess?: true
    _all?: true
  }

  export type RoleAccessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoleAccess to aggregate.
     */
    where?: RoleAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoleAccesses to fetch.
     */
    orderBy?: RoleAccessOrderByWithRelationInput | RoleAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoleAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoleAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoleAccesses
    **/
    _count?: true | RoleAccessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleAccessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleAccessMaxAggregateInputType
  }

  export type GetRoleAccessAggregateType<T extends RoleAccessAggregateArgs> = {
        [P in keyof T & keyof AggregateRoleAccess]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoleAccess[P]>
      : GetScalarType<T[P], AggregateRoleAccess[P]>
  }




  export type RoleAccessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleAccessWhereInput
    orderBy?: RoleAccessOrderByWithAggregationInput | RoleAccessOrderByWithAggregationInput[]
    by: RoleAccessScalarFieldEnum[] | RoleAccessScalarFieldEnum
    having?: RoleAccessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleAccessCountAggregateInputType | true
    _min?: RoleAccessMinAggregateInputType
    _max?: RoleAccessMaxAggregateInputType
  }

  export type RoleAccessGroupByOutputType = {
    id: string
    role: $Enums.Role
    menuId: string
    canAccess: boolean
    _count: RoleAccessCountAggregateOutputType | null
    _min: RoleAccessMinAggregateOutputType | null
    _max: RoleAccessMaxAggregateOutputType | null
  }

  type GetRoleAccessGroupByPayload<T extends RoleAccessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleAccessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleAccessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleAccessGroupByOutputType[P]>
            : GetScalarType<T[P], RoleAccessGroupByOutputType[P]>
        }
      >
    >


  export type RoleAccessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    menuId?: boolean
    canAccess?: boolean
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roleAccess"]>


  export type RoleAccessSelectScalar = {
    id?: boolean
    role?: boolean
    menuId?: boolean
    canAccess?: boolean
  }

  export type RoleAccessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }

  export type $RoleAccessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoleAccess"
    objects: {
      menu: Prisma.$MenuPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role: $Enums.Role
      menuId: string
      canAccess: boolean
    }, ExtArgs["result"]["roleAccess"]>
    composites: {}
  }

  type RoleAccessGetPayload<S extends boolean | null | undefined | RoleAccessDefaultArgs> = $Result.GetResult<Prisma.$RoleAccessPayload, S>

  type RoleAccessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoleAccessFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoleAccessCountAggregateInputType | true
    }

  export interface RoleAccessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoleAccess'], meta: { name: 'RoleAccess' } }
    /**
     * Find zero or one RoleAccess that matches the filter.
     * @param {RoleAccessFindUniqueArgs} args - Arguments to find a RoleAccess
     * @example
     * // Get one RoleAccess
     * const roleAccess = await prisma.roleAccess.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleAccessFindUniqueArgs>(args: SelectSubset<T, RoleAccessFindUniqueArgs<ExtArgs>>): Prisma__RoleAccessClient<$Result.GetResult<Prisma.$RoleAccessPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RoleAccess that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RoleAccessFindUniqueOrThrowArgs} args - Arguments to find a RoleAccess
     * @example
     * // Get one RoleAccess
     * const roleAccess = await prisma.roleAccess.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleAccessFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleAccessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleAccessClient<$Result.GetResult<Prisma.$RoleAccessPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RoleAccess that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAccessFindFirstArgs} args - Arguments to find a RoleAccess
     * @example
     * // Get one RoleAccess
     * const roleAccess = await prisma.roleAccess.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleAccessFindFirstArgs>(args?: SelectSubset<T, RoleAccessFindFirstArgs<ExtArgs>>): Prisma__RoleAccessClient<$Result.GetResult<Prisma.$RoleAccessPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RoleAccess that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAccessFindFirstOrThrowArgs} args - Arguments to find a RoleAccess
     * @example
     * // Get one RoleAccess
     * const roleAccess = await prisma.roleAccess.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleAccessFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleAccessFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleAccessClient<$Result.GetResult<Prisma.$RoleAccessPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RoleAccesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAccessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoleAccesses
     * const roleAccesses = await prisma.roleAccess.findMany()
     * 
     * // Get first 10 RoleAccesses
     * const roleAccesses = await prisma.roleAccess.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleAccessWithIdOnly = await prisma.roleAccess.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleAccessFindManyArgs>(args?: SelectSubset<T, RoleAccessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoleAccessPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RoleAccess.
     * @param {RoleAccessCreateArgs} args - Arguments to create a RoleAccess.
     * @example
     * // Create one RoleAccess
     * const RoleAccess = await prisma.roleAccess.create({
     *   data: {
     *     // ... data to create a RoleAccess
     *   }
     * })
     * 
     */
    create<T extends RoleAccessCreateArgs>(args: SelectSubset<T, RoleAccessCreateArgs<ExtArgs>>): Prisma__RoleAccessClient<$Result.GetResult<Prisma.$RoleAccessPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RoleAccesses.
     * @param {RoleAccessCreateManyArgs} args - Arguments to create many RoleAccesses.
     * @example
     * // Create many RoleAccesses
     * const roleAccess = await prisma.roleAccess.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleAccessCreateManyArgs>(args?: SelectSubset<T, RoleAccessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RoleAccess.
     * @param {RoleAccessDeleteArgs} args - Arguments to delete one RoleAccess.
     * @example
     * // Delete one RoleAccess
     * const RoleAccess = await prisma.roleAccess.delete({
     *   where: {
     *     // ... filter to delete one RoleAccess
     *   }
     * })
     * 
     */
    delete<T extends RoleAccessDeleteArgs>(args: SelectSubset<T, RoleAccessDeleteArgs<ExtArgs>>): Prisma__RoleAccessClient<$Result.GetResult<Prisma.$RoleAccessPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RoleAccess.
     * @param {RoleAccessUpdateArgs} args - Arguments to update one RoleAccess.
     * @example
     * // Update one RoleAccess
     * const roleAccess = await prisma.roleAccess.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleAccessUpdateArgs>(args: SelectSubset<T, RoleAccessUpdateArgs<ExtArgs>>): Prisma__RoleAccessClient<$Result.GetResult<Prisma.$RoleAccessPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RoleAccesses.
     * @param {RoleAccessDeleteManyArgs} args - Arguments to filter RoleAccesses to delete.
     * @example
     * // Delete a few RoleAccesses
     * const { count } = await prisma.roleAccess.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleAccessDeleteManyArgs>(args?: SelectSubset<T, RoleAccessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoleAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAccessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoleAccesses
     * const roleAccess = await prisma.roleAccess.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleAccessUpdateManyArgs>(args: SelectSubset<T, RoleAccessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoleAccess.
     * @param {RoleAccessUpsertArgs} args - Arguments to update or create a RoleAccess.
     * @example
     * // Update or create a RoleAccess
     * const roleAccess = await prisma.roleAccess.upsert({
     *   create: {
     *     // ... data to create a RoleAccess
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoleAccess we want to update
     *   }
     * })
     */
    upsert<T extends RoleAccessUpsertArgs>(args: SelectSubset<T, RoleAccessUpsertArgs<ExtArgs>>): Prisma__RoleAccessClient<$Result.GetResult<Prisma.$RoleAccessPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RoleAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAccessCountArgs} args - Arguments to filter RoleAccesses to count.
     * @example
     * // Count the number of RoleAccesses
     * const count = await prisma.roleAccess.count({
     *   where: {
     *     // ... the filter for the RoleAccesses we want to count
     *   }
     * })
    **/
    count<T extends RoleAccessCountArgs>(
      args?: Subset<T, RoleAccessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleAccessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoleAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAccessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAccessAggregateArgs>(args: Subset<T, RoleAccessAggregateArgs>): Prisma.PrismaPromise<GetRoleAccessAggregateType<T>>

    /**
     * Group by RoleAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAccessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleAccessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleAccessGroupByArgs['orderBy'] }
        : { orderBy?: RoleAccessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleAccessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleAccessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoleAccess model
   */
  readonly fields: RoleAccessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoleAccess.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleAccessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    menu<T extends MenuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MenuDefaultArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoleAccess model
   */ 
  interface RoleAccessFieldRefs {
    readonly id: FieldRef<"RoleAccess", 'String'>
    readonly role: FieldRef<"RoleAccess", 'Role'>
    readonly menuId: FieldRef<"RoleAccess", 'String'>
    readonly canAccess: FieldRef<"RoleAccess", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * RoleAccess findUnique
   */
  export type RoleAccessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleAccess
     */
    select?: RoleAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleAccessInclude<ExtArgs> | null
    /**
     * Filter, which RoleAccess to fetch.
     */
    where: RoleAccessWhereUniqueInput
  }

  /**
   * RoleAccess findUniqueOrThrow
   */
  export type RoleAccessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleAccess
     */
    select?: RoleAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleAccessInclude<ExtArgs> | null
    /**
     * Filter, which RoleAccess to fetch.
     */
    where: RoleAccessWhereUniqueInput
  }

  /**
   * RoleAccess findFirst
   */
  export type RoleAccessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleAccess
     */
    select?: RoleAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleAccessInclude<ExtArgs> | null
    /**
     * Filter, which RoleAccess to fetch.
     */
    where?: RoleAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoleAccesses to fetch.
     */
    orderBy?: RoleAccessOrderByWithRelationInput | RoleAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoleAccesses.
     */
    cursor?: RoleAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoleAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoleAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoleAccesses.
     */
    distinct?: RoleAccessScalarFieldEnum | RoleAccessScalarFieldEnum[]
  }

  /**
   * RoleAccess findFirstOrThrow
   */
  export type RoleAccessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleAccess
     */
    select?: RoleAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleAccessInclude<ExtArgs> | null
    /**
     * Filter, which RoleAccess to fetch.
     */
    where?: RoleAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoleAccesses to fetch.
     */
    orderBy?: RoleAccessOrderByWithRelationInput | RoleAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoleAccesses.
     */
    cursor?: RoleAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoleAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoleAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoleAccesses.
     */
    distinct?: RoleAccessScalarFieldEnum | RoleAccessScalarFieldEnum[]
  }

  /**
   * RoleAccess findMany
   */
  export type RoleAccessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleAccess
     */
    select?: RoleAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleAccessInclude<ExtArgs> | null
    /**
     * Filter, which RoleAccesses to fetch.
     */
    where?: RoleAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoleAccesses to fetch.
     */
    orderBy?: RoleAccessOrderByWithRelationInput | RoleAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoleAccesses.
     */
    cursor?: RoleAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoleAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoleAccesses.
     */
    skip?: number
    distinct?: RoleAccessScalarFieldEnum | RoleAccessScalarFieldEnum[]
  }

  /**
   * RoleAccess create
   */
  export type RoleAccessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleAccess
     */
    select?: RoleAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleAccessInclude<ExtArgs> | null
    /**
     * The data needed to create a RoleAccess.
     */
    data: XOR<RoleAccessCreateInput, RoleAccessUncheckedCreateInput>
  }

  /**
   * RoleAccess createMany
   */
  export type RoleAccessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoleAccesses.
     */
    data: RoleAccessCreateManyInput | RoleAccessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoleAccess update
   */
  export type RoleAccessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleAccess
     */
    select?: RoleAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleAccessInclude<ExtArgs> | null
    /**
     * The data needed to update a RoleAccess.
     */
    data: XOR<RoleAccessUpdateInput, RoleAccessUncheckedUpdateInput>
    /**
     * Choose, which RoleAccess to update.
     */
    where: RoleAccessWhereUniqueInput
  }

  /**
   * RoleAccess updateMany
   */
  export type RoleAccessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoleAccesses.
     */
    data: XOR<RoleAccessUpdateManyMutationInput, RoleAccessUncheckedUpdateManyInput>
    /**
     * Filter which RoleAccesses to update
     */
    where?: RoleAccessWhereInput
  }

  /**
   * RoleAccess upsert
   */
  export type RoleAccessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleAccess
     */
    select?: RoleAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleAccessInclude<ExtArgs> | null
    /**
     * The filter to search for the RoleAccess to update in case it exists.
     */
    where: RoleAccessWhereUniqueInput
    /**
     * In case the RoleAccess found by the `where` argument doesn't exist, create a new RoleAccess with this data.
     */
    create: XOR<RoleAccessCreateInput, RoleAccessUncheckedCreateInput>
    /**
     * In case the RoleAccess was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleAccessUpdateInput, RoleAccessUncheckedUpdateInput>
  }

  /**
   * RoleAccess delete
   */
  export type RoleAccessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleAccess
     */
    select?: RoleAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleAccessInclude<ExtArgs> | null
    /**
     * Filter which RoleAccess to delete.
     */
    where: RoleAccessWhereUniqueInput
  }

  /**
   * RoleAccess deleteMany
   */
  export type RoleAccessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoleAccesses to delete
     */
    where?: RoleAccessWhereInput
  }

  /**
   * RoleAccess without action
   */
  export type RoleAccessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleAccess
     */
    select?: RoleAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleAccessInclude<ExtArgs> | null
  }


  /**
   * Model ApplicationConfig
   */

  export type AggregateApplicationConfig = {
    _count: ApplicationConfigCountAggregateOutputType | null
    _min: ApplicationConfigMinAggregateOutputType | null
    _max: ApplicationConfigMaxAggregateOutputType | null
  }

  export type ApplicationConfigMinAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApplicationConfigMaxAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApplicationConfigCountAggregateOutputType = {
    id: number
    key: number
    value: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ApplicationConfigMinAggregateInputType = {
    id?: true
    key?: true
    value?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApplicationConfigMaxAggregateInputType = {
    id?: true
    key?: true
    value?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApplicationConfigCountAggregateInputType = {
    id?: true
    key?: true
    value?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ApplicationConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApplicationConfig to aggregate.
     */
    where?: ApplicationConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationConfigs to fetch.
     */
    orderBy?: ApplicationConfigOrderByWithRelationInput | ApplicationConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApplicationConfigs
    **/
    _count?: true | ApplicationConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationConfigMaxAggregateInputType
  }

  export type GetApplicationConfigAggregateType<T extends ApplicationConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateApplicationConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplicationConfig[P]>
      : GetScalarType<T[P], AggregateApplicationConfig[P]>
  }




  export type ApplicationConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationConfigWhereInput
    orderBy?: ApplicationConfigOrderByWithAggregationInput | ApplicationConfigOrderByWithAggregationInput[]
    by: ApplicationConfigScalarFieldEnum[] | ApplicationConfigScalarFieldEnum
    having?: ApplicationConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationConfigCountAggregateInputType | true
    _min?: ApplicationConfigMinAggregateInputType
    _max?: ApplicationConfigMaxAggregateInputType
  }

  export type ApplicationConfigGroupByOutputType = {
    id: string
    key: string
    value: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: ApplicationConfigCountAggregateOutputType | null
    _min: ApplicationConfigMinAggregateOutputType | null
    _max: ApplicationConfigMaxAggregateOutputType | null
  }

  type GetApplicationConfigGroupByPayload<T extends ApplicationConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationConfigGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationConfigGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["applicationConfig"]>


  export type ApplicationConfigSelectScalar = {
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $ApplicationConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApplicationConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      value: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["applicationConfig"]>
    composites: {}
  }

  type ApplicationConfigGetPayload<S extends boolean | null | undefined | ApplicationConfigDefaultArgs> = $Result.GetResult<Prisma.$ApplicationConfigPayload, S>

  type ApplicationConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ApplicationConfigFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ApplicationConfigCountAggregateInputType | true
    }

  export interface ApplicationConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApplicationConfig'], meta: { name: 'ApplicationConfig' } }
    /**
     * Find zero or one ApplicationConfig that matches the filter.
     * @param {ApplicationConfigFindUniqueArgs} args - Arguments to find a ApplicationConfig
     * @example
     * // Get one ApplicationConfig
     * const applicationConfig = await prisma.applicationConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationConfigFindUniqueArgs>(args: SelectSubset<T, ApplicationConfigFindUniqueArgs<ExtArgs>>): Prisma__ApplicationConfigClient<$Result.GetResult<Prisma.$ApplicationConfigPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ApplicationConfig that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ApplicationConfigFindUniqueOrThrowArgs} args - Arguments to find a ApplicationConfig
     * @example
     * // Get one ApplicationConfig
     * const applicationConfig = await prisma.applicationConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicationConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicationConfigClient<$Result.GetResult<Prisma.$ApplicationConfigPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ApplicationConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationConfigFindFirstArgs} args - Arguments to find a ApplicationConfig
     * @example
     * // Get one ApplicationConfig
     * const applicationConfig = await prisma.applicationConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationConfigFindFirstArgs>(args?: SelectSubset<T, ApplicationConfigFindFirstArgs<ExtArgs>>): Prisma__ApplicationConfigClient<$Result.GetResult<Prisma.$ApplicationConfigPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ApplicationConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationConfigFindFirstOrThrowArgs} args - Arguments to find a ApplicationConfig
     * @example
     * // Get one ApplicationConfig
     * const applicationConfig = await prisma.applicationConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicationConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicationConfigClient<$Result.GetResult<Prisma.$ApplicationConfigPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ApplicationConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApplicationConfigs
     * const applicationConfigs = await prisma.applicationConfig.findMany()
     * 
     * // Get first 10 ApplicationConfigs
     * const applicationConfigs = await prisma.applicationConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationConfigWithIdOnly = await prisma.applicationConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicationConfigFindManyArgs>(args?: SelectSubset<T, ApplicationConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationConfigPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ApplicationConfig.
     * @param {ApplicationConfigCreateArgs} args - Arguments to create a ApplicationConfig.
     * @example
     * // Create one ApplicationConfig
     * const ApplicationConfig = await prisma.applicationConfig.create({
     *   data: {
     *     // ... data to create a ApplicationConfig
     *   }
     * })
     * 
     */
    create<T extends ApplicationConfigCreateArgs>(args: SelectSubset<T, ApplicationConfigCreateArgs<ExtArgs>>): Prisma__ApplicationConfigClient<$Result.GetResult<Prisma.$ApplicationConfigPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ApplicationConfigs.
     * @param {ApplicationConfigCreateManyArgs} args - Arguments to create many ApplicationConfigs.
     * @example
     * // Create many ApplicationConfigs
     * const applicationConfig = await prisma.applicationConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicationConfigCreateManyArgs>(args?: SelectSubset<T, ApplicationConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ApplicationConfig.
     * @param {ApplicationConfigDeleteArgs} args - Arguments to delete one ApplicationConfig.
     * @example
     * // Delete one ApplicationConfig
     * const ApplicationConfig = await prisma.applicationConfig.delete({
     *   where: {
     *     // ... filter to delete one ApplicationConfig
     *   }
     * })
     * 
     */
    delete<T extends ApplicationConfigDeleteArgs>(args: SelectSubset<T, ApplicationConfigDeleteArgs<ExtArgs>>): Prisma__ApplicationConfigClient<$Result.GetResult<Prisma.$ApplicationConfigPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ApplicationConfig.
     * @param {ApplicationConfigUpdateArgs} args - Arguments to update one ApplicationConfig.
     * @example
     * // Update one ApplicationConfig
     * const applicationConfig = await prisma.applicationConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicationConfigUpdateArgs>(args: SelectSubset<T, ApplicationConfigUpdateArgs<ExtArgs>>): Prisma__ApplicationConfigClient<$Result.GetResult<Prisma.$ApplicationConfigPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ApplicationConfigs.
     * @param {ApplicationConfigDeleteManyArgs} args - Arguments to filter ApplicationConfigs to delete.
     * @example
     * // Delete a few ApplicationConfigs
     * const { count } = await prisma.applicationConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicationConfigDeleteManyArgs>(args?: SelectSubset<T, ApplicationConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApplicationConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApplicationConfigs
     * const applicationConfig = await prisma.applicationConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicationConfigUpdateManyArgs>(args: SelectSubset<T, ApplicationConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ApplicationConfig.
     * @param {ApplicationConfigUpsertArgs} args - Arguments to update or create a ApplicationConfig.
     * @example
     * // Update or create a ApplicationConfig
     * const applicationConfig = await prisma.applicationConfig.upsert({
     *   create: {
     *     // ... data to create a ApplicationConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApplicationConfig we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationConfigUpsertArgs>(args: SelectSubset<T, ApplicationConfigUpsertArgs<ExtArgs>>): Prisma__ApplicationConfigClient<$Result.GetResult<Prisma.$ApplicationConfigPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ApplicationConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationConfigCountArgs} args - Arguments to filter ApplicationConfigs to count.
     * @example
     * // Count the number of ApplicationConfigs
     * const count = await prisma.applicationConfig.count({
     *   where: {
     *     // ... the filter for the ApplicationConfigs we want to count
     *   }
     * })
    **/
    count<T extends ApplicationConfigCountArgs>(
      args?: Subset<T, ApplicationConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApplicationConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplicationConfigAggregateArgs>(args: Subset<T, ApplicationConfigAggregateArgs>): Prisma.PrismaPromise<GetApplicationConfigAggregateType<T>>

    /**
     * Group by ApplicationConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApplicationConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationConfigGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApplicationConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApplicationConfig model
   */
  readonly fields: ApplicationConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApplicationConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApplicationConfig model
   */ 
  interface ApplicationConfigFieldRefs {
    readonly id: FieldRef<"ApplicationConfig", 'String'>
    readonly key: FieldRef<"ApplicationConfig", 'String'>
    readonly value: FieldRef<"ApplicationConfig", 'String'>
    readonly description: FieldRef<"ApplicationConfig", 'String'>
    readonly createdAt: FieldRef<"ApplicationConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"ApplicationConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApplicationConfig findUnique
   */
  export type ApplicationConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationConfig
     */
    select?: ApplicationConfigSelect<ExtArgs> | null
    /**
     * Filter, which ApplicationConfig to fetch.
     */
    where: ApplicationConfigWhereUniqueInput
  }

  /**
   * ApplicationConfig findUniqueOrThrow
   */
  export type ApplicationConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationConfig
     */
    select?: ApplicationConfigSelect<ExtArgs> | null
    /**
     * Filter, which ApplicationConfig to fetch.
     */
    where: ApplicationConfigWhereUniqueInput
  }

  /**
   * ApplicationConfig findFirst
   */
  export type ApplicationConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationConfig
     */
    select?: ApplicationConfigSelect<ExtArgs> | null
    /**
     * Filter, which ApplicationConfig to fetch.
     */
    where?: ApplicationConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationConfigs to fetch.
     */
    orderBy?: ApplicationConfigOrderByWithRelationInput | ApplicationConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApplicationConfigs.
     */
    cursor?: ApplicationConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApplicationConfigs.
     */
    distinct?: ApplicationConfigScalarFieldEnum | ApplicationConfigScalarFieldEnum[]
  }

  /**
   * ApplicationConfig findFirstOrThrow
   */
  export type ApplicationConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationConfig
     */
    select?: ApplicationConfigSelect<ExtArgs> | null
    /**
     * Filter, which ApplicationConfig to fetch.
     */
    where?: ApplicationConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationConfigs to fetch.
     */
    orderBy?: ApplicationConfigOrderByWithRelationInput | ApplicationConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApplicationConfigs.
     */
    cursor?: ApplicationConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApplicationConfigs.
     */
    distinct?: ApplicationConfigScalarFieldEnum | ApplicationConfigScalarFieldEnum[]
  }

  /**
   * ApplicationConfig findMany
   */
  export type ApplicationConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationConfig
     */
    select?: ApplicationConfigSelect<ExtArgs> | null
    /**
     * Filter, which ApplicationConfigs to fetch.
     */
    where?: ApplicationConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationConfigs to fetch.
     */
    orderBy?: ApplicationConfigOrderByWithRelationInput | ApplicationConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApplicationConfigs.
     */
    cursor?: ApplicationConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationConfigs.
     */
    skip?: number
    distinct?: ApplicationConfigScalarFieldEnum | ApplicationConfigScalarFieldEnum[]
  }

  /**
   * ApplicationConfig create
   */
  export type ApplicationConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationConfig
     */
    select?: ApplicationConfigSelect<ExtArgs> | null
    /**
     * The data needed to create a ApplicationConfig.
     */
    data: XOR<ApplicationConfigCreateInput, ApplicationConfigUncheckedCreateInput>
  }

  /**
   * ApplicationConfig createMany
   */
  export type ApplicationConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApplicationConfigs.
     */
    data: ApplicationConfigCreateManyInput | ApplicationConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApplicationConfig update
   */
  export type ApplicationConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationConfig
     */
    select?: ApplicationConfigSelect<ExtArgs> | null
    /**
     * The data needed to update a ApplicationConfig.
     */
    data: XOR<ApplicationConfigUpdateInput, ApplicationConfigUncheckedUpdateInput>
    /**
     * Choose, which ApplicationConfig to update.
     */
    where: ApplicationConfigWhereUniqueInput
  }

  /**
   * ApplicationConfig updateMany
   */
  export type ApplicationConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApplicationConfigs.
     */
    data: XOR<ApplicationConfigUpdateManyMutationInput, ApplicationConfigUncheckedUpdateManyInput>
    /**
     * Filter which ApplicationConfigs to update
     */
    where?: ApplicationConfigWhereInput
  }

  /**
   * ApplicationConfig upsert
   */
  export type ApplicationConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationConfig
     */
    select?: ApplicationConfigSelect<ExtArgs> | null
    /**
     * The filter to search for the ApplicationConfig to update in case it exists.
     */
    where: ApplicationConfigWhereUniqueInput
    /**
     * In case the ApplicationConfig found by the `where` argument doesn't exist, create a new ApplicationConfig with this data.
     */
    create: XOR<ApplicationConfigCreateInput, ApplicationConfigUncheckedCreateInput>
    /**
     * In case the ApplicationConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationConfigUpdateInput, ApplicationConfigUncheckedUpdateInput>
  }

  /**
   * ApplicationConfig delete
   */
  export type ApplicationConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationConfig
     */
    select?: ApplicationConfigSelect<ExtArgs> | null
    /**
     * Filter which ApplicationConfig to delete.
     */
    where: ApplicationConfigWhereUniqueInput
  }

  /**
   * ApplicationConfig deleteMany
   */
  export type ApplicationConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApplicationConfigs to delete
     */
    where?: ApplicationConfigWhereInput
  }

  /**
   * ApplicationConfig without action
   */
  export type ApplicationConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationConfig
     */
    select?: ApplicationConfigSelect<ExtArgs> | null
  }


  /**
   * Model Presensi
   */

  export type AggregatePresensi = {
    _count: PresensiCountAggregateOutputType | null
    _min: PresensiMinAggregateOutputType | null
    _max: PresensiMaxAggregateOutputType | null
  }

  export type PresensiMinAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    checkIn: Date | null
    checkOut: Date | null
    locationIn: string | null
    locationOut: string | null
    photoIn: string | null
    photoOut: string | null
    status: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PresensiMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    checkIn: Date | null
    checkOut: Date | null
    locationIn: string | null
    locationOut: string | null
    photoIn: string | null
    photoOut: string | null
    status: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PresensiCountAggregateOutputType = {
    id: number
    userId: number
    date: number
    checkIn: number
    checkOut: number
    locationIn: number
    locationOut: number
    photoIn: number
    photoOut: number
    status: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PresensiMinAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    checkIn?: true
    checkOut?: true
    locationIn?: true
    locationOut?: true
    photoIn?: true
    photoOut?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PresensiMaxAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    checkIn?: true
    checkOut?: true
    locationIn?: true
    locationOut?: true
    photoIn?: true
    photoOut?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PresensiCountAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    checkIn?: true
    checkOut?: true
    locationIn?: true
    locationOut?: true
    photoIn?: true
    photoOut?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PresensiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Presensi to aggregate.
     */
    where?: PresensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Presensis to fetch.
     */
    orderBy?: PresensiOrderByWithRelationInput | PresensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PresensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Presensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Presensis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Presensis
    **/
    _count?: true | PresensiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PresensiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PresensiMaxAggregateInputType
  }

  export type GetPresensiAggregateType<T extends PresensiAggregateArgs> = {
        [P in keyof T & keyof AggregatePresensi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePresensi[P]>
      : GetScalarType<T[P], AggregatePresensi[P]>
  }




  export type PresensiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PresensiWhereInput
    orderBy?: PresensiOrderByWithAggregationInput | PresensiOrderByWithAggregationInput[]
    by: PresensiScalarFieldEnum[] | PresensiScalarFieldEnum
    having?: PresensiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PresensiCountAggregateInputType | true
    _min?: PresensiMinAggregateInputType
    _max?: PresensiMaxAggregateInputType
  }

  export type PresensiGroupByOutputType = {
    id: string
    userId: string
    date: Date
    checkIn: Date | null
    checkOut: Date | null
    locationIn: string | null
    locationOut: string | null
    photoIn: string | null
    photoOut: string | null
    status: string
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: PresensiCountAggregateOutputType | null
    _min: PresensiMinAggregateOutputType | null
    _max: PresensiMaxAggregateOutputType | null
  }

  type GetPresensiGroupByPayload<T extends PresensiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PresensiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PresensiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PresensiGroupByOutputType[P]>
            : GetScalarType<T[P], PresensiGroupByOutputType[P]>
        }
      >
    >


  export type PresensiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    checkIn?: boolean
    checkOut?: boolean
    locationIn?: boolean
    locationOut?: boolean
    photoIn?: boolean
    photoOut?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["presensi"]>


  export type PresensiSelectScalar = {
    id?: boolean
    userId?: boolean
    date?: boolean
    checkIn?: boolean
    checkOut?: boolean
    locationIn?: boolean
    locationOut?: boolean
    photoIn?: boolean
    photoOut?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PresensiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PresensiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Presensi"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      date: Date
      checkIn: Date | null
      checkOut: Date | null
      locationIn: string | null
      locationOut: string | null
      photoIn: string | null
      photoOut: string | null
      status: string
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["presensi"]>
    composites: {}
  }

  type PresensiGetPayload<S extends boolean | null | undefined | PresensiDefaultArgs> = $Result.GetResult<Prisma.$PresensiPayload, S>

  type PresensiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PresensiFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PresensiCountAggregateInputType | true
    }

  export interface PresensiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Presensi'], meta: { name: 'Presensi' } }
    /**
     * Find zero or one Presensi that matches the filter.
     * @param {PresensiFindUniqueArgs} args - Arguments to find a Presensi
     * @example
     * // Get one Presensi
     * const presensi = await prisma.presensi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PresensiFindUniqueArgs>(args: SelectSubset<T, PresensiFindUniqueArgs<ExtArgs>>): Prisma__PresensiClient<$Result.GetResult<Prisma.$PresensiPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Presensi that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PresensiFindUniqueOrThrowArgs} args - Arguments to find a Presensi
     * @example
     * // Get one Presensi
     * const presensi = await prisma.presensi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PresensiFindUniqueOrThrowArgs>(args: SelectSubset<T, PresensiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PresensiClient<$Result.GetResult<Prisma.$PresensiPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Presensi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresensiFindFirstArgs} args - Arguments to find a Presensi
     * @example
     * // Get one Presensi
     * const presensi = await prisma.presensi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PresensiFindFirstArgs>(args?: SelectSubset<T, PresensiFindFirstArgs<ExtArgs>>): Prisma__PresensiClient<$Result.GetResult<Prisma.$PresensiPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Presensi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresensiFindFirstOrThrowArgs} args - Arguments to find a Presensi
     * @example
     * // Get one Presensi
     * const presensi = await prisma.presensi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PresensiFindFirstOrThrowArgs>(args?: SelectSubset<T, PresensiFindFirstOrThrowArgs<ExtArgs>>): Prisma__PresensiClient<$Result.GetResult<Prisma.$PresensiPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Presensis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresensiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Presensis
     * const presensis = await prisma.presensi.findMany()
     * 
     * // Get first 10 Presensis
     * const presensis = await prisma.presensi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const presensiWithIdOnly = await prisma.presensi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PresensiFindManyArgs>(args?: SelectSubset<T, PresensiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresensiPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Presensi.
     * @param {PresensiCreateArgs} args - Arguments to create a Presensi.
     * @example
     * // Create one Presensi
     * const Presensi = await prisma.presensi.create({
     *   data: {
     *     // ... data to create a Presensi
     *   }
     * })
     * 
     */
    create<T extends PresensiCreateArgs>(args: SelectSubset<T, PresensiCreateArgs<ExtArgs>>): Prisma__PresensiClient<$Result.GetResult<Prisma.$PresensiPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Presensis.
     * @param {PresensiCreateManyArgs} args - Arguments to create many Presensis.
     * @example
     * // Create many Presensis
     * const presensi = await prisma.presensi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PresensiCreateManyArgs>(args?: SelectSubset<T, PresensiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Presensi.
     * @param {PresensiDeleteArgs} args - Arguments to delete one Presensi.
     * @example
     * // Delete one Presensi
     * const Presensi = await prisma.presensi.delete({
     *   where: {
     *     // ... filter to delete one Presensi
     *   }
     * })
     * 
     */
    delete<T extends PresensiDeleteArgs>(args: SelectSubset<T, PresensiDeleteArgs<ExtArgs>>): Prisma__PresensiClient<$Result.GetResult<Prisma.$PresensiPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Presensi.
     * @param {PresensiUpdateArgs} args - Arguments to update one Presensi.
     * @example
     * // Update one Presensi
     * const presensi = await prisma.presensi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PresensiUpdateArgs>(args: SelectSubset<T, PresensiUpdateArgs<ExtArgs>>): Prisma__PresensiClient<$Result.GetResult<Prisma.$PresensiPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Presensis.
     * @param {PresensiDeleteManyArgs} args - Arguments to filter Presensis to delete.
     * @example
     * // Delete a few Presensis
     * const { count } = await prisma.presensi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PresensiDeleteManyArgs>(args?: SelectSubset<T, PresensiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Presensis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresensiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Presensis
     * const presensi = await prisma.presensi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PresensiUpdateManyArgs>(args: SelectSubset<T, PresensiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Presensi.
     * @param {PresensiUpsertArgs} args - Arguments to update or create a Presensi.
     * @example
     * // Update or create a Presensi
     * const presensi = await prisma.presensi.upsert({
     *   create: {
     *     // ... data to create a Presensi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Presensi we want to update
     *   }
     * })
     */
    upsert<T extends PresensiUpsertArgs>(args: SelectSubset<T, PresensiUpsertArgs<ExtArgs>>): Prisma__PresensiClient<$Result.GetResult<Prisma.$PresensiPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Presensis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresensiCountArgs} args - Arguments to filter Presensis to count.
     * @example
     * // Count the number of Presensis
     * const count = await prisma.presensi.count({
     *   where: {
     *     // ... the filter for the Presensis we want to count
     *   }
     * })
    **/
    count<T extends PresensiCountArgs>(
      args?: Subset<T, PresensiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PresensiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Presensi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresensiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PresensiAggregateArgs>(args: Subset<T, PresensiAggregateArgs>): Prisma.PrismaPromise<GetPresensiAggregateType<T>>

    /**
     * Group by Presensi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresensiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PresensiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PresensiGroupByArgs['orderBy'] }
        : { orderBy?: PresensiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PresensiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPresensiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Presensi model
   */
  readonly fields: PresensiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Presensi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PresensiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Presensi model
   */ 
  interface PresensiFieldRefs {
    readonly id: FieldRef<"Presensi", 'String'>
    readonly userId: FieldRef<"Presensi", 'String'>
    readonly date: FieldRef<"Presensi", 'DateTime'>
    readonly checkIn: FieldRef<"Presensi", 'DateTime'>
    readonly checkOut: FieldRef<"Presensi", 'DateTime'>
    readonly locationIn: FieldRef<"Presensi", 'String'>
    readonly locationOut: FieldRef<"Presensi", 'String'>
    readonly photoIn: FieldRef<"Presensi", 'String'>
    readonly photoOut: FieldRef<"Presensi", 'String'>
    readonly status: FieldRef<"Presensi", 'String'>
    readonly notes: FieldRef<"Presensi", 'String'>
    readonly createdAt: FieldRef<"Presensi", 'DateTime'>
    readonly updatedAt: FieldRef<"Presensi", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Presensi findUnique
   */
  export type PresensiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presensi
     */
    select?: PresensiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresensiInclude<ExtArgs> | null
    /**
     * Filter, which Presensi to fetch.
     */
    where: PresensiWhereUniqueInput
  }

  /**
   * Presensi findUniqueOrThrow
   */
  export type PresensiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presensi
     */
    select?: PresensiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresensiInclude<ExtArgs> | null
    /**
     * Filter, which Presensi to fetch.
     */
    where: PresensiWhereUniqueInput
  }

  /**
   * Presensi findFirst
   */
  export type PresensiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presensi
     */
    select?: PresensiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresensiInclude<ExtArgs> | null
    /**
     * Filter, which Presensi to fetch.
     */
    where?: PresensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Presensis to fetch.
     */
    orderBy?: PresensiOrderByWithRelationInput | PresensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Presensis.
     */
    cursor?: PresensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Presensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Presensis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Presensis.
     */
    distinct?: PresensiScalarFieldEnum | PresensiScalarFieldEnum[]
  }

  /**
   * Presensi findFirstOrThrow
   */
  export type PresensiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presensi
     */
    select?: PresensiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresensiInclude<ExtArgs> | null
    /**
     * Filter, which Presensi to fetch.
     */
    where?: PresensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Presensis to fetch.
     */
    orderBy?: PresensiOrderByWithRelationInput | PresensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Presensis.
     */
    cursor?: PresensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Presensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Presensis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Presensis.
     */
    distinct?: PresensiScalarFieldEnum | PresensiScalarFieldEnum[]
  }

  /**
   * Presensi findMany
   */
  export type PresensiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presensi
     */
    select?: PresensiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresensiInclude<ExtArgs> | null
    /**
     * Filter, which Presensis to fetch.
     */
    where?: PresensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Presensis to fetch.
     */
    orderBy?: PresensiOrderByWithRelationInput | PresensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Presensis.
     */
    cursor?: PresensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Presensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Presensis.
     */
    skip?: number
    distinct?: PresensiScalarFieldEnum | PresensiScalarFieldEnum[]
  }

  /**
   * Presensi create
   */
  export type PresensiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presensi
     */
    select?: PresensiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresensiInclude<ExtArgs> | null
    /**
     * The data needed to create a Presensi.
     */
    data: XOR<PresensiCreateInput, PresensiUncheckedCreateInput>
  }

  /**
   * Presensi createMany
   */
  export type PresensiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Presensis.
     */
    data: PresensiCreateManyInput | PresensiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Presensi update
   */
  export type PresensiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presensi
     */
    select?: PresensiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresensiInclude<ExtArgs> | null
    /**
     * The data needed to update a Presensi.
     */
    data: XOR<PresensiUpdateInput, PresensiUncheckedUpdateInput>
    /**
     * Choose, which Presensi to update.
     */
    where: PresensiWhereUniqueInput
  }

  /**
   * Presensi updateMany
   */
  export type PresensiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Presensis.
     */
    data: XOR<PresensiUpdateManyMutationInput, PresensiUncheckedUpdateManyInput>
    /**
     * Filter which Presensis to update
     */
    where?: PresensiWhereInput
  }

  /**
   * Presensi upsert
   */
  export type PresensiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presensi
     */
    select?: PresensiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresensiInclude<ExtArgs> | null
    /**
     * The filter to search for the Presensi to update in case it exists.
     */
    where: PresensiWhereUniqueInput
    /**
     * In case the Presensi found by the `where` argument doesn't exist, create a new Presensi with this data.
     */
    create: XOR<PresensiCreateInput, PresensiUncheckedCreateInput>
    /**
     * In case the Presensi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PresensiUpdateInput, PresensiUncheckedUpdateInput>
  }

  /**
   * Presensi delete
   */
  export type PresensiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presensi
     */
    select?: PresensiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresensiInclude<ExtArgs> | null
    /**
     * Filter which Presensi to delete.
     */
    where: PresensiWhereUniqueInput
  }

  /**
   * Presensi deleteMany
   */
  export type PresensiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Presensis to delete
     */
    where?: PresensiWhereInput
  }

  /**
   * Presensi without action
   */
  export type PresensiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presensi
     */
    select?: PresensiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresensiInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const JenjangScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JenjangScalarFieldEnum = (typeof JenjangScalarFieldEnum)[keyof typeof JenjangScalarFieldEnum]


  export const UpaScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    location: 'location',
    dpcId: 'dpcId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UpaScalarFieldEnum = (typeof UpaScalarFieldEnum)[keyof typeof UpaScalarFieldEnum]


  export const DpcScalarFieldEnum: {
    id: 'id',
    kodeDpc: 'kodeDpc',
    namaDpc: 'namaDpc',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DpcScalarFieldEnum = (typeof DpcScalarFieldEnum)[keyof typeof DpcScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    fullName: 'fullName',
    phoneNumber: 'phoneNumber',
    employeeId: 'employeeId',
    role: 'role',
    status: 'status',
    jenjangId: 'jenjangId',
    upaId: 'upaId',
    mentorId: 'mentorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ActivityScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    date: 'date',
    location: 'location',
    flag: 'flag',
    latitude: 'latitude',
    longitude: 'longitude',
    radius: 'radius',
    userId: 'userId',
    upaId: 'upaId',
    answers: 'answers',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    attendanceToken: 'attendanceToken',
    isActive: 'isActive'
  };

  export type ActivityScalarFieldEnum = (typeof ActivityScalarFieldEnum)[keyof typeof ActivityScalarFieldEnum]


  export const AttendanceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    activityId: 'activityId',
    timestamp: 'timestamp',
    status: 'status'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    action: 'action',
    resource: 'resource',
    details: 'details',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const PertanyaanScalarFieldEnum: {
    id: 'id',
    pertanyaan: 'pertanyaan',
    tipeJawaban: 'tipeJawaban',
    opsiJawaban: 'opsiJawaban',
    isRequired: 'isRequired',
    sourceList: 'sourceList',
    type_kegiatan: 'type_kegiatan',
    isActive: 'isActive',
    urutan: 'urutan',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PertanyaanScalarFieldEnum = (typeof PertanyaanScalarFieldEnum)[keyof typeof PertanyaanScalarFieldEnum]


  export const TranslationScalarFieldEnum: {
    id: 'id',
    variableName: 'variableName',
    indonesiaValue: 'indonesiaValue',
    englishValue: 'englishValue',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TranslationScalarFieldEnum = (typeof TranslationScalarFieldEnum)[keyof typeof TranslationScalarFieldEnum]


  export const MenuScalarFieldEnum: {
    id: 'id',
    label: 'label',
    path: 'path',
    group: 'group',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MenuScalarFieldEnum = (typeof MenuScalarFieldEnum)[keyof typeof MenuScalarFieldEnum]


  export const RoleAccessScalarFieldEnum: {
    id: 'id',
    role: 'role',
    menuId: 'menuId',
    canAccess: 'canAccess'
  };

  export type RoleAccessScalarFieldEnum = (typeof RoleAccessScalarFieldEnum)[keyof typeof RoleAccessScalarFieldEnum]


  export const ApplicationConfigScalarFieldEnum: {
    id: 'id',
    key: 'key',
    value: 'value',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ApplicationConfigScalarFieldEnum = (typeof ApplicationConfigScalarFieldEnum)[keyof typeof ApplicationConfigScalarFieldEnum]


  export const PresensiScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    date: 'date',
    checkIn: 'checkIn',
    checkOut: 'checkOut',
    locationIn: 'locationIn',
    locationOut: 'locationOut',
    photoIn: 'photoIn',
    photoOut: 'photoOut',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PresensiScalarFieldEnum = (typeof PresensiScalarFieldEnum)[keyof typeof PresensiScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'TipeJawaban'
   */
  export type EnumTipeJawabanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipeJawaban'>
    
  /**
   * Deep Input Types
   */


  export type JenjangWhereInput = {
    AND?: JenjangWhereInput | JenjangWhereInput[]
    OR?: JenjangWhereInput[]
    NOT?: JenjangWhereInput | JenjangWhereInput[]
    id?: StringFilter<"Jenjang"> | string
    code?: StringFilter<"Jenjang"> | string
    name?: StringFilter<"Jenjang"> | string
    description?: StringNullableFilter<"Jenjang"> | string | null
    createdAt?: DateTimeFilter<"Jenjang"> | Date | string
    updatedAt?: DateTimeFilter<"Jenjang"> | Date | string
    users?: UserListRelationFilter
  }

  export type JenjangOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type JenjangWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: JenjangWhereInput | JenjangWhereInput[]
    OR?: JenjangWhereInput[]
    NOT?: JenjangWhereInput | JenjangWhereInput[]
    name?: StringFilter<"Jenjang"> | string
    description?: StringNullableFilter<"Jenjang"> | string | null
    createdAt?: DateTimeFilter<"Jenjang"> | Date | string
    updatedAt?: DateTimeFilter<"Jenjang"> | Date | string
    users?: UserListRelationFilter
  }, "id" | "code">

  export type JenjangOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JenjangCountOrderByAggregateInput
    _max?: JenjangMaxOrderByAggregateInput
    _min?: JenjangMinOrderByAggregateInput
  }

  export type JenjangScalarWhereWithAggregatesInput = {
    AND?: JenjangScalarWhereWithAggregatesInput | JenjangScalarWhereWithAggregatesInput[]
    OR?: JenjangScalarWhereWithAggregatesInput[]
    NOT?: JenjangScalarWhereWithAggregatesInput | JenjangScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Jenjang"> | string
    code?: StringWithAggregatesFilter<"Jenjang"> | string
    name?: StringWithAggregatesFilter<"Jenjang"> | string
    description?: StringNullableWithAggregatesFilter<"Jenjang"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Jenjang"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Jenjang"> | Date | string
  }

  export type UpaWhereInput = {
    AND?: UpaWhereInput | UpaWhereInput[]
    OR?: UpaWhereInput[]
    NOT?: UpaWhereInput | UpaWhereInput[]
    id?: StringFilter<"Upa"> | string
    code?: StringFilter<"Upa"> | string
    name?: StringFilter<"Upa"> | string
    location?: StringNullableFilter<"Upa"> | string | null
    dpcId?: StringNullableFilter<"Upa"> | string | null
    createdAt?: DateTimeFilter<"Upa"> | Date | string
    updatedAt?: DateTimeFilter<"Upa"> | Date | string
    dpc?: XOR<DpcNullableRelationFilter, DpcWhereInput> | null
    users?: UserListRelationFilter
    activities?: ActivityListRelationFilter
  }

  export type UpaOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    location?: SortOrderInput | SortOrder
    dpcId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dpc?: DpcOrderByWithRelationInput
    users?: UserOrderByRelationAggregateInput
    activities?: ActivityOrderByRelationAggregateInput
  }

  export type UpaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: UpaWhereInput | UpaWhereInput[]
    OR?: UpaWhereInput[]
    NOT?: UpaWhereInput | UpaWhereInput[]
    name?: StringFilter<"Upa"> | string
    location?: StringNullableFilter<"Upa"> | string | null
    dpcId?: StringNullableFilter<"Upa"> | string | null
    createdAt?: DateTimeFilter<"Upa"> | Date | string
    updatedAt?: DateTimeFilter<"Upa"> | Date | string
    dpc?: XOR<DpcNullableRelationFilter, DpcWhereInput> | null
    users?: UserListRelationFilter
    activities?: ActivityListRelationFilter
  }, "id" | "code">

  export type UpaOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    location?: SortOrderInput | SortOrder
    dpcId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UpaCountOrderByAggregateInput
    _max?: UpaMaxOrderByAggregateInput
    _min?: UpaMinOrderByAggregateInput
  }

  export type UpaScalarWhereWithAggregatesInput = {
    AND?: UpaScalarWhereWithAggregatesInput | UpaScalarWhereWithAggregatesInput[]
    OR?: UpaScalarWhereWithAggregatesInput[]
    NOT?: UpaScalarWhereWithAggregatesInput | UpaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Upa"> | string
    code?: StringWithAggregatesFilter<"Upa"> | string
    name?: StringWithAggregatesFilter<"Upa"> | string
    location?: StringNullableWithAggregatesFilter<"Upa"> | string | null
    dpcId?: StringNullableWithAggregatesFilter<"Upa"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Upa"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Upa"> | Date | string
  }

  export type DpcWhereInput = {
    AND?: DpcWhereInput | DpcWhereInput[]
    OR?: DpcWhereInput[]
    NOT?: DpcWhereInput | DpcWhereInput[]
    id?: StringFilter<"Dpc"> | string
    kodeDpc?: StringFilter<"Dpc"> | string
    namaDpc?: StringFilter<"Dpc"> | string
    isActive?: BoolFilter<"Dpc"> | boolean
    createdAt?: DateTimeFilter<"Dpc"> | Date | string
    updatedAt?: DateTimeFilter<"Dpc"> | Date | string
    upas?: UpaListRelationFilter
  }

  export type DpcOrderByWithRelationInput = {
    id?: SortOrder
    kodeDpc?: SortOrder
    namaDpc?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    upas?: UpaOrderByRelationAggregateInput
  }

  export type DpcWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    kodeDpc?: string
    AND?: DpcWhereInput | DpcWhereInput[]
    OR?: DpcWhereInput[]
    NOT?: DpcWhereInput | DpcWhereInput[]
    namaDpc?: StringFilter<"Dpc"> | string
    isActive?: BoolFilter<"Dpc"> | boolean
    createdAt?: DateTimeFilter<"Dpc"> | Date | string
    updatedAt?: DateTimeFilter<"Dpc"> | Date | string
    upas?: UpaListRelationFilter
  }, "id" | "kodeDpc">

  export type DpcOrderByWithAggregationInput = {
    id?: SortOrder
    kodeDpc?: SortOrder
    namaDpc?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DpcCountOrderByAggregateInput
    _max?: DpcMaxOrderByAggregateInput
    _min?: DpcMinOrderByAggregateInput
  }

  export type DpcScalarWhereWithAggregatesInput = {
    AND?: DpcScalarWhereWithAggregatesInput | DpcScalarWhereWithAggregatesInput[]
    OR?: DpcScalarWhereWithAggregatesInput[]
    NOT?: DpcScalarWhereWithAggregatesInput | DpcScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Dpc"> | string
    kodeDpc?: StringWithAggregatesFilter<"Dpc"> | string
    namaDpc?: StringWithAggregatesFilter<"Dpc"> | string
    isActive?: BoolWithAggregatesFilter<"Dpc"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Dpc"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Dpc"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    phoneNumber?: StringNullableFilter<"User"> | string | null
    employeeId?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    jenjangId?: StringNullableFilter<"User"> | string | null
    upaId?: StringNullableFilter<"User"> | string | null
    mentorId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    jenjang?: XOR<JenjangNullableRelationFilter, JenjangWhereInput> | null
    upa?: XOR<UpaNullableRelationFilter, UpaWhereInput> | null
    mentor?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    mentees?: UserListRelationFilter
    activities?: ActivityListRelationFilter
    auditLogs?: AuditLogListRelationFilter
    attendances?: AttendanceListRelationFilter
    presensi?: PresensiListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    employeeId?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    jenjangId?: SortOrderInput | SortOrder
    upaId?: SortOrderInput | SortOrder
    mentorId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    jenjang?: JenjangOrderByWithRelationInput
    upa?: UpaOrderByWithRelationInput
    mentor?: UserOrderByWithRelationInput
    mentees?: UserOrderByRelationAggregateInput
    activities?: ActivityOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
    attendances?: AttendanceOrderByRelationAggregateInput
    presensi?: PresensiOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    employeeId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    phoneNumber?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    jenjangId?: StringNullableFilter<"User"> | string | null
    upaId?: StringNullableFilter<"User"> | string | null
    mentorId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    jenjang?: XOR<JenjangNullableRelationFilter, JenjangWhereInput> | null
    upa?: XOR<UpaNullableRelationFilter, UpaWhereInput> | null
    mentor?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    mentees?: UserListRelationFilter
    activities?: ActivityListRelationFilter
    auditLogs?: AuditLogListRelationFilter
    attendances?: AttendanceListRelationFilter
    presensi?: PresensiListRelationFilter
  }, "id" | "email" | "employeeId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    employeeId?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    jenjangId?: SortOrderInput | SortOrder
    upaId?: SortOrderInput | SortOrder
    mentorId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    employeeId?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    jenjangId?: StringNullableWithAggregatesFilter<"User"> | string | null
    upaId?: StringNullableWithAggregatesFilter<"User"> | string | null
    mentorId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ActivityWhereInput = {
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    id?: StringFilter<"Activity"> | string
    title?: StringFilter<"Activity"> | string
    description?: StringNullableFilter<"Activity"> | string | null
    date?: DateTimeFilter<"Activity"> | Date | string
    location?: StringNullableFilter<"Activity"> | string | null
    flag?: IntFilter<"Activity"> | number
    latitude?: FloatNullableFilter<"Activity"> | number | null
    longitude?: FloatNullableFilter<"Activity"> | number | null
    radius?: IntFilter<"Activity"> | number
    userId?: StringFilter<"Activity"> | string
    upaId?: StringFilter<"Activity"> | string
    answers?: JsonNullableFilter<"Activity">
    createdAt?: DateTimeFilter<"Activity"> | Date | string
    updatedAt?: DateTimeFilter<"Activity"> | Date | string
    attendanceToken?: StringNullableFilter<"Activity"> | string | null
    isActive?: BoolFilter<"Activity"> | boolean
    user?: XOR<UserRelationFilter, UserWhereInput>
    upa?: XOR<UpaRelationFilter, UpaWhereInput>
    attendances?: AttendanceListRelationFilter
  }

  export type ActivityOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    date?: SortOrder
    location?: SortOrderInput | SortOrder
    flag?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    radius?: SortOrder
    userId?: SortOrder
    upaId?: SortOrder
    answers?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attendanceToken?: SortOrderInput | SortOrder
    isActive?: SortOrder
    user?: UserOrderByWithRelationInput
    upa?: UpaOrderByWithRelationInput
    attendances?: AttendanceOrderByRelationAggregateInput
  }

  export type ActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    title?: StringFilter<"Activity"> | string
    description?: StringNullableFilter<"Activity"> | string | null
    date?: DateTimeFilter<"Activity"> | Date | string
    location?: StringNullableFilter<"Activity"> | string | null
    flag?: IntFilter<"Activity"> | number
    latitude?: FloatNullableFilter<"Activity"> | number | null
    longitude?: FloatNullableFilter<"Activity"> | number | null
    radius?: IntFilter<"Activity"> | number
    userId?: StringFilter<"Activity"> | string
    upaId?: StringFilter<"Activity"> | string
    answers?: JsonNullableFilter<"Activity">
    createdAt?: DateTimeFilter<"Activity"> | Date | string
    updatedAt?: DateTimeFilter<"Activity"> | Date | string
    attendanceToken?: StringNullableFilter<"Activity"> | string | null
    isActive?: BoolFilter<"Activity"> | boolean
    user?: XOR<UserRelationFilter, UserWhereInput>
    upa?: XOR<UpaRelationFilter, UpaWhereInput>
    attendances?: AttendanceListRelationFilter
  }, "id">

  export type ActivityOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    date?: SortOrder
    location?: SortOrderInput | SortOrder
    flag?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    radius?: SortOrder
    userId?: SortOrder
    upaId?: SortOrder
    answers?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attendanceToken?: SortOrderInput | SortOrder
    isActive?: SortOrder
    _count?: ActivityCountOrderByAggregateInput
    _avg?: ActivityAvgOrderByAggregateInput
    _max?: ActivityMaxOrderByAggregateInput
    _min?: ActivityMinOrderByAggregateInput
    _sum?: ActivitySumOrderByAggregateInput
  }

  export type ActivityScalarWhereWithAggregatesInput = {
    AND?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    OR?: ActivityScalarWhereWithAggregatesInput[]
    NOT?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Activity"> | string
    title?: StringWithAggregatesFilter<"Activity"> | string
    description?: StringNullableWithAggregatesFilter<"Activity"> | string | null
    date?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
    location?: StringNullableWithAggregatesFilter<"Activity"> | string | null
    flag?: IntWithAggregatesFilter<"Activity"> | number
    latitude?: FloatNullableWithAggregatesFilter<"Activity"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"Activity"> | number | null
    radius?: IntWithAggregatesFilter<"Activity"> | number
    userId?: StringWithAggregatesFilter<"Activity"> | string
    upaId?: StringWithAggregatesFilter<"Activity"> | string
    answers?: JsonNullableWithAggregatesFilter<"Activity">
    createdAt?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
    attendanceToken?: StringNullableWithAggregatesFilter<"Activity"> | string | null
    isActive?: BoolWithAggregatesFilter<"Activity"> | boolean
  }

  export type AttendanceWhereInput = {
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    id?: StringFilter<"Attendance"> | string
    userId?: StringFilter<"Attendance"> | string
    activityId?: StringFilter<"Attendance"> | string
    timestamp?: DateTimeFilter<"Attendance"> | Date | string
    status?: StringNullableFilter<"Attendance"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    activity?: XOR<ActivityRelationFilter, ActivityWhereInput>
  }

  export type AttendanceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    activityId?: SortOrder
    timestamp?: SortOrder
    status?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    activity?: ActivityOrderByWithRelationInput
  }

  export type AttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_activityId?: AttendanceUserIdActivityIdCompoundUniqueInput
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    userId?: StringFilter<"Attendance"> | string
    activityId?: StringFilter<"Attendance"> | string
    timestamp?: DateTimeFilter<"Attendance"> | Date | string
    status?: StringNullableFilter<"Attendance"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    activity?: XOR<ActivityRelationFilter, ActivityWhereInput>
  }, "id" | "userId_activityId">

  export type AttendanceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    activityId?: SortOrder
    timestamp?: SortOrder
    status?: SortOrderInput | SortOrder
    _count?: AttendanceCountOrderByAggregateInput
    _max?: AttendanceMaxOrderByAggregateInput
    _min?: AttendanceMinOrderByAggregateInput
  }

  export type AttendanceScalarWhereWithAggregatesInput = {
    AND?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    OR?: AttendanceScalarWhereWithAggregatesInput[]
    NOT?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Attendance"> | string
    userId?: StringWithAggregatesFilter<"Attendance"> | string
    activityId?: StringWithAggregatesFilter<"Attendance"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    status?: StringNullableWithAggregatesFilter<"Attendance"> | string | null
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    resource?: StringFilter<"AuditLog"> | string
    details?: JsonNullableFilter<"AuditLog">
    userId?: StringFilter<"AuditLog"> | string
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    action?: SortOrder
    resource?: SortOrder
    details?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    action?: StringFilter<"AuditLog"> | string
    resource?: StringFilter<"AuditLog"> | string
    details?: JsonNullableFilter<"AuditLog">
    userId?: StringFilter<"AuditLog"> | string
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    action?: SortOrder
    resource?: SortOrder
    details?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    resource?: StringWithAggregatesFilter<"AuditLog"> | string
    details?: JsonNullableWithAggregatesFilter<"AuditLog">
    userId?: StringWithAggregatesFilter<"AuditLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type PertanyaanWhereInput = {
    AND?: PertanyaanWhereInput | PertanyaanWhereInput[]
    OR?: PertanyaanWhereInput[]
    NOT?: PertanyaanWhereInput | PertanyaanWhereInput[]
    id?: StringFilter<"Pertanyaan"> | string
    pertanyaan?: StringFilter<"Pertanyaan"> | string
    tipeJawaban?: EnumTipeJawabanFilter<"Pertanyaan"> | $Enums.TipeJawaban
    opsiJawaban?: JsonNullableFilter<"Pertanyaan">
    isRequired?: BoolFilter<"Pertanyaan"> | boolean
    sourceList?: StringNullableFilter<"Pertanyaan"> | string | null
    type_kegiatan?: StringNullableFilter<"Pertanyaan"> | string | null
    isActive?: BoolFilter<"Pertanyaan"> | boolean
    urutan?: IntFilter<"Pertanyaan"> | number
    createdAt?: DateTimeFilter<"Pertanyaan"> | Date | string
    updatedAt?: DateTimeFilter<"Pertanyaan"> | Date | string
  }

  export type PertanyaanOrderByWithRelationInput = {
    id?: SortOrder
    pertanyaan?: SortOrder
    tipeJawaban?: SortOrder
    opsiJawaban?: SortOrderInput | SortOrder
    isRequired?: SortOrder
    sourceList?: SortOrderInput | SortOrder
    type_kegiatan?: SortOrderInput | SortOrder
    isActive?: SortOrder
    urutan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PertanyaanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PertanyaanWhereInput | PertanyaanWhereInput[]
    OR?: PertanyaanWhereInput[]
    NOT?: PertanyaanWhereInput | PertanyaanWhereInput[]
    pertanyaan?: StringFilter<"Pertanyaan"> | string
    tipeJawaban?: EnumTipeJawabanFilter<"Pertanyaan"> | $Enums.TipeJawaban
    opsiJawaban?: JsonNullableFilter<"Pertanyaan">
    isRequired?: BoolFilter<"Pertanyaan"> | boolean
    sourceList?: StringNullableFilter<"Pertanyaan"> | string | null
    type_kegiatan?: StringNullableFilter<"Pertanyaan"> | string | null
    isActive?: BoolFilter<"Pertanyaan"> | boolean
    urutan?: IntFilter<"Pertanyaan"> | number
    createdAt?: DateTimeFilter<"Pertanyaan"> | Date | string
    updatedAt?: DateTimeFilter<"Pertanyaan"> | Date | string
  }, "id">

  export type PertanyaanOrderByWithAggregationInput = {
    id?: SortOrder
    pertanyaan?: SortOrder
    tipeJawaban?: SortOrder
    opsiJawaban?: SortOrderInput | SortOrder
    isRequired?: SortOrder
    sourceList?: SortOrderInput | SortOrder
    type_kegiatan?: SortOrderInput | SortOrder
    isActive?: SortOrder
    urutan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PertanyaanCountOrderByAggregateInput
    _avg?: PertanyaanAvgOrderByAggregateInput
    _max?: PertanyaanMaxOrderByAggregateInput
    _min?: PertanyaanMinOrderByAggregateInput
    _sum?: PertanyaanSumOrderByAggregateInput
  }

  export type PertanyaanScalarWhereWithAggregatesInput = {
    AND?: PertanyaanScalarWhereWithAggregatesInput | PertanyaanScalarWhereWithAggregatesInput[]
    OR?: PertanyaanScalarWhereWithAggregatesInput[]
    NOT?: PertanyaanScalarWhereWithAggregatesInput | PertanyaanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pertanyaan"> | string
    pertanyaan?: StringWithAggregatesFilter<"Pertanyaan"> | string
    tipeJawaban?: EnumTipeJawabanWithAggregatesFilter<"Pertanyaan"> | $Enums.TipeJawaban
    opsiJawaban?: JsonNullableWithAggregatesFilter<"Pertanyaan">
    isRequired?: BoolWithAggregatesFilter<"Pertanyaan"> | boolean
    sourceList?: StringNullableWithAggregatesFilter<"Pertanyaan"> | string | null
    type_kegiatan?: StringNullableWithAggregatesFilter<"Pertanyaan"> | string | null
    isActive?: BoolWithAggregatesFilter<"Pertanyaan"> | boolean
    urutan?: IntWithAggregatesFilter<"Pertanyaan"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Pertanyaan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pertanyaan"> | Date | string
  }

  export type TranslationWhereInput = {
    AND?: TranslationWhereInput | TranslationWhereInput[]
    OR?: TranslationWhereInput[]
    NOT?: TranslationWhereInput | TranslationWhereInput[]
    id?: StringFilter<"Translation"> | string
    variableName?: StringFilter<"Translation"> | string
    indonesiaValue?: StringFilter<"Translation"> | string
    englishValue?: StringFilter<"Translation"> | string
    isActive?: BoolFilter<"Translation"> | boolean
    createdAt?: DateTimeFilter<"Translation"> | Date | string
    updatedAt?: DateTimeFilter<"Translation"> | Date | string
  }

  export type TranslationOrderByWithRelationInput = {
    id?: SortOrder
    variableName?: SortOrder
    indonesiaValue?: SortOrder
    englishValue?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TranslationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    variableName?: string
    AND?: TranslationWhereInput | TranslationWhereInput[]
    OR?: TranslationWhereInput[]
    NOT?: TranslationWhereInput | TranslationWhereInput[]
    indonesiaValue?: StringFilter<"Translation"> | string
    englishValue?: StringFilter<"Translation"> | string
    isActive?: BoolFilter<"Translation"> | boolean
    createdAt?: DateTimeFilter<"Translation"> | Date | string
    updatedAt?: DateTimeFilter<"Translation"> | Date | string
  }, "id" | "variableName">

  export type TranslationOrderByWithAggregationInput = {
    id?: SortOrder
    variableName?: SortOrder
    indonesiaValue?: SortOrder
    englishValue?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TranslationCountOrderByAggregateInput
    _max?: TranslationMaxOrderByAggregateInput
    _min?: TranslationMinOrderByAggregateInput
  }

  export type TranslationScalarWhereWithAggregatesInput = {
    AND?: TranslationScalarWhereWithAggregatesInput | TranslationScalarWhereWithAggregatesInput[]
    OR?: TranslationScalarWhereWithAggregatesInput[]
    NOT?: TranslationScalarWhereWithAggregatesInput | TranslationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Translation"> | string
    variableName?: StringWithAggregatesFilter<"Translation"> | string
    indonesiaValue?: StringWithAggregatesFilter<"Translation"> | string
    englishValue?: StringWithAggregatesFilter<"Translation"> | string
    isActive?: BoolWithAggregatesFilter<"Translation"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Translation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Translation"> | Date | string
  }

  export type MenuWhereInput = {
    AND?: MenuWhereInput | MenuWhereInput[]
    OR?: MenuWhereInput[]
    NOT?: MenuWhereInput | MenuWhereInput[]
    id?: StringFilter<"Menu"> | string
    label?: StringFilter<"Menu"> | string
    path?: StringFilter<"Menu"> | string
    group?: StringNullableFilter<"Menu"> | string | null
    order?: IntFilter<"Menu"> | number
    createdAt?: DateTimeFilter<"Menu"> | Date | string
    updatedAt?: DateTimeFilter<"Menu"> | Date | string
    accesses?: RoleAccessListRelationFilter
  }

  export type MenuOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    path?: SortOrder
    group?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accesses?: RoleAccessOrderByRelationAggregateInput
  }

  export type MenuWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    path?: string
    AND?: MenuWhereInput | MenuWhereInput[]
    OR?: MenuWhereInput[]
    NOT?: MenuWhereInput | MenuWhereInput[]
    label?: StringFilter<"Menu"> | string
    group?: StringNullableFilter<"Menu"> | string | null
    order?: IntFilter<"Menu"> | number
    createdAt?: DateTimeFilter<"Menu"> | Date | string
    updatedAt?: DateTimeFilter<"Menu"> | Date | string
    accesses?: RoleAccessListRelationFilter
  }, "id" | "path">

  export type MenuOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    path?: SortOrder
    group?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MenuCountOrderByAggregateInput
    _avg?: MenuAvgOrderByAggregateInput
    _max?: MenuMaxOrderByAggregateInput
    _min?: MenuMinOrderByAggregateInput
    _sum?: MenuSumOrderByAggregateInput
  }

  export type MenuScalarWhereWithAggregatesInput = {
    AND?: MenuScalarWhereWithAggregatesInput | MenuScalarWhereWithAggregatesInput[]
    OR?: MenuScalarWhereWithAggregatesInput[]
    NOT?: MenuScalarWhereWithAggregatesInput | MenuScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Menu"> | string
    label?: StringWithAggregatesFilter<"Menu"> | string
    path?: StringWithAggregatesFilter<"Menu"> | string
    group?: StringNullableWithAggregatesFilter<"Menu"> | string | null
    order?: IntWithAggregatesFilter<"Menu"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Menu"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Menu"> | Date | string
  }

  export type RoleAccessWhereInput = {
    AND?: RoleAccessWhereInput | RoleAccessWhereInput[]
    OR?: RoleAccessWhereInput[]
    NOT?: RoleAccessWhereInput | RoleAccessWhereInput[]
    id?: StringFilter<"RoleAccess"> | string
    role?: EnumRoleFilter<"RoleAccess"> | $Enums.Role
    menuId?: StringFilter<"RoleAccess"> | string
    canAccess?: BoolFilter<"RoleAccess"> | boolean
    menu?: XOR<MenuRelationFilter, MenuWhereInput>
  }

  export type RoleAccessOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    menuId?: SortOrder
    canAccess?: SortOrder
    menu?: MenuOrderByWithRelationInput
  }

  export type RoleAccessWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    role_menuId?: RoleAccessRoleMenuIdCompoundUniqueInput
    AND?: RoleAccessWhereInput | RoleAccessWhereInput[]
    OR?: RoleAccessWhereInput[]
    NOT?: RoleAccessWhereInput | RoleAccessWhereInput[]
    role?: EnumRoleFilter<"RoleAccess"> | $Enums.Role
    menuId?: StringFilter<"RoleAccess"> | string
    canAccess?: BoolFilter<"RoleAccess"> | boolean
    menu?: XOR<MenuRelationFilter, MenuWhereInput>
  }, "id" | "role_menuId">

  export type RoleAccessOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    menuId?: SortOrder
    canAccess?: SortOrder
    _count?: RoleAccessCountOrderByAggregateInput
    _max?: RoleAccessMaxOrderByAggregateInput
    _min?: RoleAccessMinOrderByAggregateInput
  }

  export type RoleAccessScalarWhereWithAggregatesInput = {
    AND?: RoleAccessScalarWhereWithAggregatesInput | RoleAccessScalarWhereWithAggregatesInput[]
    OR?: RoleAccessScalarWhereWithAggregatesInput[]
    NOT?: RoleAccessScalarWhereWithAggregatesInput | RoleAccessScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RoleAccess"> | string
    role?: EnumRoleWithAggregatesFilter<"RoleAccess"> | $Enums.Role
    menuId?: StringWithAggregatesFilter<"RoleAccess"> | string
    canAccess?: BoolWithAggregatesFilter<"RoleAccess"> | boolean
  }

  export type ApplicationConfigWhereInput = {
    AND?: ApplicationConfigWhereInput | ApplicationConfigWhereInput[]
    OR?: ApplicationConfigWhereInput[]
    NOT?: ApplicationConfigWhereInput | ApplicationConfigWhereInput[]
    id?: StringFilter<"ApplicationConfig"> | string
    key?: StringFilter<"ApplicationConfig"> | string
    value?: StringFilter<"ApplicationConfig"> | string
    description?: StringNullableFilter<"ApplicationConfig"> | string | null
    createdAt?: DateTimeFilter<"ApplicationConfig"> | Date | string
    updatedAt?: DateTimeFilter<"ApplicationConfig"> | Date | string
  }

  export type ApplicationConfigOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: ApplicationConfigWhereInput | ApplicationConfigWhereInput[]
    OR?: ApplicationConfigWhereInput[]
    NOT?: ApplicationConfigWhereInput | ApplicationConfigWhereInput[]
    value?: StringFilter<"ApplicationConfig"> | string
    description?: StringNullableFilter<"ApplicationConfig"> | string | null
    createdAt?: DateTimeFilter<"ApplicationConfig"> | Date | string
    updatedAt?: DateTimeFilter<"ApplicationConfig"> | Date | string
  }, "id" | "key">

  export type ApplicationConfigOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ApplicationConfigCountOrderByAggregateInput
    _max?: ApplicationConfigMaxOrderByAggregateInput
    _min?: ApplicationConfigMinOrderByAggregateInput
  }

  export type ApplicationConfigScalarWhereWithAggregatesInput = {
    AND?: ApplicationConfigScalarWhereWithAggregatesInput | ApplicationConfigScalarWhereWithAggregatesInput[]
    OR?: ApplicationConfigScalarWhereWithAggregatesInput[]
    NOT?: ApplicationConfigScalarWhereWithAggregatesInput | ApplicationConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApplicationConfig"> | string
    key?: StringWithAggregatesFilter<"ApplicationConfig"> | string
    value?: StringWithAggregatesFilter<"ApplicationConfig"> | string
    description?: StringNullableWithAggregatesFilter<"ApplicationConfig"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ApplicationConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ApplicationConfig"> | Date | string
  }

  export type PresensiWhereInput = {
    AND?: PresensiWhereInput | PresensiWhereInput[]
    OR?: PresensiWhereInput[]
    NOT?: PresensiWhereInput | PresensiWhereInput[]
    id?: StringFilter<"Presensi"> | string
    userId?: StringFilter<"Presensi"> | string
    date?: DateTimeFilter<"Presensi"> | Date | string
    checkIn?: DateTimeNullableFilter<"Presensi"> | Date | string | null
    checkOut?: DateTimeNullableFilter<"Presensi"> | Date | string | null
    locationIn?: StringNullableFilter<"Presensi"> | string | null
    locationOut?: StringNullableFilter<"Presensi"> | string | null
    photoIn?: StringNullableFilter<"Presensi"> | string | null
    photoOut?: StringNullableFilter<"Presensi"> | string | null
    status?: StringFilter<"Presensi"> | string
    notes?: StringNullableFilter<"Presensi"> | string | null
    createdAt?: DateTimeFilter<"Presensi"> | Date | string
    updatedAt?: DateTimeFilter<"Presensi"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type PresensiOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    checkIn?: SortOrderInput | SortOrder
    checkOut?: SortOrderInput | SortOrder
    locationIn?: SortOrderInput | SortOrder
    locationOut?: SortOrderInput | SortOrder
    photoIn?: SortOrderInput | SortOrder
    photoOut?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PresensiWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_date?: PresensiUserIdDateCompoundUniqueInput
    AND?: PresensiWhereInput | PresensiWhereInput[]
    OR?: PresensiWhereInput[]
    NOT?: PresensiWhereInput | PresensiWhereInput[]
    userId?: StringFilter<"Presensi"> | string
    date?: DateTimeFilter<"Presensi"> | Date | string
    checkIn?: DateTimeNullableFilter<"Presensi"> | Date | string | null
    checkOut?: DateTimeNullableFilter<"Presensi"> | Date | string | null
    locationIn?: StringNullableFilter<"Presensi"> | string | null
    locationOut?: StringNullableFilter<"Presensi"> | string | null
    photoIn?: StringNullableFilter<"Presensi"> | string | null
    photoOut?: StringNullableFilter<"Presensi"> | string | null
    status?: StringFilter<"Presensi"> | string
    notes?: StringNullableFilter<"Presensi"> | string | null
    createdAt?: DateTimeFilter<"Presensi"> | Date | string
    updatedAt?: DateTimeFilter<"Presensi"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId_date">

  export type PresensiOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    checkIn?: SortOrderInput | SortOrder
    checkOut?: SortOrderInput | SortOrder
    locationIn?: SortOrderInput | SortOrder
    locationOut?: SortOrderInput | SortOrder
    photoIn?: SortOrderInput | SortOrder
    photoOut?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PresensiCountOrderByAggregateInput
    _max?: PresensiMaxOrderByAggregateInput
    _min?: PresensiMinOrderByAggregateInput
  }

  export type PresensiScalarWhereWithAggregatesInput = {
    AND?: PresensiScalarWhereWithAggregatesInput | PresensiScalarWhereWithAggregatesInput[]
    OR?: PresensiScalarWhereWithAggregatesInput[]
    NOT?: PresensiScalarWhereWithAggregatesInput | PresensiScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Presensi"> | string
    userId?: StringWithAggregatesFilter<"Presensi"> | string
    date?: DateTimeWithAggregatesFilter<"Presensi"> | Date | string
    checkIn?: DateTimeNullableWithAggregatesFilter<"Presensi"> | Date | string | null
    checkOut?: DateTimeNullableWithAggregatesFilter<"Presensi"> | Date | string | null
    locationIn?: StringNullableWithAggregatesFilter<"Presensi"> | string | null
    locationOut?: StringNullableWithAggregatesFilter<"Presensi"> | string | null
    photoIn?: StringNullableWithAggregatesFilter<"Presensi"> | string | null
    photoOut?: StringNullableWithAggregatesFilter<"Presensi"> | string | null
    status?: StringWithAggregatesFilter<"Presensi"> | string
    notes?: StringNullableWithAggregatesFilter<"Presensi"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Presensi"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Presensi"> | Date | string
  }

  export type JenjangCreateInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutJenjangInput
  }

  export type JenjangUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutJenjangInput
  }

  export type JenjangUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutJenjangNestedInput
  }

  export type JenjangUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutJenjangNestedInput
  }

  export type JenjangCreateManyInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JenjangUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JenjangUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UpaCreateInput = {
    id?: string
    code: string
    name: string
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dpc?: DpcCreateNestedOneWithoutUpasInput
    users?: UserCreateNestedManyWithoutUpaInput
    activities?: ActivityCreateNestedManyWithoutUpaInput
  }

  export type UpaUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    location?: string | null
    dpcId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutUpaInput
    activities?: ActivityUncheckedCreateNestedManyWithoutUpaInput
  }

  export type UpaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dpc?: DpcUpdateOneWithoutUpasNestedInput
    users?: UserUpdateManyWithoutUpaNestedInput
    activities?: ActivityUpdateManyWithoutUpaNestedInput
  }

  export type UpaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    dpcId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutUpaNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutUpaNestedInput
  }

  export type UpaCreateManyInput = {
    id?: string
    code: string
    name: string
    location?: string | null
    dpcId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UpaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UpaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    dpcId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DpcCreateInput = {
    id?: string
    kodeDpc: string
    namaDpc: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    upas?: UpaCreateNestedManyWithoutDpcInput
  }

  export type DpcUncheckedCreateInput = {
    id?: string
    kodeDpc: string
    namaDpc: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    upas?: UpaUncheckedCreateNestedManyWithoutDpcInput
  }

  export type DpcUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeDpc?: StringFieldUpdateOperationsInput | string
    namaDpc?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upas?: UpaUpdateManyWithoutDpcNestedInput
  }

  export type DpcUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeDpc?: StringFieldUpdateOperationsInput | string
    namaDpc?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upas?: UpaUncheckedUpdateManyWithoutDpcNestedInput
  }

  export type DpcCreateManyInput = {
    id?: string
    kodeDpc: string
    namaDpc: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DpcUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeDpc?: StringFieldUpdateOperationsInput | string
    namaDpc?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DpcUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeDpc?: StringFieldUpdateOperationsInput | string
    namaDpc?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    fullName: string
    phoneNumber?: string | null
    employeeId?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    jenjang?: JenjangCreateNestedOneWithoutUsersInput
    upa?: UpaCreateNestedOneWithoutUsersInput
    mentor?: UserCreateNestedOneWithoutMenteesInput
    mentees?: UserCreateNestedManyWithoutMentorInput
    activities?: ActivityCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    attendances?: AttendanceCreateNestedManyWithoutUserInput
    presensi?: PresensiCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    fullName: string
    phoneNumber?: string | null
    employeeId?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    jenjangId?: string | null
    upaId?: string | null
    mentorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mentees?: UserUncheckedCreateNestedManyWithoutMentorInput
    activities?: ActivityUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutUserInput
    presensi?: PresensiUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jenjang?: JenjangUpdateOneWithoutUsersNestedInput
    upa?: UpaUpdateOneWithoutUsersNestedInput
    mentor?: UserUpdateOneWithoutMenteesNestedInput
    mentees?: UserUpdateManyWithoutMentorNestedInput
    activities?: ActivityUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    attendances?: AttendanceUpdateManyWithoutUserNestedInput
    presensi?: PresensiUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    jenjangId?: NullableStringFieldUpdateOperationsInput | string | null
    upaId?: NullableStringFieldUpdateOperationsInput | string | null
    mentorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentees?: UserUncheckedUpdateManyWithoutMentorNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutUserNestedInput
    presensi?: PresensiUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    fullName: string
    phoneNumber?: string | null
    employeeId?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    jenjangId?: string | null
    upaId?: string | null
    mentorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    jenjangId?: NullableStringFieldUpdateOperationsInput | string | null
    upaId?: NullableStringFieldUpdateOperationsInput | string | null
    mentorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityCreateInput = {
    id?: string
    title: string
    description?: string | null
    date: Date | string
    location?: string | null
    flag?: number
    latitude?: number | null
    longitude?: number | null
    radius?: number
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    attendanceToken?: string | null
    isActive?: boolean
    user: UserCreateNestedOneWithoutActivitiesInput
    upa: UpaCreateNestedOneWithoutActivitiesInput
    attendances?: AttendanceCreateNestedManyWithoutActivityInput
  }

  export type ActivityUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    date: Date | string
    location?: string | null
    flag?: number
    latitude?: number | null
    longitude?: number | null
    radius?: number
    userId: string
    upaId: string
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    attendanceToken?: string | null
    isActive?: boolean
    attendances?: AttendanceUncheckedCreateNestedManyWithoutActivityInput
  }

  export type ActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    flag?: IntFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    radius?: IntFieldUpdateOperationsInput | number
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendanceToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutActivitiesNestedInput
    upa?: UpaUpdateOneRequiredWithoutActivitiesNestedInput
    attendances?: AttendanceUpdateManyWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    flag?: IntFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    radius?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    upaId?: StringFieldUpdateOperationsInput | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendanceToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    attendances?: AttendanceUncheckedUpdateManyWithoutActivityNestedInput
  }

  export type ActivityCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    date: Date | string
    location?: string | null
    flag?: number
    latitude?: number | null
    longitude?: number | null
    radius?: number
    userId: string
    upaId: string
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    attendanceToken?: string | null
    isActive?: boolean
  }

  export type ActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    flag?: IntFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    radius?: IntFieldUpdateOperationsInput | number
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendanceToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    flag?: IntFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    radius?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    upaId?: StringFieldUpdateOperationsInput | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendanceToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AttendanceCreateInput = {
    id?: string
    timestamp?: Date | string
    status?: string | null
    user: UserCreateNestedOneWithoutAttendancesInput
    activity: ActivityCreateNestedOneWithoutAttendancesInput
  }

  export type AttendanceUncheckedCreateInput = {
    id?: string
    userId: string
    activityId: string
    timestamp?: Date | string
    status?: string | null
  }

  export type AttendanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAttendancesNestedInput
    activity?: ActivityUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type AttendanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    activityId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttendanceCreateManyInput = {
    id?: string
    userId: string
    activityId: string
    timestamp?: Date | string
    status?: string | null
  }

  export type AttendanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttendanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    activityId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditLogCreateInput = {
    id?: string
    action: string
    resource: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    action: string
    resource: string
    details?: NullableJsonNullValueInput | InputJsonValue
    userId: string
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    action: string
    resource: string
    details?: NullableJsonNullValueInput | InputJsonValue
    userId: string
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PertanyaanCreateInput = {
    id?: string
    pertanyaan: string
    tipeJawaban: $Enums.TipeJawaban
    opsiJawaban?: NullableJsonNullValueInput | InputJsonValue
    isRequired?: boolean
    sourceList?: string | null
    type_kegiatan?: string | null
    isActive?: boolean
    urutan?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PertanyaanUncheckedCreateInput = {
    id?: string
    pertanyaan: string
    tipeJawaban: $Enums.TipeJawaban
    opsiJawaban?: NullableJsonNullValueInput | InputJsonValue
    isRequired?: boolean
    sourceList?: string | null
    type_kegiatan?: string | null
    isActive?: boolean
    urutan?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PertanyaanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pertanyaan?: StringFieldUpdateOperationsInput | string
    tipeJawaban?: EnumTipeJawabanFieldUpdateOperationsInput | $Enums.TipeJawaban
    opsiJawaban?: NullableJsonNullValueInput | InputJsonValue
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    sourceList?: NullableStringFieldUpdateOperationsInput | string | null
    type_kegiatan?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    urutan?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PertanyaanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pertanyaan?: StringFieldUpdateOperationsInput | string
    tipeJawaban?: EnumTipeJawabanFieldUpdateOperationsInput | $Enums.TipeJawaban
    opsiJawaban?: NullableJsonNullValueInput | InputJsonValue
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    sourceList?: NullableStringFieldUpdateOperationsInput | string | null
    type_kegiatan?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    urutan?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PertanyaanCreateManyInput = {
    id?: string
    pertanyaan: string
    tipeJawaban: $Enums.TipeJawaban
    opsiJawaban?: NullableJsonNullValueInput | InputJsonValue
    isRequired?: boolean
    sourceList?: string | null
    type_kegiatan?: string | null
    isActive?: boolean
    urutan?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PertanyaanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pertanyaan?: StringFieldUpdateOperationsInput | string
    tipeJawaban?: EnumTipeJawabanFieldUpdateOperationsInput | $Enums.TipeJawaban
    opsiJawaban?: NullableJsonNullValueInput | InputJsonValue
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    sourceList?: NullableStringFieldUpdateOperationsInput | string | null
    type_kegiatan?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    urutan?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PertanyaanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pertanyaan?: StringFieldUpdateOperationsInput | string
    tipeJawaban?: EnumTipeJawabanFieldUpdateOperationsInput | $Enums.TipeJawaban
    opsiJawaban?: NullableJsonNullValueInput | InputJsonValue
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    sourceList?: NullableStringFieldUpdateOperationsInput | string | null
    type_kegiatan?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    urutan?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranslationCreateInput = {
    id?: string
    variableName: string
    indonesiaValue: string
    englishValue: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TranslationUncheckedCreateInput = {
    id?: string
    variableName: string
    indonesiaValue: string
    englishValue: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TranslationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    variableName?: StringFieldUpdateOperationsInput | string
    indonesiaValue?: StringFieldUpdateOperationsInput | string
    englishValue?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranslationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    variableName?: StringFieldUpdateOperationsInput | string
    indonesiaValue?: StringFieldUpdateOperationsInput | string
    englishValue?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranslationCreateManyInput = {
    id?: string
    variableName: string
    indonesiaValue: string
    englishValue: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TranslationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    variableName?: StringFieldUpdateOperationsInput | string
    indonesiaValue?: StringFieldUpdateOperationsInput | string
    englishValue?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranslationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    variableName?: StringFieldUpdateOperationsInput | string
    indonesiaValue?: StringFieldUpdateOperationsInput | string
    englishValue?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuCreateInput = {
    id?: string
    label: string
    path: string
    group?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    accesses?: RoleAccessCreateNestedManyWithoutMenuInput
  }

  export type MenuUncheckedCreateInput = {
    id?: string
    label: string
    path: string
    group?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    accesses?: RoleAccessUncheckedCreateNestedManyWithoutMenuInput
  }

  export type MenuUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    group?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accesses?: RoleAccessUpdateManyWithoutMenuNestedInput
  }

  export type MenuUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    group?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accesses?: RoleAccessUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type MenuCreateManyInput = {
    id?: string
    label: string
    path: string
    group?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    group?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    group?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleAccessCreateInput = {
    id?: string
    role: $Enums.Role
    canAccess?: boolean
    menu: MenuCreateNestedOneWithoutAccessesInput
  }

  export type RoleAccessUncheckedCreateInput = {
    id?: string
    role: $Enums.Role
    menuId: string
    canAccess?: boolean
  }

  export type RoleAccessUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    canAccess?: BoolFieldUpdateOperationsInput | boolean
    menu?: MenuUpdateOneRequiredWithoutAccessesNestedInput
  }

  export type RoleAccessUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    menuId?: StringFieldUpdateOperationsInput | string
    canAccess?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RoleAccessCreateManyInput = {
    id?: string
    role: $Enums.Role
    menuId: string
    canAccess?: boolean
  }

  export type RoleAccessUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    canAccess?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RoleAccessUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    menuId?: StringFieldUpdateOperationsInput | string
    canAccess?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ApplicationConfigCreateInput = {
    id?: string
    key: string
    value: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationConfigUncheckedCreateInput = {
    id?: string
    key: string
    value: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationConfigCreateManyInput = {
    id?: string
    key: string
    value: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresensiCreateInput = {
    id?: string
    date: Date | string
    checkIn?: Date | string | null
    checkOut?: Date | string | null
    locationIn?: string | null
    locationOut?: string | null
    photoIn?: string | null
    photoOut?: string | null
    status?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPresensiInput
  }

  export type PresensiUncheckedCreateInput = {
    id?: string
    userId: string
    date: Date | string
    checkIn?: Date | string | null
    checkOut?: Date | string | null
    locationIn?: string | null
    locationOut?: string | null
    photoIn?: string | null
    photoOut?: string | null
    status?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PresensiUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    checkIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationIn?: NullableStringFieldUpdateOperationsInput | string | null
    locationOut?: NullableStringFieldUpdateOperationsInput | string | null
    photoIn?: NullableStringFieldUpdateOperationsInput | string | null
    photoOut?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPresensiNestedInput
  }

  export type PresensiUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    checkIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationIn?: NullableStringFieldUpdateOperationsInput | string | null
    locationOut?: NullableStringFieldUpdateOperationsInput | string | null
    photoIn?: NullableStringFieldUpdateOperationsInput | string | null
    photoOut?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresensiCreateManyInput = {
    id?: string
    userId: string
    date: Date | string
    checkIn?: Date | string | null
    checkOut?: Date | string | null
    locationIn?: string | null
    locationOut?: string | null
    photoIn?: string | null
    photoOut?: string | null
    status?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PresensiUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    checkIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationIn?: NullableStringFieldUpdateOperationsInput | string | null
    locationOut?: NullableStringFieldUpdateOperationsInput | string | null
    photoIn?: NullableStringFieldUpdateOperationsInput | string | null
    photoOut?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresensiUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    checkIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationIn?: NullableStringFieldUpdateOperationsInput | string | null
    locationOut?: NullableStringFieldUpdateOperationsInput | string | null
    photoIn?: NullableStringFieldUpdateOperationsInput | string | null
    photoOut?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JenjangCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JenjangMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JenjangMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DpcNullableRelationFilter = {
    is?: DpcWhereInput | null
    isNot?: DpcWhereInput | null
  }

  export type ActivityListRelationFilter = {
    every?: ActivityWhereInput
    some?: ActivityWhereInput
    none?: ActivityWhereInput
  }

  export type ActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UpaCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    location?: SortOrder
    dpcId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UpaMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    location?: SortOrder
    dpcId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UpaMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    location?: SortOrder
    dpcId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UpaListRelationFilter = {
    every?: UpaWhereInput
    some?: UpaWhereInput
    none?: UpaWhereInput
  }

  export type UpaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DpcCountOrderByAggregateInput = {
    id?: SortOrder
    kodeDpc?: SortOrder
    namaDpc?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DpcMaxOrderByAggregateInput = {
    id?: SortOrder
    kodeDpc?: SortOrder
    namaDpc?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DpcMinOrderByAggregateInput = {
    id?: SortOrder
    kodeDpc?: SortOrder
    namaDpc?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[]
    notIn?: $Enums.UserStatus[]
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type JenjangNullableRelationFilter = {
    is?: JenjangWhereInput | null
    isNot?: JenjangWhereInput | null
  }

  export type UpaNullableRelationFilter = {
    is?: UpaWhereInput | null
    isNot?: UpaWhereInput | null
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type AttendanceListRelationFilter = {
    every?: AttendanceWhereInput
    some?: AttendanceWhereInput
    none?: AttendanceWhereInput
  }

  export type PresensiListRelationFilter = {
    every?: PresensiWhereInput
    some?: PresensiWhereInput
    none?: PresensiWhereInput
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PresensiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    phoneNumber?: SortOrder
    employeeId?: SortOrder
    role?: SortOrder
    status?: SortOrder
    jenjangId?: SortOrder
    upaId?: SortOrder
    mentorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    phoneNumber?: SortOrder
    employeeId?: SortOrder
    role?: SortOrder
    status?: SortOrder
    jenjangId?: SortOrder
    upaId?: SortOrder
    mentorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    phoneNumber?: SortOrder
    employeeId?: SortOrder
    role?: SortOrder
    status?: SortOrder
    jenjangId?: SortOrder
    upaId?: SortOrder
    mentorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[]
    notIn?: $Enums.UserStatus[]
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UpaRelationFilter = {
    is?: UpaWhereInput
    isNot?: UpaWhereInput
  }

  export type ActivityCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    location?: SortOrder
    flag?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    radius?: SortOrder
    userId?: SortOrder
    upaId?: SortOrder
    answers?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attendanceToken?: SortOrder
    isActive?: SortOrder
  }

  export type ActivityAvgOrderByAggregateInput = {
    flag?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    radius?: SortOrder
  }

  export type ActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    location?: SortOrder
    flag?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    radius?: SortOrder
    userId?: SortOrder
    upaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attendanceToken?: SortOrder
    isActive?: SortOrder
  }

  export type ActivityMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    location?: SortOrder
    flag?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    radius?: SortOrder
    userId?: SortOrder
    upaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attendanceToken?: SortOrder
    isActive?: SortOrder
  }

  export type ActivitySumOrderByAggregateInput = {
    flag?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    radius?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type ActivityRelationFilter = {
    is?: ActivityWhereInput
    isNot?: ActivityWhereInput
  }

  export type AttendanceUserIdActivityIdCompoundUniqueInput = {
    userId: string
    activityId: string
  }

  export type AttendanceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    activityId?: SortOrder
    timestamp?: SortOrder
    status?: SortOrder
  }

  export type AttendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    activityId?: SortOrder
    timestamp?: SortOrder
    status?: SortOrder
  }

  export type AttendanceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    activityId?: SortOrder
    timestamp?: SortOrder
    status?: SortOrder
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    resource?: SortOrder
    details?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    resource?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    resource?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumTipeJawabanFilter<$PrismaModel = never> = {
    equals?: $Enums.TipeJawaban | EnumTipeJawabanFieldRefInput<$PrismaModel>
    in?: $Enums.TipeJawaban[]
    notIn?: $Enums.TipeJawaban[]
    not?: NestedEnumTipeJawabanFilter<$PrismaModel> | $Enums.TipeJawaban
  }

  export type PertanyaanCountOrderByAggregateInput = {
    id?: SortOrder
    pertanyaan?: SortOrder
    tipeJawaban?: SortOrder
    opsiJawaban?: SortOrder
    isRequired?: SortOrder
    sourceList?: SortOrder
    type_kegiatan?: SortOrder
    isActive?: SortOrder
    urutan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PertanyaanAvgOrderByAggregateInput = {
    urutan?: SortOrder
  }

  export type PertanyaanMaxOrderByAggregateInput = {
    id?: SortOrder
    pertanyaan?: SortOrder
    tipeJawaban?: SortOrder
    isRequired?: SortOrder
    sourceList?: SortOrder
    type_kegiatan?: SortOrder
    isActive?: SortOrder
    urutan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PertanyaanMinOrderByAggregateInput = {
    id?: SortOrder
    pertanyaan?: SortOrder
    tipeJawaban?: SortOrder
    isRequired?: SortOrder
    sourceList?: SortOrder
    type_kegiatan?: SortOrder
    isActive?: SortOrder
    urutan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PertanyaanSumOrderByAggregateInput = {
    urutan?: SortOrder
  }

  export type EnumTipeJawabanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipeJawaban | EnumTipeJawabanFieldRefInput<$PrismaModel>
    in?: $Enums.TipeJawaban[]
    notIn?: $Enums.TipeJawaban[]
    not?: NestedEnumTipeJawabanWithAggregatesFilter<$PrismaModel> | $Enums.TipeJawaban
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipeJawabanFilter<$PrismaModel>
    _max?: NestedEnumTipeJawabanFilter<$PrismaModel>
  }

  export type TranslationCountOrderByAggregateInput = {
    id?: SortOrder
    variableName?: SortOrder
    indonesiaValue?: SortOrder
    englishValue?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TranslationMaxOrderByAggregateInput = {
    id?: SortOrder
    variableName?: SortOrder
    indonesiaValue?: SortOrder
    englishValue?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TranslationMinOrderByAggregateInput = {
    id?: SortOrder
    variableName?: SortOrder
    indonesiaValue?: SortOrder
    englishValue?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleAccessListRelationFilter = {
    every?: RoleAccessWhereInput
    some?: RoleAccessWhereInput
    none?: RoleAccessWhereInput
  }

  export type RoleAccessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MenuCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    path?: SortOrder
    group?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type MenuMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    path?: SortOrder
    group?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    path?: SortOrder
    group?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type MenuRelationFilter = {
    is?: MenuWhereInput
    isNot?: MenuWhereInput
  }

  export type RoleAccessRoleMenuIdCompoundUniqueInput = {
    role: $Enums.Role
    menuId: string
  }

  export type RoleAccessCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    menuId?: SortOrder
    canAccess?: SortOrder
  }

  export type RoleAccessMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    menuId?: SortOrder
    canAccess?: SortOrder
  }

  export type RoleAccessMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    menuId?: SortOrder
    canAccess?: SortOrder
  }

  export type ApplicationConfigCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationConfigMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PresensiUserIdDateCompoundUniqueInput = {
    userId: string
    date: Date | string
  }

  export type PresensiCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    locationIn?: SortOrder
    locationOut?: SortOrder
    photoIn?: SortOrder
    photoOut?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PresensiMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    locationIn?: SortOrder
    locationOut?: SortOrder
    photoIn?: SortOrder
    photoOut?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PresensiMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    locationIn?: SortOrder
    locationOut?: SortOrder
    photoIn?: SortOrder
    photoOut?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserCreateNestedManyWithoutJenjangInput = {
    create?: XOR<UserCreateWithoutJenjangInput, UserUncheckedCreateWithoutJenjangInput> | UserCreateWithoutJenjangInput[] | UserUncheckedCreateWithoutJenjangInput[]
    connectOrCreate?: UserCreateOrConnectWithoutJenjangInput | UserCreateOrConnectWithoutJenjangInput[]
    createMany?: UserCreateManyJenjangInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutJenjangInput = {
    create?: XOR<UserCreateWithoutJenjangInput, UserUncheckedCreateWithoutJenjangInput> | UserCreateWithoutJenjangInput[] | UserUncheckedCreateWithoutJenjangInput[]
    connectOrCreate?: UserCreateOrConnectWithoutJenjangInput | UserCreateOrConnectWithoutJenjangInput[]
    createMany?: UserCreateManyJenjangInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutJenjangNestedInput = {
    create?: XOR<UserCreateWithoutJenjangInput, UserUncheckedCreateWithoutJenjangInput> | UserCreateWithoutJenjangInput[] | UserUncheckedCreateWithoutJenjangInput[]
    connectOrCreate?: UserCreateOrConnectWithoutJenjangInput | UserCreateOrConnectWithoutJenjangInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutJenjangInput | UserUpsertWithWhereUniqueWithoutJenjangInput[]
    createMany?: UserCreateManyJenjangInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutJenjangInput | UserUpdateWithWhereUniqueWithoutJenjangInput[]
    updateMany?: UserUpdateManyWithWhereWithoutJenjangInput | UserUpdateManyWithWhereWithoutJenjangInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutJenjangNestedInput = {
    create?: XOR<UserCreateWithoutJenjangInput, UserUncheckedCreateWithoutJenjangInput> | UserCreateWithoutJenjangInput[] | UserUncheckedCreateWithoutJenjangInput[]
    connectOrCreate?: UserCreateOrConnectWithoutJenjangInput | UserCreateOrConnectWithoutJenjangInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutJenjangInput | UserUpsertWithWhereUniqueWithoutJenjangInput[]
    createMany?: UserCreateManyJenjangInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutJenjangInput | UserUpdateWithWhereUniqueWithoutJenjangInput[]
    updateMany?: UserUpdateManyWithWhereWithoutJenjangInput | UserUpdateManyWithWhereWithoutJenjangInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type DpcCreateNestedOneWithoutUpasInput = {
    create?: XOR<DpcCreateWithoutUpasInput, DpcUncheckedCreateWithoutUpasInput>
    connectOrCreate?: DpcCreateOrConnectWithoutUpasInput
    connect?: DpcWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutUpaInput = {
    create?: XOR<UserCreateWithoutUpaInput, UserUncheckedCreateWithoutUpaInput> | UserCreateWithoutUpaInput[] | UserUncheckedCreateWithoutUpaInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUpaInput | UserCreateOrConnectWithoutUpaInput[]
    createMany?: UserCreateManyUpaInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ActivityCreateNestedManyWithoutUpaInput = {
    create?: XOR<ActivityCreateWithoutUpaInput, ActivityUncheckedCreateWithoutUpaInput> | ActivityCreateWithoutUpaInput[] | ActivityUncheckedCreateWithoutUpaInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutUpaInput | ActivityCreateOrConnectWithoutUpaInput[]
    createMany?: ActivityCreateManyUpaInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutUpaInput = {
    create?: XOR<UserCreateWithoutUpaInput, UserUncheckedCreateWithoutUpaInput> | UserCreateWithoutUpaInput[] | UserUncheckedCreateWithoutUpaInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUpaInput | UserCreateOrConnectWithoutUpaInput[]
    createMany?: UserCreateManyUpaInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ActivityUncheckedCreateNestedManyWithoutUpaInput = {
    create?: XOR<ActivityCreateWithoutUpaInput, ActivityUncheckedCreateWithoutUpaInput> | ActivityCreateWithoutUpaInput[] | ActivityUncheckedCreateWithoutUpaInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutUpaInput | ActivityCreateOrConnectWithoutUpaInput[]
    createMany?: ActivityCreateManyUpaInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type DpcUpdateOneWithoutUpasNestedInput = {
    create?: XOR<DpcCreateWithoutUpasInput, DpcUncheckedCreateWithoutUpasInput>
    connectOrCreate?: DpcCreateOrConnectWithoutUpasInput
    upsert?: DpcUpsertWithoutUpasInput
    disconnect?: DpcWhereInput | boolean
    delete?: DpcWhereInput | boolean
    connect?: DpcWhereUniqueInput
    update?: XOR<XOR<DpcUpdateToOneWithWhereWithoutUpasInput, DpcUpdateWithoutUpasInput>, DpcUncheckedUpdateWithoutUpasInput>
  }

  export type UserUpdateManyWithoutUpaNestedInput = {
    create?: XOR<UserCreateWithoutUpaInput, UserUncheckedCreateWithoutUpaInput> | UserCreateWithoutUpaInput[] | UserUncheckedCreateWithoutUpaInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUpaInput | UserCreateOrConnectWithoutUpaInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutUpaInput | UserUpsertWithWhereUniqueWithoutUpaInput[]
    createMany?: UserCreateManyUpaInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutUpaInput | UserUpdateWithWhereUniqueWithoutUpaInput[]
    updateMany?: UserUpdateManyWithWhereWithoutUpaInput | UserUpdateManyWithWhereWithoutUpaInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ActivityUpdateManyWithoutUpaNestedInput = {
    create?: XOR<ActivityCreateWithoutUpaInput, ActivityUncheckedCreateWithoutUpaInput> | ActivityCreateWithoutUpaInput[] | ActivityUncheckedCreateWithoutUpaInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutUpaInput | ActivityCreateOrConnectWithoutUpaInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutUpaInput | ActivityUpsertWithWhereUniqueWithoutUpaInput[]
    createMany?: ActivityCreateManyUpaInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutUpaInput | ActivityUpdateWithWhereUniqueWithoutUpaInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutUpaInput | ActivityUpdateManyWithWhereWithoutUpaInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutUpaNestedInput = {
    create?: XOR<UserCreateWithoutUpaInput, UserUncheckedCreateWithoutUpaInput> | UserCreateWithoutUpaInput[] | UserUncheckedCreateWithoutUpaInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUpaInput | UserCreateOrConnectWithoutUpaInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutUpaInput | UserUpsertWithWhereUniqueWithoutUpaInput[]
    createMany?: UserCreateManyUpaInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutUpaInput | UserUpdateWithWhereUniqueWithoutUpaInput[]
    updateMany?: UserUpdateManyWithWhereWithoutUpaInput | UserUpdateManyWithWhereWithoutUpaInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ActivityUncheckedUpdateManyWithoutUpaNestedInput = {
    create?: XOR<ActivityCreateWithoutUpaInput, ActivityUncheckedCreateWithoutUpaInput> | ActivityCreateWithoutUpaInput[] | ActivityUncheckedCreateWithoutUpaInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutUpaInput | ActivityCreateOrConnectWithoutUpaInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutUpaInput | ActivityUpsertWithWhereUniqueWithoutUpaInput[]
    createMany?: ActivityCreateManyUpaInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutUpaInput | ActivityUpdateWithWhereUniqueWithoutUpaInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutUpaInput | ActivityUpdateManyWithWhereWithoutUpaInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type UpaCreateNestedManyWithoutDpcInput = {
    create?: XOR<UpaCreateWithoutDpcInput, UpaUncheckedCreateWithoutDpcInput> | UpaCreateWithoutDpcInput[] | UpaUncheckedCreateWithoutDpcInput[]
    connectOrCreate?: UpaCreateOrConnectWithoutDpcInput | UpaCreateOrConnectWithoutDpcInput[]
    createMany?: UpaCreateManyDpcInputEnvelope
    connect?: UpaWhereUniqueInput | UpaWhereUniqueInput[]
  }

  export type UpaUncheckedCreateNestedManyWithoutDpcInput = {
    create?: XOR<UpaCreateWithoutDpcInput, UpaUncheckedCreateWithoutDpcInput> | UpaCreateWithoutDpcInput[] | UpaUncheckedCreateWithoutDpcInput[]
    connectOrCreate?: UpaCreateOrConnectWithoutDpcInput | UpaCreateOrConnectWithoutDpcInput[]
    createMany?: UpaCreateManyDpcInputEnvelope
    connect?: UpaWhereUniqueInput | UpaWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UpaUpdateManyWithoutDpcNestedInput = {
    create?: XOR<UpaCreateWithoutDpcInput, UpaUncheckedCreateWithoutDpcInput> | UpaCreateWithoutDpcInput[] | UpaUncheckedCreateWithoutDpcInput[]
    connectOrCreate?: UpaCreateOrConnectWithoutDpcInput | UpaCreateOrConnectWithoutDpcInput[]
    upsert?: UpaUpsertWithWhereUniqueWithoutDpcInput | UpaUpsertWithWhereUniqueWithoutDpcInput[]
    createMany?: UpaCreateManyDpcInputEnvelope
    set?: UpaWhereUniqueInput | UpaWhereUniqueInput[]
    disconnect?: UpaWhereUniqueInput | UpaWhereUniqueInput[]
    delete?: UpaWhereUniqueInput | UpaWhereUniqueInput[]
    connect?: UpaWhereUniqueInput | UpaWhereUniqueInput[]
    update?: UpaUpdateWithWhereUniqueWithoutDpcInput | UpaUpdateWithWhereUniqueWithoutDpcInput[]
    updateMany?: UpaUpdateManyWithWhereWithoutDpcInput | UpaUpdateManyWithWhereWithoutDpcInput[]
    deleteMany?: UpaScalarWhereInput | UpaScalarWhereInput[]
  }

  export type UpaUncheckedUpdateManyWithoutDpcNestedInput = {
    create?: XOR<UpaCreateWithoutDpcInput, UpaUncheckedCreateWithoutDpcInput> | UpaCreateWithoutDpcInput[] | UpaUncheckedCreateWithoutDpcInput[]
    connectOrCreate?: UpaCreateOrConnectWithoutDpcInput | UpaCreateOrConnectWithoutDpcInput[]
    upsert?: UpaUpsertWithWhereUniqueWithoutDpcInput | UpaUpsertWithWhereUniqueWithoutDpcInput[]
    createMany?: UpaCreateManyDpcInputEnvelope
    set?: UpaWhereUniqueInput | UpaWhereUniqueInput[]
    disconnect?: UpaWhereUniqueInput | UpaWhereUniqueInput[]
    delete?: UpaWhereUniqueInput | UpaWhereUniqueInput[]
    connect?: UpaWhereUniqueInput | UpaWhereUniqueInput[]
    update?: UpaUpdateWithWhereUniqueWithoutDpcInput | UpaUpdateWithWhereUniqueWithoutDpcInput[]
    updateMany?: UpaUpdateManyWithWhereWithoutDpcInput | UpaUpdateManyWithWhereWithoutDpcInput[]
    deleteMany?: UpaScalarWhereInput | UpaScalarWhereInput[]
  }

  export type JenjangCreateNestedOneWithoutUsersInput = {
    create?: XOR<JenjangCreateWithoutUsersInput, JenjangUncheckedCreateWithoutUsersInput>
    connectOrCreate?: JenjangCreateOrConnectWithoutUsersInput
    connect?: JenjangWhereUniqueInput
  }

  export type UpaCreateNestedOneWithoutUsersInput = {
    create?: XOR<UpaCreateWithoutUsersInput, UpaUncheckedCreateWithoutUsersInput>
    connectOrCreate?: UpaCreateOrConnectWithoutUsersInput
    connect?: UpaWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMenteesInput = {
    create?: XOR<UserCreateWithoutMenteesInput, UserUncheckedCreateWithoutMenteesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMenteesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutMentorInput = {
    create?: XOR<UserCreateWithoutMentorInput, UserUncheckedCreateWithoutMentorInput> | UserCreateWithoutMentorInput[] | UserUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: UserCreateOrConnectWithoutMentorInput | UserCreateOrConnectWithoutMentorInput[]
    createMany?: UserCreateManyMentorInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ActivityCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityCreateWithoutUserInput, ActivityUncheckedCreateWithoutUserInput> | ActivityCreateWithoutUserInput[] | ActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutUserInput | ActivityCreateOrConnectWithoutUserInput[]
    createMany?: ActivityCreateManyUserInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type AttendanceCreateNestedManyWithoutUserInput = {
    create?: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput> | AttendanceCreateWithoutUserInput[] | AttendanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutUserInput | AttendanceCreateOrConnectWithoutUserInput[]
    createMany?: AttendanceCreateManyUserInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type PresensiCreateNestedManyWithoutUserInput = {
    create?: XOR<PresensiCreateWithoutUserInput, PresensiUncheckedCreateWithoutUserInput> | PresensiCreateWithoutUserInput[] | PresensiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PresensiCreateOrConnectWithoutUserInput | PresensiCreateOrConnectWithoutUserInput[]
    createMany?: PresensiCreateManyUserInputEnvelope
    connect?: PresensiWhereUniqueInput | PresensiWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutMentorInput = {
    create?: XOR<UserCreateWithoutMentorInput, UserUncheckedCreateWithoutMentorInput> | UserCreateWithoutMentorInput[] | UserUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: UserCreateOrConnectWithoutMentorInput | UserCreateOrConnectWithoutMentorInput[]
    createMany?: UserCreateManyMentorInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ActivityUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityCreateWithoutUserInput, ActivityUncheckedCreateWithoutUserInput> | ActivityCreateWithoutUserInput[] | ActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutUserInput | ActivityCreateOrConnectWithoutUserInput[]
    createMany?: ActivityCreateManyUserInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput> | AttendanceCreateWithoutUserInput[] | AttendanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutUserInput | AttendanceCreateOrConnectWithoutUserInput[]
    createMany?: AttendanceCreateManyUserInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type PresensiUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PresensiCreateWithoutUserInput, PresensiUncheckedCreateWithoutUserInput> | PresensiCreateWithoutUserInput[] | PresensiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PresensiCreateOrConnectWithoutUserInput | PresensiCreateOrConnectWithoutUserInput[]
    createMany?: PresensiCreateManyUserInputEnvelope
    connect?: PresensiWhereUniqueInput | PresensiWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type JenjangUpdateOneWithoutUsersNestedInput = {
    create?: XOR<JenjangCreateWithoutUsersInput, JenjangUncheckedCreateWithoutUsersInput>
    connectOrCreate?: JenjangCreateOrConnectWithoutUsersInput
    upsert?: JenjangUpsertWithoutUsersInput
    disconnect?: JenjangWhereInput | boolean
    delete?: JenjangWhereInput | boolean
    connect?: JenjangWhereUniqueInput
    update?: XOR<XOR<JenjangUpdateToOneWithWhereWithoutUsersInput, JenjangUpdateWithoutUsersInput>, JenjangUncheckedUpdateWithoutUsersInput>
  }

  export type UpaUpdateOneWithoutUsersNestedInput = {
    create?: XOR<UpaCreateWithoutUsersInput, UpaUncheckedCreateWithoutUsersInput>
    connectOrCreate?: UpaCreateOrConnectWithoutUsersInput
    upsert?: UpaUpsertWithoutUsersInput
    disconnect?: UpaWhereInput | boolean
    delete?: UpaWhereInput | boolean
    connect?: UpaWhereUniqueInput
    update?: XOR<XOR<UpaUpdateToOneWithWhereWithoutUsersInput, UpaUpdateWithoutUsersInput>, UpaUncheckedUpdateWithoutUsersInput>
  }

  export type UserUpdateOneWithoutMenteesNestedInput = {
    create?: XOR<UserCreateWithoutMenteesInput, UserUncheckedCreateWithoutMenteesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMenteesInput
    upsert?: UserUpsertWithoutMenteesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMenteesInput, UserUpdateWithoutMenteesInput>, UserUncheckedUpdateWithoutMenteesInput>
  }

  export type UserUpdateManyWithoutMentorNestedInput = {
    create?: XOR<UserCreateWithoutMentorInput, UserUncheckedCreateWithoutMentorInput> | UserCreateWithoutMentorInput[] | UserUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: UserCreateOrConnectWithoutMentorInput | UserCreateOrConnectWithoutMentorInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutMentorInput | UserUpsertWithWhereUniqueWithoutMentorInput[]
    createMany?: UserCreateManyMentorInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutMentorInput | UserUpdateWithWhereUniqueWithoutMentorInput[]
    updateMany?: UserUpdateManyWithWhereWithoutMentorInput | UserUpdateManyWithWhereWithoutMentorInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ActivityUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityCreateWithoutUserInput, ActivityUncheckedCreateWithoutUserInput> | ActivityCreateWithoutUserInput[] | ActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutUserInput | ActivityCreateOrConnectWithoutUserInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutUserInput | ActivityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityCreateManyUserInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutUserInput | ActivityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutUserInput | ActivityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type AttendanceUpdateManyWithoutUserNestedInput = {
    create?: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput> | AttendanceCreateWithoutUserInput[] | AttendanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutUserInput | AttendanceCreateOrConnectWithoutUserInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutUserInput | AttendanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AttendanceCreateManyUserInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutUserInput | AttendanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutUserInput | AttendanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type PresensiUpdateManyWithoutUserNestedInput = {
    create?: XOR<PresensiCreateWithoutUserInput, PresensiUncheckedCreateWithoutUserInput> | PresensiCreateWithoutUserInput[] | PresensiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PresensiCreateOrConnectWithoutUserInput | PresensiCreateOrConnectWithoutUserInput[]
    upsert?: PresensiUpsertWithWhereUniqueWithoutUserInput | PresensiUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PresensiCreateManyUserInputEnvelope
    set?: PresensiWhereUniqueInput | PresensiWhereUniqueInput[]
    disconnect?: PresensiWhereUniqueInput | PresensiWhereUniqueInput[]
    delete?: PresensiWhereUniqueInput | PresensiWhereUniqueInput[]
    connect?: PresensiWhereUniqueInput | PresensiWhereUniqueInput[]
    update?: PresensiUpdateWithWhereUniqueWithoutUserInput | PresensiUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PresensiUpdateManyWithWhereWithoutUserInput | PresensiUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PresensiScalarWhereInput | PresensiScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutMentorNestedInput = {
    create?: XOR<UserCreateWithoutMentorInput, UserUncheckedCreateWithoutMentorInput> | UserCreateWithoutMentorInput[] | UserUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: UserCreateOrConnectWithoutMentorInput | UserCreateOrConnectWithoutMentorInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutMentorInput | UserUpsertWithWhereUniqueWithoutMentorInput[]
    createMany?: UserCreateManyMentorInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutMentorInput | UserUpdateWithWhereUniqueWithoutMentorInput[]
    updateMany?: UserUpdateManyWithWhereWithoutMentorInput | UserUpdateManyWithWhereWithoutMentorInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ActivityUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityCreateWithoutUserInput, ActivityUncheckedCreateWithoutUserInput> | ActivityCreateWithoutUserInput[] | ActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutUserInput | ActivityCreateOrConnectWithoutUserInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutUserInput | ActivityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityCreateManyUserInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutUserInput | ActivityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutUserInput | ActivityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput> | AttendanceCreateWithoutUserInput[] | AttendanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutUserInput | AttendanceCreateOrConnectWithoutUserInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutUserInput | AttendanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AttendanceCreateManyUserInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutUserInput | AttendanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutUserInput | AttendanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type PresensiUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PresensiCreateWithoutUserInput, PresensiUncheckedCreateWithoutUserInput> | PresensiCreateWithoutUserInput[] | PresensiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PresensiCreateOrConnectWithoutUserInput | PresensiCreateOrConnectWithoutUserInput[]
    upsert?: PresensiUpsertWithWhereUniqueWithoutUserInput | PresensiUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PresensiCreateManyUserInputEnvelope
    set?: PresensiWhereUniqueInput | PresensiWhereUniqueInput[]
    disconnect?: PresensiWhereUniqueInput | PresensiWhereUniqueInput[]
    delete?: PresensiWhereUniqueInput | PresensiWhereUniqueInput[]
    connect?: PresensiWhereUniqueInput | PresensiWhereUniqueInput[]
    update?: PresensiUpdateWithWhereUniqueWithoutUserInput | PresensiUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PresensiUpdateManyWithWhereWithoutUserInput | PresensiUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PresensiScalarWhereInput | PresensiScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivitiesInput
    connect?: UserWhereUniqueInput
  }

  export type UpaCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<UpaCreateWithoutActivitiesInput, UpaUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: UpaCreateOrConnectWithoutActivitiesInput
    connect?: UpaWhereUniqueInput
  }

  export type AttendanceCreateNestedManyWithoutActivityInput = {
    create?: XOR<AttendanceCreateWithoutActivityInput, AttendanceUncheckedCreateWithoutActivityInput> | AttendanceCreateWithoutActivityInput[] | AttendanceUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutActivityInput | AttendanceCreateOrConnectWithoutActivityInput[]
    createMany?: AttendanceCreateManyActivityInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutActivityInput = {
    create?: XOR<AttendanceCreateWithoutActivityInput, AttendanceUncheckedCreateWithoutActivityInput> | AttendanceCreateWithoutActivityInput[] | AttendanceUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutActivityInput | AttendanceCreateOrConnectWithoutActivityInput[]
    createMany?: AttendanceCreateManyActivityInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivitiesInput
    upsert?: UserUpsertWithoutActivitiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActivitiesInput, UserUpdateWithoutActivitiesInput>, UserUncheckedUpdateWithoutActivitiesInput>
  }

  export type UpaUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: XOR<UpaCreateWithoutActivitiesInput, UpaUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: UpaCreateOrConnectWithoutActivitiesInput
    upsert?: UpaUpsertWithoutActivitiesInput
    connect?: UpaWhereUniqueInput
    update?: XOR<XOR<UpaUpdateToOneWithWhereWithoutActivitiesInput, UpaUpdateWithoutActivitiesInput>, UpaUncheckedUpdateWithoutActivitiesInput>
  }

  export type AttendanceUpdateManyWithoutActivityNestedInput = {
    create?: XOR<AttendanceCreateWithoutActivityInput, AttendanceUncheckedCreateWithoutActivityInput> | AttendanceCreateWithoutActivityInput[] | AttendanceUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutActivityInput | AttendanceCreateOrConnectWithoutActivityInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutActivityInput | AttendanceUpsertWithWhereUniqueWithoutActivityInput[]
    createMany?: AttendanceCreateManyActivityInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutActivityInput | AttendanceUpdateWithWhereUniqueWithoutActivityInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutActivityInput | AttendanceUpdateManyWithWhereWithoutActivityInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutActivityNestedInput = {
    create?: XOR<AttendanceCreateWithoutActivityInput, AttendanceUncheckedCreateWithoutActivityInput> | AttendanceCreateWithoutActivityInput[] | AttendanceUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutActivityInput | AttendanceCreateOrConnectWithoutActivityInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutActivityInput | AttendanceUpsertWithWhereUniqueWithoutActivityInput[]
    createMany?: AttendanceCreateManyActivityInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutActivityInput | AttendanceUpdateWithWhereUniqueWithoutActivityInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutActivityInput | AttendanceUpdateManyWithWhereWithoutActivityInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<UserCreateWithoutAttendancesInput, UserUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttendancesInput
    connect?: UserWhereUniqueInput
  }

  export type ActivityCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<ActivityCreateWithoutAttendancesInput, ActivityUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: ActivityCreateOrConnectWithoutAttendancesInput
    connect?: ActivityWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<UserCreateWithoutAttendancesInput, UserUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttendancesInput
    upsert?: UserUpsertWithoutAttendancesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAttendancesInput, UserUpdateWithoutAttendancesInput>, UserUncheckedUpdateWithoutAttendancesInput>
  }

  export type ActivityUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<ActivityCreateWithoutAttendancesInput, ActivityUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: ActivityCreateOrConnectWithoutAttendancesInput
    upsert?: ActivityUpsertWithoutAttendancesInput
    connect?: ActivityWhereUniqueInput
    update?: XOR<XOR<ActivityUpdateToOneWithWhereWithoutAttendancesInput, ActivityUpdateWithoutAttendancesInput>, ActivityUncheckedUpdateWithoutAttendancesInput>
  }

  export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAuditLogsNestedInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    upsert?: UserUpsertWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditLogsInput, UserUpdateWithoutAuditLogsInput>, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type EnumTipeJawabanFieldUpdateOperationsInput = {
    set?: $Enums.TipeJawaban
  }

  export type RoleAccessCreateNestedManyWithoutMenuInput = {
    create?: XOR<RoleAccessCreateWithoutMenuInput, RoleAccessUncheckedCreateWithoutMenuInput> | RoleAccessCreateWithoutMenuInput[] | RoleAccessUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: RoleAccessCreateOrConnectWithoutMenuInput | RoleAccessCreateOrConnectWithoutMenuInput[]
    createMany?: RoleAccessCreateManyMenuInputEnvelope
    connect?: RoleAccessWhereUniqueInput | RoleAccessWhereUniqueInput[]
  }

  export type RoleAccessUncheckedCreateNestedManyWithoutMenuInput = {
    create?: XOR<RoleAccessCreateWithoutMenuInput, RoleAccessUncheckedCreateWithoutMenuInput> | RoleAccessCreateWithoutMenuInput[] | RoleAccessUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: RoleAccessCreateOrConnectWithoutMenuInput | RoleAccessCreateOrConnectWithoutMenuInput[]
    createMany?: RoleAccessCreateManyMenuInputEnvelope
    connect?: RoleAccessWhereUniqueInput | RoleAccessWhereUniqueInput[]
  }

  export type RoleAccessUpdateManyWithoutMenuNestedInput = {
    create?: XOR<RoleAccessCreateWithoutMenuInput, RoleAccessUncheckedCreateWithoutMenuInput> | RoleAccessCreateWithoutMenuInput[] | RoleAccessUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: RoleAccessCreateOrConnectWithoutMenuInput | RoleAccessCreateOrConnectWithoutMenuInput[]
    upsert?: RoleAccessUpsertWithWhereUniqueWithoutMenuInput | RoleAccessUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: RoleAccessCreateManyMenuInputEnvelope
    set?: RoleAccessWhereUniqueInput | RoleAccessWhereUniqueInput[]
    disconnect?: RoleAccessWhereUniqueInput | RoleAccessWhereUniqueInput[]
    delete?: RoleAccessWhereUniqueInput | RoleAccessWhereUniqueInput[]
    connect?: RoleAccessWhereUniqueInput | RoleAccessWhereUniqueInput[]
    update?: RoleAccessUpdateWithWhereUniqueWithoutMenuInput | RoleAccessUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: RoleAccessUpdateManyWithWhereWithoutMenuInput | RoleAccessUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: RoleAccessScalarWhereInput | RoleAccessScalarWhereInput[]
  }

  export type RoleAccessUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: XOR<RoleAccessCreateWithoutMenuInput, RoleAccessUncheckedCreateWithoutMenuInput> | RoleAccessCreateWithoutMenuInput[] | RoleAccessUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: RoleAccessCreateOrConnectWithoutMenuInput | RoleAccessCreateOrConnectWithoutMenuInput[]
    upsert?: RoleAccessUpsertWithWhereUniqueWithoutMenuInput | RoleAccessUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: RoleAccessCreateManyMenuInputEnvelope
    set?: RoleAccessWhereUniqueInput | RoleAccessWhereUniqueInput[]
    disconnect?: RoleAccessWhereUniqueInput | RoleAccessWhereUniqueInput[]
    delete?: RoleAccessWhereUniqueInput | RoleAccessWhereUniqueInput[]
    connect?: RoleAccessWhereUniqueInput | RoleAccessWhereUniqueInput[]
    update?: RoleAccessUpdateWithWhereUniqueWithoutMenuInput | RoleAccessUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: RoleAccessUpdateManyWithWhereWithoutMenuInput | RoleAccessUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: RoleAccessScalarWhereInput | RoleAccessScalarWhereInput[]
  }

  export type MenuCreateNestedOneWithoutAccessesInput = {
    create?: XOR<MenuCreateWithoutAccessesInput, MenuUncheckedCreateWithoutAccessesInput>
    connectOrCreate?: MenuCreateOrConnectWithoutAccessesInput
    connect?: MenuWhereUniqueInput
  }

  export type MenuUpdateOneRequiredWithoutAccessesNestedInput = {
    create?: XOR<MenuCreateWithoutAccessesInput, MenuUncheckedCreateWithoutAccessesInput>
    connectOrCreate?: MenuCreateOrConnectWithoutAccessesInput
    upsert?: MenuUpsertWithoutAccessesInput
    connect?: MenuWhereUniqueInput
    update?: XOR<XOR<MenuUpdateToOneWithWhereWithoutAccessesInput, MenuUpdateWithoutAccessesInput>, MenuUncheckedUpdateWithoutAccessesInput>
  }

  export type UserCreateNestedOneWithoutPresensiInput = {
    create?: XOR<UserCreateWithoutPresensiInput, UserUncheckedCreateWithoutPresensiInput>
    connectOrCreate?: UserCreateOrConnectWithoutPresensiInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutPresensiNestedInput = {
    create?: XOR<UserCreateWithoutPresensiInput, UserUncheckedCreateWithoutPresensiInput>
    connectOrCreate?: UserCreateOrConnectWithoutPresensiInput
    upsert?: UserUpsertWithoutPresensiInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPresensiInput, UserUpdateWithoutPresensiInput>, UserUncheckedUpdateWithoutPresensiInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[]
    notIn?: $Enums.UserStatus[]
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[]
    notIn?: $Enums.UserStatus[]
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumTipeJawabanFilter<$PrismaModel = never> = {
    equals?: $Enums.TipeJawaban | EnumTipeJawabanFieldRefInput<$PrismaModel>
    in?: $Enums.TipeJawaban[]
    notIn?: $Enums.TipeJawaban[]
    not?: NestedEnumTipeJawabanFilter<$PrismaModel> | $Enums.TipeJawaban
  }

  export type NestedEnumTipeJawabanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipeJawaban | EnumTipeJawabanFieldRefInput<$PrismaModel>
    in?: $Enums.TipeJawaban[]
    notIn?: $Enums.TipeJawaban[]
    not?: NestedEnumTipeJawabanWithAggregatesFilter<$PrismaModel> | $Enums.TipeJawaban
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipeJawabanFilter<$PrismaModel>
    _max?: NestedEnumTipeJawabanFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserCreateWithoutJenjangInput = {
    id?: string
    email: string
    password: string
    fullName: string
    phoneNumber?: string | null
    employeeId?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    upa?: UpaCreateNestedOneWithoutUsersInput
    mentor?: UserCreateNestedOneWithoutMenteesInput
    mentees?: UserCreateNestedManyWithoutMentorInput
    activities?: ActivityCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    attendances?: AttendanceCreateNestedManyWithoutUserInput
    presensi?: PresensiCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutJenjangInput = {
    id?: string
    email: string
    password: string
    fullName: string
    phoneNumber?: string | null
    employeeId?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    upaId?: string | null
    mentorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mentees?: UserUncheckedCreateNestedManyWithoutMentorInput
    activities?: ActivityUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutUserInput
    presensi?: PresensiUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutJenjangInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJenjangInput, UserUncheckedCreateWithoutJenjangInput>
  }

  export type UserCreateManyJenjangInputEnvelope = {
    data: UserCreateManyJenjangInput | UserCreateManyJenjangInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutJenjangInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutJenjangInput, UserUncheckedUpdateWithoutJenjangInput>
    create: XOR<UserCreateWithoutJenjangInput, UserUncheckedCreateWithoutJenjangInput>
  }

  export type UserUpdateWithWhereUniqueWithoutJenjangInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutJenjangInput, UserUncheckedUpdateWithoutJenjangInput>
  }

  export type UserUpdateManyWithWhereWithoutJenjangInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutJenjangInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    phoneNumber?: StringNullableFilter<"User"> | string | null
    employeeId?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    jenjangId?: StringNullableFilter<"User"> | string | null
    upaId?: StringNullableFilter<"User"> | string | null
    mentorId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type DpcCreateWithoutUpasInput = {
    id?: string
    kodeDpc: string
    namaDpc: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DpcUncheckedCreateWithoutUpasInput = {
    id?: string
    kodeDpc: string
    namaDpc: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DpcCreateOrConnectWithoutUpasInput = {
    where: DpcWhereUniqueInput
    create: XOR<DpcCreateWithoutUpasInput, DpcUncheckedCreateWithoutUpasInput>
  }

  export type UserCreateWithoutUpaInput = {
    id?: string
    email: string
    password: string
    fullName: string
    phoneNumber?: string | null
    employeeId?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    jenjang?: JenjangCreateNestedOneWithoutUsersInput
    mentor?: UserCreateNestedOneWithoutMenteesInput
    mentees?: UserCreateNestedManyWithoutMentorInput
    activities?: ActivityCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    attendances?: AttendanceCreateNestedManyWithoutUserInput
    presensi?: PresensiCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUpaInput = {
    id?: string
    email: string
    password: string
    fullName: string
    phoneNumber?: string | null
    employeeId?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    jenjangId?: string | null
    mentorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mentees?: UserUncheckedCreateNestedManyWithoutMentorInput
    activities?: ActivityUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutUserInput
    presensi?: PresensiUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUpaInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpaInput, UserUncheckedCreateWithoutUpaInput>
  }

  export type UserCreateManyUpaInputEnvelope = {
    data: UserCreateManyUpaInput | UserCreateManyUpaInput[]
    skipDuplicates?: boolean
  }

  export type ActivityCreateWithoutUpaInput = {
    id?: string
    title: string
    description?: string | null
    date: Date | string
    location?: string | null
    flag?: number
    latitude?: number | null
    longitude?: number | null
    radius?: number
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    attendanceToken?: string | null
    isActive?: boolean
    user: UserCreateNestedOneWithoutActivitiesInput
    attendances?: AttendanceCreateNestedManyWithoutActivityInput
  }

  export type ActivityUncheckedCreateWithoutUpaInput = {
    id?: string
    title: string
    description?: string | null
    date: Date | string
    location?: string | null
    flag?: number
    latitude?: number | null
    longitude?: number | null
    radius?: number
    userId: string
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    attendanceToken?: string | null
    isActive?: boolean
    attendances?: AttendanceUncheckedCreateNestedManyWithoutActivityInput
  }

  export type ActivityCreateOrConnectWithoutUpaInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutUpaInput, ActivityUncheckedCreateWithoutUpaInput>
  }

  export type ActivityCreateManyUpaInputEnvelope = {
    data: ActivityCreateManyUpaInput | ActivityCreateManyUpaInput[]
    skipDuplicates?: boolean
  }

  export type DpcUpsertWithoutUpasInput = {
    update: XOR<DpcUpdateWithoutUpasInput, DpcUncheckedUpdateWithoutUpasInput>
    create: XOR<DpcCreateWithoutUpasInput, DpcUncheckedCreateWithoutUpasInput>
    where?: DpcWhereInput
  }

  export type DpcUpdateToOneWithWhereWithoutUpasInput = {
    where?: DpcWhereInput
    data: XOR<DpcUpdateWithoutUpasInput, DpcUncheckedUpdateWithoutUpasInput>
  }

  export type DpcUpdateWithoutUpasInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeDpc?: StringFieldUpdateOperationsInput | string
    namaDpc?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DpcUncheckedUpdateWithoutUpasInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeDpc?: StringFieldUpdateOperationsInput | string
    namaDpc?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutUpaInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutUpaInput, UserUncheckedUpdateWithoutUpaInput>
    create: XOR<UserCreateWithoutUpaInput, UserUncheckedCreateWithoutUpaInput>
  }

  export type UserUpdateWithWhereUniqueWithoutUpaInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutUpaInput, UserUncheckedUpdateWithoutUpaInput>
  }

  export type UserUpdateManyWithWhereWithoutUpaInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUpaInput>
  }

  export type ActivityUpsertWithWhereUniqueWithoutUpaInput = {
    where: ActivityWhereUniqueInput
    update: XOR<ActivityUpdateWithoutUpaInput, ActivityUncheckedUpdateWithoutUpaInput>
    create: XOR<ActivityCreateWithoutUpaInput, ActivityUncheckedCreateWithoutUpaInput>
  }

  export type ActivityUpdateWithWhereUniqueWithoutUpaInput = {
    where: ActivityWhereUniqueInput
    data: XOR<ActivityUpdateWithoutUpaInput, ActivityUncheckedUpdateWithoutUpaInput>
  }

  export type ActivityUpdateManyWithWhereWithoutUpaInput = {
    where: ActivityScalarWhereInput
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyWithoutUpaInput>
  }

  export type ActivityScalarWhereInput = {
    AND?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    OR?: ActivityScalarWhereInput[]
    NOT?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    id?: StringFilter<"Activity"> | string
    title?: StringFilter<"Activity"> | string
    description?: StringNullableFilter<"Activity"> | string | null
    date?: DateTimeFilter<"Activity"> | Date | string
    location?: StringNullableFilter<"Activity"> | string | null
    flag?: IntFilter<"Activity"> | number
    latitude?: FloatNullableFilter<"Activity"> | number | null
    longitude?: FloatNullableFilter<"Activity"> | number | null
    radius?: IntFilter<"Activity"> | number
    userId?: StringFilter<"Activity"> | string
    upaId?: StringFilter<"Activity"> | string
    answers?: JsonNullableFilter<"Activity">
    createdAt?: DateTimeFilter<"Activity"> | Date | string
    updatedAt?: DateTimeFilter<"Activity"> | Date | string
    attendanceToken?: StringNullableFilter<"Activity"> | string | null
    isActive?: BoolFilter<"Activity"> | boolean
  }

  export type UpaCreateWithoutDpcInput = {
    id?: string
    code: string
    name: string
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutUpaInput
    activities?: ActivityCreateNestedManyWithoutUpaInput
  }

  export type UpaUncheckedCreateWithoutDpcInput = {
    id?: string
    code: string
    name: string
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutUpaInput
    activities?: ActivityUncheckedCreateNestedManyWithoutUpaInput
  }

  export type UpaCreateOrConnectWithoutDpcInput = {
    where: UpaWhereUniqueInput
    create: XOR<UpaCreateWithoutDpcInput, UpaUncheckedCreateWithoutDpcInput>
  }

  export type UpaCreateManyDpcInputEnvelope = {
    data: UpaCreateManyDpcInput | UpaCreateManyDpcInput[]
    skipDuplicates?: boolean
  }

  export type UpaUpsertWithWhereUniqueWithoutDpcInput = {
    where: UpaWhereUniqueInput
    update: XOR<UpaUpdateWithoutDpcInput, UpaUncheckedUpdateWithoutDpcInput>
    create: XOR<UpaCreateWithoutDpcInput, UpaUncheckedCreateWithoutDpcInput>
  }

  export type UpaUpdateWithWhereUniqueWithoutDpcInput = {
    where: UpaWhereUniqueInput
    data: XOR<UpaUpdateWithoutDpcInput, UpaUncheckedUpdateWithoutDpcInput>
  }

  export type UpaUpdateManyWithWhereWithoutDpcInput = {
    where: UpaScalarWhereInput
    data: XOR<UpaUpdateManyMutationInput, UpaUncheckedUpdateManyWithoutDpcInput>
  }

  export type UpaScalarWhereInput = {
    AND?: UpaScalarWhereInput | UpaScalarWhereInput[]
    OR?: UpaScalarWhereInput[]
    NOT?: UpaScalarWhereInput | UpaScalarWhereInput[]
    id?: StringFilter<"Upa"> | string
    code?: StringFilter<"Upa"> | string
    name?: StringFilter<"Upa"> | string
    location?: StringNullableFilter<"Upa"> | string | null
    dpcId?: StringNullableFilter<"Upa"> | string | null
    createdAt?: DateTimeFilter<"Upa"> | Date | string
    updatedAt?: DateTimeFilter<"Upa"> | Date | string
  }

  export type JenjangCreateWithoutUsersInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JenjangUncheckedCreateWithoutUsersInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JenjangCreateOrConnectWithoutUsersInput = {
    where: JenjangWhereUniqueInput
    create: XOR<JenjangCreateWithoutUsersInput, JenjangUncheckedCreateWithoutUsersInput>
  }

  export type UpaCreateWithoutUsersInput = {
    id?: string
    code: string
    name: string
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dpc?: DpcCreateNestedOneWithoutUpasInput
    activities?: ActivityCreateNestedManyWithoutUpaInput
  }

  export type UpaUncheckedCreateWithoutUsersInput = {
    id?: string
    code: string
    name: string
    location?: string | null
    dpcId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    activities?: ActivityUncheckedCreateNestedManyWithoutUpaInput
  }

  export type UpaCreateOrConnectWithoutUsersInput = {
    where: UpaWhereUniqueInput
    create: XOR<UpaCreateWithoutUsersInput, UpaUncheckedCreateWithoutUsersInput>
  }

  export type UserCreateWithoutMenteesInput = {
    id?: string
    email: string
    password: string
    fullName: string
    phoneNumber?: string | null
    employeeId?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    jenjang?: JenjangCreateNestedOneWithoutUsersInput
    upa?: UpaCreateNestedOneWithoutUsersInput
    mentor?: UserCreateNestedOneWithoutMenteesInput
    activities?: ActivityCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    attendances?: AttendanceCreateNestedManyWithoutUserInput
    presensi?: PresensiCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMenteesInput = {
    id?: string
    email: string
    password: string
    fullName: string
    phoneNumber?: string | null
    employeeId?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    jenjangId?: string | null
    upaId?: string | null
    mentorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    activities?: ActivityUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutUserInput
    presensi?: PresensiUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMenteesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMenteesInput, UserUncheckedCreateWithoutMenteesInput>
  }

  export type UserCreateWithoutMentorInput = {
    id?: string
    email: string
    password: string
    fullName: string
    phoneNumber?: string | null
    employeeId?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    jenjang?: JenjangCreateNestedOneWithoutUsersInput
    upa?: UpaCreateNestedOneWithoutUsersInput
    mentees?: UserCreateNestedManyWithoutMentorInput
    activities?: ActivityCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    attendances?: AttendanceCreateNestedManyWithoutUserInput
    presensi?: PresensiCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMentorInput = {
    id?: string
    email: string
    password: string
    fullName: string
    phoneNumber?: string | null
    employeeId?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    jenjangId?: string | null
    upaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mentees?: UserUncheckedCreateNestedManyWithoutMentorInput
    activities?: ActivityUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutUserInput
    presensi?: PresensiUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMentorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMentorInput, UserUncheckedCreateWithoutMentorInput>
  }

  export type UserCreateManyMentorInputEnvelope = {
    data: UserCreateManyMentorInput | UserCreateManyMentorInput[]
    skipDuplicates?: boolean
  }

  export type ActivityCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    date: Date | string
    location?: string | null
    flag?: number
    latitude?: number | null
    longitude?: number | null
    radius?: number
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    attendanceToken?: string | null
    isActive?: boolean
    upa: UpaCreateNestedOneWithoutActivitiesInput
    attendances?: AttendanceCreateNestedManyWithoutActivityInput
  }

  export type ActivityUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    date: Date | string
    location?: string | null
    flag?: number
    latitude?: number | null
    longitude?: number | null
    radius?: number
    upaId: string
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    attendanceToken?: string | null
    isActive?: boolean
    attendances?: AttendanceUncheckedCreateNestedManyWithoutActivityInput
  }

  export type ActivityCreateOrConnectWithoutUserInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutUserInput, ActivityUncheckedCreateWithoutUserInput>
  }

  export type ActivityCreateManyUserInputEnvelope = {
    data: ActivityCreateManyUserInput | ActivityCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutUserInput = {
    id?: string
    action: string
    resource: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateWithoutUserInput = {
    id?: string
    action: string
    resource: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogCreateManyUserInputEnvelope = {
    data: AuditLogCreateManyUserInput | AuditLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AttendanceCreateWithoutUserInput = {
    id?: string
    timestamp?: Date | string
    status?: string | null
    activity: ActivityCreateNestedOneWithoutAttendancesInput
  }

  export type AttendanceUncheckedCreateWithoutUserInput = {
    id?: string
    activityId: string
    timestamp?: Date | string
    status?: string | null
  }

  export type AttendanceCreateOrConnectWithoutUserInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput>
  }

  export type AttendanceCreateManyUserInputEnvelope = {
    data: AttendanceCreateManyUserInput | AttendanceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PresensiCreateWithoutUserInput = {
    id?: string
    date: Date | string
    checkIn?: Date | string | null
    checkOut?: Date | string | null
    locationIn?: string | null
    locationOut?: string | null
    photoIn?: string | null
    photoOut?: string | null
    status?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PresensiUncheckedCreateWithoutUserInput = {
    id?: string
    date: Date | string
    checkIn?: Date | string | null
    checkOut?: Date | string | null
    locationIn?: string | null
    locationOut?: string | null
    photoIn?: string | null
    photoOut?: string | null
    status?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PresensiCreateOrConnectWithoutUserInput = {
    where: PresensiWhereUniqueInput
    create: XOR<PresensiCreateWithoutUserInput, PresensiUncheckedCreateWithoutUserInput>
  }

  export type PresensiCreateManyUserInputEnvelope = {
    data: PresensiCreateManyUserInput | PresensiCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type JenjangUpsertWithoutUsersInput = {
    update: XOR<JenjangUpdateWithoutUsersInput, JenjangUncheckedUpdateWithoutUsersInput>
    create: XOR<JenjangCreateWithoutUsersInput, JenjangUncheckedCreateWithoutUsersInput>
    where?: JenjangWhereInput
  }

  export type JenjangUpdateToOneWithWhereWithoutUsersInput = {
    where?: JenjangWhereInput
    data: XOR<JenjangUpdateWithoutUsersInput, JenjangUncheckedUpdateWithoutUsersInput>
  }

  export type JenjangUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JenjangUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UpaUpsertWithoutUsersInput = {
    update: XOR<UpaUpdateWithoutUsersInput, UpaUncheckedUpdateWithoutUsersInput>
    create: XOR<UpaCreateWithoutUsersInput, UpaUncheckedCreateWithoutUsersInput>
    where?: UpaWhereInput
  }

  export type UpaUpdateToOneWithWhereWithoutUsersInput = {
    where?: UpaWhereInput
    data: XOR<UpaUpdateWithoutUsersInput, UpaUncheckedUpdateWithoutUsersInput>
  }

  export type UpaUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dpc?: DpcUpdateOneWithoutUpasNestedInput
    activities?: ActivityUpdateManyWithoutUpaNestedInput
  }

  export type UpaUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    dpcId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUncheckedUpdateManyWithoutUpaNestedInput
  }

  export type UserUpsertWithoutMenteesInput = {
    update: XOR<UserUpdateWithoutMenteesInput, UserUncheckedUpdateWithoutMenteesInput>
    create: XOR<UserCreateWithoutMenteesInput, UserUncheckedCreateWithoutMenteesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMenteesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMenteesInput, UserUncheckedUpdateWithoutMenteesInput>
  }

  export type UserUpdateWithoutMenteesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jenjang?: JenjangUpdateOneWithoutUsersNestedInput
    upa?: UpaUpdateOneWithoutUsersNestedInput
    mentor?: UserUpdateOneWithoutMenteesNestedInput
    activities?: ActivityUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    attendances?: AttendanceUpdateManyWithoutUserNestedInput
    presensi?: PresensiUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMenteesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    jenjangId?: NullableStringFieldUpdateOperationsInput | string | null
    upaId?: NullableStringFieldUpdateOperationsInput | string | null
    mentorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutUserNestedInput
    presensi?: PresensiUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutMentorInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutMentorInput, UserUncheckedUpdateWithoutMentorInput>
    create: XOR<UserCreateWithoutMentorInput, UserUncheckedCreateWithoutMentorInput>
  }

  export type UserUpdateWithWhereUniqueWithoutMentorInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutMentorInput, UserUncheckedUpdateWithoutMentorInput>
  }

  export type UserUpdateManyWithWhereWithoutMentorInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutMentorInput>
  }

  export type ActivityUpsertWithWhereUniqueWithoutUserInput = {
    where: ActivityWhereUniqueInput
    update: XOR<ActivityUpdateWithoutUserInput, ActivityUncheckedUpdateWithoutUserInput>
    create: XOR<ActivityCreateWithoutUserInput, ActivityUncheckedCreateWithoutUserInput>
  }

  export type ActivityUpdateWithWhereUniqueWithoutUserInput = {
    where: ActivityWhereUniqueInput
    data: XOR<ActivityUpdateWithoutUserInput, ActivityUncheckedUpdateWithoutUserInput>
  }

  export type ActivityUpdateManyWithWhereWithoutUserInput = {
    where: ActivityScalarWhereInput
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyWithoutUserInput>
  }

  export type AuditLogUpsertWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutUserInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutUserInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    resource?: StringFilter<"AuditLog"> | string
    details?: JsonNullableFilter<"AuditLog">
    userId?: StringFilter<"AuditLog"> | string
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type AttendanceUpsertWithWhereUniqueWithoutUserInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutUserInput, AttendanceUncheckedUpdateWithoutUserInput>
    create: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutUserInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutUserInput, AttendanceUncheckedUpdateWithoutUserInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutUserInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutUserInput>
  }

  export type AttendanceScalarWhereInput = {
    AND?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    OR?: AttendanceScalarWhereInput[]
    NOT?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    id?: StringFilter<"Attendance"> | string
    userId?: StringFilter<"Attendance"> | string
    activityId?: StringFilter<"Attendance"> | string
    timestamp?: DateTimeFilter<"Attendance"> | Date | string
    status?: StringNullableFilter<"Attendance"> | string | null
  }

  export type PresensiUpsertWithWhereUniqueWithoutUserInput = {
    where: PresensiWhereUniqueInput
    update: XOR<PresensiUpdateWithoutUserInput, PresensiUncheckedUpdateWithoutUserInput>
    create: XOR<PresensiCreateWithoutUserInput, PresensiUncheckedCreateWithoutUserInput>
  }

  export type PresensiUpdateWithWhereUniqueWithoutUserInput = {
    where: PresensiWhereUniqueInput
    data: XOR<PresensiUpdateWithoutUserInput, PresensiUncheckedUpdateWithoutUserInput>
  }

  export type PresensiUpdateManyWithWhereWithoutUserInput = {
    where: PresensiScalarWhereInput
    data: XOR<PresensiUpdateManyMutationInput, PresensiUncheckedUpdateManyWithoutUserInput>
  }

  export type PresensiScalarWhereInput = {
    AND?: PresensiScalarWhereInput | PresensiScalarWhereInput[]
    OR?: PresensiScalarWhereInput[]
    NOT?: PresensiScalarWhereInput | PresensiScalarWhereInput[]
    id?: StringFilter<"Presensi"> | string
    userId?: StringFilter<"Presensi"> | string
    date?: DateTimeFilter<"Presensi"> | Date | string
    checkIn?: DateTimeNullableFilter<"Presensi"> | Date | string | null
    checkOut?: DateTimeNullableFilter<"Presensi"> | Date | string | null
    locationIn?: StringNullableFilter<"Presensi"> | string | null
    locationOut?: StringNullableFilter<"Presensi"> | string | null
    photoIn?: StringNullableFilter<"Presensi"> | string | null
    photoOut?: StringNullableFilter<"Presensi"> | string | null
    status?: StringFilter<"Presensi"> | string
    notes?: StringNullableFilter<"Presensi"> | string | null
    createdAt?: DateTimeFilter<"Presensi"> | Date | string
    updatedAt?: DateTimeFilter<"Presensi"> | Date | string
  }

  export type UserCreateWithoutActivitiesInput = {
    id?: string
    email: string
    password: string
    fullName: string
    phoneNumber?: string | null
    employeeId?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    jenjang?: JenjangCreateNestedOneWithoutUsersInput
    upa?: UpaCreateNestedOneWithoutUsersInput
    mentor?: UserCreateNestedOneWithoutMenteesInput
    mentees?: UserCreateNestedManyWithoutMentorInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    attendances?: AttendanceCreateNestedManyWithoutUserInput
    presensi?: PresensiCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutActivitiesInput = {
    id?: string
    email: string
    password: string
    fullName: string
    phoneNumber?: string | null
    employeeId?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    jenjangId?: string | null
    upaId?: string | null
    mentorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mentees?: UserUncheckedCreateNestedManyWithoutMentorInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutUserInput
    presensi?: PresensiUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutActivitiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
  }

  export type UpaCreateWithoutActivitiesInput = {
    id?: string
    code: string
    name: string
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dpc?: DpcCreateNestedOneWithoutUpasInput
    users?: UserCreateNestedManyWithoutUpaInput
  }

  export type UpaUncheckedCreateWithoutActivitiesInput = {
    id?: string
    code: string
    name: string
    location?: string | null
    dpcId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutUpaInput
  }

  export type UpaCreateOrConnectWithoutActivitiesInput = {
    where: UpaWhereUniqueInput
    create: XOR<UpaCreateWithoutActivitiesInput, UpaUncheckedCreateWithoutActivitiesInput>
  }

  export type AttendanceCreateWithoutActivityInput = {
    id?: string
    timestamp?: Date | string
    status?: string | null
    user: UserCreateNestedOneWithoutAttendancesInput
  }

  export type AttendanceUncheckedCreateWithoutActivityInput = {
    id?: string
    userId: string
    timestamp?: Date | string
    status?: string | null
  }

  export type AttendanceCreateOrConnectWithoutActivityInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutActivityInput, AttendanceUncheckedCreateWithoutActivityInput>
  }

  export type AttendanceCreateManyActivityInputEnvelope = {
    data: AttendanceCreateManyActivityInput | AttendanceCreateManyActivityInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutActivitiesInput = {
    update: XOR<UserUpdateWithoutActivitiesInput, UserUncheckedUpdateWithoutActivitiesInput>
    create: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActivitiesInput, UserUncheckedUpdateWithoutActivitiesInput>
  }

  export type UserUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jenjang?: JenjangUpdateOneWithoutUsersNestedInput
    upa?: UpaUpdateOneWithoutUsersNestedInput
    mentor?: UserUpdateOneWithoutMenteesNestedInput
    mentees?: UserUpdateManyWithoutMentorNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    attendances?: AttendanceUpdateManyWithoutUserNestedInput
    presensi?: PresensiUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    jenjangId?: NullableStringFieldUpdateOperationsInput | string | null
    upaId?: NullableStringFieldUpdateOperationsInput | string | null
    mentorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentees?: UserUncheckedUpdateManyWithoutMentorNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutUserNestedInput
    presensi?: PresensiUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UpaUpsertWithoutActivitiesInput = {
    update: XOR<UpaUpdateWithoutActivitiesInput, UpaUncheckedUpdateWithoutActivitiesInput>
    create: XOR<UpaCreateWithoutActivitiesInput, UpaUncheckedCreateWithoutActivitiesInput>
    where?: UpaWhereInput
  }

  export type UpaUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: UpaWhereInput
    data: XOR<UpaUpdateWithoutActivitiesInput, UpaUncheckedUpdateWithoutActivitiesInput>
  }

  export type UpaUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dpc?: DpcUpdateOneWithoutUpasNestedInput
    users?: UserUpdateManyWithoutUpaNestedInput
  }

  export type UpaUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    dpcId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutUpaNestedInput
  }

  export type AttendanceUpsertWithWhereUniqueWithoutActivityInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutActivityInput, AttendanceUncheckedUpdateWithoutActivityInput>
    create: XOR<AttendanceCreateWithoutActivityInput, AttendanceUncheckedCreateWithoutActivityInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutActivityInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutActivityInput, AttendanceUncheckedUpdateWithoutActivityInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutActivityInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutActivityInput>
  }

  export type UserCreateWithoutAttendancesInput = {
    id?: string
    email: string
    password: string
    fullName: string
    phoneNumber?: string | null
    employeeId?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    jenjang?: JenjangCreateNestedOneWithoutUsersInput
    upa?: UpaCreateNestedOneWithoutUsersInput
    mentor?: UserCreateNestedOneWithoutMenteesInput
    mentees?: UserCreateNestedManyWithoutMentorInput
    activities?: ActivityCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    presensi?: PresensiCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAttendancesInput = {
    id?: string
    email: string
    password: string
    fullName: string
    phoneNumber?: string | null
    employeeId?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    jenjangId?: string | null
    upaId?: string | null
    mentorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mentees?: UserUncheckedCreateNestedManyWithoutMentorInput
    activities?: ActivityUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    presensi?: PresensiUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAttendancesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAttendancesInput, UserUncheckedCreateWithoutAttendancesInput>
  }

  export type ActivityCreateWithoutAttendancesInput = {
    id?: string
    title: string
    description?: string | null
    date: Date | string
    location?: string | null
    flag?: number
    latitude?: number | null
    longitude?: number | null
    radius?: number
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    attendanceToken?: string | null
    isActive?: boolean
    user: UserCreateNestedOneWithoutActivitiesInput
    upa: UpaCreateNestedOneWithoutActivitiesInput
  }

  export type ActivityUncheckedCreateWithoutAttendancesInput = {
    id?: string
    title: string
    description?: string | null
    date: Date | string
    location?: string | null
    flag?: number
    latitude?: number | null
    longitude?: number | null
    radius?: number
    userId: string
    upaId: string
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    attendanceToken?: string | null
    isActive?: boolean
  }

  export type ActivityCreateOrConnectWithoutAttendancesInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutAttendancesInput, ActivityUncheckedCreateWithoutAttendancesInput>
  }

  export type UserUpsertWithoutAttendancesInput = {
    update: XOR<UserUpdateWithoutAttendancesInput, UserUncheckedUpdateWithoutAttendancesInput>
    create: XOR<UserCreateWithoutAttendancesInput, UserUncheckedCreateWithoutAttendancesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAttendancesInput, UserUncheckedUpdateWithoutAttendancesInput>
  }

  export type UserUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jenjang?: JenjangUpdateOneWithoutUsersNestedInput
    upa?: UpaUpdateOneWithoutUsersNestedInput
    mentor?: UserUpdateOneWithoutMenteesNestedInput
    mentees?: UserUpdateManyWithoutMentorNestedInput
    activities?: ActivityUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    presensi?: PresensiUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    jenjangId?: NullableStringFieldUpdateOperationsInput | string | null
    upaId?: NullableStringFieldUpdateOperationsInput | string | null
    mentorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentees?: UserUncheckedUpdateManyWithoutMentorNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    presensi?: PresensiUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ActivityUpsertWithoutAttendancesInput = {
    update: XOR<ActivityUpdateWithoutAttendancesInput, ActivityUncheckedUpdateWithoutAttendancesInput>
    create: XOR<ActivityCreateWithoutAttendancesInput, ActivityUncheckedCreateWithoutAttendancesInput>
    where?: ActivityWhereInput
  }

  export type ActivityUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: ActivityWhereInput
    data: XOR<ActivityUpdateWithoutAttendancesInput, ActivityUncheckedUpdateWithoutAttendancesInput>
  }

  export type ActivityUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    flag?: IntFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    radius?: IntFieldUpdateOperationsInput | number
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendanceToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutActivitiesNestedInput
    upa?: UpaUpdateOneRequiredWithoutActivitiesNestedInput
  }

  export type ActivityUncheckedUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    flag?: IntFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    radius?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    upaId?: StringFieldUpdateOperationsInput | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendanceToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateWithoutAuditLogsInput = {
    id?: string
    email: string
    password: string
    fullName: string
    phoneNumber?: string | null
    employeeId?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    jenjang?: JenjangCreateNestedOneWithoutUsersInput
    upa?: UpaCreateNestedOneWithoutUsersInput
    mentor?: UserCreateNestedOneWithoutMenteesInput
    mentees?: UserCreateNestedManyWithoutMentorInput
    activities?: ActivityCreateNestedManyWithoutUserInput
    attendances?: AttendanceCreateNestedManyWithoutUserInput
    presensi?: PresensiCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    email: string
    password: string
    fullName: string
    phoneNumber?: string | null
    employeeId?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    jenjangId?: string | null
    upaId?: string | null
    mentorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mentees?: UserUncheckedCreateNestedManyWithoutMentorInput
    activities?: ActivityUncheckedCreateNestedManyWithoutUserInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutUserInput
    presensi?: PresensiUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
  }

  export type UserUpsertWithoutAuditLogsInput = {
    update: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jenjang?: JenjangUpdateOneWithoutUsersNestedInput
    upa?: UpaUpdateOneWithoutUsersNestedInput
    mentor?: UserUpdateOneWithoutMenteesNestedInput
    mentees?: UserUpdateManyWithoutMentorNestedInput
    activities?: ActivityUpdateManyWithoutUserNestedInput
    attendances?: AttendanceUpdateManyWithoutUserNestedInput
    presensi?: PresensiUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    jenjangId?: NullableStringFieldUpdateOperationsInput | string | null
    upaId?: NullableStringFieldUpdateOperationsInput | string | null
    mentorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentees?: UserUncheckedUpdateManyWithoutMentorNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutUserNestedInput
    presensi?: PresensiUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RoleAccessCreateWithoutMenuInput = {
    id?: string
    role: $Enums.Role
    canAccess?: boolean
  }

  export type RoleAccessUncheckedCreateWithoutMenuInput = {
    id?: string
    role: $Enums.Role
    canAccess?: boolean
  }

  export type RoleAccessCreateOrConnectWithoutMenuInput = {
    where: RoleAccessWhereUniqueInput
    create: XOR<RoleAccessCreateWithoutMenuInput, RoleAccessUncheckedCreateWithoutMenuInput>
  }

  export type RoleAccessCreateManyMenuInputEnvelope = {
    data: RoleAccessCreateManyMenuInput | RoleAccessCreateManyMenuInput[]
    skipDuplicates?: boolean
  }

  export type RoleAccessUpsertWithWhereUniqueWithoutMenuInput = {
    where: RoleAccessWhereUniqueInput
    update: XOR<RoleAccessUpdateWithoutMenuInput, RoleAccessUncheckedUpdateWithoutMenuInput>
    create: XOR<RoleAccessCreateWithoutMenuInput, RoleAccessUncheckedCreateWithoutMenuInput>
  }

  export type RoleAccessUpdateWithWhereUniqueWithoutMenuInput = {
    where: RoleAccessWhereUniqueInput
    data: XOR<RoleAccessUpdateWithoutMenuInput, RoleAccessUncheckedUpdateWithoutMenuInput>
  }

  export type RoleAccessUpdateManyWithWhereWithoutMenuInput = {
    where: RoleAccessScalarWhereInput
    data: XOR<RoleAccessUpdateManyMutationInput, RoleAccessUncheckedUpdateManyWithoutMenuInput>
  }

  export type RoleAccessScalarWhereInput = {
    AND?: RoleAccessScalarWhereInput | RoleAccessScalarWhereInput[]
    OR?: RoleAccessScalarWhereInput[]
    NOT?: RoleAccessScalarWhereInput | RoleAccessScalarWhereInput[]
    id?: StringFilter<"RoleAccess"> | string
    role?: EnumRoleFilter<"RoleAccess"> | $Enums.Role
    menuId?: StringFilter<"RoleAccess"> | string
    canAccess?: BoolFilter<"RoleAccess"> | boolean
  }

  export type MenuCreateWithoutAccessesInput = {
    id?: string
    label: string
    path: string
    group?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuUncheckedCreateWithoutAccessesInput = {
    id?: string
    label: string
    path: string
    group?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuCreateOrConnectWithoutAccessesInput = {
    where: MenuWhereUniqueInput
    create: XOR<MenuCreateWithoutAccessesInput, MenuUncheckedCreateWithoutAccessesInput>
  }

  export type MenuUpsertWithoutAccessesInput = {
    update: XOR<MenuUpdateWithoutAccessesInput, MenuUncheckedUpdateWithoutAccessesInput>
    create: XOR<MenuCreateWithoutAccessesInput, MenuUncheckedCreateWithoutAccessesInput>
    where?: MenuWhereInput
  }

  export type MenuUpdateToOneWithWhereWithoutAccessesInput = {
    where?: MenuWhereInput
    data: XOR<MenuUpdateWithoutAccessesInput, MenuUncheckedUpdateWithoutAccessesInput>
  }

  export type MenuUpdateWithoutAccessesInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    group?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuUncheckedUpdateWithoutAccessesInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    group?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutPresensiInput = {
    id?: string
    email: string
    password: string
    fullName: string
    phoneNumber?: string | null
    employeeId?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    jenjang?: JenjangCreateNestedOneWithoutUsersInput
    upa?: UpaCreateNestedOneWithoutUsersInput
    mentor?: UserCreateNestedOneWithoutMenteesInput
    mentees?: UserCreateNestedManyWithoutMentorInput
    activities?: ActivityCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    attendances?: AttendanceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPresensiInput = {
    id?: string
    email: string
    password: string
    fullName: string
    phoneNumber?: string | null
    employeeId?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    jenjangId?: string | null
    upaId?: string | null
    mentorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mentees?: UserUncheckedCreateNestedManyWithoutMentorInput
    activities?: ActivityUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPresensiInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPresensiInput, UserUncheckedCreateWithoutPresensiInput>
  }

  export type UserUpsertWithoutPresensiInput = {
    update: XOR<UserUpdateWithoutPresensiInput, UserUncheckedUpdateWithoutPresensiInput>
    create: XOR<UserCreateWithoutPresensiInput, UserUncheckedCreateWithoutPresensiInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPresensiInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPresensiInput, UserUncheckedUpdateWithoutPresensiInput>
  }

  export type UserUpdateWithoutPresensiInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jenjang?: JenjangUpdateOneWithoutUsersNestedInput
    upa?: UpaUpdateOneWithoutUsersNestedInput
    mentor?: UserUpdateOneWithoutMenteesNestedInput
    mentees?: UserUpdateManyWithoutMentorNestedInput
    activities?: ActivityUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    attendances?: AttendanceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPresensiInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    jenjangId?: NullableStringFieldUpdateOperationsInput | string | null
    upaId?: NullableStringFieldUpdateOperationsInput | string | null
    mentorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentees?: UserUncheckedUpdateManyWithoutMentorNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyJenjangInput = {
    id?: string
    email: string
    password: string
    fullName: string
    phoneNumber?: string | null
    employeeId?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    upaId?: string | null
    mentorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutJenjangInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upa?: UpaUpdateOneWithoutUsersNestedInput
    mentor?: UserUpdateOneWithoutMenteesNestedInput
    mentees?: UserUpdateManyWithoutMentorNestedInput
    activities?: ActivityUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    attendances?: AttendanceUpdateManyWithoutUserNestedInput
    presensi?: PresensiUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutJenjangInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    upaId?: NullableStringFieldUpdateOperationsInput | string | null
    mentorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentees?: UserUncheckedUpdateManyWithoutMentorNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutUserNestedInput
    presensi?: PresensiUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutJenjangInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    upaId?: NullableStringFieldUpdateOperationsInput | string | null
    mentorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyUpaInput = {
    id?: string
    email: string
    password: string
    fullName: string
    phoneNumber?: string | null
    employeeId?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    jenjangId?: string | null
    mentorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityCreateManyUpaInput = {
    id?: string
    title: string
    description?: string | null
    date: Date | string
    location?: string | null
    flag?: number
    latitude?: number | null
    longitude?: number | null
    radius?: number
    userId: string
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    attendanceToken?: string | null
    isActive?: boolean
  }

  export type UserUpdateWithoutUpaInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jenjang?: JenjangUpdateOneWithoutUsersNestedInput
    mentor?: UserUpdateOneWithoutMenteesNestedInput
    mentees?: UserUpdateManyWithoutMentorNestedInput
    activities?: ActivityUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    attendances?: AttendanceUpdateManyWithoutUserNestedInput
    presensi?: PresensiUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUpaInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    jenjangId?: NullableStringFieldUpdateOperationsInput | string | null
    mentorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentees?: UserUncheckedUpdateManyWithoutMentorNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutUserNestedInput
    presensi?: PresensiUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutUpaInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    jenjangId?: NullableStringFieldUpdateOperationsInput | string | null
    mentorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUpdateWithoutUpaInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    flag?: IntFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    radius?: IntFieldUpdateOperationsInput | number
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendanceToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutActivitiesNestedInput
    attendances?: AttendanceUpdateManyWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateWithoutUpaInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    flag?: IntFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    radius?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendanceToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    attendances?: AttendanceUncheckedUpdateManyWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateManyWithoutUpaInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    flag?: IntFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    radius?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendanceToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UpaCreateManyDpcInput = {
    id?: string
    code: string
    name: string
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UpaUpdateWithoutDpcInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutUpaNestedInput
    activities?: ActivityUpdateManyWithoutUpaNestedInput
  }

  export type UpaUncheckedUpdateWithoutDpcInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutUpaNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutUpaNestedInput
  }

  export type UpaUncheckedUpdateManyWithoutDpcInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyMentorInput = {
    id?: string
    email: string
    password: string
    fullName: string
    phoneNumber?: string | null
    employeeId?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    jenjangId?: string | null
    upaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityCreateManyUserInput = {
    id?: string
    title: string
    description?: string | null
    date: Date | string
    location?: string | null
    flag?: number
    latitude?: number | null
    longitude?: number | null
    radius?: number
    upaId: string
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    attendanceToken?: string | null
    isActive?: boolean
  }

  export type AuditLogCreateManyUserInput = {
    id?: string
    action: string
    resource: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AttendanceCreateManyUserInput = {
    id?: string
    activityId: string
    timestamp?: Date | string
    status?: string | null
  }

  export type PresensiCreateManyUserInput = {
    id?: string
    date: Date | string
    checkIn?: Date | string | null
    checkOut?: Date | string | null
    locationIn?: string | null
    locationOut?: string | null
    photoIn?: string | null
    photoOut?: string | null
    status?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutMentorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jenjang?: JenjangUpdateOneWithoutUsersNestedInput
    upa?: UpaUpdateOneWithoutUsersNestedInput
    mentees?: UserUpdateManyWithoutMentorNestedInput
    activities?: ActivityUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    attendances?: AttendanceUpdateManyWithoutUserNestedInput
    presensi?: PresensiUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMentorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    jenjangId?: NullableStringFieldUpdateOperationsInput | string | null
    upaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentees?: UserUncheckedUpdateManyWithoutMentorNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutUserNestedInput
    presensi?: PresensiUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutMentorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    jenjangId?: NullableStringFieldUpdateOperationsInput | string | null
    upaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    flag?: IntFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    radius?: IntFieldUpdateOperationsInput | number
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendanceToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    upa?: UpaUpdateOneRequiredWithoutActivitiesNestedInput
    attendances?: AttendanceUpdateManyWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    flag?: IntFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    radius?: IntFieldUpdateOperationsInput | number
    upaId?: StringFieldUpdateOperationsInput | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendanceToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    attendances?: AttendanceUncheckedUpdateManyWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    flag?: IntFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    radius?: IntFieldUpdateOperationsInput | number
    upaId?: StringFieldUpdateOperationsInput | string
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendanceToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AuditLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    activity?: ActivityUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    activityId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttendanceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    activityId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PresensiUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    checkIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationIn?: NullableStringFieldUpdateOperationsInput | string | null
    locationOut?: NullableStringFieldUpdateOperationsInput | string | null
    photoIn?: NullableStringFieldUpdateOperationsInput | string | null
    photoOut?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresensiUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    checkIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationIn?: NullableStringFieldUpdateOperationsInput | string | null
    locationOut?: NullableStringFieldUpdateOperationsInput | string | null
    photoIn?: NullableStringFieldUpdateOperationsInput | string | null
    photoOut?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresensiUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    checkIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationIn?: NullableStringFieldUpdateOperationsInput | string | null
    locationOut?: NullableStringFieldUpdateOperationsInput | string | null
    photoIn?: NullableStringFieldUpdateOperationsInput | string | null
    photoOut?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateManyActivityInput = {
    id?: string
    userId: string
    timestamp?: Date | string
    status?: string | null
  }

  export type AttendanceUpdateWithoutActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttendanceUncheckedUpdateManyWithoutActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoleAccessCreateManyMenuInput = {
    id?: string
    role: $Enums.Role
    canAccess?: boolean
  }

  export type RoleAccessUpdateWithoutMenuInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    canAccess?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RoleAccessUncheckedUpdateWithoutMenuInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    canAccess?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RoleAccessUncheckedUpdateManyWithoutMenuInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    canAccess?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use JenjangCountOutputTypeDefaultArgs instead
     */
    export type JenjangCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JenjangCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UpaCountOutputTypeDefaultArgs instead
     */
    export type UpaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UpaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DpcCountOutputTypeDefaultArgs instead
     */
    export type DpcCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DpcCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ActivityCountOutputTypeDefaultArgs instead
     */
    export type ActivityCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ActivityCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MenuCountOutputTypeDefaultArgs instead
     */
    export type MenuCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MenuCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JenjangDefaultArgs instead
     */
    export type JenjangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JenjangDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UpaDefaultArgs instead
     */
    export type UpaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UpaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DpcDefaultArgs instead
     */
    export type DpcArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DpcDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ActivityDefaultArgs instead
     */
    export type ActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ActivityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AttendanceDefaultArgs instead
     */
    export type AttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AttendanceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AuditLogDefaultArgs instead
     */
    export type AuditLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuditLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PertanyaanDefaultArgs instead
     */
    export type PertanyaanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PertanyaanDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TranslationDefaultArgs instead
     */
    export type TranslationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TranslationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MenuDefaultArgs instead
     */
    export type MenuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MenuDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoleAccessDefaultArgs instead
     */
    export type RoleAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleAccessDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ApplicationConfigDefaultArgs instead
     */
    export type ApplicationConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ApplicationConfigDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PresensiDefaultArgs instead
     */
    export type PresensiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PresensiDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}