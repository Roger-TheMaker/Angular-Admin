import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Permission } from 'src/app/interfaces/permission';
import { PermissionService } from 'src/app/services/permission.service';

@Component({
  selector: 'app-role-create',
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.css']
})
export class RoleCreateComponent implements OnInit {

  permissions: Permission[] = [];
  form: FormGroup;
  constructor(private permissionService: PermissionService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      name : '',
      permissions: this.formBuilder.array([]),
    });

    this.permissionService.all().subscribe(
      res => {
        this.permissions = res.data;
        this.permissions.forEach( p => {
           this.permissionArray.push(
             this.formBuilder.group({
               value: false,
               id: p.id
             })
           );
        });
      }
    );
  }

  get permissionArray(): any{
    return this.form.get('permissions') as FormArray;
     // We get all the forms attributes
  }
}
