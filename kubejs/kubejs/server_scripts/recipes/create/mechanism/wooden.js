ServerEvents.recipes(event => {
    event.shaped('tconstruct:tinker_station', [
        'aaa',
        'bcb',
        "b b"
    ],
        {
            a: 'tconstruct:pattern',
            b: '#minecraft:planks',
            c: 'jcy:wooden_mechanism'
        }).id("tconstruct:tables/tinker_station")
    event.shaped('tconstruct:crafting_station', [
        ' a ',
        ' b ',
        ' c '
    ],
        {
            a: 'tconstruct:pattern',
            b: 'minecraft:crafting_table',
            c: 'jcy:wooden_mechanism'
        }).id("tconstruct:tables/crafting_station_from_logs")
    event.shaped('tconstruct:part_builder', [
        'ac ',
        'bb ',
        '   '
    ],
        {
            a: 'tconstruct:pattern',
            b: '#minecraft:planks',
            c: 'jcy:wooden_mechanism'
        }).id("tconstruct:tables/part_builder")
})