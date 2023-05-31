import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Taschenrechner';

  input: string = '';
  result: string = '';

  pressNum(num: string) {
    if (num == '.') {
      // if the last character is not a number, then return
      if (isNaN(Number(this.input.slice(-1)))) return;
      // check if arithmetic operator is present in this.input
      if (this.input.includes('+') || this.input.includes('-') || this.input.includes('*') || this.input.includes('/')) {
        // check if the last number has a decimal point
        if (this.input.split(/[-+*/]/).pop()?.includes('.')) return;
      } else {
        if (this.input.includes('.')) return;
      }
    }
    if (num == '0') {
      if (this.input == '') return;
      // if it is a leading zero, then return
      if (this.input.slice(-1) == '0' && this.input.length == 1) return;
      // if the last character is not a number, then return
      if (isNaN(Number(this.input.slice(-1)))) return;
    }
    this.setInput(this.input + num);
  }

  pressOperator(op: string) {
    // if the last character is a dot, then delete it
    if (this.input.slice(-1) == '.') {
      this.setInput(this.input.slice(0, -1));
    }
    // if the last character is not a number, then return
    if (isNaN(Number(this.input.slice(-1)))) return;
    this.setInput(this.input + op);
  }

  reset() {
    this.setInput('');
  }

  delete() {
    console.log(this.input)
    this.setInput(this.input.slice(0, -1));
    console.log(this.input)
  }

  equal() {
    this.updateResult();
  }

  setInput(input: string) {
    this.input = input;
    this.updateResult();
  }

  formatInput(input: string) {
    // format tmp to delete the last character while it is not a number
    while (isNaN(Number(input.slice(-1)))) {
      input = input.slice(0, -1);
    }
    return input;
  }

  updateResult() {
    this.result = eval(this.formatInput(this.input));
  }
}