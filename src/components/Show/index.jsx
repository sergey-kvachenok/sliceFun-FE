import { useGetShowsByIdQuery } from '../../store/queries/shows';
import styled from 'styled-components';
import Header from './Header';
import Headlines from './Headlines';
import Episodes from './Episodes';

const Wrapper = styled.div`
  max-width: 600px;
  width: 100%;
`;

const Show = ({ id = 3 }) => {
  const { data, isLoading } = useGetShowsByIdQuery(id);

  if (isLoading) return <div>Loading...</div>;
  const { verified, mainImage, title, headlines, latest, premium, video } = data;

  return (
    <Wrapper>
      <Header verified={verified} title={title} mainImage={mainImage} />
      <Headlines headlines={headlines} />
      <Episodes latestEpisodes={latest} premiumEpisodes={premium} video={video} />
    </Wrapper>
  );
};

export default Show;
