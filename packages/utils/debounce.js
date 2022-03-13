
let timeout = null;
function debounce (fn, delay = 200) {
  if(timeout !== null) clearTimeout(timeout);
  timeout = setTimeout(fn, delay);
}
export default debounce;
