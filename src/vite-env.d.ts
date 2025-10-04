/// <reference types="vite/client" />

import { Buffer as BufferType } from 'buffer';

declare global {
  interface Window {
    Buffer: typeof BufferType;
  }
}

declare module '*.md' {
    const content: string;
    export default content;
}

declare module '*.md?raw' {
    const content: string;
    export default content;
}