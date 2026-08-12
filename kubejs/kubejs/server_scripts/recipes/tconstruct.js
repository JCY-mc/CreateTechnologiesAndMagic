ServerEvents.recipes(event => {
    const { tconstruct } = event.recipes
    //大炉子
    tconstruct.casting_basin('tconstruct:smeltery_controller')
        .cast('jcy:smeltery_controller_incomplete')
        .fluid(Fluid.of("tconstruct:molten_copper", 360))
        .cooling_time(20 * 5)
        .cast_consumed(true)
    //高炉
    tconstruct.casting_basin('minecraft:blast_furnace')
        .cast('minecraft:furnace')
        .fluid(Fluid.of("tconstruct:molten_zinc",360))
        .cooling_time(20*10)
        .cast_consumed(true)
})