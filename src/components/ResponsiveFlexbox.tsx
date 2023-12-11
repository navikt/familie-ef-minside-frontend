import styled from 'styled-components';
import { fullSkjermBredde995 } from '../utils';

interface Props {
  $direction?: 'row' | 'column';
  $gap?: '0.5rem' | '1rem' | '2rem';
  $justify?:
    | 'start'
    | 'center'
    | 'end'
    | 'space-around'
    | 'space-between'
    | 'space-evenly';
  $align?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  $padding?: '0.5rem' | '1rem' | '2rem';
  $paddingBottom?: '0.5rem' | '1rem' | '2rem';
}

const ResponsiveFlexbox = styled.div<Props>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(props) => props.$direction};
  gap: ${(props) => props.$gap};
  justify-content: ${(props) => props.$justify};
  align-items: ${(props) => props.$align};
  padding: ${(props) => props.$padding};
  padding-bottom: ${(props) => props.$paddingBottom};

  @media (max-width: ${fullSkjermBredde995}px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default ResponsiveFlexbox;
