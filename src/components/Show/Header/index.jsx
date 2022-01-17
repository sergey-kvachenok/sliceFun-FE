import styled from 'styled-components';
import Button from '../../shared/Button';
import Info from './Info';
import { colors } from '../../../styles/theme';

const Wrapper = styled.div`
  background-image: url(${({ imageSrc }) => imageSrc});
  height: 250px;
  position: relative;
  background-color: ${colors.darkBlue1};
  background-position: center;
  background-size: auto;

  .content-container {
    position: absolute;
    bottom: -20px;
  }
`;

const Panel = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Header = ({ mainImage, title, verified }) => {
  return (
    <Wrapper className="container-padding" imageSrc={mainImage}>
      <Panel>
        {/* Search */}
        <div className="buttons">
          <Button variant="outlined" title="Manage subscription" customStyles={{ mr: 2 }} />
          <Button variant="outlined" title="Share" />
        </div>
      </Panel>
      <Info imageSrc={mainImage} title={title} verified={verified} />
    </Wrapper>
  );
};

export default Header;
