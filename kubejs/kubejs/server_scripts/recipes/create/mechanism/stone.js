ServerEvents.recipes(event => {
    event.shaped("tconstruct:seared_heater", [
        "aaa",
        "aba",
        "aca"
    ],
        {
            a: 'tconstruct:seared_brick',
            b: 'minecraft:furnace',
            c: 'jcy:stone_mechanism'
        }).id("tconstruct:smeltery/seared/heater")
    event.shaped('tconstruct:seared_melter', [
        " c ",
        "aba",
        "aaa"
    ],
        {
            a: 'tconstruct:seared_brick',
            b: '#tconstruct:seared_tanks',
            c: 'jcy:stone_mechanism'
        }).id("tconstruct:smeltery/seared/melter")
    event.shaped('tconstruct:seared_drain',[
        "a a",
        "bcb",
        "a a"
    ],
        {
            a: 'tconstruct:seared_brick',
            b: 'minecraft:copper_ingot',
            c: 'jcy:stone_mechanism'
        }).id("tconstruct:smeltery/seared/drain")
    event.shaped('tconstruct:seared_chute' ,[
        "aba",
        " c ",
        "aba"
    ],
        {
            a: 'tconstruct:seared_brick',
            b: 'minecraft:copper_ingot',
            c: 'jcy:stone_mechanism'
        }).id("tconstruct:smeltery/seared/chute_retextured")
    event.shaped('tconstruct:seared_table',[
        "aaa",
        "aba",
        "a a"
    ],
    {
        a: 'tconstruct:seared_brick',
        b: "jcy:stone_mechanism"  
    }).id("tconstruct:smeltery/seared/table")
     event.shaped('tconstruct:seared_basin',[
        "a a",
        "aba",
        "aaa"
    ],
    {
        a: 'tconstruct:seared_brick',
        b: "jcy:stone_mechanism"  
    }).id("tconstruct:smeltery/seared/basin")
    

})