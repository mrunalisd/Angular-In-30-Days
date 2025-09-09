import { 
  Component, 
  Input, 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked, 
  OnDestroy 
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-demo',
  standalone: true,
  template: `<h3>Lifecycle Demo - {{ name }}</h3>`
})
export class LifecycleDemoComponent implements 
  OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() name: string = '';

  constructor() { console.log('Constructor Called'); }

  ngOnChanges() { console.log('ngOnChanges'); }
  ngOnInit() { console.log('ngOnInit'); }
  ngDoCheck() { console.log('ngDoCheck'); }
  ngAfterContentInit() { console.log('ngAfterContentInit'); }
  ngAfterContentChecked() { console.log('ngAfterContentChecked'); }
  ngAfterViewInit() { console.log('ngAfterViewInit'); }
  ngAfterViewChecked() { console.log('ngAfterViewChecked'); }
  ngOnDestroy() { console.log('ngOnDestroy'); }
}
