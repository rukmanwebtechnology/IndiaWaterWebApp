import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent implements OnInit {

  selected: string = "";
  searchmenu: any[] = [
    { id: 1, name: 'Account Master'},    
    { id: 1, name: 'Group Master'},    
    { id: 1, name: 'Dashboard'}
    ]

  constructor() { }

  ngOnInit() {

  }
  onChange(selecteditem: any){
      
      let element: HTMLElement = document.getElementById("lnkaccountmaster") as HTMLElement;
      element.click();
  }

  public searchboxvalue = '';
  
  public myLocalDataList = [
    {
      name: "Company Master", 
      id: "lnkcompanymaster",
      url: ""
    },
    {
      name: "Financial Year Master", 
      id: "lnkfinancialyearmaster",
      url: ""
    },
    {
      name: "Account Master", 
      id: "lnkaccountmaster",
      url: ""
    },
    {
      name: "Group Master", 
      id: "lnkgroupmaster",
      url: ""
    },
    {
      name: "Agent Master", 
      id: "lnkagentmaster",
      url: ""
    },
    {
      name: "Item-On Master", 
      id: "lnkitemonmaster",
      url: ""
    },
    {
      name: "FinishedItem Master", 
      id: "lnkfinisheditemmaster",
      url: ""
    },
    {
      name: "ScreenItem Master", 
      id: "lnkscreenitemmaster",
      url: ""
    },
    {
      name: "GreyItem Master", 
      id: "lnkgreyitemmaster",
      url: ""
    },
    {
      name: "Transport Master", 
      id: "lnktransportmaster",
      url: ""
    },
    {
      name: "Haste Master", 
      id: "lnkhastemaster",
      url: ""
    },
    {
      name: "Job Type Master", 
      id: "lnkjobtypemaster",
      url: ""
    },
    {
      name: "Range Description Master", 
      id: "lnkrangedescriptionmaster",
      url: ""
    },
    {
      name: "General Item Master", 
      id: "lnkrgeneralitemmaster",
      url: ""
    },
    {
      name: "Voucher Type Master", 
      id: "lnkrvouchertypemaster",
      url: ""
    },
    {
        name: "Gyer Purchase Order Form",
        id: "lnkgreypurchaseorderform",
        url: ""
      },
      {
        name: "Grey Purchase",
        id: "lnkgreypurchase",
        url: ""
      },
      {
        name: "Grey Purchase Return Goods",
        id: "lnkgreypurchasereturn",
        url: ""
      },
      {
        name: "Finished Purchase Order Form",
        id: "lnkfinishedpurchaseorder",
        url: ""
      },
      {
        name: "Finished Purchase",
        id: "lnkfinishedpurchasev",
        url: ""
      },
      {
        name: "Finished Purchase Return",
        id: "lnkfinishedpurchasereturn",
        url: ""
      },
      {
        name: "General Purchase",
        id: "lnkgeneralpurchase",
        url: ""
      },
      {
        name: "Sale Order Form",
        id: "lnksaleorderform",
        url: ""
      },
      {
        name: "Sale Bill",
        id: "lnksalebill",
        url: ""
      },
      {
        name: "Sale Return",
        id: "lnksalereturn",
        url: ""
      },      
      {
        name: "Job Order Form",
        id: "lnkjoborder",
        url: ""
      },
      {
        name: "Send For Job Work",
        id: "lnksendforjw",
        url: ""
      },
      {
        name: "Bill Received From Job Work",
        id: "lnkbillreceivedfromjw",
        url: ""
      },
      {
        name: "Challan Received From Job Work",
        id: "lnkchallanreceivedfromjw",
        url: ""
      },
      {
        name: "Mill Order",
        id: "lnkmillorder",
        url: ""
      },
      {
        name: "Grey Send To Mill",
        id: "lnkgreysendtomill",
        url: ""
      },
      {
        name: "Grey Return From Mill",
        id: "lnkgreyreturnfrommill",
        url: ""
      },
      {
        name: "GP Received From Mill",
        id: "lnkgpreceivedfrommill",
        url: ""
      },
      {
        name: "Item Finalize",
        id: "lnkitemfinalize",
        url: ""
      },
      {
        name: "Reports",
        id: "lnkreports",
        url: ""
      }
  ];
  
  isActive: boolean = false;

  public selectedTempStatic (result: any) {
    
    this.searchboxvalue = result.name;
    var elementtoclick = result.id;
    let element: HTMLElement = document.getElementById(elementtoclick) as HTMLElement;
    element.click();
  }

  toggle() {
    this.isActive = this.isActive ? false: true;
    this.searchboxvalue = ''; 
  }
}
