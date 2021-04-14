import { Component, OnInit } from '@angular/core';
import { Permission } from 'src/app/interfaces/permission';
import { PermissionService } from 'src/app/services/permission.service';

@Component({
  selector: 'app-role-create',
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.css']
})
export class RoleCreateComponent implements OnInit {

  permissions: Permission[] = [];
  constructor(private permissionService: PermissionService) { }

  ngOnInit(): void {
    this.permissionService.all().subscribe(
      res => {
        this.permissions = res.data;
      }
    );
  }

}
