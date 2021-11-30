import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from '../../generic/services/generic-service/generic.service';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends GenericService<User>{

  constructor(private readonly httpClient:HttpClient) {
    super("users",httpClient);
  }


}
