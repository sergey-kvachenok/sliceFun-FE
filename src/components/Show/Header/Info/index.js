import styled from 'styled-components';
import Button from '../../../shared/Button';
import Verified from '../../../shared/Verified';

const Wrapper = styled.div`
  .poster {
    height: 120px;
    margin-right: 15px;

    img {
      height: inherit;
    }
  }

  .content-container {
    display: flex;
    justify-content: 'space-between';
  }
`;

const Info = ({ imageSrc, title, verified }) => {
  return (
    <Wrapper className="info">
      <div className="content-container">
        <div className="poster">
          <img src={imageSrc} alt="Podcast poster" />
        </div>

        <div className="info">
          <Verified />

          <div className="primary-text">{title}</div>
          <Button title="Follow" customStyles={{ mr: 2 }} />
          <Button title="Some text is here" customStyles={{ mr: 2 }} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Info;
