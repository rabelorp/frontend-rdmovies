export const isoToDate = (isoString: string) => {
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

export const renderDateWithoutTimeZone = (date?: string) => {
  if (!date) {
    return new Date();
  }

  const [year, month, day] = date.split('-').map(Number);
  const newDate = new Date(year, month - 1, day);

  return newDate;
};
