import { IconNames } from './Footer';

type Props = {
  whatsHovered: IconNames | null;
};

export const WalkingManIcon: React.FC<Props> = ({ whatsHovered }) => {
  const iconName: IconNames = 'walkingMan';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="22"
      fill="none"
      viewBox="0 0 13 22"
    >
      <path
        fill={whatsHovered === iconName ? 'white' : '#B3B3B3'}
        d="M1 22L3.8 7.9 2 8.6V12H0V7.3l5.05-2.15c.233-.1.48-.158.737-.175.259-.017.505.017.738.1.233.083.454.2.662.35.209.15.38.342.513.575l1 1.6c.433.7 1.02 1.275 1.763 1.725.741.45 1.587.675 2.537.675v2c-1.167 0-2.208-.242-3.125-.725a8.03 8.03 0 01-2.35-1.85L6.9 12.5l2.1 2V22H7v-6.5l-2.1-1.6L3.1 22H1zM7.5 4.5c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 015.5 2.5c0-.55.196-1.02.588-1.413A1.926 1.926 0 017.5.5c.55 0 1.02.196 1.412.587.392.392.588.863.588 1.413s-.196 1.02-.588 1.413A1.926 1.926 0 017.5 4.5z"
      ></path>
    </svg>
  );
};

export const TwoDIcon: React.FC<Props> = ({ whatsHovered }) => {
  const iconName: IconNames = 'twoD';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="12"
      fill="none"
      viewBox="0 0 21 12"
    >
      <path
        fill={whatsHovered === iconName ? 'white' : '#B3B3B3'}
        d="M8.62 9.374v2.464H.57V10.27l3.216-3.104c1.2-1.168 1.76-1.776 1.76-2.672 0-.736-.448-1.168-1.232-1.168-.912 0-1.424.528-1.424 1.44H.22C.22 2.478 1.963.862 4.46.862c2.272 0 3.968 1.408 3.968 3.28 0 1.36-.496 2.176-2.496 4.112L4.78 9.374h3.84zm6.144 2.464h-4.48V.35h4.48c3.632 0 5.92 2.336 5.92 5.68s-2.368 5.808-5.92 5.808zm-1.456-8.88V9.23h1.28c2 0 2.992-1.04 2.992-3.2 0-2.032-1.024-3.072-2.992-3.072h-1.28z"
      ></path>
    </svg>
  );
};

export const ThreeDIcon: React.FC<Props> = ({ whatsHovered }) => {
  const iconName: IconNames = 'threeD';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="12"
      fill="none"
      viewBox="0 0 21 12"
    >
      <path
        fill={whatsHovered === iconName ? 'white' : '#B3B3B3'}
        d="M4.564 11.982c-2.432 0-4.176-1.424-4.176-3.424h2.688c.064.8.624 1.264 1.52 1.264.96 0 1.504-.448 1.504-1.232 0-.768-.656-1.2-1.824-1.2H3.06V5.23h1.056c.976 0 1.504-.384 1.504-1.104 0-.704-.432-1.104-1.2-1.104-.736 0-1.184.48-1.184 1.264H.564c0-1.952 1.744-3.424 4-3.424 2.432 0 3.888 1.264 3.888 3.04 0 .928-.528 1.664-1.504 2.24 1.28.448 1.984 1.264 1.984 2.384 0 2.064-1.76 3.456-4.368 3.456zm10.353-.144h-4.48V.35h4.48c3.632 0 5.92 2.336 5.92 5.68s-2.368 5.808-5.92 5.808zm-1.456-8.88V9.23h1.28c2 0 2.992-1.04 2.992-3.2 0-2.032-1.024-3.072-2.992-3.072h-1.28z"
      ></path>
    </svg>
  );
};

export const BricksIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <mask
        id="mask0_666_178"
        style={{ maskType: 'alpha' }}
        width="24"
        height="24"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#D9D9D9" d="M0 0H24V24H0z"></path>
      </mask>
      <g mask="url(#mask0_666_178)">
        <path
          fill="#000"
          fillOpacity="0.8"
          d="M4 21V9l8-6 8 6v12H4zm2-2h7v-3H6v3zm9 0h3v-3h-3v3zm-9-5h3v-2.975H6V14zm5 0h7v-2.975h-7V14zM7.3 9.025h9.4L12 5.5 7.3 9.025z"
        ></path>
      </g>
    </svg>
  );
};
