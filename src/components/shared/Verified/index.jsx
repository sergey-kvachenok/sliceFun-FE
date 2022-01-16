import styled from 'styled-components';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import { colors } from '../../../styles/theme';

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  .verified-box {
    background-color: ${() => colors.blue};
    display: inline-block;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }
`;

const Verified = () => {
  return (
    <Wrapper>
      <div className="verified-box">
        <CloseSharpIcon />
      </div>
      <span className="secondary-text">Verified</span>
    </Wrapper>
  );
};

export default Verified;
