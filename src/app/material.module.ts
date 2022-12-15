import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
    imports:[MatButtonModule, MatIconModule, MatInputModule, MatDatepickerModule],
    exports: [MatButtonModule, MatIconModule, MatInputModule, MatDatepickerModule]
})
export class MaterialModule{}