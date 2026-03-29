export function getRowsCount(track: HTMLElement) {
  const positions = new Set<number>();
  const children = Array.from(track.children) as HTMLElement[];

  children.forEach((el) => {
    positions.add(el.offsetTop);
  });

  return positions.size || 1;
}