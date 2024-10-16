import { cn } from '@/lib/utils';

const GhostIcon = (props: { className: string }) => (
  <svg
    fill="#ffffff"
    width="800px"
    height="800px"
    viewBox="0 0 32 32"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
  >
    {/* arms */}
    <g transform="scale(0.5 0.5) translate(16 16)">
      <g className={'animate-ghost-bl'}>
        <path d="M15.814 22.934v8.275l-1.601 0.788-5.508-8.295 4.355-4.355 2.754 3.587z"></path>
        <path d="M9.102 16.234h-8.314l-0.788 1.537 8.301 5.56 4.323-4.343-3.523-2.754z"></path>
      </g>
      <g className={'animate-ghost-tl'}>
        <path d="M15.814 9.098v-8.307l-1.601-0.788-5.508 8.327 4.355 4.355 2.754-3.587z"></path>
        <path d="M9.14 15.773h-8.327l-0.794-1.537 8.288-5.56 4.355 4.343-3.523 2.754z"></path>
      </g>
      <g className={'animate-ghost-br'}>
        <path d="M16.211 22.934v8.275l1.569 0.788 5.534-8.295-4.349-4.355-2.754 3.587z"></path>
        <path d="M22.898 16.183h8.314l0.788 1.601-8.301 5.528-4.323-4.375 3.523-2.754z"></path>
      </g>
      <g className={'animate-ghost-tr'}>
        <path d="M16.211 9.098v-8.307l1.569-0.788 5.534 8.327-4.349 4.355-2.754-3.587z"></path>
        <path d="M22.86 15.824h8.327l0.794-1.601-8.288-5.528-4.355 4.375 3.523 2.754z"></path>
      </g>
      {/* end of arms */}

      <g className={'animate-none'}>
        <path
          stroke={'white'}
          strokeWidth={'0.3'}
          fill="white"
          transform="scale(1.2 1.2) origin(50%, 50%) translate(-0.6 0)"
          d="M15.673 15.036v0.628l-0.506 0.5h-0.647v-0.25l1.153-0.877z"
        ></path>
        <path
          stroke={'white'}
          strokeWidth={'0.3'}
          fill="white"
          transform="scale(1.2 1.2) origin(50%, 50%) translate(-0.6 0)"
          d="M15.673 17.291v-0.628l-0.506-0.5h-0.647v0.25l1.153 0.878z"
        ></path>
        <path
          stroke={'white'}
          strokeWidth={'0.3'}
          transform="scale(1.2 1.2) origin(50%, 50%) translate(0.6 0)"
          fill="white"
          d="M16.301 15.036v0.628l0.506 0.5h0.647v-0.25l-1.153-0.877z"
        ></path>
        <path
          stroke={'white'}
          strokeWidth={'0.3'}
          transform="scale(1.2 1.2) origin(50%, 50%) translate(0.6 0)"
          fill="white"
          d="M16.301 17.291v-0.628l0.506-0.5h0.647v0.25l-1.153 0.878z"
        ></path>
        <path
          stroke={'white'}
          strokeWidth={'0.1'}
          fill="white"
          d="M16.301 16.227c0 0.173-0.14 0.314-0.314 0.314s-0.314-0.14-0.314-0.314c0-0.173 0.14-0.314 0.314-0.314s0.314 0.14 0.314 0.314z"
        ></path>
        <path
          fill="white"
          d="M16.013 19.705c-1.924 0-3.484-1.56-3.484-3.484s1.56-3.484 3.484-3.484c1.924 0 3.484 1.56 3.484 3.484v0c-0.004 1.923-1.561 3.481-3.484 3.484h-0zM16.013 13.377c-1.571 0-2.844 1.273-2.844 2.844s1.273 2.844 2.844 2.844c1.571 0 2.844-1.273 2.844-2.844v0c0-1.571-1.273-2.844-2.844-2.844v0z"
        ></path>
      </g>
    </g>
  </svg>
);

export default GhostIcon;
