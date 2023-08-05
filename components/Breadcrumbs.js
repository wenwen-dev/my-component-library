

import styled from 'styled-components';

const Breadcrumbs = ({ children }) => {

  return (
    <Wrapper aria-label='Breadcrumb'>
      <List>
        {children}
      </List>
    </Wrapper>
  )
}

const Wrapper = styled.nav` 
`

const List = styled.ol`
  list-style-type: none;
`

export default Breadcrumbs;