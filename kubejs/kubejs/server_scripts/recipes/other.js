ServerEvents.recipes(event => {
    //const { tconstruct, create, vintage, createdieselgenerators } = event.recipes
    event.remove([
        { id: "minecraft:iron_ingot_from_smelting_raw_iron" },
        { id: "minecraft:iron_ingot_from_smelting_iron_ore" },
        { id: "minecraft:iron_ingot_from_smelting_deepslate_iron_ore" },
        { id: "tconstruct:smeltery/casting/seared/smeltery_controller" },
        { id: "thermal:smelting/cured_rubber_from_smelting" },
        { id: 'immersiveengineering:crafting/blastbrick' },
        { id: 'create:crafting/kinetics/steam_engine' },
        { id: "createdieselgenerators:distillation/superheated_crude_oil" },
        { id: "thermal:machine_frame" }
    ]);
    //event.replaceInput({ output: 'minecraft:blast_furnace' }, 'minecraft:iron_ingot', 'create:andesite_alloy')
    event.replaceInput({ output: "create:mechanism_press" }, 'create:andesite_casing', 'jcy:andesite_mechanism')
    event.replaceInput({ output: 'create:mechanism_mixer' }, 'create:andesite_casing', 'jcy:andesite_mechanism')
    event.replaceInput({ output: 'create:millstone' }, 'create:andesite_casing', 'jcy:andesite_mechanism')
    event.replaceInput({ output: 'create:encased_fan' }, 'create:andesite_casing', 'jcy:andesite_mechanism')
    event.replaceInput({ output: 'vintage:belt_grinder' }, 'create:andesite_casing', 'jcy:andesite_mechanism')
    event.replaceInput({ output: 'create:spout' }, 'create:copper_casing', 'jcy:copper_mechanism')
    event.replaceInput({ output: 'create:item_drain' }, 'create:copper_casing', 'jcy:copper_mechanism')
    event.replaceInput({ output: 'create:mechanism_crafter' }, 'create:electron_tube', 'jcy:better_mechanism_precision')
    


    event.shaped("jcy:smeltery_controller_incomplete", [
        "aaa",
        "aba",
        "aaa"
    ], {
        a: 'tconstruct:seared_brick',
        b: 'jcy:infernal_mechanism'
    })


    event.shaped('thermal:saw_blade', [
        " a ",
        "aba",
        "   "
    ], {
        a: 'create:iron_sheet',
        b: 'create:zinc_ingot'
    }).id("thermal:saw_blade")
    event.shaped('thermal:drill_head', [
        " a ",
        "aba",
        "   "
    ], {
        a: 'create:andesite_alloy',
        b: 'create:zinc_ingot'
    }).id("thermal:drill_head")
    event.shaped('create:mechanical_drill', [
        " a ",
        " b ",
        "   "
    ], {
        a: 'thermal:drill_head',
        b: 'jcy:andesite_mechanism'
    }).id("create:crafting/kinetics/mechanical_drill")
    event.shaped('create:brass_hand', [
        " c ",
        "aba",
        " a "
    ], {
        a: 'create:brass_sheet',
        b: 'thermal:cured_rubber',
        c: 'create:andesite_alloy'
    }).id('create:crafting/kinetics/brass_hand')
    event.shaped('create:mechanical_saw', [
        " a ",
        " b ",
        "   "
    ], {
        a: 'thermal:saw_blade',
        b: 'jcy:andesite_mechanism'
    }).id("create:crafting/kinetics/mechanical_saw")
    event.shaped('thermal:device_tree_extractor', [
        "aba",
        "cde",
        "afa"
    ], {
        a: '#forge:glass',
        b: '#minecraft:planks',
        c: "create:fluid_tank",
        d: "create:andesite_casing",
        e: 'create:iron_sheet',
        f: 'jcy:andesite_mechanism'
    }).id('thermal:device_tree_extractor')
    
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

