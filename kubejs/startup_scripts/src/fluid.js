StartupEvents.registry("fluid", (event) => {
	global.namespace = "jcy"
	/**
	 * 
	 * @param {string} name 注册id
	 * @returns 
	 */
	function addAloneFluid(name) {
		let builder = event.create(`${global.namespace}:${name}`)

		builder.flowingTexture(`${global.namespace}:fluid/${name}/flow`)
		builder.stillTexture(`${global.namespace}:fluid/${name}/still`)
		builder.renderType("translucent")

		//FluidBucketItemModel.generate(name)

		console.log(`${global.namespace}:${name}已注册!`)

		return builder
	}

	/**
	 * 
	 * @param {string} name 注册id
	 * @param {Color_} color 着色色号
	 * @returns 
	 */
	function addColorFluid(name, color) {
		let builder = event.create(`${global.namespace}:${name}`)

		builder.thinTexture(color)
		builder.bucketColor(color)
		builder.flowingTexture(`${global.namespace}:fluid/solution/flow`)
		builder.stillTexture(`${global.namespace}:fluid/solution/still`)
		builder.renderType("translucent")

		//FluidBucketItemModel.generate(name)

		return builder
	}//by cim
	addColorFluid("naphtha", 0xe4d189)
	addColorFluid("kerosene", 0xcdb349)
	addColorFluid("heavy_oil", 0x282410)
	addColorFluid("cracked_naphtha", 0xe4d189)
	addAloneFluid("steam").noBlock()
	addAloneFluid("sea_water")
	//溶液/气体（液化）
	addColorFluid("ethylene",0xe75ce0).noBlock()
	addColorFluid("polyethylene",0xf58aef).noBlock()

})