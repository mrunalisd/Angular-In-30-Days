import { Component } from '@angular/core';
import { ReversePipe } from '../pipes/reverse-pipe';
import { ExponentialPipe } from '../pipes/exponential-pipe';
import { TruncatePipe } from '../pipes/truncate-pipe';
import { PhoneFormatPipe } from '../pipes/phone-format-pipe';
import { MaskPipe } from '../pipes/mask-pipe';

@Component({
  selector: 'app-custom-pipes',
  imports: [ReversePipe, ExponentialPipe, TruncatePipe, PhoneFormatPipe, MaskPipe],
  templateUrl: './custom-pipes.html',
  styleUrl: './custom-pipes.css'
})
export class CustomPipes {

}
