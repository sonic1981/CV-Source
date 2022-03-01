


exports.createPages = async ({ graphql, actions }) => {


  const { data } = await graphql(`
  {
    allContentJson {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`);

  data.allContentJson.edges.forEach(edge => {
    actions.createPage({
      path: edge.node.name,
      component: require.resolve(`./src/templates/cv.js`),
      context: { id: edge.node.id },
    })
  });
};