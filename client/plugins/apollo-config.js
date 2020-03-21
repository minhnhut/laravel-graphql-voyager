// plugins/my-alternative-apollo-config.js
export default function(context){
  return {
    httpEndpoint: 'http://localhost:8000/graphql',
    // getAuth:() => 'Bearer my-static-token' // use this method to overwrite functions
  }
}

// export default ({ app, req}, inject) => {
//   let parsed = null;
//
//   // Apollo client
//   const apolloClient = new ApolloClient({
//     // You should use an absolute URL here
//     uri: 'http://localhost:8000/graphql'
//   })
//   const apolloProvider = new VueApollo({
//     defaultClient: apolloClient,
//   })
//   inject('apolloProvider', apolloProvider)
//
//   // Backend utils
//   const $backend = {
//     query: () => gql.query()
//   }
//   inject('backend', $backend);
// }
