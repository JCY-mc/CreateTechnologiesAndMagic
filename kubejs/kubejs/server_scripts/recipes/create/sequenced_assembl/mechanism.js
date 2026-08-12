ServerEvents.recipes(event => {
    const { tconstruct, create, vintage } = event.recipes
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

    //木制构件(工作台)
    event.shapeless(
        'jcy:wooden_mechanism',
        [
            '#minecraft:wooden_slabs',
            'tconstruct:pattern',
            'jcy:basic_part',
            'minecraft:stick'
        ]
    )
    //木制构件(序列组装)
    create.sequenced_assembly
        (
            [
                'jcy:wooden_mechanism'
            ],
            'tconstruct:pattern',
            [
                create.deploying
                    (
                        'jcy:wooden_mechanism_incomplete',
                        [
                            'jcy:wooden_mechanism_incomplete',
                            'minecraft:stick'
                        ]
                    ),
                create.pressing
                    (
                        'jcy:wooden_mechanism_incomplete',
                        'jcy:wooden_mechanism_incomplete'
                    ),
                create.cutting
                    (
                        'jcy:wooden_mechanism_incomplete',
                        'jcy:wooden_mechanism_incomplete'
                    ),
                create.deploying
                    (
                        'jcy:wooden_mechanism_incomplete',
                        [
                            'jcy:wooden_mechanism_incomplete',
                            'jcy:basic_part'
                        ]
                    )
            ]
        )
        .transitionalItem('jcy:wooden_mechanism_incomplete')
        .loops(1)
    //石制构件(工作台)
    event.shaped('jcy:stone_mechanism', [
        "   ",
        "aba",
        " c "
    ], {
        a: 'tconstruct:seared_brick',
        b: 'jcy:basic_part',
        c: 'jcy:wooden_mechanism'
    })
    //石制构件(序列组装)
    create.sequenced_assembly(
        [
            'jcy:stone_mechanism'
        ],
        'jcy:wooden_mechanism',
        [
            create.deploying(
                'jcy:stone_mechanism_incomplete',
                [
                    'jcy:stone_mechanism_incomplete',
                    'tconstruct:seared_brick'
                ]
            ),
            create.pressing(
                'jcy:stone_mechanism_incomplete',
                'jcy:stone_mechanism_incomplete'
            ),
            create.deploying(
                'jcy:stone_mechanism_incomplete',
                [
                    'jcy:stone_mechanism_incomplete',
                    'jcy:basic_part'

                ]
            )
        ]
    ).transitionalItem('jcy:stone_mechanism_incomplete').loops(1)
    //安山构件(工作台)
    event.shaped('jcy:andesite_mechanism', [
        "abc",
        "d  ",
        "   "
    ], {
        a: 'jcy:wooden_mechanism',
        b: "jcy:mechanism_part",
        c: "create:shaft",
        d: 'create:andesite_alloy'
    })
    //安山构件(序列组装)
    create.sequenced_assembly(
        [
            'jcy:andesite_mechanism'
        ],
        'jcy:wooden_mechanism',
        [
            create.deploying(
                'jcy:andesite_mechanism_incomplete',
                [
                    'jcy:andesite_mechanism_incomplete',
                    'jcy:mechanism_part'
                ]
            ),
            create.deploying(
                'jcy:andesite_mechanism_incomplete',
                [
                    'jcy:andesite_mechanism_incomplete',
                    'create:andesite_alloy'
                ]
            ),
            create.pressing(
                'jcy:andesite_mechanism_incomplete', 'jcy:andesite_mechanism_incomplete'
            )
        ]
    ).transitionalItem('jcy:andesite_mechanism_incomplete').loops(1)
    //铁制构件(序列组装)
    create.sequenced_assembly(
        [
            'jcy:iron_mechanism'
        ],
        'jcy:stone_mechanism',
        [
            create.filling(
                'jcy:iron_mechanism_incomplete',
                [
                    'jcy:iron_mechanism_incomplete',
                    Fluid.of(
                        'tconstruct:molten_iron',
                        90
                    )
                ]
            ),
            create.deploying(
                'jcy:iron_mechanism_incomplete',
                [
                    'jcy:iron_mechanism_incomplete',
                    'jcy:basic_part'
                ]
            )
        ]
    ).transitionalItem('jcy:iron_mechanism_incomplete').loops(2)
    //流体构件(工作台)
    event.shaped('jcy:copper_mechanism', [
        'abc',
        'fdf',
        ' e '
    ], {
        a: 'minecraft:water_bucket',
        b: 'create:fluid_pipe',
        c: 'jcy:mechanism_part',
        d: 'jcy:andesite_mechanism',
        e: "create:copper_casing",
        f: 'thermal:cured_rubber'
    })
    //流体构件(序列组装)
    create.sequenced_assembly(
        [
            'jcy:copper_mechanism'
        ],
        'jcy:andesite_mechanism',
        [
            create.deploying(
                'jcy:copper_mechanism_incomplete',
                [
                    'jcy:copper_mechanism_incomplete',
                    'create:fluid_pipe'
                ]
            ),
            create.filling(
                'jcy:copper_mechanism_incomplete',
                [
                    'jcy:copper_mechanism_incomplete',
                    Fluid.of(
                        'minecraft:water',
                        250
                    )
                ]
            ),
            create.deploying(
                'jcy:copper_mechanism_incomplete',
                [
                    'jcy:copper_mechanism_incomplete',
                    'thermal:cured_rubber'
                ]
            ),
            create.pressing(
                'jcy:copper_mechanism_incomplete',
                'jcy:copper_mechanism_incomplete'
            ),
            create.deploying(
                'jcy:copper_mechanism_incomplete',
                [
                    'jcy:copper_mechanism_incomplete',
                    'jcy:mechanism_part'
                ]
            )

        ]
    ).transitionalItem('jcy:copper_mechanism_incomplete').loops(1)
    //蒸汽构件(序列组装)
    create.sequenced_assembly(
        [
            'jcy:mechanism_bronze'
        ],
        'jcy:copper_mechanism',
        [
            create.deploying(
                'jcy:mechanism_bronze_incomplete',
                [
                    'jcy:mechanism_bronze_incomplete',
                    'create:flywheel'
                ]
            ),
            create.filling(
                'jcy:mechanism_bronze_incomplete',
                [
                    'jcy:mechanism_bronze_incomplete',
                    Fluid.of(
                        'minecraft:lava',
                        250
                    )
                ]
            ),
            create.deploying(
                'jcy:mechanism_bronze_incomplete',
                [
                    'jcy:mechanism_bronze_incomplete',
                    'vintage:bronze_sheet'
                ]
            ),
            create.pressing(
                'jcy:mechanism_bronze_incomplete',
                'jcy:mechanism_bronze_incomplete'
            ),
            create.deploying(
                'jcy:mechanism_bronze_incomplete',
                [
                    'jcy:mechanism_bronze_incomplete',
                    'jcy:mechanism_part'
                ]
            )

        ]
    ).transitionalItem('jcy:mechanism_bronze_incomplete').loops(1)
    //精密构件(序列组装)
    create.sequenced_assembly(
        [
            'create:precision_mechanism'
        ],
        'jcy:andesite_mechanism',
        [
            create.deploying(
                'create:incomplete_precision_mechanism', [
                'create:incomplete_precision_mechanism',
                'create:cogwheel'
            ]
            ),
            create.deploying(
                'create:incomplete_precision_mechanism', [
                'create:incomplete_precision_mechanism',
                'create:large_cogwheel'
            ]),
            create.deploying(
                'create:incomplete_precision_mechanism', [
                'create:incomplete_precision_mechanism',
                'jcy:mechanism_part'
            ])
        ]
    ).transitionalItem('create:incomplete_precision_mechanism')
        .loops(5)
        .id('create:sequenced_assembly/precision_mechanism')
    //更加精密的精密构件(序列组装)
    create.sequenced_assembly(
        [
            'jcy:better_mechanism_precision'
        ],
        'create:precision_mechanism',
        [
            create.deploying(
                'create:incomplete_precision_mechanism', [
                'create:incomplete_precision_mechanism',
                'create:electron_tube'
            ]
            ),
            create.filling(
                'create:incomplete_precision_mechanism',
                [
                    'create:incomplete_precision_mechanism',
                    Fluid.of(
                        'tconstruct:molten_brass',
                        90
                    )
                ]
            ),
            create.deploying(
                'create:incomplete_precision_mechanism', [
                'create:incomplete_precision_mechanism',
                'jcy:mechanism_part'
            ]),
            create.filling(
                'create:incomplete_precision_mechanism',
                [
                    'create:incomplete_precision_mechanism',
                    Fluid.of(
                        'tconstruct:molten_brass',
                        90
                    )
                ]
            ),
            create.deploying(
                'create:incomplete_precision_mechanism', [
                'create:incomplete_precision_mechanism',
                'mekanism:ingot_steel'
            ])
        ]
    ).transitionalItem('create:incomplete_precision_mechanism').loops(1)
    //酷热构件(浇筑)
    tconstruct.casting_table('jcy:infernal_mechanism')
        .cast('jcy:andesite_mechanism')
        .fluid(Fluid.of("tconstruct:seared_stone", 250))
        .cooling_time(20 * 10)
        .cast_consumed(true)
    
})