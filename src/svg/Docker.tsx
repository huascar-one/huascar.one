import * as React from "react";

function Docker(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
      <path
        d="M512 256c0 141.385-114.615 256-256 256S0 397.385 0 256 114.615 0 256 0c130.497 0 238.184 97.646 253.994 223.859a253.795 253.795 0 011.964 27.784c.032 1.452.042 2.905.042 4.357z"
        fill="#ff9800"
      />
      <g fill="#31313a">
        <path d="M511.958 251.643c-21.859 26.624-64.69 24.545-64.69 24.545-26.415 113.8-185.94 171.719-296.699 143.266-110.748-28.443-95.513-160.539-95.513-160.539h324.138c26.749 0 28.787-8.129 28.787-8.129-23.709-56.226 12.873-86.371 12.873-86.371 28.453 5.089 35.558 53.854 35.558 53.854 23.353-4.19 42.109.794 53.582 5.59a253.795 253.795 0 011.964 27.784z" />
        <path d="M89.6 207.433h45.39v41.32H89.6zM146.641 207.433h45.39v41.32h-45.39zM317.743 207.433h45.39v41.32h-45.39zM260.712 207.433h45.39v41.32h-45.39zM260.712 101.763h45.39v41.32h-45.39zM203.671 207.433h45.39v41.32h-45.39zM146.641 154.593h45.39v41.32h-45.39zM260.712 154.593h45.39v41.32h-45.39zM203.671 154.593h45.39v41.32h-45.39z" />
      </g>
    </svg>
  );
}

const MemoDocker = React.memo(Docker);
export default MemoDocker;
