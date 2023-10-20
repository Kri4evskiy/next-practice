import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
	 * {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}

	html,
	body {
		max-width: 100vw;
		height: 100%;
		overflow-x: hidden;
	}
	main {
		display: flex;
		min-height: calc(100vh - 58px);
	}
	a {
		color: inherit;
		text-decoration: none;
	}
`

export default GlobalStyles
