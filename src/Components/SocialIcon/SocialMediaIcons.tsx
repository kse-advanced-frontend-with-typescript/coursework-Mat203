import React from 'react';
import styles from './styles.css';

import instagramSvg from '../../assets/instagram.svg';
import tiktokSvg from '../../assets/tiktok.svg';
import facebookSvg from '../../assets/facebook.svg';
import twitterSvg from '../../assets/twitter.svg';

type SocialMediaIconsProps = {
    children?: React.ReactNode;
    onClickIcon?: () => void;
};

export const SocialMediaIcons: React.FC<SocialMediaIconsProps> = ({ children, onClickIcon }) => {
    return (
        <div className={styles.socialMediaIcons}>
            {children || (
                <>
                    <InstagramIcon onClick={onClickIcon} />
                    <TikTokIcon onClick={onClickIcon} />
                    <FacebookIcon onClick={onClickIcon} />
                    <TwitterIcon onClick={onClickIcon} />
                </>
            )}
        </div>
    );
};

type IconProps = {
    onClick?: () => void;
};

export const InstagramIcon: React.FC<IconProps> = ({ onClick }) => {
    return (
        <button className={styles.iconButton} onClick={onClick}>
            <img src={instagramSvg} alt="Instagram" className={styles.iconImage} />
        </button>
    );
};

export const TikTokIcon: React.FC<IconProps> = ({ onClick }) => {
    return (
        <button className={styles.iconButton} onClick={onClick}>
            <img src={tiktokSvg} alt="TikTok" className={styles.iconImage} />
        </button>
    );
};

export const FacebookIcon: React.FC<IconProps> = ({ onClick }) => {
    return (
        <button className={styles.iconButton} onClick={onClick}>
            <img src={facebookSvg} alt="Facebook" className={styles.iconImage} />
        </button>
    );
};

export const TwitterIcon: React.FC<IconProps> = ({ onClick }) => {
    return (
        <button className={styles.iconButton} onClick={onClick}>
            <img src={twitterSvg} alt="Twitter" className={styles.iconImage} />
        </button>
    );
};
