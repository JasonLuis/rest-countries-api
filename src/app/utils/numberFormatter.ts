export const numberFormatterDecimal = (num: number): string => {
  return num.toLocaleString('pt-BR', {
    useGrouping: true
  });
};
