ClientEvents.lang('zh_cn', (event) => {
	//抄cmi（//by cmi)
	addFluidLanguage("naphtha", "石脑油")
	addFluidLanguage("kerosene", "煤油")
	addFluidLanguage("heavy_oil", "重油")
	addFluidLanguage("cracked_naphtha", "裂化石脑油")
	addFluidLanguage("steam", "蒸汽")
	addFluidLanguage("sea_water", "海水")
	addFluidLanguage("ethylene", "乙烯")
	addFluidLanguage("polyethylene", "液化聚乙烯")


	addMechanismPartLang("basic", "基础")
	addMechanismPartLang("mechanism", "机械")
	addMechanismPartLang("flux", "通量")


	addAlloyLang("certus_quartz", "赛特斯")
	//addItemLang("certus_quartz_alloy_dust", "赛特斯合金粉")
	addItemLang("better_mechanism_precision", "更加精密的精密构件")
	addItemLang("a1", "test")


	addCasingLang("ae", "AE")

	addBockLang("thermal_incomplete","热力机器（半成品）")

//构件
	let mechanismGroup = [
		["wooden", "木制"],
		["infernal", "酷热"],
		["andesite", "安山"],
		["stone", "石质"],
		["iron", "铁质"],
		["copper", "流体"],
		["gold", "金质"],
		["thermal", "热力"],
		["reinforced", "通量"],
		["resonant", "谐振"],
		["smart", "智能"],
		["bronze", "蒸汽"]
	]
	mechanismGroup.forEach(([material, name]) => {
		addMechanismLang(material, name)
	})//by cmi
//锭
	let ingotGroup = [
		["polyethylene", "聚乙烯"]
	]
	ingotGroup.forEach(([material, name]) => {
		addIngotLang(material, name)
	})
//板
	let PlateGroup = [
		["polyethylene", "聚乙烯"]
	]
	PlateGroup.forEach(([material, name]) => {
		addPlateLang(material, name)
	})
//齿轮
	let gearGroup = [
		["polyethylene", "聚乙烯"]
	]
	gearGroup.forEach(([material, name]) => {
		addGearLang(material, name)
	})
//粉
	let dustGroup = [
		["certus_quartz_alloy", "赛特斯合金"]
	]
	dustGroup.forEach(([material, name]) => {
		addDustLang(material, name)
	})

	function addFluidLanguage(key, value) {
		event.add(`fluid.${global.namespace}.${key}`, value)
		event.add(`block.${global.namespace}.${key}`, value)
		event.add(`item.${global.namespace}.${key}_bucket`, `${value}桶`)//by cmi
	}
	function addItemLang(key, value) {
		event.add(`item.${global.namespace}.${key}`, value)
	}//by cmi
	function addBockLang(key, value) {
		event.add(`block.${global.namespace}.${key}`, value)
	}
	function addMechanismLang(material, value) {
		event.add(`item.${global.namespace}.${material}_mechanism`, `${value}构件`)
		event.add(`item.${global.namespace}.${material}_mechanism_incomplete`, `${value}构件(半成品)`)
	}//by cmi
	function addMechanismPartLang(material, value) {
		event.add(`item.${global.namespace}.${material}_part`, `${value}零件`)
	}//by cmi
	function addCasingLang(material, value) {
		event.add(`block.${global.namespace}.${material}_casing`, `${value}机壳`)
	}
	function addIngotLang(material, value) {
		event.add(`item.${global.namespace}.${material}_ingot`, `${value}锭`)
	}
	function addPlateLang(material, value) {
		event.add(`item.${global.namespace}.${material}_plate`, `${value}板`)
	}
	function addGearLang(material, value) {
		event.add(`item.${global.namespace}.${material}_gear`, `${value}齿轮`)
	}
	function addDustLang(material, value) {
		event.add(`item.${global.namespace}.${material}_dust`, `${value}粉`)
	}
	function addAlloyLang(material, value) {
		event.add(`item.${global.namespace}.${material}_alloy`, `${value}合金`)
	}

})