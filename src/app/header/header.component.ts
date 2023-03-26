import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();
  isAuthenticated = false;
  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

  onSave() {
    this.dataStorageService.onSaveRecipe();
  }

  onFetch() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  onLogOut() {
    this.authService.logOut();
  }
}
