import styled from 'styled-components';

export const AppWrapper = styled.div`
    display: grid;
    background-color: ${props => props.theme.backgroundColor};
    padding: 16px;
    width: 100vw;
    height: 100%;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "timeline form";
    
    @media ${props => props.theme.media.desktop} {
        padding: 32px;
        width: 100vw;
        height: 100vh;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 3fr;
        grid-template-areas: 
            "timeline timeline timeline"
            ". form .";
        
    }
`;

export const FormWrapper = styled.section`
    grid-area: form;
`;

export const FormInput = styled.input`
    display: block;
    height: 32px;
    width: 100%;
    border-radius: 4px;
    border: none;
    padding: 4px;
    background-color: ${props => props.theme.inactiveColor};

    :focus {
        outline: none;
    }

    ::placeholder {
        font-size: .7rem;
    }
`;

const BaseButton = styled.button`
    width: 100%;
    height: 32px;
    text-transform: uppercase;
    font-weight: bold;
    border-radius: 4px;
    display: block;
    margin-top: 8px;
    cursor: pointer;

    :focus {
        outline: none;
    }
`;

export const FormButton = styled(BaseButton)`
    color: ${props => props.theme.backgroundColor};
    border: none;
    background-color: ${props => props.theme.primaryColor};
`;

export const NextStatusButton = styled(BaseButton)`
    border: 2px solid ${props => props.theme.primaryColor};
    color: ${props => props.theme.primaryColor};
    background-color: transparent;
`;