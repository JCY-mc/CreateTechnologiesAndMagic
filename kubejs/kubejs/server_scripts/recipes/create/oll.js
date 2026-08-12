ServerEvents.recipes(event => {
    const { create, vintage, createdieselgenerators } = event.recipes
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

    //石油蒸馏
    createdieselgenerators.distillation(
        [
            Fluid.of("jcy:heavy_oil", 15),
            Fluid.of("createdieselgenerators:diesel", 25),
            Fluid.of("jcy:kerosene", 20),
            Fluid.of("jcy:naphtha", 20),
            Fluid.of("createdieselgenerators:gasoline", 20)
        ], Fluid.of("createdieselgenerators:crude_oil", 100)
    )
        .processingTime(20)
        .heated()
        .id("createdieselgenerators:distillation/crude_oil")
    //石脑油裂化
    vintage.pressurizing(
        Fluid.of(
            "jcy:cracked_naphtha",
            1000
        ),
        [
            Fluid.of(
                "jcy:naphtha",
                1000
            ),
            Fluid.of(
                "jcy:steam",
                100
            )
        ]
    ).superheated()
    //PE塑料
    //{
    //液化聚乙烯
    vintage.pressurizing(
        Fluid.of(
            "jcy:polyethylene",
            1000
        ),
        Fluid.of(
            "jcy:ethylene",
            1000
        )
    )
    //锭
    create.compacting(
        "jcy:polyethylene_ingot",
        Fluid.of(
            "jcy:polyethylene",
            90
        )
    )
    //板(切)
    create.cutting(
        Item.of(
            'jcy:polyethylene_plate',
            4
        ),
        "jcy:polyethylene_ingot"
    )
    //板(压)
    create.pressing(
        'jcy:polyethylene_plate',
        "jcy:polyethylene_ingot"
    )
    //}


})