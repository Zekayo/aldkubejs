ServerEvents.recipes(event => {
  event.recipes.createMixing(
    'minecraft:tuff',
    [
      '2x minecraft:andesite',
      '2x create:powdered_obsidian',
      Fluid.of('minecraft:lava', 500)
    ]
  )
})
