function truncate(str, maxlength) {
  if (str.length > maxlength-1){
    str = str.slice(0, maxlength-1) + "…"
    return str
  } else{
    return str
  }
  
}
