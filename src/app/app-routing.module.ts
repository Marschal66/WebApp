import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalculatorComponent } from './calculator/calculator.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  { path: 'calculator', component: CalculatorComponent },
  { path: 'quiz', component: QuizComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
