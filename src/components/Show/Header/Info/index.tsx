import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Button from '../../../shared/Button';
import Verified from '../../../shared/Verified';
import { ImageWrapper } from '../../../../styles/containers';

const Wrapper = styled.div`
  .content-container {
    display: flex;
    justify-content: 'space-between';
  }
`;

const Info = ({ imageSrc, title, verified }) => {
  const { t } = useTranslation(['common']);

  return (
    <Wrapper>
      <div className="content-container">
        <ImageWrapper height={120} width={120}>
          <img height="120" width="120" src={imageSrc} alt="Podcast poster" />
        </ImageWrapper>

        <div>
          <Verified verified={verified} />

          <div className="primary-text">{title}</div>
          <Button variant="outlined" title={t('follow')} customStyles={{ mr: 2, mb: 2 }} />
          <Button variant="outlined" title={t('addPlaylist')} customStyles={{ mr: 2, mb: 2 }} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Info;
