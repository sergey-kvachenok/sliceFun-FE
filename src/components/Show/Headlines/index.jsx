import styled from 'styled-components';
import Headline from './Headline';

const Wrapper = styled.div`
  margin-top: 20px;
`;

const Headlines = ({ headlines = [] }) => {
  const content = headlines.map(headline => <Headline headline={headline} />);

  return <Wrapper className="container-padding">{content}</Wrapper>;
};

export default Headlines;
