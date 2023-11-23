export const adjustToCents = (num: number) => {
	let result = Math.ceil(num * 100) / 100
	return result.toFixed(2)
}
