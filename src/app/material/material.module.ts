import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatStepperModule } from "@angular/material/stepper";
import { MatFormFieldModule } from "@angular/material/form-field";
const MaterialComponent = [MatButtonModule, MatStepperModule, MatFormFieldModule];
@NgModule({
  imports: [MaterialComponent],
  exports: [MaterialComponent],
})
export class MaterialModule {}
