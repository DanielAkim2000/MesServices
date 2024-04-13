import styled from 'styled-components';
import { Link } from 'react-router-dom';

//Barre pour separer
const separator = (props) => {
    const Div = styled.div`
    width: ${props.width};
    background: ${props.color};
`
    return (
        <Div className='separator mt-4 mb-4 mx-auto'>
            
        </Div>
    );
};

//Styliser les Link de react-router dom
const LinkStyle = styled(Link)`
    text-decoration: none;
    color: white;
    &:hover{
        color:rgb(25, 135, 84);
    }
`

//const styleda pour stylise mes liens
const styledA = styled.a`
    text-decoration: none;
    color: black;
    &:hover{
        color:rgb(25, 135, 84);
    };
    &:active{
        color:#007BFF;
    }
`

export { LinkStyle, separator, styledA  };

