import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { SelectorService } from '../@core/utils/selector.service';

@Component({
	selector: 'ngx-share',
	styleUrls: ['share.component.scss'],
	template: `
		<router-outlet></router-outlet>
	`
})
export class ShareComponent implements OnInit, OnDestroy {
	private _ngDestroy$ = new Subject<void>();

	constructor(
		private translate: TranslateService,
		private selectorService: SelectorService,
		private router: Router
	) {}

	async ngOnInit() {}

	getTranslation(prefix: string) {
		let result = prefix;
		this.translate.get(prefix).subscribe((res) => {
			result = res;
		});
		return result;
	}

	ngOnDestroy() {
		this._ngDestroy$.next();
		this._ngDestroy$.complete();
	}
}
