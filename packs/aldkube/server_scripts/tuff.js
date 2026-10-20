ServerEvents.recipes(event => {
  event.recipes.createMixing(
    'minecraft:tuff',
    [
      '2x minecraft:andesite',
      '1x create:powdered_obsidian',
      Fluid.of('minecraft:lava', 100)
    ]
  )
})
