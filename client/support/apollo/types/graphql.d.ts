
declare module '*/users.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const users: DocumentNode;

  export default defaultDocument;
}
    