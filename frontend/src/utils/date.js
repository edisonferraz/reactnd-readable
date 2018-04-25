const convertTimestampToDate = timestamp => {
  const date = new Date(timestamp);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const hours = date.getHours();
  const minutes = date.getMinutes();

  const dateFormated = `${month}/${day}/${year}`;
  const hoursFormated = `
    ${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}
  `;

  return `${dateFormated} - ${hoursFormated}`;
};

export { convertTimestampToDate };
