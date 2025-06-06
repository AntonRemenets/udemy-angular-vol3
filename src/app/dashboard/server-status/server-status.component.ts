import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core'

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  //currentStatus: 'online' | 'offline' | 'unknown' = 'unknown'
  currentStatus = signal<'online' | 'offline' | 'unknown'>('unknown')
  private destroyRef = inject(DestroyRef)

  ngOnInit() {
    const interval = setInterval(() => {
      const rnd = Math.random()
      if (rnd < 0.5) {
        this.currentStatus.set('online')
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline')
      } else this.currentStatus.set('unknown')
    }, 10000)

    this.destroyRef.onDestroy(() => {
      clearInterval(interval)
    })
  }
}
