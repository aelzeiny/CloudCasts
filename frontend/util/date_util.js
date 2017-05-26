export const monthNames = [
  "Jan", "Feb", "Mar",
  "Apr", "May", "Jun", "Jul",
  "Aug", "Sep", "Oct",
  "Nov", "Dec"
];

export const formatMMMDDYYYYDate = (date) => (
  `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
);
