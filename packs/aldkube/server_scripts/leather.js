ServerEvents.recipes(event => {
  // 1. Гнилая плоть -> подсушенная плоть
  // Bulk Smoking: ванильный рецепт копчения
  event.smoking(
    'kubejs:dried_flesh',
    'minecraft:rotten_flesh'
  )

  // 2. Подсушенная плоть -> кожа через Sequenced Assembly
  event.recipes.create.sequenced_assembly(
    [
      Item.of('minecraft:leather', 1.0)
    ],
    'kubejs:dried_flesh',
    [
      event.recipes.createPressing(
        'kubejs:incomplete_leather',
        'kubejs:incomplete_leather'
      )
    ]
  )
    .transitionalItem('kubejs:incomplete_leather')
    .loops(3)
})
