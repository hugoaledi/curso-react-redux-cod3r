export default (props) => {
  const elseChield = props.children.filter((child) => {
    return child.type && child.type.name === "Else";
  })[0];

  const ifChildren = props.children.filter((child) => {
    return child !== elseChield;
  });

  if (props.test) {
    return ifChildren;
  } else if (elseChield) {
    return elseChield;
  } else {
    return false;
  }
};

export const Else = (props) => props.children;
