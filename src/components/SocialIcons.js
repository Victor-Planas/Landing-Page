import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'
import { StyledSocialIcons } from './styles/SocialIcons.styled'
import React from 'react';

export default function SocialIcons() {
    return (
        <StyledSocialIcons>
            <li>
                <a href='https://twitter.com'>
                    <FaTwitter />
                </a>
            </li>
            <li>
                <a href='https://facebook.com'>
                    <FaFacebook />
                </a>
            </li>
            <li>
                <a href='https://instagram.com'>
                    <FaInstagram />
                </a>
            </li>
        </StyledSocialIcons>
    )
}