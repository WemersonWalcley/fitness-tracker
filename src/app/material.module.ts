import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
    imports:[MatButtonModule, MatIconModule, MatInputModule, MatDatepickerModule, MatCheckboxModule],
    exports: [MatButtonModule, MatIconModule, MatInputModule, MatDatepickerModule, MatCheckboxModule]
})
export class MaterialModule{}