import { cn } from '@/lib/utils';
interface Props {
  className?: string;
}

const ReactLogo = ({className}:Props) => {
  return (
    <svg className={cn(className)} xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348">
      <title>React Logo</title>
      <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
      <g stroke="currentColor" stroke-width="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  )
}

export default ReactLogo