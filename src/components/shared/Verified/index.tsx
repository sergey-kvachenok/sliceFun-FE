import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  .verified-box {
    border-radius: 3px;
    display: inline-block;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }
`;

type VerifiedProps = {
  verified: boolean;
};

const Verified = ({ verified }: VerifiedProps) => {
  const { t } = useTranslation(['verified']);

  return (
    <Wrapper>
      <div className="verified-box">
        {verified ? <CheckCircleIcon color="success" /> : <CancelIcon color="error" />}
      </div>
      <span className="secondary-text">{verified ? t('verified') : t('notVerified')}</span>
    </Wrapper>
  );
};

export default Verified;
