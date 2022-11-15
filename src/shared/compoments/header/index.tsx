import {FC} from 'react';
import {HeaderStyle, Logo} from './styles';
import logo from '@assets/images/logo.svg';

type Props = {};

const Header: FC<Props> = () => {
  return (
    <HeaderStyle>
      <Logo src={logo} alt={'logo'} />
    </HeaderStyle>
  );
};

export default Header;
