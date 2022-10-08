export const roundUpDecimals = (
  numberWithDecimals: number,
  breakpoint: number,
) => {
  let breakpointNumber = '1';

  for (let i = 0; i < breakpoint; i += 1) {
    breakpointNumber = breakpointNumber + '0';
  }

  return (
    Math.round(
      (numberWithDecimals + Number.EPSILON) * Number(breakpointNumber),
    ) / Number(breakpointNumber)
  );
};

export const getClassNames = (...classes: string[]): string => {
  return classes.join(' ');
};
