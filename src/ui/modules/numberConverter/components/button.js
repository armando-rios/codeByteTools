const button = (text, color) => {
  const btn = document.createElement("button");
  btn.type = "submit";
  btn.innerText = text;
  btn.className = `w-full p-2 bg-${color} text-theme-on-accent font-medium rounded-lg hover:bg-${color}/90 transition-all duration-300`;

  return btn;
};

export default button;
