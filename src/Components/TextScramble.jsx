import { useState, useEffect, useRef } from 'react';
import { Text, rem, em } from '@mantine/core';
import PropTypes from 'prop-types';

export function TextScramble ({ text }) {
  const [output, setOutput] = useState('');
  const chars = "!<>-_\\/[]{}—=+*^?#________";
  const queueRef = useRef([]);
  const frameRef = useRef(0);
  const frameRequestRef = useRef();

  const randomChar = () => {
    return chars[Math.floor(Math.random() * chars.length)];
  };

  const update = () => {
    let newOutput = "";
    let complete = 0;
    for (let i = 0, n = queueRef.current.length; i < n; i++) {
      let { from, to, start, end, char } = queueRef.current[i];
      if (frameRef.current >= end) {
        complete++;
        newOutput += to;
      } else if (frameRef.current >= start) {
        if (!char || Math.random() < 0.28) {
          char = randomChar();
          queueRef.current[i].char = char;
        }
        newOutput += `<span class="dud">${char}</span>`;
      } else {
        newOutput += from;
      }
    }

    setOutput(newOutput);

    if (complete !== queueRef.current.length) {
      frameRequestRef.current = requestAnimationFrame(update);
      frameRef.current++;
    }
  };

  const setText = (newText) => {
    const oldText = output.replace(/<[^>]+>/g, '');
    const length = Math.max(oldText.length, newText.length);
    queueRef.current = [];

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      queueRef.current.push({ from, to, start, end });
    }

    cancelAnimationFrame(frameRequestRef.current);
    frameRef.current = 0;
    update();
  };

  useEffect(() => {
    setText(text);
    // Cleanup function to cancel the animation frame request on unmount
    return () => cancelAnimationFrame(frameRequestRef.current);
  }, [text]);

  return (
    <Text 
    fz={rem(50)} fw={700} m="md"
    align={"center"}
    dangerouslySetInnerHTML={{ __html: output }} />
  );
}

TextScramble.propTypes = {
  text: PropTypes.string.isRequired,
};