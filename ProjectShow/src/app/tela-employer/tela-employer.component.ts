import { Component, OnInit } from '@angular/core';

import { PoBreadcrumb, PoBreadcrumbItem } from '@portinari/portinari-ui';
import { PoPageDetailLiterals } from '@portinari/portinari-ui';

@Component({
  selector: 'app-tela-employer',
  templateUrl: './tela-employer.component.html',
  styleUrls: ['./tela-employer.component.css']
})
export class TelaEmployerComponent implements OnInit {

  action: string;
  breadcrumb: PoBreadcrumb;
  breadcrumbItem: PoBreadcrumbItem;
  breadcrumbParams: any;
  customLiterals: PoPageDetailLiterals;
  literals: string;
  params: any;
  title: string;

  ngOnInit() {
    this.restore();
  }

  addBreadcrumbItem() {
    this.breadcrumb.items = this.breadcrumb.items.concat([this.breadcrumbItem]);
    this.breadcrumbItem = { label: undefined, link: undefined };
  }

  addBreadcrumbParam() {
    const newParam = {[this.breadcrumbParams.property]: this.breadcrumbParams.value};

    if (this.breadcrumb.params) {
      this.breadcrumb.params = Object.assign(this.breadcrumb.params, newParam);
    } else {
      this.breadcrumb.params = newParam;
    }

    this.breadcrumbParams = {};
  }

  back() {
    this.action = 'back';
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  edit() {
    this.action = 'edit';
  }

  remove() {
    this.action = 'remove';
  }

  restore() {
    this.action = '';
    this.breadcrumb = { items: [] };
    this.breadcrumbItem = { label: undefined, link: undefined };
    this.breadcrumbParams = {};
    this.customLiterals = undefined;
    this.literals = '';
    this.title = 'Oferta novo trabalho';
  }

}
