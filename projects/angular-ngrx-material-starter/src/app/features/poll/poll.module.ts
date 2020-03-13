import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../../shared/shared.module';

import { AnswerComponent } from './answer/components/answer.component';
import { PollRoutingModule } from './poll-routing.module';
import { AnswerService } from './answer/answer.service';

@NgModule({
  declarations: [AnswerComponent],
  imports: [CommonModule, SharedModule, HttpClientModule, PollRoutingModule],
  providers: [AnswerService]
})
export class PollModule {}
