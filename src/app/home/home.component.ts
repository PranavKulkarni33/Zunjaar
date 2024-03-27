import { Component, OnInit, ElementRef, ViewChild, HostListener, Renderer2, AfterViewInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeInFromBottom', [
      state('void', style({
        opacity: 0,
        transform: 'translateY(50px)' // Start from slightly below the final position
      })),
      state('*', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('void => *', [
        animate('1500ms ease-in-out')
      ])
    ])
  ]
})
export class HomeComponent implements OnInit, AfterViewInit {

  animationState: string | undefined;
  @ViewChild('title') title!: ElementRef;
  @ViewChild('subtitle') subtitle!: ElementRef;
  @ViewChild('leaf1') leaf1!: ElementRef;
  @ViewChild('leaf2') leaf2!: ElementRef;
  @ViewChild('bush2') bush2!: ElementRef;
  @ViewChild('mount1') mount1!: ElementRef;
  @ViewChild('mount2') mount2!: ElementRef;

  zunjaarVisible: boolean = false;
  dholTashaVisible: boolean = false;

  loading: boolean = true;

  @ViewChild('navbar') navbar!: ElementRef; // Add this line to reference the navbar element

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.zunjaarVisible = true;
      this.dholTashaVisible = true;
    }, 7000);
  }

  @HostListener('window:scroll', [])
  onScroll() {
    let value = window.scrollY;

    if (this.title && this.title.nativeElement) {
      this.renderer.setStyle(this.title.nativeElement, 'marginTop', value * 2.1 + 'px');
    }
    if (this.subtitle && this.subtitle.nativeElement) {
      this.renderer.setStyle(this.subtitle.nativeElement, 'marginTop', value * 2.1 + 'px');
    }
    if (this.leaf1 && this.leaf1.nativeElement) {
      this.renderer.setStyle(this.leaf1.nativeElement, 'marginLeft', -value + 'px');
    }
    if (this.leaf2 && this.leaf2.nativeElement) {
      this.renderer.setStyle(this.leaf2.nativeElement, 'marginLeft', value + 'px');
    }
    if (this.bush2 && this.bush2.nativeElement) {
      this.renderer.setStyle(this.bush2.nativeElement, 'marginBottom', -value + 'px');
    }
    if (this.mount1 && this.mount1.nativeElement) {
      this.renderer.setStyle(this.mount1.nativeElement, 'marginBottom', -value * 1.1 + 'px');
    }
    if (this.mount2 && this.mount2.nativeElement) {
      this.renderer.setStyle(this.mount2.nativeElement, 'marginBottom', -value * 1.2 + 'px');
    }
  }

  toggleMenu() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.classList.toggle('active');
    }
  }
}
