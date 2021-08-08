import styled from "styled-components";

const FooterDiv = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 6%;
    background-color: #212121;
    color: white;
    text-align: center;
    display: flex;
`

const IconDiv = styled.div`
    font-size: 50px;
    padding: 30px;
` 

const Footer = () => {
    return (
        <FooterDiv>
            <IconDiv>
                <i className="linkedin alternate icon"></i>
            </IconDiv>
            <IconDiv>
                <i className="github alternate icon"></i>
            </IconDiv>
        </FooterDiv>
        
    );
};

export default Footer;