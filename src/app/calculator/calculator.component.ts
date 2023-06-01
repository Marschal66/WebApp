import { Component } from '@angular/core';
import { ApiService } from '../util/api.service';
import { SpinnerService } from '../util/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  title: string = 'Taschenrechner';

  constructor(public spinnerService: SpinnerService, private apiService: ApiService) { };

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

  updateResult() {
    this.apiService.getResult(this.input).subscribe((data: any) => {
      this.result = data.result;
    });
  }
}