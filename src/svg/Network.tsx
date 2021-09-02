import * as React from "react";

function Network(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg height="1em" viewBox="0 0 496 496" width="1em" {...props}>
      <path d="M48 160h32v16H48zm0 0" />
      <path d="M472 128c13.23 0 24-10.77 24-24V24c0-13.23-10.77-24-24-24H360c-13.23 0-24 10.77-24 24v80c0 13.23 10.77 24 24 24h24v16h-16v16h40v80h-33.016c-6.382-6.23-14.242-11-23.039-13.625.04-.809.055-1.59.055-2.375 0-35.29-28.71-64-64-64-21.895 0-42.246 11.39-53.902 29.61A63.666 63.666 0 00208 184c-26.55 0-50.457 16.734-59.809 41.281-6.078 1.305-11.742 3.64-16.886 6.719H72v-24h32c13.23 0 24-10.77 24-24V24c0-13.23-10.77-24-24-24H24C10.77 0 0 10.77 0 24v160c0 13.23 10.77 24 24 24h32v40h58.29a55.69 55.69 0 00-7.778 16H72v88H40c-13.23 0-24 10.77-24 24v72H0v24c0 13.23 10.77 24 24 24h128c13.23 0 24-10.77 24-24v-24h-16v-72c0-13.23-10.77-24-24-24H88v-72h16c0 30.871 25.129 56 56 56h176c28.152 0 51.457-20.91 55.36-48H424v64h-56v144h128V352h-56v-80h-48.672c-.832-5.633-2.558-10.992-4.976-16H424v-96h40v-16h-16v-16zm-360 0H16V48h96zM24 16h80c4.414 0 8 3.586 8 8v8H16v-8c0-4.414 3.586-8 8-8zm-8 168v-40h96v40c0 4.414-3.586 8-8 8H24c-4.414 0-8-3.586-8-8zm144 288c0 4.414-3.586 8-8 8H24c-4.414 0-8-3.586-8-8v-8h144zm-16-96v72H32v-72c0-4.414 3.586-8 8-8h96c4.414 0 8 3.586 8 8zm240 104v-48h96v48zm96-64h-96v-48h96zm-144-96H160c-22.055 0-40-17.945-40-40 0-20.223 15.137-37.281 35.2-39.68l5.25-.632 1.48-5.079C167.848 214.23 186.8 200 208 200c8.832 0 17.504 2.48 25.105 7.16l7.637 4.711 3.809-8.137C252.426 186.88 269.48 176 288 176c26.473 0 48 21.527 48 48 0 2.207-.2 4.559-.633 7.398l-1.207 7.915 7.91 1.199C361.414 243.465 376 260.442 376 280c0 22.055-17.945 40-40 40zm24-304h112c4.414 0 8 3.586 8 8v56H352V24c0-4.414 3.586-8 8-8zm-8 88v-8h128v8c0 4.414-3.586 8-8 8H360c-4.414 0-8-3.586-8-8zm80 40h-32v-16h32zm0 0" />
      <path d="M400 384h16v16h-16zm0 0M448 448h16v16h-16zm0 0M432 384h32v16h-32zm0 0M400 448h32v16h-32zm0 0" />
    </svg>
  );
}

const MemoNetwork = React.memo(Network);
export default MemoNetwork;