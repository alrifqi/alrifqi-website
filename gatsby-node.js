exports.createPages = ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: `/portfolio/*`,
    matchPath: '/portfolio/:id',
    component: require.resolve(`./src/pages/portfolio/index.js`)
  })
}