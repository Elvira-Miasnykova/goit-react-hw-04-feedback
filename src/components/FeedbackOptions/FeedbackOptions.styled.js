import styled from '@emotion/styled';

export const Button = styled.button`

padding-top: ${p => p.theme.space[1]}px;
padding-bottom: ${p => p.theme.space[1]}px;
padding-left: ${p => p.theme.space[3]}px;
padding-right: ${p => p.theme.space[3]}px;

font-family: ${p => p.theme.fonts.monospace};
font-size: ${p => p.theme.fontSizes[1]}px;
color: ${p => p.theme.colors.black};
background-color: ${p => p.theme.colors.white};
border: ${p => p.theme.borders.regular};
border-radius: ${p => p.theme.radii.regular};
cursor: pointer;
/* transaction: background-color, 250 ms, linear; */

:hover{
    color: ${p => p.theme.colors.white};
background-color: ${p => p.theme.colors.accent};
}
`;