export default function wrapDefaultAsync<
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
	Promise<
		Awaited<
			ReturnType<T>
		>
	>
) {
	if (!Object.hasOwn(options, 'callback')) {
		throw new Error('wrapDefaultAsync(): Missing argument \'callback\'; expected function');
	} else if (typeof options.callback !== 'function') {
		throw new Error('wrapDefaultAsync(): Invalid argument \'callback\'; expected function');
	} else {
		return async (
			...args: Parameters<T>
		): (
			Promise<
				Awaited<
					ReturnType<T>
				>
			>
		) => {
			try {
				return await (options.callback)(...args);
			} catch (_: unknown) {
				return options.defaultValue as Awaited<ReturnType<T>>;
			}
		};
	}
}
