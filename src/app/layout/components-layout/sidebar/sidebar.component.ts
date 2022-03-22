import {Component, HostListener, OnInit} from '@angular/core';
import {ThemeOptions} from '../../../theme-options';
import {select} from '@angular-redux/store';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
//import * as $ from "jquery";
import { NgbDateParserFormatter, NgbPopover, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  public extraParameter: any;

  constructor(public globals: ThemeOptions, private activatedRoute: ActivatedRoute) {

  }

  @select('config') public config$: any;

  masteritemlist = [
    { id: 'lnkcompanymaster', routerLink:'/masters/companymaster', name:'Company Master' },
    { id: 'lnkfinancialyearmaster', routerLink:'/masters/financialyearmaster', name:'Financial Year Master' },
    { id:'lnkusermaster', routerLink:'/masters/usermaster', name:'User Master' },
    { id:'lnkaccountmaster', routerLink:'/masters/accountmaster', name:'Account Master' },
    { id:'lnkgroupmaster', routerLink:'/masters/groupmaster', name:'Group Master' },
    { id:'lnkagentmaster', routerLink:'/masters/agentmaster', name:'Agent Master' },
    { id:'lnkitemonmaster', routerLink:'/masters/itemOnMaster', name:'Item-On Master' },
    { id:'lnkfinisheditemmaster', routerLink:'/masters/finishedItemMaster', name:'FinishedItem Master' },
    { id:'lnkscreenitemmaster', routerLink:'/masters/screenItemMaster', name:'ScreenItem Master' },
    { id:'lnkgreyitemmaster', routerLink:'/masters/greyItemMaster', name:'Grey Item Master' },
    { id:'lnktransportmaster', routerLink:'/masters/transportMaster', name:'Transport Master' },
    { id:'lnkhastemaster', routerLink:'/masters/hasteMaster', name:'Haste Master' },
    { id:'lnkjobtypemaster', routerLink:'/masters/jobtypemaster', name:'Job Type Master' },
    { id:'lnkrangedescriptionmaster', routerLink:'/masters/rangedescriptionmaster', name:'Range Description Master' },
    { id:'lnkrgeneralitemmaster', routerLink:'/masters/generalitemmaster', name:'General Item Master' },
    { id:'lnkrvouchertypemaster', routerLink:'/masters/vouchertypemaster', name:'Voucher Type Master' }
  ]
 greypurchaseitemlist = [
    { id: 'lnkgreypurchaseorderform', routerLink:'/transactions/greypurchaseorderform', name:'Gyer Purchase Order' },
    { id: 'lnkgreypurchase', routerLink:'/transactions/greypurchase', name:'Grey Purchase' },
    { id:'lnkgreypurchasereturn', routerLink:'/transactions/greypurchasereturn', name:'Grey Purchase Return' }
  ] 
  finishedpurchaseitemlist = [
     { id: 'lnkfinishedpurchaseorder', routerLink:'/transactions/fininshedpurchaseorderform', name:'Finished Purchase Order' },
     { id: 'lnkfinishedpurchase', routerLink:'/transactions/fininshedpurchase', name:'Finished Purchase' },
     { id:'lnkfinishedpurchasereturn', routerLink:'/transactions/fininshedpurchasereturn', name:'Finished Purchase Return' }
  ] 
  generalpurchaseitemlist = [
     { id: 'lnkgeneralpurchase', routerLink:'/transactions/generalpurchasetran', name:'General Purchase' }
  ]   
  saleitemlist = [
    { id: 'lnksaleorderform', routerLink:'/transactions/saleorderform', name:'Sale Order' },
    { id: 'lnksalebill', routerLink:'/transactions/salebill', name:'Sale Bill' },
    { id:'lnksalereturn', routerLink:'/transactions/saleReturn', name:'Sale Return' }
  ]
   
  jobitemlist = [
    { id: 'lnkjoborder', routerLink:'/job/joborderform', name:'Job Order' },
    { id: 'lnksendforjw', routerLink:'/job/sendforjw', name:'Send For Job Work' },
    { id:'lnkbillreceivedfromjw', routerLink:'/job/billreceivedfromjw', name:'Bill Received From Job Work' },
    { id:'lnkchallanreceivedfromjw', routerLink:'/job/challanreceivedfromjw', name:'Challan Received From Job Work' }
  ]
   
  millitemlist = [
    { id: 'lnkmillorder', routerLink:'/mill/millorder', name:'Mill Order' },
    { id: 'lnkgreysendtomill', routerLink:'/mill/greysendtomill', name:'Grey Send To Mill' },
    { id:'lnkgreyreturnfrommill', routerLink:'/mill/greyreturnfrommill', name:'Grey Return From Mill' },
    { id:'lnkgpreceivedfrommill', routerLink:'/mill/gpreceivedfrommill', name:'GP Received From Mill' }
  ]
  
  finalizationitemlist = [
    { id: 'lnkitemfinalize', routerLink:'/finalize/itemfinalize', name:'Item Finalize' }
  ]

  private newInnerWidth: any;
  private innerWidth: any;
  activeId = 'dashboardsMenu';
  iconclicked(p: NgbPopover){
    debugger;
    if(this.globals.toggleSidebar && !this.globals.toggleSidebarMobile)
        this.openrategrid(p);
  }

  openrategrid(p: NgbPopover){
    p.open();
  }
 
  toggleSidebar() {
    this.globals.toggleSidebar = !this.globals.toggleSidebar;
  }

  sidebarHover() {
    this.globals.sidebarHover = !this.globals.sidebarHover;
  }

  ngOnInit() {
    setTimeout(() => {
      this.innerWidth = window.innerWidth;
      if (this.innerWidth < 1200) {
        this.globals.toggleSidebar = true;
      }
    });

    //this.extraParameter = this.activatedRoute.snapshot.firstChild.data.extraParameter;

  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.newInnerWidth = event.target.innerWidth;

    if (this.newInnerWidth < 1200) {
      this.globals.toggleSidebar = true;
    } else {
      this.globals.toggleSidebar = false;
    }

  }

}
