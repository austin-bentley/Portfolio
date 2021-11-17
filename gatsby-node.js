const { cars } = require("./src/data/cars.js")

exports.createPages = async ({ actions }) => {
  cars.map(car => {
    actions.createPage({
      path: `/projects/cars-${car.slug}`,
      component: require.resolve("./src/templates/cars.js"),
      context: car,
    })
  })
}
