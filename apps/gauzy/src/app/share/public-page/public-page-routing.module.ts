import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicPageComponent } from './public-page.component';

const routes: Routes = [
	{
		path: '',
		component: PublicPageComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PublicPageRoutingModule {}
