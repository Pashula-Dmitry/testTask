import styled, {css} from 'styled-components';

export const PanelFilters = styled.div`
  width: 100%;
  padding: 3rem;
`;

export const Deliver = styled.hr`
  height: 2px;
  margin: 20px 0;
  background: var(--secondary-color);
`;

export const ContainerCheckRadio = styled.p`
  display: flex;
  column-gap: 25px;
`;

interface ILabel {
  isActive: boolean;
}

export const LabelRadio = styled.label<ILabel>`
  cursor: pointer;
  ${({isActive}) => isActive && css`
    text-decoration: underline;
    font-weight: 700;
  `}
`;
