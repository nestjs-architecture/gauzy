import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ShareComponent } from './share.component';
import { NotFoundComponent } from '../pages/miscellaneous/not-found/not-found.component';
// import { RoleGuard } from '../@core/role/role.guard';
// import { RolesEnum } from '@gauzy/models';

const routes: Routes = [
	{
		path: '',
		component: ShareComponent,
		children: [
			{
				path: 'public-page',
				loadChildren: () =>
					import('./public-page/public-page.module').then(
						(m) => m.PublicPageModule
					)
			},
			{
				path: '**',
				component: NotFoundComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ShareRoutingModule {}
