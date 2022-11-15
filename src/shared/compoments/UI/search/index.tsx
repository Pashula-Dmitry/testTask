import {FC} from 'react';

import {ContainerField, SearchField} from './styles';

type Props = {
  [key: string]: any;
};

const Search: FC<Props> = (props) => {
  return (
    <ContainerField>
      <label htmlFor={'search'}>
        <SearchField id={'search'} {...props} />
      </label>
    </ContainerField>
  );
};

export default Search;
