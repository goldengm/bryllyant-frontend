import { v4 as uuid } from 'uuid';
import { Injectable } from '@angular/core';
import { Model, ModelFactory } from '@angular-extensions/model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

const INITIAL_DATA = {
  id: 1,
  title: 'What is rockets',
  status: 'yet',
  answers: [
    { id: 11, questionSentence: 'Do you know engine no?', answer: '' },
    { id: 12, questionSentence: 'Do you know wing length', answer: 'Yes' },
    { id: 13, questionSentence: 'Is made by einstein?', answer: '' }
  ]
};

@Injectable()
export class AnswerService {
  private model: Model<Poll>;
  poll$: Observable<Poll>;
  pollToken: string;
  isCompletable$: Observable<boolean>;

  constructor(
    private http: HttpClient,
    private modelFactory: ModelFactory<Poll>
  ) {
    this.model = this.modelFactory.create(null);
    this.poll$ = this.model.data$;
  }

  loadData(pollToken: string) {
    this.pollToken = pollToken;
    this.http
      .post<Poll>(
        'http://localhost:3000/api/poll/check-polltoken',
        {
          pollToken
        },
        httpOptions
      )
      .subscribe(res => {
        const poll = res['poll'];
        this.model.set(poll);
      });
  }

  sendAnswer(pollAnswerId: number, answer: string) {
    this.http
      .post<Poll>(
        'http://localhost:3000/api/poll/answer',
        {
          pollAnswerId,
          answer
        },
        httpOptions
      )
      .subscribe(res => {
        this.isCompletable$ = res['isCompletable'];
        this.loadData(this.pollToken);
      });
  }
}

export interface Poll {
  id: number;
  title: string;
  answers: Answer[];
}

export interface Answer {
  id: number;
  questionSentence: string;
  answer: string;
}
