export type Theme = {
	bg: string
	title: string
	subtitle: string
	themeIcon: string
	themeToggle: string
	underline: string
	buttonBg: string
	buttonTextColor: string
}

export const lightTheme: Theme = {
	bg: '#fff',
	title: '#1c1c1c',
	subtitle: '#333',
	themeIcon: '#1c1c1c',
	themeToggle: '#b3b3b3',
	underline: '#bcc4cf',
	buttonBg: '#447BD4',
	buttonTextColor: '#1c1c1c'
}

export const darkTheme: Theme = {
	bg: '#1c1c1c',
	title: '#fff',
	subtitle: '#b6b6b6',
	themeIcon: '#FFC940',
	themeToggle: '#FFC940',
	underline: '#FFC940',
	buttonBg: '#FFC940',
	buttonTextColor: '#1c1c1c'
}
