class Pencil {
  
  constructor(leadLength) {
    this.leadLength = leadLength;
    this.text = '';
  }
  
  write(text) {
    for(let character of text) {
      if(this.leadLength > 0) {
        if(character !== ' ') {
          if(character == character.toUpperCase()) {
            this.leadLength -= 2;
          } else {
            this.leadLength--;
          }
        }
        this.text += character;
      }
    }
    return text;
  }
  
}

export { Pencil as default }
