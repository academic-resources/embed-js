import extend from "just-extend"
import { insert } from "../utils/dom"

export default opts => {
	const defaultOptions = {
		replace: false
	}

	const pluginOptions = extend({}, defaultOptions, opts)

	if (!pluginOptions.regex) {
		throw new ReferenceError("regex is not passed in options.")
	}
	if (!pluginOptions.template) {
		throw new ReferenceError("template is not passed in options.")
	}

	const { regex, template } = pluginOptions
	return {
		async transform(options) {
			return extend(
				{},
				options,
				await insert(regex, template, options, pluginOptions)
			)
		}
	}
}
