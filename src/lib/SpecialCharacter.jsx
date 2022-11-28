function SpecialCharacter(title) {
  let charac = title.replace(new RegExp(/[^A-z\s\d][\\^]?/g), " ");
  return charac.replace(/\s/g, "-");
}

export default SpecialCharacter;
