import {FC} from 'react';

import {
  CardContainer,
  Image,
  ImageDescription,
  Linker,
  TextBold,
} from './styles';

import {Launcher} from '@shared/types';
import defaultImg from '@assets/images/imageDefault.png';

type Props = {
  item: Launcher;
};

const Card: FC<Props> = (props) => {
  const {item} = props;

  return (
    <CardContainer>
      <Linker to={`${item.flight_number}/popup`}>
        <Image src={item.links.mission_patch ?? defaultImg} alt={'launch'} />
      </Linker>
      <ImageDescription>
        <p>
          <TextBold>Name: </TextBold> {item.rocket.rocket_name}
        </p>
        <p>
          <TextBold>Year: </TextBold> {item.launch_year}
        </p>
        <p>
          <TextBold>Orbit: </TextBold>
          {item.rocket.second_stage.payloads.map((payload) => payload.orbit).join(', ')}
        </p>
        <p>
          <TextBold>Launch success: </TextBold>
          {item.launch_success ? 'Yes' : 'No'}
        </p>
      </ImageDescription>
    </CardContainer>
  );
};

export default Card;
