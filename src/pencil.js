class Pencil {

  constructor(leadLength) {
    this.initialLeadLength = leadLength;
    this.leadLength = leadLength;
    this.text = '';
  }

  write(text) {
    for(let character of text) {
      if(this.hasLead()) {
        this.degradeLead(character);
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

  hasLead() {
    return this.leadLength > 0;
  }

  isUpperCase(character) {
    return character == character.toUpperCase();
  }

  degradeLead(character) {
    if(character !== ' ') {
      if(this.isUpperCase(character)) {
        this.leadLength -= 2;
      } else {
        this.leadLength--;
      }
    }
  }
}

export { Pencil as default }
