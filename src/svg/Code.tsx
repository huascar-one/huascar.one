import * as React from "react";

function Code(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg height="1em" viewBox="-34 1 511 511.999" width="1em" {...props}>
      <path d="M222.152 0L.5 128v255.996L222.152 512 443.81 383.996V128zm-85.59 296.352l-21.226 21.23L53.758 256l61.578-61.578 21.227 21.226L96.21 256zm63.688 37.023l-26.852-13.426 70.66-141.324 26.852 13.426zm128.723-15.797l-21.23-21.226L348.097 256l-40.356-40.352 21.23-21.23L390.552 256zm0 0" />
    </svg>
  );
}

const MemoCode = React.memo(Code);
export default MemoCode;
