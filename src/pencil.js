class Pencil {
  
  constructor(leadLength) {
    this.initialLeadLength = leadLength;
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
      } else {
        this.text += ' ';
      }
    }
    return text;
  }

  sharpen() {
    this.leadLength = this.initialLeadLength;
  }

  erase(toErase) {
    this.text = this.text.replace(toErase, ' '.repeat(toErase.length));
  }  
}

export { Pencil as default }
