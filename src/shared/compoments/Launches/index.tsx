import {FC, useEffect} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import {GridContainer, LoaderWrapper} from '@shared/compoments/Launches/styles';
import {useTypedSelector} from '@shared/hooks/useTypedSelector';
import Card from '@shared/compoments/card';
import Loader from '@shared/compoments/loader';
import {useAppDispatch} from '@shared/hooks/useAppDispatch';
import {fetchLaunches} from '@store/launchers/actions';
import EmptyList from '../EmtyList';
import {parseFilters} from '@shared/helpers/parseFilters';
import {LIMIT} from '@shared/constants';
import {getFilters, getLaunches, getLoading, getOffset, getTotal} from '@store/launchers/selectors';

type Props = {};

const Launches: FC<Props> = (_props) => {
  const dispatch = useAppDispatch();
  const listLaunchers = useTypedSelector(getLaunches);
  const isLoading = useTypedSelector(getLoading);
  const total = useTypedSelector(getTotal);
  const offset = useTypedSelector(getOffset);
  const filters = useTypedSelector(getFilters);
  const hasAnyFilter = !!(
    filters.rocket_name.length ||
    filters.orbit.length ||
    filters.launch_success
  );

  useEffect(() => {
    dispatch(
      fetchLaunches({
        offset,
        limit: LIMIT,
        ...parseFilters(filters, hasAnyFilter),
      }),
    );
  }, [dispatch]);

  const fetchMoreData = () => {
    dispatch(
      fetchLaunches({
        offset: listLaunchers.length,
        limit: LIMIT,
        ...parseFilters(filters, hasAnyFilter),
      }),
    );
  };

  if (isLoading && !listLaunchers.length) {
    return <Loader message={'Wait loading'} mode={'overlay'} />;
  }

  return (
    <>
      {isLoading && (
        <LoaderWrapper>
          <Loader message={'Wait loading...'} mode={'block'} />
        </LoaderWrapper>
      )}
      {listLaunchers.length ? (
        <InfiniteScroll
          dataLength={listLaunchers.length}
          next={fetchMoreData}
          hasMore={listLaunchers.length < total}
          loader={<h4>Loading...</h4>}
          scrollThreshold={0.9}
          style={{overflow: 'visible'}}
        >
          <GridContainer>
            {listLaunchers.map((launcher) => (
              <Card key={launcher.flight_number} item={launcher} />
            ))}
          </GridContainer>
        </InfiniteScroll>
      ) : (
        <EmptyList text={'List is empty'} />
      )}
    </>
  );
};

export default Launches;
