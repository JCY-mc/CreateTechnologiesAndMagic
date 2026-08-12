StartupEvents.registry("item", event => {
        //批量注册零件
    let partRegister = [
        "basic",
        "mechanism",
        "flux"
    ]
    partRegister.forEach((material) => {
        event.create(`${global.namespace}:${material}_part`, "basic")
            .texture(`${global.namespace}:item/mechanism/part/${material}`)
    })
})