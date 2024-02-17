import { CommonModule, ViewportScroller } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-go-top',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './goTop.component.html',
  styleUrl: './goTop.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoTopComponent {

  constructor(
    private viewportScroller: ViewportScroller,
  ) {}

  goToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
