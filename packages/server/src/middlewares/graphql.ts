import path from 'path';
import { graphql } from 'graphql';
import { Pool } from 'pg';
import {
  makePluginHook,
  postgraphile,
  createPostGraphileSchema,
  withPostGraphileContext
} from 'postgraphile';
import PgPubsub from '@graphile/pg-pubsub';
import PgSimplifyInflectorPlugin from '@graphile-contrib/pg-simplify-inflector';
import queryMapJson from '../persisted-queries.json';
import config from '../config';
import { logger } from './logger';

const env = process.env.NODE_ENV || 'development';
const pgConfig = (config as any)[env].pg;

const pgPool = new Pool(pgConfig);

const pluginHook = makePluginHook([PgPubsub]);

const options: any = {
  pluginHook,
  subscriptions: true,
  simpleSubscriptions: true,
  appendPlugins: [PgSimplifyInflectorPlugin],
  classicIds: false,
  dynamicJson: true,
  exportGqlSchemaPath: `${path.join(__dirname, '../../../relay/schema.graphql')}`,
  graphiql: env === 'development',
  showErrorStack: true,
  extendedErrors: ['hint', 'detail', 'errcode'],
  simpleCollections: 'both',
  // disableQueryLog: true,
  watchPg: env === 'development',
}

/**
 * GraphQL server类
 */
class GraphqlService {
  static schemas: any
  constructor(schemas: any) {
    GraphqlService.schemas = schemas;
  }

  static async init() {
    const schemas = await createPostGraphileSchema(pgPool, pgConfig.schema, options);
    return new GraphqlService(schemas);
  }

  async performQuery(query: any) {
    return await withPostGraphileContext({ pgPool }, (async (context: any) => {
      const { queryId, variables } = query
      const queryText = queryMapJson[queryId];

      try {
        const result = await graphql(
          GraphqlService.schemas,
          queryText,
          null,
          context,
          variables
        );
        logger.info(
          `REQUEST QUERYID: ${queryId} WITH VARIABLES: ${JSON.stringify(variables, null, 2)} \nRESULT IN: ${JSON.stringify(result, null, 2)}`
        )
        return result
      } catch (error) {
        logger.info(
          `ERROR REQUEST QUERYID: ${queryId} WITH VARIABLES: ${JSON.stringify(variables, null, 2)} \nERROR: ${error}`
        )
      }
    }) as any);
  }
}

/**
 * graphql express request handler
 */
const graphqlHandler = postgraphile(pgPool, pgConfig.schema, options);

export {
  graphqlHandler,
  GraphqlService
}