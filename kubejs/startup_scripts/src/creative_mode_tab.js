StartupEvents.registry("creative_mode_tab", (event) => {
    //let tab = event.create("jcy:mechanism_creative_mode_tab")
    //tab.icon(() => Item.of("jcy:wooden_mechanism"))
    //tab.displayName = Text.translatable("item_group.jcy.mechanism_creative_mode_tab")
    function addCreativeTab(name) {
        return event.create(`jcy:${name}`)
    }//by cmi
    addCreativeTab('mechanism')
        .icon(() => Item.of("jcy:wooden_mechanism"))
        .content(() => [
            "jcy:wooden_mechanism",
            "jcy:infernal_mechanism",
            "jcy:stone_mechanism",
            "jcy:iron_mechanism",
            "jcy:copper_mechanism",
            "jcy:andesite_mechanism",
            "jcy:mechanism_thermal",
            "jcy:resonant_mechanism",
            "jcy:feinforced_mechanism",
            "jcy:gold_mechanism",
            "jcy:smart_mechanism",
            "jcy:better_mechanism_precision",
            'jcy:bronze_mechanism',
            'create:precision_mechanism',
            'vintage:redstone_module'
        ]).displayName(Component.translatable("ItemGroup.jcy.mechanism"))
})