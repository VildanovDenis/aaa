export const parseSecondsToTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = (seconds % 60).toFixed();

    return `${mins < 10 ? '0' : ''}${mins}:${secs.length < 2 ? '0': ''}${secs}`;
};
