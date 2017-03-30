import { Component,  
  Input,
  EventEmitter,
  Output,
  ChangeDetectionStrategy } from '@angular/core';
import { BdsState } from '../../reducers/bds'

@Component({
  selector: 'new-item',
  template: `
  <div class="wrapper">
    <div class="card radius shadowDepth1">
      <div class="card__image border-tlr-radius">
        <img [defaultImage]="defaultImage" [lazyLoad]="bds.image" alt="image" class="border-tlr-radius">
      </div>

      <div class="card__content card__padding">
        <div class="card__share">
          <div class="card__social" [class.card__social--active]="isToggle">  
            <a class="share-icon facebook" href="#"><span class="fa fa-facebook"></span></a>
            <a class="share-icon twitter" href="#"><span class="fa fa-twitter"></span></a>
            <a class="share-icon googleplus" href="#"><span class="fa fa-google-plus"></span></a>
          </div>
          <a id="share" class="share-toggle share-icon" (click)="shareToggle()" [class.share-expanded]="isToggle"></a>
        </div>

        <div class="card__meta">
          <a href="#">Web Design</a>
                    <time>{{bds.time}}</time>
        </div>

        <article class="card__article">
          <h2 class="card__title"><a href="#">{{bds.name}}</a></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus harum...</p>
        </article>
      </div>

      <div class="card__action">

        <div class="card__author">
          <img src="http://lorempixel.com/40/40/sports/" alt="user">
          <div class="card__author-content">
            By <a href="#">{{ bds.account_name }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./new-item.component.css']
})
export class NewItem {  
  @Input() bds: BdsState;
  public isToggle: boolean = false;
  public defaultImage: string = "./images/loader.gif"

  constructor() {
  }

  shareToggle() {
      this.isToggle = !this.isToggle
  }

 };