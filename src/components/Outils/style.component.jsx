import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LinkStyle = styled(Link)`
    text-decoration: none;
    color: white;
    &:hover{
        color: #007BFF;
    }
`

export { LinkStyle };