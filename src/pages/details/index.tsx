import {FC, useEffect} from 'react';
import Modal from '@shared/compoments/modal';
import {useNavigate, useParams} from 'react-router-dom';
import DetailsCard from '@shared/compoments/details-card';
import {useAppDispatch} from '@shared/hooks/useAppDispatch';
import {fetchDetailsLaunch} from '@store/launchers/actions';
import {useTypedSelector} from '@shared/hooks/useTypedSelector';
import Loader from '@shared/compoments/loader';

type Props = {};

const Details: FC<Props> = () => {
  const detailsLauncher = useTypedSelector(
    (state) => state.launches.detailsLauncher,
  );
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {id} = useParams();

  useEffect(() => {
    dispatch(fetchDetailsLaunch(+id));
  }, [id, dispatch]);

  return (
    <div>
      <Modal isOpen={true} onClose={() => navigate(-1)} title={'Details'}>
        <>
          {detailsLauncher === null ? (
            <Loader message={'Wait loading data'} mode={'overlay'} />
          ) : (
            <DetailsCard item={detailsLauncher} />
          )}
        </>
      </Modal>
    </div>
  );
};

export default Details;
