export const calculate = (lastAction, action, val) => {
  let newAction = { ...lastAction };
  if (action === "number") {
    newAction = {
      ...lastAction,
      current: {
        ...lastAction.current,
        val: parseInt(
          `${lastAction.current.val ? lastAction.current.val : ""}${val}`,
          10
        ),
      },
    };
  } else if (action === "action" || action === "finish") {
    let newVal = 0;
    if (lastAction.previous.action === "+")
      newVal = lastAction.previous.val + lastAction.current.val;
    else if (lastAction.previous.action === "-")
      newVal = lastAction.previous.val - lastAction.current.val;
    else if (lastAction.previous.action === "*")
      newVal = lastAction.previous.val * lastAction.current.val;
    else if (lastAction.previous.action === "/")
      newVal = lastAction.previous.val / lastAction.current.val;
    else newVal = lastAction.previous.val || lastAction.current.val;
    newAction = {
      ...lastAction,
      previous: {
        action: val,
        val: newVal,
      },
      current: {
        action: "",
        val: 0,
      },
    };
  } else if (action === "clear") {
    newAction = {
      previous: {
        action: "",
        val: 0,
      },
      current: {
        action: "",
        val: 0,
      },
    };
  }

  return newAction;
};
