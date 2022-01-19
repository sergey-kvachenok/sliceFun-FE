import Headline from './Headline';
import { ListWrapper } from '../../../styles/containers';

const Headlines = ({ headlines = [] }) => {
  const content = headlines.map(headline => <Headline key={headline.title} headline={headline} />);

  return <ListWrapper className="margin-top">{content}</ListWrapper>;
};

export default Headlines;
