import { Fruitlistdata } from './../fruitlistdata';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Singlefruit } from './singlefruit/singlefruit';

@Component({
  selector: 'app-fruitlist',
  imports: [CommonModule, Singlefruit],
  templateUrl: './fruitlist.html',
  styleUrl: './fruitlist.scss',
})
export class Fruitlist {
  Fruitlistdata = inject(Fruitlistdata);

  fontColorGood = 'green';
  fontColorBad = 'red';

  addComment(comment: string, index: number) {
    this.Fruitlistdata.addCommentToFruit(comment, index);
  }
}
