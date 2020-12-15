import { useOutsideAlerter } from "../../../hooks/useOutsideAlterter";
import PropTypes from 'prop-types';
import { useRef } from "react";
import styled from 'styled-components';

const BackgroundDiv = styled.div`
  position: relative;
  z-index: 11;
`;

export const CatchOutside = ({ children, handler, getParentRef }) => {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, handler, getParentRef);

    return <BackgroundDiv ref={wrapperRef}>{children}</BackgroundDiv>;
}

CatchOutside.propTypes = {
    children: PropTypes.any,
    handler: PropTypes.func,
    getParentRef: PropTypes.func
}