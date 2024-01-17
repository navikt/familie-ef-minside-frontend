import styled, { css } from 'styled-components';
import { skjermBreddeMax } from '../utils';
import { BodyShort } from '@navikt/ds-react';

interface Props {
  $direction?: 'row' | 'column';
  $gap?: '0.5rem' | '1rem' | '1.5rem' | '2rem' | '2.5rem';
  $justify?:
    | 'start'
    | 'center'
    | 'end'
    | 'space-around'
    | 'space-between'
    | 'space-evenly';
  $align?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  $padding?: '0.5rem' | '1rem' | '1.5rem' | '2rem' | '2.5rem';
  $paddingTop?: '0.5rem' | '1rem' | '1.5rem' | '2rem' | '2.5rem';
  $paddingBottom?: '0.5rem' | '1rem' | '1.5rem' | '2rem' | '2.5rem';
  $responsive?: boolean;
}

const ResponsiveBodyShort = styled(BodyShort)<Props>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(props) => props.$direction};
  gap: ${(props) => props.$gap};
  justify-content: ${(props) => props.$justify};
  align-items: ${(props) => props.$align};
  padding: ${(props) => props.$padding};
  padding-top: ${(props) => props.$paddingTop};
  padding-bottom: ${(props) => props.$paddingBottom};

  ${(props) =>
    props.$responsive === true &&
    css`
      @media (max-width: ${skjermBreddeMax - 1}px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `}
`;

export default ResponsiveBodyShort;
