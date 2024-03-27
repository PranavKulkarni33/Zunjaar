import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style, state } from '@angular/animations';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.css'],
  animations: [
    trigger('loadingAnimation', [
      state('enter', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      state('exit', style({
        opacity: 0,
        transform: 'translateY(-100vh)'
      })),
      transition('enter => exit', [
        animate('1s')
      ])
    ])
  ]
})
export class LoadingScreenComponent implements OnInit {
  animationState: string | undefined;

  ngOnInit(): void {
    // Start animation
    this.animationState = 'enter';

    // Simulate loading, then trigger exit animation
    setTimeout(() => {
      this.animationState = 'exit';
    }, 2000); // Adjust duration as needed
  }
}
