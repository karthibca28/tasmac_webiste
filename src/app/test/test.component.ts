import { Component,HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppModule } from '../app.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [FormsModule,AppModule,CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})


export class TestComponent {
  showScrollTopButton = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollPosition = window.scrollY;
    this.showScrollTopButton = scrollPosition > 100; // Adjust as needed
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
