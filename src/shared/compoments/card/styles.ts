import styled from 'styled-components';
import {Link} from 'react-router-dom';

const CardContainer = styled.li`
  background-color: var(--white-color);
  color: rgba(0, 0, 0, 0.87);
  -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  display: block;
`;

const TextBold = styled.span`
  font-weight: 700;
`;

const Linker = styled(Link)`
  display: block;
`;

const ImageDescription = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export {CardContainer, Image, ImageDescription, Linker, TextBold};
