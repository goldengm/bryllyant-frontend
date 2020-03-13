import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnswerComponent } from './answer/components/answer.component';

const routes: Routes = [
  {
    path: 'answer',
    component: AnswerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PollRoutingModule {}
