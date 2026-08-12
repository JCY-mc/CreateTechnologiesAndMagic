StartupEvents.registry("item", event => {
    global.namespace = "jcy"
    //event.create('jcy:a1',"basic")
    //event.create('jcy:certus_quartz_alloy','basic')
    //event.create('jcy:certus_quartz_alloy_dust','basic')
    /**
     * @param {string} name 注册ID
     * @param {"basic" | "sword" | "pickaxe" | "axe" | "shovel" | "shears" | "hoe" | "helmet" | "chestplate" | "leggings" | "boots" | "music_disc" | "smithing_template" | "animatable" | "anim_helmet" | "anim_chestplate" | "anim_leggings" | "anim_boots" | "anim_axe" | "anim_hoe" | "anim_pickaxe" | "anim_sword" | "anim_shield" | "create:sequenced_assembly" | "create:sandpaper" | "vintageimprovements:spring"} type 注册类型
     * @returns 
     */
    function addItem(name, type) {
        if (type === undefined) {
            return event.create(`${global.namespace}:${name}`)
        }
        return event.create(`${global.namespace}:${name}`, type)
    }
    addItem("a1")
    //赛特斯合金
    addItem("certus_quartz_alloy")
        .texture("jcy:item/certus_quartz_alloy/certus_quartz_alloy")
    addItem("certus_quartz_alloy_dust")
        .texture("jcy:item/certus_quartz_alloy/certus_quartz_alloy_dust")
    //PE塑料
    addItem("polyethylene_ingot")
        .texture("jcy:item/polyethylene/ingot")
    addItem("polyethylene_gear")
        .texture("jcy:item/polyethylene/gear")
    addItem("polyethylene_plate")
        .texture("jcy:item/polyethylene/plate")
})