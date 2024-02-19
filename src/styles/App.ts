import styled from 'styled-components';

export const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;

  > * {
    transition: color .3s, background-color .3s;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    /* color: {({ theme }) => theme.colors.header.fg};
    background-color: {({ theme }) => theme.colors.header.bg}; */

    button {
      border: none;
      padding: .5rem 1rem;
      border-radius: .5rem;
      color: ${({ theme }) => theme.colors.button.red['700']};
      background-color: rgba(255, 255, 255, .3);
      box-shadow: 0 0 4px 1px rgb(0 0 0 / 20%);
      cursor: pointer;

    }
  }

  main {
    flex: 1;
    padding: 1rem;
    /* color: {({ theme }) => theme.colors.body.fg};
    background-color: {({ theme }) => theme.colors.body.bg}; */
  }
`;