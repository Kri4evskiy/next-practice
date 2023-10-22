import styled from 'styled-components'

export const StyledButton = styled.button<{ width?: number }>`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding: 8px 24px 8px 24px;
	border-radius: 12px;
	width: ${({ width }) => (width ? `${width}px;` : '120px;')};

	font-style: normal;
	font-size: 18px;
	font-weight: 600;
	line-height: 20px;
	cursor: pointer;
	box-sizing: border-box;

	background-color: ${({ theme }) => theme.buttonBg};
	color: ${({ theme }) => theme.buttonTextColor};

	:hover {
		opacity: 0.7;
	}
`
