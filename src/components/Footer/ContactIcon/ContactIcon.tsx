import { Typography } from 'antd';
import baseTheme from '../../../theme';

type ContactIconType = {
  logoSrc: string;
  title: string;
  contact: string;
};

const ContactIcon = ({ logoSrc, title, contact }: ContactIconType) => {
  const IconStyle = {
    display: 'flex',
    gap: '5px',
    color: baseTheme.colors.font,
  } as const;

  return (
    <Typography.Link style={IconStyle} href={contact} target="_blank">
      <img src={logoSrc} width={25} alt={title} />
      {title}
    </Typography.Link>
  );
};

export default ContactIcon;
