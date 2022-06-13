function truncate(str, maxlength) {
  if (str.length > maxlength-1){
    str = str.slice(0, maxlength-1) + "…"
    console.log(str)
    return str
  } else{
    return str
  }
  
}
