export const timeAgo = (date: string): string => {
  const now = new Date();
  const then = new Date(date);

  // Ensure the date is valid
  if (isNaN(then.getTime())) {
    return "Invalid date";
  }

  const seconds = Math.floor((now.getTime() - then.getTime()) / 1000); // Time difference in seconds
  const minutes = Math.floor(seconds / 60); // Convert to minutes
  const hours = Math.floor(minutes / 60); // Convert to hours
  const days = Math.floor(hours / 24); // Convert to days
  const months = Math.floor(days / 30); // Approximate months (30 days/month)
  const years = Math.floor(days / 365); // Approximate years (365 days/year)

  // Handle different time intervals
  if (seconds < 60) {
    return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
  } else if (minutes < 60) {
    return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  } else if (hours < 24) {
    return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  } else if (days < 30) {
    return `${days} day${days !== 1 ? "s" : ""} ago`;
  } else if (months < 12) {
    return `${months} month${months !== 1 ? "s" : ""} ago`;
  } else {
    return `${years} year${years !== 1 ? "s" : ""} ago`;
  }
};
