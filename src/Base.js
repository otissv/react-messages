import React, { useEffect, useMemo, useRef } from "react";
import styled from "styled-components";
import posed from "react-pose";

export function Base({
  animate,
  children,
  css,
  el,
  forwardRef,
  state,
  ...propsRest
}) {
  const poseRef = useRef(posed[el || "div"](animate));

  const styledRef = useRef(
    styled(poseRef.current)`
      ${css}
    `
  );

  const Component = styledRef.current;

  return (
    <Component pose={state} {...propsRest} ref={forwardRef}>
      {children}
    </Component>
  );
}
