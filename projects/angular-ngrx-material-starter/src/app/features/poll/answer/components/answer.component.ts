import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AnswerService, Poll } from '../answer.service';
import { Observable } from 'rxjs';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../../core/animations/route.animations';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'anms-poll-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnswerComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  poll$: Observable<Poll>;
  pollToken: string;
  token: string;
  isCompletable$: Observable<boolean>;

  constructor(
    private answerService: AnswerService,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      this.pollToken = params['pollToken'];
      this.answerService.loadData(this.pollToken);
      this.isCompletable$ = this.answerService.isCompletable$;
    });
  }

  ngOnInit(): void {
    this.poll$ = this.answerService.poll$;
  }

  doAnswer(answerId: number, answer: string) {
    this.answerService.sendAnswer(answerId, answer);
  }
}
