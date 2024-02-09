import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-count-up',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './countUp.component.html',
  styleUrl: './countUp.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountUpComponent {
  @Input({ required: true }) public initial: number = 0;
  @Input({ required: true }) public final: number = 0;
  @Input() public duration: number = 30;
  @Input() public text: string = '';

  public countUp = signal<number>(0);
  public isCounting: boolean = false;

  public ngOnInit(): void {
    this.countUp.update( () => this.initial )
  }

  public ngOnChanges(): void {
    this.countUp.update( () => this.initial )
  }

  public ngAfterViewInit(): void {
    this.count();
  }

  public count(): void {
    this.isCounting = true;
    const step = (this.final - this.initial) / this.duration;

    const interval = setInterval(() => {
      this.countUp.update( (prev) => prev + step );

      if (this.countUp() >= this.final) {
        this.countUp.update( () => this.final );
        clearInterval(interval);
        this.isCounting = false;
      }
      // console.log({ countUp: this.countUp });
    }, 60);
  }

  public ngOnDestroy(): void {
    this.isCounting = false;
  }
}
