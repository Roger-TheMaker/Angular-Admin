import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Permission } from 'src/app/interfaces/permission';
import { Role } from 'src/app/interfaces/role';
import { PermissionService } from 'src/app/services/permission.service';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-role-edit',
  templateUrl: './role-edit.component.html',
  styleUrls: ['./role-edit.component.css']
})
export class RoleEditComponent implements OnInit {

  permissions: Permission[] = [];
  form: FormGroup;
  role: Role;

  constructor(private permissionService: PermissionService,
              private formBuilder: FormBuilder,
              private roleService: RoleService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      name : '',
      permissions: this.formBuilder.array([]),
    });

    this.permissionService.all().subscribe(
      res => {
        this.permissions = res.data;
        this.permissions.forEach( (p: Permission) => {
           this.permissionArray.push(
             this.formBuilder.group({
               value: false,
               id: p.id
             })
           );
        });
      }
    ); // nu merge

    this.route.params.subscribe(
      params => {
        this.roleService.get(params.id).subscribe(
          res => {
            this.role = res.data;
            console.log(this.role);
            const values = this.permissions.map((p: Permission) => {
                const selected = this.role.permissions
               .filter((rolePermission: Permission) => rolePermission.id === p.id).length > 0;
                if (selected){
                 return {
                   value: selected,
                   id: p.id
                 };
               }
            });
            this.form.patchValue({
              name: this.role.name,
              permissions: values,
            });
          }
        );
      }
    );
  }

  get permissionArray(): any{
    return this.form.get('permissions') as FormArray;
  }

  submit(): void {
    const formData = this.form.getRawValue();

    const data = {
      name: formData.name,
      permissions: formData.permissions.filter(p => p.value === true).map(p => p.id)
    };

    this.roleService.update(this.role.id, data)
      .subscribe(() => this.router.navigate(['/roles']));
  }
}
