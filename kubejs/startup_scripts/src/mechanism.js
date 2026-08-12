StartupEvents.registry("item", event => {
    //批量注册构件//by cmi
    let mechanismRegister = [
        "wooden",
        "stone",
        "iron",
        "copper",
        "andesite",
        "bronze",
        "thermal",
        "resonant",
        "smart",
        "reinforced",
        "gold"
    ]
    mechanismRegister.forEach((material) => {
        event.create(`${global.namespace}:${material}_mechanism`, "basic")
            .texture(`${global.namespace}:item/mechanism/mechanism/${material}`)
        event.create(`${global.namespace}:${material}_mechanism_incomplete`, "create:sequenced_assembly")
            .texture(`${global.namespace}:item/mechanism/incomplete/${material}`)
    })
    //无（自己专属半成品）半成品的构件
    event.create(`${global.namespace}:infernal_mechanism`, "basic")
        .texture(`${global.namespace}:item/mechanism/mechanism/infernal`)
    event.create(`${global.namespace}:better_mechanism_precision`, "basic")
        .texture(`${global.namespace}:item/mechanism/mechanism/precision`)
})
