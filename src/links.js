import React from 'react';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';
import { TwitterOutlined, DiscordOutlined } from '@ant-design/icons';
import { Icon } from '@iconify/react';
import discordIcon from '@iconify-icons/simple-icons/discord';

const StyledContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const StyledLink = styled('a')(({ theme }) => ({
  marginBottom: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.primary.main,
  textDecoration: 'none',
  '&:hover': {
    color: theme.palette.primary.dark,
  },
}));

const IconWrapper = styled('span')(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h6.fontSize,
  fontWeight: 'bold',
}));

const LinksComponent = () => {
  return (
    <StyledContainer>
      <StyledLink href="https://twitter.com/JungleKingAI?t=TP8xtnQ5s2Z5pcmnHNajHQ&s=09" target="_blank">
        <IconWrapper>
          <TwitterOutlined style={{ color: 'blue', fontSize: '1.5em' }} />
        </IconWrapper>
        <Title variant="h6">Follow us on Twitter</Title>
      </StyledLink>
      <StyledLink href="https://discord.gg/S4t8Xsby" target="_blank">
        <IconWrapper>
          <Icon icon={discordIcon} color="#7289DA" width="1.5em" height="1.5em" />
        </IconWrapper>
        <Title variant="h6">Join us on Discord</Title>
      </StyledLink>
    </StyledContainer>
  );
};

export default LinksComponent;

