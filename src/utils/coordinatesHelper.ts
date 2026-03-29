export const parseCoordinate = (coord: string): number => {
  const match = coord.match(/([\d.]+)°\s*([NSEW])/);
  if (!match) return 0;
  const value = parseFloat(match[1]);
  const direction = match[2];
  return (direction === 'S' || direction === 'W') ? -value : value;
};