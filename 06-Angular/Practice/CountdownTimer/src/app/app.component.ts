import { RouterOutlet } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
// export class AppComponent {
//   title = 'CountdownTimer';
// }



export class AppComponent implements OnInit, OnDestroy {
  targetDate = new Date('2024-10-06T00:00:00'); // Target date: 6th October 2024
  timeRemaining: string = '';
  private subscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.startCountdown();
  }

  startCountdown() {
    this.updateTimeRemaining(); // Initial update
    const source = interval(1000); // Update every 1 second
    this.subscription = source.subscribe(() => {
      this.updateTimeRemaining();
    });
  }

  updateTimeRemaining() {
    const now = new Date().getTime();
    const difference = this.targetDate.getTime() - now;

    if (difference <= 0) {
      this.timeRemaining = 'Time’s up!';
      this.subscription.unsubscribe();
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    this.timeRemaining = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // Cleanup when component is destroyed
  }
}
