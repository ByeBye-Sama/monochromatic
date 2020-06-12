const boxShadow = depth => {
  if (depth === 0) {
    // Shadow 0dp
    return `
    box-shadow: none;
  `
  }
  if (depth === 1) {
    // Shadow 1dp
    return `
    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20);
  `
  }
  if (depth === 2) {
    // Shadow 2dp
    return `
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.20);
  `
  }
  if (depth === 3) {
    // Shadow 3dp
    return `
    box-shadow: 0 3px 4px 0 rgba(0,0,0,0.14), 0 3px 3px -2px rgba(0,0,0,0.12), 0 1px 8px 0 rgba(0,0,0,0.20);
  `
  }
  if (depth === 4) {
    // Shadow 4dp
    return `
    box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.20);
  `
  }
  if (depth === 5) {
    // Shadow 6dp
    return `
    box-shadow: 0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px -1px rgba(0,0,0,0.20);
  `
  }
  if (depth === 6) {
    // Shadow 8dp
    return `
    box-shadow: 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.20);
  `
  }
  if (depth === 7) {
    // Shadow 9dp
    return `
    box-shadow: 0 9px 12px 1px rgba(0,0,0,0.14), 0 3px 16px 2px rgba(0,0,0,0.12), 0 5px 6px -3px rgba(0,0,0,0.20);
  `
  }
  if (depth === 8) {
    // Shadow 12dp
    return `
    box-shadow: 0 12px 17px 2px rgba(0,0,0,0.14), 0 5px 22px 4px rgba(0,0,0,0.12), 0 7px 8px -4px rgba(0,0,0,0.20);  
  `
  }
  if (depth === 9) {
    // Shadow 16dp
    return `
    box-shadow: 0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12), 0 8px 10px -5px rgba(0,0,0,0.20);
  `
  }
  if (depth >= 10) {
    // Shadow 24dp
    return `
    box-shadow: 0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.20);
  `
  }
}

export default boxShadow
