StartupEvents.registry('item', event => {
  event.create('dried_flesh')
    .displayName('Высушенная гнилая плоть')
    .texture('minecraft:item/rotten_flesh')

  event.create('incomplete_leather')
    .displayName('Незавершённая кожа')
    .texture('minecraft:item/leather')
})
