import { keyframes } from 'styled-components';

// * Please drop in for 2s, hold for 2s, drop out for 2s,
// * then reset to above the screen,
// * and drop back in and slide to the top left and scale down for 2s
export const title = keyframes`
  from { transform: translateZ(1200px); }
  25% { transform: translateZ(0px); }
  50% { transform: translateZ(0px); opacity: 1 ; }
  74% { transform: translateZ(-36000px); opacity: 0; }
  75% { transform: translateZ(600px) translateX(45%) translateY(110%); opacity: 0; }
  76% { opacity: 1; }
  to { transform: translateZ(0px) translateX(-45%) translateY(-110%) scale(0.25); }
`;

export const chaos = keyframes`
  from { transform: translateZ(4200px) rotate(-12deg); opacity: 0; }
  33% { transform: translateZ(4200px) rotate(-12deg); opacity: 0; }
  40% { transform: translateZ(4200px) rotate(-12deg); opacity: 1; }
  to { transform: translateZ(0px) rotate(-12deg); opacity: 1;}
`;
// Huh, so that's interesting, it might just be that I need a separate element for this effect.

// * Please drop in for 2s after 7-8s
export const board = keyframes`
  from { transform: translateZ(1200px); }
  80% { transform: translateZ(1200px) translateX(0); }
  to { transform: translateZ(0px) translateX(5vw); }
`;
