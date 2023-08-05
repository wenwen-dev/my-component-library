import styled from 'styled-components';

const Crumb = ({ href, isCurrentPage, children }) => {
  return (
    <Wrapper>
      <Link 
        href={href}
        aria-current={isCurrentPage ? 'page' : undefined}
      >
        {children}
      </Link>
    </Wrapper>)
}

const Wrapper = styled.li`
  display: inline-block;
  --spacing: 8px;

  &:not(:first-of-type) {
    margin-left: var(--spacing);

    &::before {
      content: '/';
      margin-right: var(--spacing);
      opacity: 0.25;
    }
  }

  /* &:not(:first-of-type)::before {
    content: '/';
  } */
`;

const Link = styled.a`
  text-decoration: none;
  /* color: black; */
  color: inherit;

  &:hover {
    /* text-decoration: underline; */
    text-decoration: revert;
  }
`
export default Crumb;