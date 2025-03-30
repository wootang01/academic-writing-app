import '@mui/material/styles';
import { GridTypeMap } from '@mui/material/Grid';

// Augment the GridProps interface to properly support the props we're using
declare module '@mui/material/Grid' {
  interface GridProps {
    item?: boolean;
    container?: boolean;
    xs?: number | boolean;
    sm?: number | boolean;
    md?: number | boolean;
    lg?: number | boolean;
    xl?: number | boolean;
    spacing?: number;
  }
} 