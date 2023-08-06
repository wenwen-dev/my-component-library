import { COLORS } from './constants'
import styled from 'styled-components'
import { roboto } from '@/utils/fonts'

const SIZES = {
  small: {
    '--padding': '6px 14px',
    '--fontSize': 16 / 16 + 'rem',
    '--borderRadius': 2 + 'px',
  },
  medium: {
    '--padding': '14px 22px',
    '--fontSize': 18 / 16 + 'rem',
    '--borderRadius': 2 + 'px',
  },
  large: {
    '--padding': '18px 34px',
    '--fontSize': 21 / 16 + 'rem',
    '--borderRadius': 4 + 'px',
  }
}



const Button = ({ variant, size, children }) => {
  let Component;
  switch (variant) {
    case 'outline':
      Component = OutlineButton;
      break;
    case 'ghost':
      Component = GhostButton;
      break;
    default:
      Component = FillButton;
  }

  const styles = SIZES[size];

  

  return (
    <Component className={roboto.className} style={styles}>
      {children}
    </Component>
  )
}

const ButtonBase = styled.button`
  font-size: var(--fontSize);
  padding: var(--padding);
  border-radius: var(--borderRadius);
  border: none;
  border: 2px solid transparent;
  text-transform: uppercase;

  &:focus {
    outline-offset: 4px;
    outline: 2px solid currentColor;
  }

  /* color: ${p => p.variant}; why not work? */
`

const FillButton = styled(ButtonBase)`
  background-color: ${COLORS.primary};
  color: ${COLORS.white};

  &:focus {
    outline-color: ${COLORS.primary};
  }

  &:hover {
    background-color: ${COLORS.primaryLight};
  }
`;

const OutlineButton = styled(ButtonBase)`
  background-color: ${COLORS.white};
  color: ${COLORS.primary};
  border: 2px solid currentColor;

  &:hover {
    background-color: ${COLORS.offwhite};
  }

`

const GhostButton = styled(ButtonBase)`
  color: ${COLORS.gray};
  background-color: ${COLORS.white};

  &:hover {
    background-color: ${COLORS.transparentGray15};
    color: ${COLORS.black};
  }

`
export default Button