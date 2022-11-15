import React, {FC, useEffect, useMemo} from 'react';
import {DebounceInput} from 'react-debounce-input';
import {
  Deliver,
  PanelFilters,
  ContainerCheckbox,
} from '@shared/compoments/filters/styles';
import Search from '../UI/search';
import {useFormik} from 'formik';
import Select, {MultiValue} from 'react-select';
import {parsingDataForSelect} from '@shared/helpers/parsingDataForSelect';
import {orbitTypes} from '@shared/constants';
import {useAppDispatch} from '@shared/hooks/useAppDispatch';
import {fetchLaunches} from '@store/launchers/actions';
import {updateFilters} from '@shared/store/launchers/reducer';
import {useTypedSelector} from '@shared/hooks/useTypedSelector';
import {SelectData} from '@shared/types';

type Props = {};

const Filters: FC<Props> = () => {
  const dispatch = useAppDispatch();
  const filters = useTypedSelector((state) => state.launches.filters);
  const {values, handleChange, setFieldValue} = useFormik({
    initialValues: {
      search: filters.rocket_name,
      filterByOrbit: filters.orbit,
      launchSuccess: filters.launch_success,
    },
    onSubmit: () => {},
  });
  const hasAnyFilter =
    values.search.length || values.filterByOrbit.length || values.launchSuccess;

  useEffect(() => {
    if (hasAnyFilter) {
      dispatch(
        fetchLaunches({
          ...(values.search.length && {rocket_name: values.search}),
          ...(values.filterByOrbit.length && {orbit: values.filterByOrbit}),
          ...(values.launchSuccess && {launch_success: values.launchSuccess}),
          withFilters: true,
        }),
      );
    }
  }, [values.search, values.filterByOrbit, values.launchSuccess]);

  const orbitOptions = useMemo(() => parsingDataForSelect(orbitTypes), []);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(event);

    dispatch(
      updateFilters({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        rocket_name: event.target.value,
      }),
    );
    dispatch(
      fetchLaunches({
        ...(event.target.value && {rocket_name: event.target.value}),
        ...(values.filterByOrbit.length && {orbit: values.filterByOrbit}),
        ...(values.launchSuccess && {launch_success: values.launchSuccess}),
        withFilters: true,
        limit: 10,
        offset: 0,
      }),
    );
  };

  // eslint-disable-next-line no-console
  console.log('values => ', values);

  const onChangeOptions = (newArrVals: MultiValue<SelectData>) => {
    const orbit = newArrVals.map((item) => item.value);

    dispatch(updateFilters({orbit}));
    setFieldValue('filterByOrbit', orbit);
  };

  const onChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateFilters({launch_success: event.target.checked}));
    setFieldValue('launchSuccess', event.target.checked);
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
        closeMenuOnSelect={false}
        onChange={onChangeOptions}
        isMulti
        options={orbitOptions}
      />
      <Deliver />
      <ContainerCheckbox>
        <label htmlFor={'launchSuccess'}>With launch success?</label>
        <input
          id={'launchSuccess'}
          type={'checkbox'}
          name={'launchSuccess'}
          onChange={onChangeCheckbox}
        />
      </ContainerCheckbox>
    </PanelFilters>
  );
};

export default Filters;
