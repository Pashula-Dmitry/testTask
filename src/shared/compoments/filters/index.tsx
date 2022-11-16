import {ChangeEvent, FC, useEffect, useMemo, useRef} from 'react';
import {DebounceInput} from 'react-debounce-input';
import {useFormik} from 'formik';
import Select from 'react-select';
import Search from '../UI/search';
import {parsingDataForSelect} from '@shared/helpers/parsingDataForSelect';
import {LIMIT, orbitTypes, RADIO} from '@shared/constants';
import {useAppDispatch} from '@shared/hooks/useAppDispatch';
import {fetchLaunches} from '@store/launchers/actions';
import {useTypedSelector} from '@shared/hooks/useTypedSelector';
import {SelectData} from '@shared/types';
import {
  Deliver,
  PanelFilters,
  ContainerCheckRadio,
  LabelRadio,
} from '@shared/compoments/filters/styles';
import {getFilters} from '@store/launchers/selectors';

type Props = {};

const Filters: FC<Props> = () => {
  const dispatch = useAppDispatch();
  const isDidMounted = useRef<boolean>(false);
  const filters = useTypedSelector(getFilters);
  const {values, handleChange, setFieldValue} = useFormik({
    initialValues: {
      search: filters.rocket_name,
      filterByOrbit: filters.orbit,
      launchSuccess: '',
    },
    onSubmit: () => {},
  });
  const hasAnyFilter =
    values.search.length ||
    values.search.length === 0 ||
    values.filterByOrbit.length ||
    values.launchSuccess;

  useEffect(() => {
    if (hasAnyFilter && !isDidMounted.current) {
      isDidMounted.current = true;
      return;
    }

    dispatch(
      fetchLaunches({
        ...(values.search.length && {rocket_name: values.search}),
        ...(values.filterByOrbit.length && {orbit: values.filterByOrbit}),
        ...(values.launchSuccess && {
          launch_success: values.launchSuccess === RADIO.WITH,
        }),
        ...(hasAnyFilter && {offset: 0, limit: LIMIT}),
      }),
    );
  }, [values.search, values.filterByOrbit, values.launchSuccess]);

  const orbitOptions = useMemo(() => parsingDataForSelect(orbitTypes), []);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => handleChange(event);

  const onChangeOptions = (newVal: SelectData) => {
    const orbit = newVal.value;
    setFieldValue('filterByOrbit', orbit);
  };

  const onChangeRadio = (event: ChangeEvent<HTMLInputElement>) => {
    setFieldValue('launchSuccess', event.target.value);
  };

  return (
    <PanelFilters>
      <DebounceInput
        debounceTimeout={350}
        element={Search}
        name={'search'}
        value={values.search}
        onChange={(event) => onChange(event)}
        placeholder={'Search'}
      />
      <Deliver />
      <Select
        name={'select'}
        closeMenuOnSelect={true}
        onChange={onChangeOptions}
        options={orbitOptions}
      />
      <Deliver />
      <ContainerCheckRadio>
        <p>With launch success?:</p>
        <LabelRadio
          htmlFor={'launchSuccess1'}
          isActive={values.launchSuccess === RADIO.WITH}
        >
          Yes
        </LabelRadio>
        <input
          id={'launchSuccess1'}
          type={'radio'}
          name={'launchSuccess'}
          value={RADIO.WITH}
          hidden
          onChange={onChangeRadio}
        />
        <LabelRadio
          htmlFor={'launchSuccess2'}
          isActive={values.launchSuccess === RADIO.WITHOUT}
        >
          No
        </LabelRadio>
        <input
          id={'launchSuccess2'}
          type={'radio'}
          name={'launchSuccess'}
          value={RADIO.WITHOUT}
          hidden
          onChange={onChangeRadio}
        />
      </ContainerCheckRadio>
    </PanelFilters>
  );
};

export default Filters;
