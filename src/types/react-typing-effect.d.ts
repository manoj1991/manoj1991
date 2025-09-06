declare module 'react-typing-effect' {
  import * as React from 'react';

  export interface ReactTypingEffectProps {
    text?: string[];
    speed?: number;
    eraseSpeed?: number;
    eraseDelay?: number;
    typingDelay?: number;
    cursorRenderer?: (cursor: string) => React.ReactNode;
    displayTextRenderer?: (text: string, i: number) => React.ReactNode;
    className?: string;
  }

  const ReactTypingEffect: React.FC<ReactTypingEffectProps>;

  export default ReactTypingEffect;
}
