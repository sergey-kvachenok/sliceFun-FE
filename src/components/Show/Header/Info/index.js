import styled from 'styled-components';
import Button from '../../../shared/Button';
import Verified from '../../../shared/Verified';

const Wrapper = styled.div`
  .content-container {
    display: flex;
    justify-content: 'space-between';
  }
`;

const Info = ({ imageSrc, title, verified }) => {
  return (
    <Wrapper className="info">
      <div className="content-container">
        <div className="header-poster">
          <img height="120" width="120" src={imageSrc} alt="Podcast poster" />
        </div>

        <div className="info">
          <Verified verified={verified} />

          <div className="primary-text">{title}</div>
          <Button variant="outlined" title="Follow" customStyles={{ mr: 2, mb: 2 }} />
          <Button variant="outlined" title="Some text is here" customStyles={{ mr: 2, mb: 2 }} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Info;
