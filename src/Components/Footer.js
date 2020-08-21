import React from 'react'
import styled from 'styled-components';

function Footer(propes)
{

    return (
        <FooterContainer className="main-footer">
            <div className="footer-middle">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <h4>Contact Us</h4>
                        <ul className="list-unstyled">
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>Users Details</h4>
                        <ul className="list-unstyled">
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                        </ul>
                    </div>
                </div>
                <div className='footer-bottom'>
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()} Mubeen - All Rights
                    </p>
                </div>
            </div>
            </div>
        </FooterContainer>
);
}


export default Footer


const FooterContainer = styled.footer`
.footer-middle {
    margin-top:10%;
    background: #343a40;
    padding-top: 40px;
    color: #fff;
}
.footer-bottom{
    padding-top: 50px;
    padding-bottom: 3px;
}
`;