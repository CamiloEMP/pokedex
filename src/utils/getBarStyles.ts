let color = ''
export const getBarStyles = (num : number) => {
  if (num > 20 && num <= 40){
    color = '#ff3e3e'
  } else if (num > 40 && num <= 70) {
    color = '#dde458'
  }
  else if (num > 70) {
    color = '#00ac17'
  }
  return {
    backgroundColor: color,
    width: `${num}%`
  }
}