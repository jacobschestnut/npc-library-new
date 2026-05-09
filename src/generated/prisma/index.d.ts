
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model NonPlayableCharacter
 * 
 */
export type NonPlayableCharacter = $Result.DefaultSelection<Prisma.$NonPlayableCharacterPayload>
/**
 * Model Audio
 * 
 */
export type Audio = $Result.DefaultSelection<Prisma.$AudioPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.nonPlayableCharacter`: Exposes CRUD operations for the **NonPlayableCharacter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NonPlayableCharacters
    * const nonPlayableCharacters = await prisma.nonPlayableCharacter.findMany()
    * ```
    */
  get nonPlayableCharacter(): Prisma.NonPlayableCharacterDelegate<ExtArgs>;

  /**
   * `prisma.audio`: Exposes CRUD operations for the **Audio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Audio
    * const audio = await prisma.audio.findMany()
    * ```
    */
  get audio(): Prisma.AudioDelegate<ExtArgs>;
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
    User: 'User',
    NonPlayableCharacter: 'NonPlayableCharacter',
    Audio: 'Audio'
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
      modelProps: "user" | "nonPlayableCharacter" | "audio"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      NonPlayableCharacter: {
        payload: Prisma.$NonPlayableCharacterPayload<ExtArgs>
        fields: Prisma.NonPlayableCharacterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NonPlayableCharacterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NonPlayableCharacterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NonPlayableCharacterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NonPlayableCharacterPayload>
          }
          findFirst: {
            args: Prisma.NonPlayableCharacterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NonPlayableCharacterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NonPlayableCharacterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NonPlayableCharacterPayload>
          }
          findMany: {
            args: Prisma.NonPlayableCharacterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NonPlayableCharacterPayload>[]
          }
          create: {
            args: Prisma.NonPlayableCharacterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NonPlayableCharacterPayload>
          }
          createMany: {
            args: Prisma.NonPlayableCharacterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NonPlayableCharacterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NonPlayableCharacterPayload>[]
          }
          delete: {
            args: Prisma.NonPlayableCharacterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NonPlayableCharacterPayload>
          }
          update: {
            args: Prisma.NonPlayableCharacterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NonPlayableCharacterPayload>
          }
          deleteMany: {
            args: Prisma.NonPlayableCharacterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NonPlayableCharacterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NonPlayableCharacterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NonPlayableCharacterPayload>
          }
          aggregate: {
            args: Prisma.NonPlayableCharacterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNonPlayableCharacter>
          }
          groupBy: {
            args: Prisma.NonPlayableCharacterGroupByArgs<ExtArgs>
            result: $Utils.Optional<NonPlayableCharacterGroupByOutputType>[]
          }
          count: {
            args: Prisma.NonPlayableCharacterCountArgs<ExtArgs>
            result: $Utils.Optional<NonPlayableCharacterCountAggregateOutputType> | number
          }
        }
      }
      Audio: {
        payload: Prisma.$AudioPayload<ExtArgs>
        fields: Prisma.AudioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AudioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AudioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioPayload>
          }
          findFirst: {
            args: Prisma.AudioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AudioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioPayload>
          }
          findMany: {
            args: Prisma.AudioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioPayload>[]
          }
          create: {
            args: Prisma.AudioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioPayload>
          }
          createMany: {
            args: Prisma.AudioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AudioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioPayload>[]
          }
          delete: {
            args: Prisma.AudioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioPayload>
          }
          update: {
            args: Prisma.AudioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioPayload>
          }
          deleteMany: {
            args: Prisma.AudioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AudioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AudioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioPayload>
          }
          aggregate: {
            args: Prisma.AudioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAudio>
          }
          groupBy: {
            args: Prisma.AudioGroupByArgs<ExtArgs>
            result: $Utils.Optional<AudioGroupByOutputType>[]
          }
          count: {
            args: Prisma.AudioCountArgs<ExtArgs>
            result: $Utils.Optional<AudioCountAggregateOutputType> | number
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
   * Models
   */

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
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
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
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
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
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
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
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
  }


  /**
   * Model NonPlayableCharacter
   */

  export type AggregateNonPlayableCharacter = {
    _count: NonPlayableCharacterCountAggregateOutputType | null
    _avg: NonPlayableCharacterAvgAggregateOutputType | null
    _sum: NonPlayableCharacterSumAggregateOutputType | null
    _min: NonPlayableCharacterMinAggregateOutputType | null
    _max: NonPlayableCharacterMaxAggregateOutputType | null
  }

  export type NonPlayableCharacterAvgAggregateOutputType = {
    id: number | null
  }

  export type NonPlayableCharacterSumAggregateOutputType = {
    id: number | null
  }

  export type NonPlayableCharacterMinAggregateOutputType = {
    id: number | null
    name: string | null
    desc: string | null
    userId: string | null
  }

  export type NonPlayableCharacterMaxAggregateOutputType = {
    id: number | null
    name: string | null
    desc: string | null
    userId: string | null
  }

  export type NonPlayableCharacterCountAggregateOutputType = {
    id: number
    name: number
    desc: number
    userId: number
    _all: number
  }


  export type NonPlayableCharacterAvgAggregateInputType = {
    id?: true
  }

  export type NonPlayableCharacterSumAggregateInputType = {
    id?: true
  }

  export type NonPlayableCharacterMinAggregateInputType = {
    id?: true
    name?: true
    desc?: true
    userId?: true
  }

  export type NonPlayableCharacterMaxAggregateInputType = {
    id?: true
    name?: true
    desc?: true
    userId?: true
  }

  export type NonPlayableCharacterCountAggregateInputType = {
    id?: true
    name?: true
    desc?: true
    userId?: true
    _all?: true
  }

  export type NonPlayableCharacterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NonPlayableCharacter to aggregate.
     */
    where?: NonPlayableCharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NonPlayableCharacters to fetch.
     */
    orderBy?: NonPlayableCharacterOrderByWithRelationInput | NonPlayableCharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NonPlayableCharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NonPlayableCharacters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NonPlayableCharacters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NonPlayableCharacters
    **/
    _count?: true | NonPlayableCharacterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NonPlayableCharacterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NonPlayableCharacterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NonPlayableCharacterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NonPlayableCharacterMaxAggregateInputType
  }

  export type GetNonPlayableCharacterAggregateType<T extends NonPlayableCharacterAggregateArgs> = {
        [P in keyof T & keyof AggregateNonPlayableCharacter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNonPlayableCharacter[P]>
      : GetScalarType<T[P], AggregateNonPlayableCharacter[P]>
  }




  export type NonPlayableCharacterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NonPlayableCharacterWhereInput
    orderBy?: NonPlayableCharacterOrderByWithAggregationInput | NonPlayableCharacterOrderByWithAggregationInput[]
    by: NonPlayableCharacterScalarFieldEnum[] | NonPlayableCharacterScalarFieldEnum
    having?: NonPlayableCharacterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NonPlayableCharacterCountAggregateInputType | true
    _avg?: NonPlayableCharacterAvgAggregateInputType
    _sum?: NonPlayableCharacterSumAggregateInputType
    _min?: NonPlayableCharacterMinAggregateInputType
    _max?: NonPlayableCharacterMaxAggregateInputType
  }

  export type NonPlayableCharacterGroupByOutputType = {
    id: number
    name: string
    desc: string | null
    userId: string
    _count: NonPlayableCharacterCountAggregateOutputType | null
    _avg: NonPlayableCharacterAvgAggregateOutputType | null
    _sum: NonPlayableCharacterSumAggregateOutputType | null
    _min: NonPlayableCharacterMinAggregateOutputType | null
    _max: NonPlayableCharacterMaxAggregateOutputType | null
  }

  type GetNonPlayableCharacterGroupByPayload<T extends NonPlayableCharacterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NonPlayableCharacterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NonPlayableCharacterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NonPlayableCharacterGroupByOutputType[P]>
            : GetScalarType<T[P], NonPlayableCharacterGroupByOutputType[P]>
        }
      >
    >


  export type NonPlayableCharacterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    desc?: boolean
    userId?: boolean
    audio?: boolean | NonPlayableCharacter$audioArgs<ExtArgs>
  }, ExtArgs["result"]["nonPlayableCharacter"]>

  export type NonPlayableCharacterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    desc?: boolean
    userId?: boolean
  }, ExtArgs["result"]["nonPlayableCharacter"]>

  export type NonPlayableCharacterSelectScalar = {
    id?: boolean
    name?: boolean
    desc?: boolean
    userId?: boolean
  }

  export type NonPlayableCharacterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audio?: boolean | NonPlayableCharacter$audioArgs<ExtArgs>
  }
  export type NonPlayableCharacterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $NonPlayableCharacterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NonPlayableCharacter"
    objects: {
      audio: Prisma.$AudioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      desc: string | null
      userId: string
    }, ExtArgs["result"]["nonPlayableCharacter"]>
    composites: {}
  }

  type NonPlayableCharacterGetPayload<S extends boolean | null | undefined | NonPlayableCharacterDefaultArgs> = $Result.GetResult<Prisma.$NonPlayableCharacterPayload, S>

  type NonPlayableCharacterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NonPlayableCharacterFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NonPlayableCharacterCountAggregateInputType | true
    }

  export interface NonPlayableCharacterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NonPlayableCharacter'], meta: { name: 'NonPlayableCharacter' } }
    /**
     * Find zero or one NonPlayableCharacter that matches the filter.
     * @param {NonPlayableCharacterFindUniqueArgs} args - Arguments to find a NonPlayableCharacter
     * @example
     * // Get one NonPlayableCharacter
     * const nonPlayableCharacter = await prisma.nonPlayableCharacter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NonPlayableCharacterFindUniqueArgs>(args: SelectSubset<T, NonPlayableCharacterFindUniqueArgs<ExtArgs>>): Prisma__NonPlayableCharacterClient<$Result.GetResult<Prisma.$NonPlayableCharacterPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one NonPlayableCharacter that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NonPlayableCharacterFindUniqueOrThrowArgs} args - Arguments to find a NonPlayableCharacter
     * @example
     * // Get one NonPlayableCharacter
     * const nonPlayableCharacter = await prisma.nonPlayableCharacter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NonPlayableCharacterFindUniqueOrThrowArgs>(args: SelectSubset<T, NonPlayableCharacterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NonPlayableCharacterClient<$Result.GetResult<Prisma.$NonPlayableCharacterPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first NonPlayableCharacter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NonPlayableCharacterFindFirstArgs} args - Arguments to find a NonPlayableCharacter
     * @example
     * // Get one NonPlayableCharacter
     * const nonPlayableCharacter = await prisma.nonPlayableCharacter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NonPlayableCharacterFindFirstArgs>(args?: SelectSubset<T, NonPlayableCharacterFindFirstArgs<ExtArgs>>): Prisma__NonPlayableCharacterClient<$Result.GetResult<Prisma.$NonPlayableCharacterPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first NonPlayableCharacter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NonPlayableCharacterFindFirstOrThrowArgs} args - Arguments to find a NonPlayableCharacter
     * @example
     * // Get one NonPlayableCharacter
     * const nonPlayableCharacter = await prisma.nonPlayableCharacter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NonPlayableCharacterFindFirstOrThrowArgs>(args?: SelectSubset<T, NonPlayableCharacterFindFirstOrThrowArgs<ExtArgs>>): Prisma__NonPlayableCharacterClient<$Result.GetResult<Prisma.$NonPlayableCharacterPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more NonPlayableCharacters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NonPlayableCharacterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NonPlayableCharacters
     * const nonPlayableCharacters = await prisma.nonPlayableCharacter.findMany()
     * 
     * // Get first 10 NonPlayableCharacters
     * const nonPlayableCharacters = await prisma.nonPlayableCharacter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nonPlayableCharacterWithIdOnly = await prisma.nonPlayableCharacter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NonPlayableCharacterFindManyArgs>(args?: SelectSubset<T, NonPlayableCharacterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NonPlayableCharacterPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a NonPlayableCharacter.
     * @param {NonPlayableCharacterCreateArgs} args - Arguments to create a NonPlayableCharacter.
     * @example
     * // Create one NonPlayableCharacter
     * const NonPlayableCharacter = await prisma.nonPlayableCharacter.create({
     *   data: {
     *     // ... data to create a NonPlayableCharacter
     *   }
     * })
     * 
     */
    create<T extends NonPlayableCharacterCreateArgs>(args: SelectSubset<T, NonPlayableCharacterCreateArgs<ExtArgs>>): Prisma__NonPlayableCharacterClient<$Result.GetResult<Prisma.$NonPlayableCharacterPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many NonPlayableCharacters.
     * @param {NonPlayableCharacterCreateManyArgs} args - Arguments to create many NonPlayableCharacters.
     * @example
     * // Create many NonPlayableCharacters
     * const nonPlayableCharacter = await prisma.nonPlayableCharacter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NonPlayableCharacterCreateManyArgs>(args?: SelectSubset<T, NonPlayableCharacterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NonPlayableCharacters and returns the data saved in the database.
     * @param {NonPlayableCharacterCreateManyAndReturnArgs} args - Arguments to create many NonPlayableCharacters.
     * @example
     * // Create many NonPlayableCharacters
     * const nonPlayableCharacter = await prisma.nonPlayableCharacter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NonPlayableCharacters and only return the `id`
     * const nonPlayableCharacterWithIdOnly = await prisma.nonPlayableCharacter.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NonPlayableCharacterCreateManyAndReturnArgs>(args?: SelectSubset<T, NonPlayableCharacterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NonPlayableCharacterPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a NonPlayableCharacter.
     * @param {NonPlayableCharacterDeleteArgs} args - Arguments to delete one NonPlayableCharacter.
     * @example
     * // Delete one NonPlayableCharacter
     * const NonPlayableCharacter = await prisma.nonPlayableCharacter.delete({
     *   where: {
     *     // ... filter to delete one NonPlayableCharacter
     *   }
     * })
     * 
     */
    delete<T extends NonPlayableCharacterDeleteArgs>(args: SelectSubset<T, NonPlayableCharacterDeleteArgs<ExtArgs>>): Prisma__NonPlayableCharacterClient<$Result.GetResult<Prisma.$NonPlayableCharacterPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one NonPlayableCharacter.
     * @param {NonPlayableCharacterUpdateArgs} args - Arguments to update one NonPlayableCharacter.
     * @example
     * // Update one NonPlayableCharacter
     * const nonPlayableCharacter = await prisma.nonPlayableCharacter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NonPlayableCharacterUpdateArgs>(args: SelectSubset<T, NonPlayableCharacterUpdateArgs<ExtArgs>>): Prisma__NonPlayableCharacterClient<$Result.GetResult<Prisma.$NonPlayableCharacterPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more NonPlayableCharacters.
     * @param {NonPlayableCharacterDeleteManyArgs} args - Arguments to filter NonPlayableCharacters to delete.
     * @example
     * // Delete a few NonPlayableCharacters
     * const { count } = await prisma.nonPlayableCharacter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NonPlayableCharacterDeleteManyArgs>(args?: SelectSubset<T, NonPlayableCharacterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NonPlayableCharacters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NonPlayableCharacterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NonPlayableCharacters
     * const nonPlayableCharacter = await prisma.nonPlayableCharacter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NonPlayableCharacterUpdateManyArgs>(args: SelectSubset<T, NonPlayableCharacterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NonPlayableCharacter.
     * @param {NonPlayableCharacterUpsertArgs} args - Arguments to update or create a NonPlayableCharacter.
     * @example
     * // Update or create a NonPlayableCharacter
     * const nonPlayableCharacter = await prisma.nonPlayableCharacter.upsert({
     *   create: {
     *     // ... data to create a NonPlayableCharacter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NonPlayableCharacter we want to update
     *   }
     * })
     */
    upsert<T extends NonPlayableCharacterUpsertArgs>(args: SelectSubset<T, NonPlayableCharacterUpsertArgs<ExtArgs>>): Prisma__NonPlayableCharacterClient<$Result.GetResult<Prisma.$NonPlayableCharacterPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of NonPlayableCharacters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NonPlayableCharacterCountArgs} args - Arguments to filter NonPlayableCharacters to count.
     * @example
     * // Count the number of NonPlayableCharacters
     * const count = await prisma.nonPlayableCharacter.count({
     *   where: {
     *     // ... the filter for the NonPlayableCharacters we want to count
     *   }
     * })
    **/
    count<T extends NonPlayableCharacterCountArgs>(
      args?: Subset<T, NonPlayableCharacterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NonPlayableCharacterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NonPlayableCharacter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NonPlayableCharacterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NonPlayableCharacterAggregateArgs>(args: Subset<T, NonPlayableCharacterAggregateArgs>): Prisma.PrismaPromise<GetNonPlayableCharacterAggregateType<T>>

    /**
     * Group by NonPlayableCharacter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NonPlayableCharacterGroupByArgs} args - Group by arguments.
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
      T extends NonPlayableCharacterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NonPlayableCharacterGroupByArgs['orderBy'] }
        : { orderBy?: NonPlayableCharacterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NonPlayableCharacterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNonPlayableCharacterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NonPlayableCharacter model
   */
  readonly fields: NonPlayableCharacterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NonPlayableCharacter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NonPlayableCharacterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    audio<T extends NonPlayableCharacter$audioArgs<ExtArgs> = {}>(args?: Subset<T, NonPlayableCharacter$audioArgs<ExtArgs>>): Prisma__AudioClient<$Result.GetResult<Prisma.$AudioPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the NonPlayableCharacter model
   */ 
  interface NonPlayableCharacterFieldRefs {
    readonly id: FieldRef<"NonPlayableCharacter", 'Int'>
    readonly name: FieldRef<"NonPlayableCharacter", 'String'>
    readonly desc: FieldRef<"NonPlayableCharacter", 'String'>
    readonly userId: FieldRef<"NonPlayableCharacter", 'String'>
  }
    

  // Custom InputTypes
  /**
   * NonPlayableCharacter findUnique
   */
  export type NonPlayableCharacterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NonPlayableCharacter
     */
    select?: NonPlayableCharacterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NonPlayableCharacterInclude<ExtArgs> | null
    /**
     * Filter, which NonPlayableCharacter to fetch.
     */
    where: NonPlayableCharacterWhereUniqueInput
  }

  /**
   * NonPlayableCharacter findUniqueOrThrow
   */
  export type NonPlayableCharacterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NonPlayableCharacter
     */
    select?: NonPlayableCharacterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NonPlayableCharacterInclude<ExtArgs> | null
    /**
     * Filter, which NonPlayableCharacter to fetch.
     */
    where: NonPlayableCharacterWhereUniqueInput
  }

  /**
   * NonPlayableCharacter findFirst
   */
  export type NonPlayableCharacterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NonPlayableCharacter
     */
    select?: NonPlayableCharacterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NonPlayableCharacterInclude<ExtArgs> | null
    /**
     * Filter, which NonPlayableCharacter to fetch.
     */
    where?: NonPlayableCharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NonPlayableCharacters to fetch.
     */
    orderBy?: NonPlayableCharacterOrderByWithRelationInput | NonPlayableCharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NonPlayableCharacters.
     */
    cursor?: NonPlayableCharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NonPlayableCharacters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NonPlayableCharacters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NonPlayableCharacters.
     */
    distinct?: NonPlayableCharacterScalarFieldEnum | NonPlayableCharacterScalarFieldEnum[]
  }

  /**
   * NonPlayableCharacter findFirstOrThrow
   */
  export type NonPlayableCharacterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NonPlayableCharacter
     */
    select?: NonPlayableCharacterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NonPlayableCharacterInclude<ExtArgs> | null
    /**
     * Filter, which NonPlayableCharacter to fetch.
     */
    where?: NonPlayableCharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NonPlayableCharacters to fetch.
     */
    orderBy?: NonPlayableCharacterOrderByWithRelationInput | NonPlayableCharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NonPlayableCharacters.
     */
    cursor?: NonPlayableCharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NonPlayableCharacters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NonPlayableCharacters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NonPlayableCharacters.
     */
    distinct?: NonPlayableCharacterScalarFieldEnum | NonPlayableCharacterScalarFieldEnum[]
  }

  /**
   * NonPlayableCharacter findMany
   */
  export type NonPlayableCharacterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NonPlayableCharacter
     */
    select?: NonPlayableCharacterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NonPlayableCharacterInclude<ExtArgs> | null
    /**
     * Filter, which NonPlayableCharacters to fetch.
     */
    where?: NonPlayableCharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NonPlayableCharacters to fetch.
     */
    orderBy?: NonPlayableCharacterOrderByWithRelationInput | NonPlayableCharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NonPlayableCharacters.
     */
    cursor?: NonPlayableCharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NonPlayableCharacters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NonPlayableCharacters.
     */
    skip?: number
    distinct?: NonPlayableCharacterScalarFieldEnum | NonPlayableCharacterScalarFieldEnum[]
  }

  /**
   * NonPlayableCharacter create
   */
  export type NonPlayableCharacterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NonPlayableCharacter
     */
    select?: NonPlayableCharacterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NonPlayableCharacterInclude<ExtArgs> | null
    /**
     * The data needed to create a NonPlayableCharacter.
     */
    data: XOR<NonPlayableCharacterCreateInput, NonPlayableCharacterUncheckedCreateInput>
  }

  /**
   * NonPlayableCharacter createMany
   */
  export type NonPlayableCharacterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NonPlayableCharacters.
     */
    data: NonPlayableCharacterCreateManyInput | NonPlayableCharacterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NonPlayableCharacter createManyAndReturn
   */
  export type NonPlayableCharacterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NonPlayableCharacter
     */
    select?: NonPlayableCharacterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many NonPlayableCharacters.
     */
    data: NonPlayableCharacterCreateManyInput | NonPlayableCharacterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NonPlayableCharacter update
   */
  export type NonPlayableCharacterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NonPlayableCharacter
     */
    select?: NonPlayableCharacterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NonPlayableCharacterInclude<ExtArgs> | null
    /**
     * The data needed to update a NonPlayableCharacter.
     */
    data: XOR<NonPlayableCharacterUpdateInput, NonPlayableCharacterUncheckedUpdateInput>
    /**
     * Choose, which NonPlayableCharacter to update.
     */
    where: NonPlayableCharacterWhereUniqueInput
  }

  /**
   * NonPlayableCharacter updateMany
   */
  export type NonPlayableCharacterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NonPlayableCharacters.
     */
    data: XOR<NonPlayableCharacterUpdateManyMutationInput, NonPlayableCharacterUncheckedUpdateManyInput>
    /**
     * Filter which NonPlayableCharacters to update
     */
    where?: NonPlayableCharacterWhereInput
  }

  /**
   * NonPlayableCharacter upsert
   */
  export type NonPlayableCharacterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NonPlayableCharacter
     */
    select?: NonPlayableCharacterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NonPlayableCharacterInclude<ExtArgs> | null
    /**
     * The filter to search for the NonPlayableCharacter to update in case it exists.
     */
    where: NonPlayableCharacterWhereUniqueInput
    /**
     * In case the NonPlayableCharacter found by the `where` argument doesn't exist, create a new NonPlayableCharacter with this data.
     */
    create: XOR<NonPlayableCharacterCreateInput, NonPlayableCharacterUncheckedCreateInput>
    /**
     * In case the NonPlayableCharacter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NonPlayableCharacterUpdateInput, NonPlayableCharacterUncheckedUpdateInput>
  }

  /**
   * NonPlayableCharacter delete
   */
  export type NonPlayableCharacterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NonPlayableCharacter
     */
    select?: NonPlayableCharacterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NonPlayableCharacterInclude<ExtArgs> | null
    /**
     * Filter which NonPlayableCharacter to delete.
     */
    where: NonPlayableCharacterWhereUniqueInput
  }

  /**
   * NonPlayableCharacter deleteMany
   */
  export type NonPlayableCharacterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NonPlayableCharacters to delete
     */
    where?: NonPlayableCharacterWhereInput
  }

  /**
   * NonPlayableCharacter.audio
   */
  export type NonPlayableCharacter$audioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audio
     */
    select?: AudioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioInclude<ExtArgs> | null
    where?: AudioWhereInput
  }

  /**
   * NonPlayableCharacter without action
   */
  export type NonPlayableCharacterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NonPlayableCharacter
     */
    select?: NonPlayableCharacterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NonPlayableCharacterInclude<ExtArgs> | null
  }


  /**
   * Model Audio
   */

  export type AggregateAudio = {
    _count: AudioCountAggregateOutputType | null
    _avg: AudioAvgAggregateOutputType | null
    _sum: AudioSumAggregateOutputType | null
    _min: AudioMinAggregateOutputType | null
    _max: AudioMaxAggregateOutputType | null
  }

  export type AudioAvgAggregateOutputType = {
    npcId: number | null
  }

  export type AudioSumAggregateOutputType = {
    npcId: number | null
  }

  export type AudioMinAggregateOutputType = {
    id: string | null
    key: string | null
    status: string | null
    npcId: number | null
  }

  export type AudioMaxAggregateOutputType = {
    id: string | null
    key: string | null
    status: string | null
    npcId: number | null
  }

  export type AudioCountAggregateOutputType = {
    id: number
    key: number
    status: number
    npcId: number
    _all: number
  }


  export type AudioAvgAggregateInputType = {
    npcId?: true
  }

  export type AudioSumAggregateInputType = {
    npcId?: true
  }

  export type AudioMinAggregateInputType = {
    id?: true
    key?: true
    status?: true
    npcId?: true
  }

  export type AudioMaxAggregateInputType = {
    id?: true
    key?: true
    status?: true
    npcId?: true
  }

  export type AudioCountAggregateInputType = {
    id?: true
    key?: true
    status?: true
    npcId?: true
    _all?: true
  }

  export type AudioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Audio to aggregate.
     */
    where?: AudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audio to fetch.
     */
    orderBy?: AudioOrderByWithRelationInput | AudioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audio from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audio.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Audio
    **/
    _count?: true | AudioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AudioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AudioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AudioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AudioMaxAggregateInputType
  }

  export type GetAudioAggregateType<T extends AudioAggregateArgs> = {
        [P in keyof T & keyof AggregateAudio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudio[P]>
      : GetScalarType<T[P], AggregateAudio[P]>
  }




  export type AudioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AudioWhereInput
    orderBy?: AudioOrderByWithAggregationInput | AudioOrderByWithAggregationInput[]
    by: AudioScalarFieldEnum[] | AudioScalarFieldEnum
    having?: AudioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AudioCountAggregateInputType | true
    _avg?: AudioAvgAggregateInputType
    _sum?: AudioSumAggregateInputType
    _min?: AudioMinAggregateInputType
    _max?: AudioMaxAggregateInputType
  }

  export type AudioGroupByOutputType = {
    id: string
    key: string
    status: string
    npcId: number
    _count: AudioCountAggregateOutputType | null
    _avg: AudioAvgAggregateOutputType | null
    _sum: AudioSumAggregateOutputType | null
    _min: AudioMinAggregateOutputType | null
    _max: AudioMaxAggregateOutputType | null
  }

  type GetAudioGroupByPayload<T extends AudioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AudioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AudioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AudioGroupByOutputType[P]>
            : GetScalarType<T[P], AudioGroupByOutputType[P]>
        }
      >
    >


  export type AudioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    status?: boolean
    npcId?: boolean
    npc?: boolean | NonPlayableCharacterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audio"]>

  export type AudioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    status?: boolean
    npcId?: boolean
    npc?: boolean | NonPlayableCharacterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audio"]>

  export type AudioSelectScalar = {
    id?: boolean
    key?: boolean
    status?: boolean
    npcId?: boolean
  }

  export type AudioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    npc?: boolean | NonPlayableCharacterDefaultArgs<ExtArgs>
  }
  export type AudioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    npc?: boolean | NonPlayableCharacterDefaultArgs<ExtArgs>
  }

  export type $AudioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Audio"
    objects: {
      npc: Prisma.$NonPlayableCharacterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      status: string
      npcId: number
    }, ExtArgs["result"]["audio"]>
    composites: {}
  }

  type AudioGetPayload<S extends boolean | null | undefined | AudioDefaultArgs> = $Result.GetResult<Prisma.$AudioPayload, S>

  type AudioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AudioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AudioCountAggregateInputType | true
    }

  export interface AudioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Audio'], meta: { name: 'Audio' } }
    /**
     * Find zero or one Audio that matches the filter.
     * @param {AudioFindUniqueArgs} args - Arguments to find a Audio
     * @example
     * // Get one Audio
     * const audio = await prisma.audio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AudioFindUniqueArgs>(args: SelectSubset<T, AudioFindUniqueArgs<ExtArgs>>): Prisma__AudioClient<$Result.GetResult<Prisma.$AudioPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Audio that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AudioFindUniqueOrThrowArgs} args - Arguments to find a Audio
     * @example
     * // Get one Audio
     * const audio = await prisma.audio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AudioFindUniqueOrThrowArgs>(args: SelectSubset<T, AudioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AudioClient<$Result.GetResult<Prisma.$AudioPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Audio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioFindFirstArgs} args - Arguments to find a Audio
     * @example
     * // Get one Audio
     * const audio = await prisma.audio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AudioFindFirstArgs>(args?: SelectSubset<T, AudioFindFirstArgs<ExtArgs>>): Prisma__AudioClient<$Result.GetResult<Prisma.$AudioPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Audio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioFindFirstOrThrowArgs} args - Arguments to find a Audio
     * @example
     * // Get one Audio
     * const audio = await prisma.audio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AudioFindFirstOrThrowArgs>(args?: SelectSubset<T, AudioFindFirstOrThrowArgs<ExtArgs>>): Prisma__AudioClient<$Result.GetResult<Prisma.$AudioPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Audio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Audio
     * const audio = await prisma.audio.findMany()
     * 
     * // Get first 10 Audio
     * const audio = await prisma.audio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const audioWithIdOnly = await prisma.audio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AudioFindManyArgs>(args?: SelectSubset<T, AudioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudioPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Audio.
     * @param {AudioCreateArgs} args - Arguments to create a Audio.
     * @example
     * // Create one Audio
     * const Audio = await prisma.audio.create({
     *   data: {
     *     // ... data to create a Audio
     *   }
     * })
     * 
     */
    create<T extends AudioCreateArgs>(args: SelectSubset<T, AudioCreateArgs<ExtArgs>>): Prisma__AudioClient<$Result.GetResult<Prisma.$AudioPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Audio.
     * @param {AudioCreateManyArgs} args - Arguments to create many Audio.
     * @example
     * // Create many Audio
     * const audio = await prisma.audio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AudioCreateManyArgs>(args?: SelectSubset<T, AudioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Audio and returns the data saved in the database.
     * @param {AudioCreateManyAndReturnArgs} args - Arguments to create many Audio.
     * @example
     * // Create many Audio
     * const audio = await prisma.audio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Audio and only return the `id`
     * const audioWithIdOnly = await prisma.audio.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AudioCreateManyAndReturnArgs>(args?: SelectSubset<T, AudioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudioPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Audio.
     * @param {AudioDeleteArgs} args - Arguments to delete one Audio.
     * @example
     * // Delete one Audio
     * const Audio = await prisma.audio.delete({
     *   where: {
     *     // ... filter to delete one Audio
     *   }
     * })
     * 
     */
    delete<T extends AudioDeleteArgs>(args: SelectSubset<T, AudioDeleteArgs<ExtArgs>>): Prisma__AudioClient<$Result.GetResult<Prisma.$AudioPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Audio.
     * @param {AudioUpdateArgs} args - Arguments to update one Audio.
     * @example
     * // Update one Audio
     * const audio = await prisma.audio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AudioUpdateArgs>(args: SelectSubset<T, AudioUpdateArgs<ExtArgs>>): Prisma__AudioClient<$Result.GetResult<Prisma.$AudioPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Audio.
     * @param {AudioDeleteManyArgs} args - Arguments to filter Audio to delete.
     * @example
     * // Delete a few Audio
     * const { count } = await prisma.audio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AudioDeleteManyArgs>(args?: SelectSubset<T, AudioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Audio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Audio
     * const audio = await prisma.audio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AudioUpdateManyArgs>(args: SelectSubset<T, AudioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Audio.
     * @param {AudioUpsertArgs} args - Arguments to update or create a Audio.
     * @example
     * // Update or create a Audio
     * const audio = await prisma.audio.upsert({
     *   create: {
     *     // ... data to create a Audio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Audio we want to update
     *   }
     * })
     */
    upsert<T extends AudioUpsertArgs>(args: SelectSubset<T, AudioUpsertArgs<ExtArgs>>): Prisma__AudioClient<$Result.GetResult<Prisma.$AudioPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Audio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioCountArgs} args - Arguments to filter Audio to count.
     * @example
     * // Count the number of Audio
     * const count = await prisma.audio.count({
     *   where: {
     *     // ... the filter for the Audio we want to count
     *   }
     * })
    **/
    count<T extends AudioCountArgs>(
      args?: Subset<T, AudioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AudioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Audio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AudioAggregateArgs>(args: Subset<T, AudioAggregateArgs>): Prisma.PrismaPromise<GetAudioAggregateType<T>>

    /**
     * Group by Audio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioGroupByArgs} args - Group by arguments.
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
      T extends AudioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AudioGroupByArgs['orderBy'] }
        : { orderBy?: AudioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AudioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAudioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Audio model
   */
  readonly fields: AudioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Audio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AudioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    npc<T extends NonPlayableCharacterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NonPlayableCharacterDefaultArgs<ExtArgs>>): Prisma__NonPlayableCharacterClient<$Result.GetResult<Prisma.$NonPlayableCharacterPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Audio model
   */ 
  interface AudioFieldRefs {
    readonly id: FieldRef<"Audio", 'String'>
    readonly key: FieldRef<"Audio", 'String'>
    readonly status: FieldRef<"Audio", 'String'>
    readonly npcId: FieldRef<"Audio", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Audio findUnique
   */
  export type AudioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audio
     */
    select?: AudioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioInclude<ExtArgs> | null
    /**
     * Filter, which Audio to fetch.
     */
    where: AudioWhereUniqueInput
  }

  /**
   * Audio findUniqueOrThrow
   */
  export type AudioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audio
     */
    select?: AudioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioInclude<ExtArgs> | null
    /**
     * Filter, which Audio to fetch.
     */
    where: AudioWhereUniqueInput
  }

  /**
   * Audio findFirst
   */
  export type AudioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audio
     */
    select?: AudioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioInclude<ExtArgs> | null
    /**
     * Filter, which Audio to fetch.
     */
    where?: AudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audio to fetch.
     */
    orderBy?: AudioOrderByWithRelationInput | AudioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Audio.
     */
    cursor?: AudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audio from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audio.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Audio.
     */
    distinct?: AudioScalarFieldEnum | AudioScalarFieldEnum[]
  }

  /**
   * Audio findFirstOrThrow
   */
  export type AudioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audio
     */
    select?: AudioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioInclude<ExtArgs> | null
    /**
     * Filter, which Audio to fetch.
     */
    where?: AudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audio to fetch.
     */
    orderBy?: AudioOrderByWithRelationInput | AudioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Audio.
     */
    cursor?: AudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audio from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audio.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Audio.
     */
    distinct?: AudioScalarFieldEnum | AudioScalarFieldEnum[]
  }

  /**
   * Audio findMany
   */
  export type AudioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audio
     */
    select?: AudioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioInclude<ExtArgs> | null
    /**
     * Filter, which Audio to fetch.
     */
    where?: AudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audio to fetch.
     */
    orderBy?: AudioOrderByWithRelationInput | AudioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Audio.
     */
    cursor?: AudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audio from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audio.
     */
    skip?: number
    distinct?: AudioScalarFieldEnum | AudioScalarFieldEnum[]
  }

  /**
   * Audio create
   */
  export type AudioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audio
     */
    select?: AudioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioInclude<ExtArgs> | null
    /**
     * The data needed to create a Audio.
     */
    data: XOR<AudioCreateInput, AudioUncheckedCreateInput>
  }

  /**
   * Audio createMany
   */
  export type AudioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Audio.
     */
    data: AudioCreateManyInput | AudioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Audio createManyAndReturn
   */
  export type AudioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audio
     */
    select?: AudioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Audio.
     */
    data: AudioCreateManyInput | AudioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Audio update
   */
  export type AudioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audio
     */
    select?: AudioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioInclude<ExtArgs> | null
    /**
     * The data needed to update a Audio.
     */
    data: XOR<AudioUpdateInput, AudioUncheckedUpdateInput>
    /**
     * Choose, which Audio to update.
     */
    where: AudioWhereUniqueInput
  }

  /**
   * Audio updateMany
   */
  export type AudioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Audio.
     */
    data: XOR<AudioUpdateManyMutationInput, AudioUncheckedUpdateManyInput>
    /**
     * Filter which Audio to update
     */
    where?: AudioWhereInput
  }

  /**
   * Audio upsert
   */
  export type AudioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audio
     */
    select?: AudioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioInclude<ExtArgs> | null
    /**
     * The filter to search for the Audio to update in case it exists.
     */
    where: AudioWhereUniqueInput
    /**
     * In case the Audio found by the `where` argument doesn't exist, create a new Audio with this data.
     */
    create: XOR<AudioCreateInput, AudioUncheckedCreateInput>
    /**
     * In case the Audio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AudioUpdateInput, AudioUncheckedUpdateInput>
  }

  /**
   * Audio delete
   */
  export type AudioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audio
     */
    select?: AudioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioInclude<ExtArgs> | null
    /**
     * Filter which Audio to delete.
     */
    where: AudioWhereUniqueInput
  }

  /**
   * Audio deleteMany
   */
  export type AudioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Audio to delete
     */
    where?: AudioWhereInput
  }

  /**
   * Audio without action
   */
  export type AudioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audio
     */
    select?: AudioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const NonPlayableCharacterScalarFieldEnum: {
    id: 'id',
    name: 'name',
    desc: 'desc',
    userId: 'userId'
  };

  export type NonPlayableCharacterScalarFieldEnum = (typeof NonPlayableCharacterScalarFieldEnum)[keyof typeof NonPlayableCharacterScalarFieldEnum]


  export const AudioScalarFieldEnum: {
    id: 'id',
    key: 'key',
    status: 'status',
    npcId: 'npcId'
  };

  export type AudioScalarFieldEnum = (typeof AudioScalarFieldEnum)[keyof typeof AudioScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
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
  }

  export type NonPlayableCharacterWhereInput = {
    AND?: NonPlayableCharacterWhereInput | NonPlayableCharacterWhereInput[]
    OR?: NonPlayableCharacterWhereInput[]
    NOT?: NonPlayableCharacterWhereInput | NonPlayableCharacterWhereInput[]
    id?: IntFilter<"NonPlayableCharacter"> | number
    name?: StringFilter<"NonPlayableCharacter"> | string
    desc?: StringNullableFilter<"NonPlayableCharacter"> | string | null
    userId?: StringFilter<"NonPlayableCharacter"> | string
    audio?: XOR<AudioNullableRelationFilter, AudioWhereInput> | null
  }

  export type NonPlayableCharacterOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrderInput | SortOrder
    userId?: SortOrder
    audio?: AudioOrderByWithRelationInput
  }

  export type NonPlayableCharacterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NonPlayableCharacterWhereInput | NonPlayableCharacterWhereInput[]
    OR?: NonPlayableCharacterWhereInput[]
    NOT?: NonPlayableCharacterWhereInput | NonPlayableCharacterWhereInput[]
    name?: StringFilter<"NonPlayableCharacter"> | string
    desc?: StringNullableFilter<"NonPlayableCharacter"> | string | null
    userId?: StringFilter<"NonPlayableCharacter"> | string
    audio?: XOR<AudioNullableRelationFilter, AudioWhereInput> | null
  }, "id">

  export type NonPlayableCharacterOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: NonPlayableCharacterCountOrderByAggregateInput
    _avg?: NonPlayableCharacterAvgOrderByAggregateInput
    _max?: NonPlayableCharacterMaxOrderByAggregateInput
    _min?: NonPlayableCharacterMinOrderByAggregateInput
    _sum?: NonPlayableCharacterSumOrderByAggregateInput
  }

  export type NonPlayableCharacterScalarWhereWithAggregatesInput = {
    AND?: NonPlayableCharacterScalarWhereWithAggregatesInput | NonPlayableCharacterScalarWhereWithAggregatesInput[]
    OR?: NonPlayableCharacterScalarWhereWithAggregatesInput[]
    NOT?: NonPlayableCharacterScalarWhereWithAggregatesInput | NonPlayableCharacterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NonPlayableCharacter"> | number
    name?: StringWithAggregatesFilter<"NonPlayableCharacter"> | string
    desc?: StringNullableWithAggregatesFilter<"NonPlayableCharacter"> | string | null
    userId?: StringWithAggregatesFilter<"NonPlayableCharacter"> | string
  }

  export type AudioWhereInput = {
    AND?: AudioWhereInput | AudioWhereInput[]
    OR?: AudioWhereInput[]
    NOT?: AudioWhereInput | AudioWhereInput[]
    id?: StringFilter<"Audio"> | string
    key?: StringFilter<"Audio"> | string
    status?: StringFilter<"Audio"> | string
    npcId?: IntFilter<"Audio"> | number
    npc?: XOR<NonPlayableCharacterRelationFilter, NonPlayableCharacterWhereInput>
  }

  export type AudioOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    status?: SortOrder
    npcId?: SortOrder
    npc?: NonPlayableCharacterOrderByWithRelationInput
  }

  export type AudioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    npcId?: number
    AND?: AudioWhereInput | AudioWhereInput[]
    OR?: AudioWhereInput[]
    NOT?: AudioWhereInput | AudioWhereInput[]
    key?: StringFilter<"Audio"> | string
    status?: StringFilter<"Audio"> | string
    npc?: XOR<NonPlayableCharacterRelationFilter, NonPlayableCharacterWhereInput>
  }, "id" | "npcId">

  export type AudioOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    status?: SortOrder
    npcId?: SortOrder
    _count?: AudioCountOrderByAggregateInput
    _avg?: AudioAvgOrderByAggregateInput
    _max?: AudioMaxOrderByAggregateInput
    _min?: AudioMinOrderByAggregateInput
    _sum?: AudioSumOrderByAggregateInput
  }

  export type AudioScalarWhereWithAggregatesInput = {
    AND?: AudioScalarWhereWithAggregatesInput | AudioScalarWhereWithAggregatesInput[]
    OR?: AudioScalarWhereWithAggregatesInput[]
    NOT?: AudioScalarWhereWithAggregatesInput | AudioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Audio"> | string
    key?: StringWithAggregatesFilter<"Audio"> | string
    status?: StringWithAggregatesFilter<"Audio"> | string
    npcId?: IntWithAggregatesFilter<"Audio"> | number
  }

  export type UserCreateInput = {
    id?: string
    email: string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type NonPlayableCharacterCreateInput = {
    name: string
    desc?: string | null
    userId: string
    audio?: AudioCreateNestedOneWithoutNpcInput
  }

  export type NonPlayableCharacterUncheckedCreateInput = {
    id?: number
    name: string
    desc?: string | null
    userId: string
    audio?: AudioUncheckedCreateNestedOneWithoutNpcInput
  }

  export type NonPlayableCharacterUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    audio?: AudioUpdateOneWithoutNpcNestedInput
  }

  export type NonPlayableCharacterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    audio?: AudioUncheckedUpdateOneWithoutNpcNestedInput
  }

  export type NonPlayableCharacterCreateManyInput = {
    id?: number
    name: string
    desc?: string | null
    userId: string
  }

  export type NonPlayableCharacterUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type NonPlayableCharacterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AudioCreateInput = {
    id: string
    key: string
    status?: string
    npc: NonPlayableCharacterCreateNestedOneWithoutAudioInput
  }

  export type AudioUncheckedCreateInput = {
    id: string
    key: string
    status?: string
    npcId: number
  }

  export type AudioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    npc?: NonPlayableCharacterUpdateOneRequiredWithoutAudioNestedInput
  }

  export type AudioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    npcId?: IntFieldUpdateOperationsInput | number
  }

  export type AudioCreateManyInput = {
    id: string
    key: string
    status?: string
    npcId: number
  }

  export type AudioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type AudioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    npcId?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type AudioNullableRelationFilter = {
    is?: AudioWhereInput | null
    isNot?: AudioWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NonPlayableCharacterCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    userId?: SortOrder
  }

  export type NonPlayableCharacterAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NonPlayableCharacterMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    userId?: SortOrder
  }

  export type NonPlayableCharacterMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    userId?: SortOrder
  }

  export type NonPlayableCharacterSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NonPlayableCharacterRelationFilter = {
    is?: NonPlayableCharacterWhereInput
    isNot?: NonPlayableCharacterWhereInput
  }

  export type AudioCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    status?: SortOrder
    npcId?: SortOrder
  }

  export type AudioAvgOrderByAggregateInput = {
    npcId?: SortOrder
  }

  export type AudioMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    status?: SortOrder
    npcId?: SortOrder
  }

  export type AudioMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    status?: SortOrder
    npcId?: SortOrder
  }

  export type AudioSumOrderByAggregateInput = {
    npcId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type AudioCreateNestedOneWithoutNpcInput = {
    create?: XOR<AudioCreateWithoutNpcInput, AudioUncheckedCreateWithoutNpcInput>
    connectOrCreate?: AudioCreateOrConnectWithoutNpcInput
    connect?: AudioWhereUniqueInput
  }

  export type AudioUncheckedCreateNestedOneWithoutNpcInput = {
    create?: XOR<AudioCreateWithoutNpcInput, AudioUncheckedCreateWithoutNpcInput>
    connectOrCreate?: AudioCreateOrConnectWithoutNpcInput
    connect?: AudioWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AudioUpdateOneWithoutNpcNestedInput = {
    create?: XOR<AudioCreateWithoutNpcInput, AudioUncheckedCreateWithoutNpcInput>
    connectOrCreate?: AudioCreateOrConnectWithoutNpcInput
    upsert?: AudioUpsertWithoutNpcInput
    disconnect?: AudioWhereInput | boolean
    delete?: AudioWhereInput | boolean
    connect?: AudioWhereUniqueInput
    update?: XOR<XOR<AudioUpdateToOneWithWhereWithoutNpcInput, AudioUpdateWithoutNpcInput>, AudioUncheckedUpdateWithoutNpcInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AudioUncheckedUpdateOneWithoutNpcNestedInput = {
    create?: XOR<AudioCreateWithoutNpcInput, AudioUncheckedCreateWithoutNpcInput>
    connectOrCreate?: AudioCreateOrConnectWithoutNpcInput
    upsert?: AudioUpsertWithoutNpcInput
    disconnect?: AudioWhereInput | boolean
    delete?: AudioWhereInput | boolean
    connect?: AudioWhereUniqueInput
    update?: XOR<XOR<AudioUpdateToOneWithWhereWithoutNpcInput, AudioUpdateWithoutNpcInput>, AudioUncheckedUpdateWithoutNpcInput>
  }

  export type NonPlayableCharacterCreateNestedOneWithoutAudioInput = {
    create?: XOR<NonPlayableCharacterCreateWithoutAudioInput, NonPlayableCharacterUncheckedCreateWithoutAudioInput>
    connectOrCreate?: NonPlayableCharacterCreateOrConnectWithoutAudioInput
    connect?: NonPlayableCharacterWhereUniqueInput
  }

  export type NonPlayableCharacterUpdateOneRequiredWithoutAudioNestedInput = {
    create?: XOR<NonPlayableCharacterCreateWithoutAudioInput, NonPlayableCharacterUncheckedCreateWithoutAudioInput>
    connectOrCreate?: NonPlayableCharacterCreateOrConnectWithoutAudioInput
    upsert?: NonPlayableCharacterUpsertWithoutAudioInput
    connect?: NonPlayableCharacterWhereUniqueInput
    update?: XOR<XOR<NonPlayableCharacterUpdateToOneWithWhereWithoutAudioInput, NonPlayableCharacterUpdateWithoutAudioInput>, NonPlayableCharacterUncheckedUpdateWithoutAudioInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AudioCreateWithoutNpcInput = {
    id: string
    key: string
    status?: string
  }

  export type AudioUncheckedCreateWithoutNpcInput = {
    id: string
    key: string
    status?: string
  }

  export type AudioCreateOrConnectWithoutNpcInput = {
    where: AudioWhereUniqueInput
    create: XOR<AudioCreateWithoutNpcInput, AudioUncheckedCreateWithoutNpcInput>
  }

  export type AudioUpsertWithoutNpcInput = {
    update: XOR<AudioUpdateWithoutNpcInput, AudioUncheckedUpdateWithoutNpcInput>
    create: XOR<AudioCreateWithoutNpcInput, AudioUncheckedCreateWithoutNpcInput>
    where?: AudioWhereInput
  }

  export type AudioUpdateToOneWithWhereWithoutNpcInput = {
    where?: AudioWhereInput
    data: XOR<AudioUpdateWithoutNpcInput, AudioUncheckedUpdateWithoutNpcInput>
  }

  export type AudioUpdateWithoutNpcInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type AudioUncheckedUpdateWithoutNpcInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type NonPlayableCharacterCreateWithoutAudioInput = {
    name: string
    desc?: string | null
    userId: string
  }

  export type NonPlayableCharacterUncheckedCreateWithoutAudioInput = {
    id?: number
    name: string
    desc?: string | null
    userId: string
  }

  export type NonPlayableCharacterCreateOrConnectWithoutAudioInput = {
    where: NonPlayableCharacterWhereUniqueInput
    create: XOR<NonPlayableCharacterCreateWithoutAudioInput, NonPlayableCharacterUncheckedCreateWithoutAudioInput>
  }

  export type NonPlayableCharacterUpsertWithoutAudioInput = {
    update: XOR<NonPlayableCharacterUpdateWithoutAudioInput, NonPlayableCharacterUncheckedUpdateWithoutAudioInput>
    create: XOR<NonPlayableCharacterCreateWithoutAudioInput, NonPlayableCharacterUncheckedCreateWithoutAudioInput>
    where?: NonPlayableCharacterWhereInput
  }

  export type NonPlayableCharacterUpdateToOneWithWhereWithoutAudioInput = {
    where?: NonPlayableCharacterWhereInput
    data: XOR<NonPlayableCharacterUpdateWithoutAudioInput, NonPlayableCharacterUncheckedUpdateWithoutAudioInput>
  }

  export type NonPlayableCharacterUpdateWithoutAudioInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type NonPlayableCharacterUncheckedUpdateWithoutAudioInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NonPlayableCharacterDefaultArgs instead
     */
    export type NonPlayableCharacterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NonPlayableCharacterDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AudioDefaultArgs instead
     */
    export type AudioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AudioDefaultArgs<ExtArgs>

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