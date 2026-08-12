StartupEvents.registry("block", event => {
    global.namespace = "jcy"
    /**
     * 
     * @param {String} name 注册id
     * @param 
     */
    function addBlock(name, type) {
        if (type === undefined) {
            return event.create(`${global.namespace}:${name}`)
        }
        return event.create(`${global.namespace}:${name}`, type)
    }
    addBlock("smeltery_controller_incomplete")
        .soundType('stone')
    addBlock("ae_casing")
        .textureAll("jcyblock/casing/ae/ae_casing")
        .defaultCutout()
        .soundType('glass')
    addBlock("thermal_incomplete")
        .soundType('stone')
    //event.create("jcy:smeltery_controller_incomplete", "basic").soundType('stone')
    //event.create("jcy:ae_casing", "basic")
    //.soundType('glass')
    //.defaultCutout()
    //.texture(`${global.namespace}:block/casing/ae/ae_casing`)
})