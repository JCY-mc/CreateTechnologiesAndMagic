ServerEvents.recipes(event => {
const {create, vintage, createdieselgenerators } = event.recipes

    //硫磺粉
    create.milling
        (
            'thermal:sulfur_dust',
            'thermal:sulfur'
        )
    //硫化橡胶
    create.mixing
        (
            'thermal:cured_rubber',
            [
                Item.of
                    (
                        'thermal:sulfur_dust',
                        2
                    ),
                'thermal:rubber'
            ]
        )
    //窑炉砖
    create.compacting
        (
            Item.of
                (
                    'immersiveengineering:blastbrick',
                    3
                )
            ,
            [
                'minecraft:nether_brick',
                'immersiveengineering:cokebrick',
                Fluid.of
                    (
                        "minecraft:lava",
                        250
                    )
            ]
        )
    //蒸汽   
    vintage.pressurizing(
        Fluid.of(
            "jcy:steam",
            1000
        ),
        Fluid.of(
            "minecraft:water",
            1000
        )
    ).heated()
    //零件
    event.shapeless(
        'jcy:basic_part',
        [
            'minecraft:clay_ball',
            'minecraft:flint'
        ]
    )
    event.shapeless(
        'jcy:mechanism_part',
        [
            'create:andesite_alloy',
            'create:cogwheel'
        ]
    )

    //--------南瓜种植基地--------//
    //      //      //      //   //
    //    {{{}}}  {{{}}}  {{{}}} //
    //     //   //    \\   \\    //
    //   {{}}  {{}}   {{}} {{}}  //
    //-----------偷摘打死---------//
    //--------西瓜种植基地--------//
    // (()) (()) (()) ((())) (())//
    //                           //
    //   (())  (())  (())  (())  //
    //-----------偷摘捅死---------//
})