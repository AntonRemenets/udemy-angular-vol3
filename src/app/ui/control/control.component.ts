import {
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  input,
  ViewEncapsulation,
} from '@angular/core'

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent {
  label = input.required<string>()
  //@ContentChild('myInput') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>
  private control =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('myInput')

  onClick() {
    console.log(this.control())
  }
}
