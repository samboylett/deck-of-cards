import styled from 'styled-components';

export interface HeartProps {}

export const Heart = styled.div`
    color: red;

    &::before {
        content: '\\2764';
    }
`
