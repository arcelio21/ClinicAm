import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProvinceGet } from 'src/app/shared/model/ProvinceGet';
import { AddressService } from '../../service/address/Address.service';
import {DistrictGet} from "../../../../shared/model/DistrictGet";
import {VillageGet} from "../../../../shared/model/VillageGet";

@Component({
  selector: 'app-section-register-secondary',
  templateUrl: './section-register-secondary.component.html',
  styleUrls: ['./section-register-secondary.component.css'],
})
export class SectionRegisterSecondaryComponent implements OnInit {

  @Output()
  nextForm = new EventEmitter<number>();

  @Input()
  control!: FormGroup<{
    district: FormControl<number | null>;
    province: FormControl<number | null>;
    village: FormControl<number | null>;
    specificAddress: FormControl<string | null>;
  }>;

  
  provincesOption!: ProvinceGet[] ;
  districtsOption!:DistrictGet[];
  villageOption!:VillageGet[];
  constructor(private addressService:AddressService) {}

  ngOnInit() {
    this.addressService.getProvince().subscribe(
      {
        next:(_value) =>{
          this.provincesOption = _value;
        },
        error:(error)=>{
          this.provincesOption = [
            {
              id:0,
              name: "Error de carga"
            }
          ];
          this.districtsOption = [];
          this.villageOption = [];
          console.log(error)
        }
      }
    );

    if (this.control.value.province){
      this.getDistrictByIdProvince(this.control.value.province);
    }
    if (this.control.value.district){
      this.getVillageByIdDistrict(this.control.value.district);
    }


  }

  nextFormSection() {
    if (this.control.valid) {
      this.nextForm.emit(3);
    }
  }

  prevFormSection() {
    this.nextForm.emit(1);
  }

  getDistrictByIdProvince(idProvince:number){
    this.addressService.getDistrictByIdProvince(idProvince).subscribe(
      {
        next:(_value)=>{
          this.districtsOption = _value;
        },
        error:(err)=>{
          this.districtsOption = [
            {
              id:0,
              name:"Direccion sin registrar",
              provinceId:0
            }
          ];
          this.villageOption = [];
          console.log(err);
        }
      }
    );

  }

  getVillageByIdDistrict(idDistrict:number){
    this.addressService.getVillageByIdDistrict(idDistrict).subscribe(
      {
        next:(_value)=>{
          console.log("error");

          if(_value.length>0){
            this.villageOption = _value;
          }else{
            this.villageOption = [{
              id:0,
              name:"Direccion sin registrar",
              districtId:0
            }]
          }
        },
        error:(err)=>{
          this.villageOption = [
            {
              id: 0,
              name: 'Direccion sin registrar',
              districtId: 0,
            },
          ];

          console.log(err);
        }
      }
    );
  }
}
