import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '../../@core/services/store.service';

@Component({
	selector: 'ngx-public-page',
	templateUrl: './public-page.component.html',
	styleUrls: ['./public-page.component.scss']
})
export class PublicPageComponent implements OnInit, OnDestroy {
	constructor(private store: Store) {}

	ngOnInit() {}

	ngOnDestroy() {}
}
