import PropTypes from 'prop-types';
import { useState, useEffect } from "react"
import { Text, Group } from '@mantine/core';

function CursorSVG() {
  return (
    <svg
      viewBox="8 4 8 16"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        display: 'inline-block',
        width: '1ch',
        animation: 'flicker 0.5s infinite',
      }}
    >
      <rect x="10" y="6" width="4" height="12" fill="#fff" />
    </svg>
  );
}

export function TypingText ({ text }) {
    const [displayResponse, setDisplayResponse] = useState("");
    const [completedTyping, setCompletedTyping] = useState(false);

    useEffect(() => {
        if (!text?.length) {
            return;
        }

        setCompletedTyping(false);

        let i = 0;

        const intervalId = setInterval(() => {
            setDisplayResponse(text.slice(0, i));

            i++;

            if (i > text.length) {
                clearInterval(intervalId);
                setCompletedTyping(true);
            }
        }, 20);

        return () => clearInterval(intervalId);
    }, [text]);

    return(
        <Group wrap gap={0}>
            <Text fz="xl">
                {displayResponse}
            </Text>
            {/* {!completedTyping && <CursorSVG />} */}
        </Group>
    )
}

TypingText.propTypes = {
  text: PropTypes.string.isRequired,
};