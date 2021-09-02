import * as React from "react";

function CheckMark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 44.56 44.56" {...props}>
      <path d="M23.297 38.74a6.563 6.563 0 01-10.16.499L1.308 26.112a5.083 5.083 0 117.551-6.805l8.369 9.288a.617.617 0 00.956-.047L35.386 5.217a5.083 5.083 0 118.181 6.032L23.297 38.74z" />
    </svg>
  );
}

const MemoCheckMark = React.memo(CheckMark);
export default MemoCheckMark;
