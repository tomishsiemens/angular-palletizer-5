import { MediaMatcher } from '@angular/cdk/layout';
import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { AddBoxService } from './services/add-box.service';
import { MeshComponent } from './mesh/mesh.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  title = 'angular-palletizer2';
  @ViewChild(MeshComponent) childMeshComponent: MeshComponent;

  parentsValue = true;
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public addBoxSerive: AddBoxService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  public addPalletButton(event: MouseEvent): void {
    this.childMeshComponent.addPallet();
    this.childMeshComponent.addPallet3D();
  }
  /*
  public addBoxButton(event: MouseEvent): void {
  //this.childWorkspaceComponent.addBoxFunc();
  this.addBoxSerive.addBox();
  console.log("add box clicked on parent func")
  }
*/
  public addBoxOfPallet() {
    this.childMeshComponent.addBoxOfPalletFunc();
    this.childMeshComponent.addBoxOfPallet3D();
    //console.log('add box of Pallet clicked on parent func');
  }

  public addBoxOfPp() {
    this.childMeshComponent.addBoxOfPpFunc();
    this.childMeshComponent.addBoxOfPp3D();
    //console.log('add box of PP clicked on parent func');
  }

  public saveSettingsWorkspaceButton(event: MouseEvent): void {
    this.childMeshComponent.setWorkspaceFunc();
    this.childMeshComponent.setWorkspaceFunc();
    console.log('save settings workspace clicked');
  }

  public saveSettingsKcsButton(event: MouseEvent): void {
    //this.childMeshComponent.setKcsFunc();
    //console.log('save settings Kcs clicked');
  }
  public addPickingPlaceButton(event: MouseEvent): void {
    this.childMeshComponent.addPickingPlaceFunc();
    this.childMeshComponent.addPp3D();
    console.log('add picking place clicked');
  }
  /*
add(){
  this.palletsService.addPallet();
}
*/
}

/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
