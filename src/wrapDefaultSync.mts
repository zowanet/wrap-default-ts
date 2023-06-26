export default function wrapDefaultSync<
	T extends (
		...args: Array<any>
	) => any,
>(
	options: {
		callback: T;
		defaultValue?: Awaited<ReturnType<T>>;
	},
): (
	...args: Parameters<T>
) => (
	ReturnType<T>
) {
	if (!Object.hasOwn(options, 'callback')) {
		throw new Error('wrapDefaultSync(): Missing argument \'callback\'; expected function');
	} else if (typeof options.callback !== 'function') {
		throw new Error('wrapDefaultSync(): Invalid argument \'callback\'; expected function');
	} else {
		return (
			...args: Parameters<T>
		): (
			ReturnType<T>
		) => {
			try {
				return (options.callback)(...args);
			} catch (_: unknown) {
				return options.defaultValue as Awaited<ReturnType<T>>;
			}
		};
	}
}
