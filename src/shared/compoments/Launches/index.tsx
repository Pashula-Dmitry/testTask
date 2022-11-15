import {FC, useEffect} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import {GridContainer} from '@shared/compoments/Launches/styles';
import {useTypedSelector} from '@shared/hooks/useTypedSelector';
import Card from '@shared/compoments/card';
import Loader from '@shared/compoments/loader';
import {useAppDispatch} from '@shared/hooks/useAppDispatch';
import {fetchLaunches} from '@store/launchers/actions';
import {Filters} from '@shared/types';
import EmptyList from '../EmtyList';
import {FiltersCut} from '@store/launchers/reducer';

type Props = {};

const buildFilters = (filters: FiltersCut, condition: boolean) => {
  const params: Filters = {};

  if (condition) {
    params.rocket_name = filters.rocket_name;
    params.orbit = filters.orbit;
    if (filters.launch_success) {
      params.launch_success = filters.launch_success;
    }
  }
  return params;
};

const Launches: FC<Props> = (_props) => {
  const dispatch = useAppDispatch();

  const listLaunchers = useTypedSelector(
    (state) => state.launches.listLaunchers,
  );
  const isLoading = useTypedSelector((state) => state.launches.loading);
  const total = useTypedSelector((state) => state.launches.total);
  const limit = useTypedSelector((state) => state.launches.limit);
  const offset = useTypedSelector((state) => state.launches.offset);
  const filters = useTypedSelector((state) => state.launches.filters);
  const hasAnyFilter = !!(
    filters.rocket_name.length ||
    filters.orbit.length ||
    filters.launch_success
  );

  useEffect(() => {
    dispatch(
      fetchLaunches({
        limit,
        offset,
        ...buildFilters(filters, hasAnyFilter),
      }),
    );
  }, [dispatch]);

  const fetchMoreData = () => {
    dispatch(
      fetchLaunches({
        offset: listLaunchers.length,
        limit,
        ...buildFilters(filters, hasAnyFilter),
      }),
    );
  };

  if (isLoading && !listLaunchers.length) {
    return <Loader message={'Wait loading'} mode={'overlay'} />;
  }

  return (
    <>
      {listLaunchers.length ? (
        <InfiniteScroll
          dataLength={listLaunchers.length}
          next={fetchMoreData}
          hasMore={listLaunchers.length < total && !hasAnyFilter}
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
