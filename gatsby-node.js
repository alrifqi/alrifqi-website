exports.createPages = ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: `/portfolio/*`,
    matchPath: '/portfolio/:id',
    component: require.resolve(`./src/pages/portfolio/id/index.js`)
  })
  createPage({
    path: `/blog/*`,
    matchPath: '/blog/:id',
    component: require.resolve(`./src/pages/blog/id/index.js`)
  })
}