import styled from 'styled-components';
import { contentWidthDesktop, contentWidthMobile, desktop } from '../../utils/constants';
import { ASurfaceActionSubtle } from '@navikt/ds-tokens/dist/tokens';

export const Grid = styled.section`
  display: grid;
  grid-template-columns: minmax(auto, ${contentWidthMobile}px);
  row-gap: 1rem;
  justify-content: center;

  padding: 1rem 0.5rem;

  @media (min-width: ${desktop}px) {
    grid-template-columns: minmax(auto, ${contentWidthDesktop}px);
    row-gap: 2.5rem;
    padding: 2rem 0.5rem;
  }
`;

export const Stripe = styled(Grid)`
  background-color: ${ASurfaceActionSubtle};
`;
