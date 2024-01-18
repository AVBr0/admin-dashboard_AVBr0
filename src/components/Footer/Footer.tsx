import React from 'react';
import telegramLogo from '../../assets/telegram.svg';
import linkedInLogo from '../../assets/linkedin.svg';
import PhoneLogo from '../../assets/phone.svg';
import ContactIcon from './ContactIcon/ContactIcon';
import FooterWrapper from './Footer.styles';

const contactLinkedIn =
  'https://www.linkedin.com/in/aliaksei-vasiliuk-986222262/';
const contactTelegram = 'https://t.me/+375336996167';
const contactPhone = 'tel:+375336996167';

const Footer = () => {
  return (
    <FooterWrapper>
      <ContactIcon
        title="LinkedIn"
        logoSrc={linkedInLogo}
        contact={contactLinkedIn}
      />

      <ContactIcon
        title="Telegram"
        logoSrc={telegramLogo}
        contact={contactTelegram}
      />

      <ContactIcon title="Phone" logoSrc={PhoneLogo} contact={contactPhone} />
    </FooterWrapper>
  );
};

export default Footer;
