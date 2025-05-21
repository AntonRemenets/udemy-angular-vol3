import {
  Component,
  ElementRef,
  EventEmitter,
  output,
  Output,
  viewChild,
} from '@angular/core'
import { ButtonComponent } from '../../../ui/button/button.component'
import { ControlComponent } from '../../../ui/control/control.component'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  //@ViewChild('myForm') form?: ElementRef<HTMLFormElement>
  private form = viewChild.required<ElementRef<HTMLFormElement>>('myForm')
  //@Output() add = new EventEmitter()
  add = output<{ title: string; text: string }>()

  onSubmit(title: string, ticketText: string) {
    this.add.emit({ title: title, text: ticketText })
    this.form().nativeElement.reset()
  }
}
