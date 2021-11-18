import  styled from 'styled-components';

const ModalStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: ${props => props.show ? "block;" : "none;"}
    text-align: center;

    & > section {
        position:fixed;
        background: ${props => props.theme.backgroundColor};
        width: 45%;
        height: auto;
        color: ${props => props.theme.color};
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
    }
`;

export default ModalStyle;

