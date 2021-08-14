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
    cursor:pointer;
`

const IconA = styled.a`
    color: white;
`

const Footer = () => {
    return (
        <FooterDiv>
            <IconDiv>
                <IconA href="https://www.linkedin.com/" target="_blank">
                    <i className="linkedin alternate icon"></i>
                </IconA>
            </IconDiv>
            <IconDiv>
                <IconA href="https://www.github.com/in/guilherme-reis-araujo-4a774014a/" target="_blank">
                    <i className="github alternate icon"></i>
                </IconA>
            </IconDiv>
        </FooterDiv>

    );
};

export default Footer;