import {AfterViewInit, ApplicationRef, Component, ComponentFactoryResolver, Injector, OnDestroy, ViewChild} from '@angular/core';
import {CdkPortal, DomPortalHost} from '@angular/cdk/portal';

@Component({
  selector: 'comp-1',
  template:
      `
        <ng-container *cdkPortal>
          <ng-content></ng-content>
        </ng-container>
        
      `
})
export class Comp1Component implements AfterViewInit, OnDestroy {
  @ViewChild(CdkPortal)
  private portal: CdkPortal;    // portal refers to the component that needs to be rendered
  private host: DomPortalHost;  // DomPortalHost refers to the element on which the portal wants to be rendered

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector
  ) {}

  ngAfterViewInit() {
    this.host = new DomPortalHost(
      document.querySelector('#target'),    // the target element to be used as host
      this.componentFactoryResolver,
      this.applicationRef,
      this.injector
    );

    this.host.attach(this.portal);
  }

  ngOnDestroy() {
    this.host.detach();
  }
}
