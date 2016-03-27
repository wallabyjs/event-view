import { Component, OnDestroy, OnInit, ViewChild } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { Subscription } from 'rxjs/Rx';

import { FilterTextComponent, FilterService } from '../../common';
import { Vehicle, VehicleService } from '../common';
import { VehicleButtonComponent } from '../vehicle-button';

@Component({
  selector: 'ev-vehicles',
  templateUrl: 'app/^vehicles/^vehicle-list/vehicle-list.component.html',
  directives: [FilterTextComponent, VehicleButtonComponent, ROUTER_DIRECTIVES],
  styleUrls: ['app/^vehicles/^vehicle-list/vehicle-list.component.css']
})
export class VehicleListComponent implements OnDestroy, OnInit {
  private _dbResetSubscription: Subscription;

  vehicles: Vehicle[];
  filteredVehicles = this.vehicles;
  @ViewChild(FilterTextComponent) filterComponent: FilterTextComponent;


  constructor(
    private _filterService: FilterService,
    private _vehicleService: VehicleService) { }

  filterChanged(searchText: string) {
    this.filteredVehicles = this._filterService.filter(searchText, ['id', 'name', 'type'], this.vehicles);
  }

  getVehicles() {
    this.vehicles = [];
    this._vehicleService.getVehicles()
      .subscribe(vehicles => {
        this.vehicles = this.filteredVehicles = vehicles;
        this.filterComponent.clear();
      },
      error => {
        console.log('error occurred here');
        console.log(error);
      },
       () => {
        console.log('completed');
      });
  }

  ngOnDestroy() {
    this._dbResetSubscription.unsubscribe();
  }

  ngOnInit() {
    componentHandler.upgradeDom();
    this.getVehicles();
    this._dbResetSubscription = this._vehicleService.onDbReset
      .subscribe(() => this.getVehicles());
  }

  trackByVehicles(index: number, vehicle: Vehicle) {
    return vehicle.id;
  }
}
