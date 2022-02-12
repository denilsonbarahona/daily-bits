import styled from 'styled-components'

export const ProfileContainer = styled.div`
    text-align: center;
    color: var(--white);
`

export const ProfileName = styled.p`
    font: var(--body1-bold);
    margin: 0;
`

export const ProfileEmail = styled.p`
    font: var(--body1-regular);
    margin: 0;
`

export const LogOutButton = styled.button`
    color: var(--red);
    background: transparent;
    font:var(--button-button);
    border: none;
    margin-block-start: 1.5rem;
    cursor: pointer;
    
    &:active{
        transform: scale(.95);
    }
`

export const ImageProfile = styled.img`
    inline-size: 5rem;
    block-size: 5rem;
    vertical-align: middle;
    margin: 0; 
    object-fit: cover; 
`