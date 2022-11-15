import {FC} from 'react';

import {
  CardContainer,
  Image,
  ImageDescription,
  DetailInfoSection,
  ImageContainer,
  VideoContaoner,
  TextBold,
} from './styles';

import {Launcher} from '@shared/types';

type Props = {
  item: Launcher;
};

const DetailsCard: FC<Props> = (props) => {
  const {item} = props;

  return (
    <CardContainer>
      <ImageContainer>
        <Image src={item.links.mission_patch} alt={'launch'} />
        <ImageDescription>
          <p>
            <TextBold>Name:</TextBold> {item.rocket.rocket_name}
          </p>
          <p>
            <TextBold>Year:</TextBold> {item.launch_year}
          </p>
        </ImageDescription>
      </ImageContainer>
      <DetailInfoSection>
        <VideoContaoner>
          <iframe
            width="420"
            height="315"
            src={`https://www.youtube.com/embed/${item.links.youtube_id}`}
            frameBorder="0"
            title={'custom text'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          >
          </iframe>
        </VideoContaoner>
        <p style={{maxWidth: '400px'}}>
          <TextBold>Details:</TextBold> {item.details}
        </p>
        <p>
          <TextBold>Rocket name:</TextBold> {item.rocket.rocket_name}
        </p>
        <p>
          <TextBold>Flight number:</TextBold> {item.flight_number}
        </p>
        <p>
          <TextBold>Orbit:</TextBold>{' '}
          {item.rocket.second_stage.payloads[0].orbit}
        </p>
        <p>
          <TextBold>Launch success:</TextBold>{' '}
          {item.launch_success ? 'Yes' : 'No'}
        </p>
      </DetailInfoSection>
    </CardContainer>
  );
};

export default DetailsCard;
