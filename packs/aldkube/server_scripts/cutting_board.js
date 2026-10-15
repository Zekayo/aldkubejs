ServerEvents.recipes(event => {
    // Удаляем старые рецепты Cutting Board
    event.remove({ output: 'eypipes:cutting_board' });

    // Shaped Crafting: доски любого типа дерева
    event.shaped('eypipes:cutting_board', [
        'PPP',
        'P P'
    ], {
        P: '#minecraft:planks'
    });
});
