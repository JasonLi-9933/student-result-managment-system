export const olderThanAge = (targetAge, birthDateString) => {
	if (birthDateString === "") return false;
  let birthDate = new Date(birthDateString);
  let now = new Date();
  let age = now.getFullYear() - birthDate.getFullYear();
  let monthDiff = now.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && now.getDate() < birthDate.getDate())
  ) {
    age -= 1;
  }
	console.log(age);
  return age >= targetAge;
};
