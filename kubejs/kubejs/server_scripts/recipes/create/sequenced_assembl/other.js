ServerEvents.recipes(event => {
    const { create, vintage } = event.recipes
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

    //转序！！！！！！！
    create.sequenced_assembly(
        [
            'minecraft:diamond'
        ],
        'minecraft:coal_block',
        [
            create.pressing
                (
                    'minecraft:coal_block',
                    'minecraft:coal_block'
                )

        ]
    )
        .transitionalItem('minecraft:coal_block')
        .loops(114514)
    //飞轮
    create.sequenced_assembly
        (
            [
                'create:flywheel'
            ], 'create:shaft',
            [
                create.deploying(
                    'create:shaft',
                    [
                        'create:shaft',
                        'create:brass_sheet'
                    ]
                )
            ]
        ).transitionalItem('create:shaft').loops(4)
    //蒸汽引擎
    create.sequenced_assembly(
        [
            'create:steam_engine'
        ],
        'minecraft:copper_block',
        [
            create.deploying(
                'minecraft:copper_block',
                [
                    'minecraft:copper_block',
                    'jcy:mechanism_bronze'
                ]
            ),
            create.cutting(
                'minecraft:copper_block',
                'minecraft:copper_block'
            ),
            create.deploying(
                'minecraft:copper_block',
                [
                    'minecraft:copper_block',
                    'create:golden_sheet'
                ]
            ),
            vintage.polishing(
                'minecraft:copper_block',
                'minecraft:copper_block'
            )
        ]
    ).transitionalItem('minecraft:copper_block').loops(1)
    //电子管
    create.sequenced_assembly(
        [
            'create:electron_tube'
        ],
        'create:iron_sheet',
        [

            create.deploying(
                'create:iron_sheet',
                [
                    'create:iron_sheet',
                    'create:polished_rose_quartz'
                ]

            ),
            create.deploying(
                'create:iron_sheet',
                [
                    'create:iron_sheet',
                    'minecraft:redstone'
                ]

            ),
            create.pressing(
                'create:iron_sheet',
                'create:iron_sheet'
            )

        ]

    ).transitionalItem('create:iron_sheet')
        .loops(1)
        .id('create:crafting/materials/electron_tube')
})