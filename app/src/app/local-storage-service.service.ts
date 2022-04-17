// import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs/internal/Subject';
// import { LocalStorageService } from 'src/app/local-storage-service.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class LocalStorageServiceService {

//   localStorage: Storage;
//   changes$: newSubject(user: any;
//   columns: any;
// );
//   displayedColumns: any;


//   constructor( private localStorage: LocalStorageService) {
//     this.localStorage = window.localStorage;
//   }

//   get(key:string):any{
//     if(this.isLocalStorageSupported){
//       return JSON.parse(this.localStorage.getItem(key));
//     }
//     return null;
//   }

//   set(key: string, value: any): boolean {

//     if (this.isLocalStorageSupported) {
//     this.localStorage.setItem(key, JSON.stringify(value));
//     this.changes$.next({ type: 'set', key, value });
//     return true;
//     }
//     return false;

//     }


//     remove(key: string): boolean {
//     if (this.isLocalStorageSupported) {
//     this.localStorage.removeItem(key);
//     this.changes$.next({ type: 'remove', key });
//     return true;
//     }
//     return false;
//     }
//     get isLocalStorageSupported(): boolean {
//     return !!this.localStorage;
//     }

//     setDisplayedColumns(): void{
//       if(!this.localStorage.get('key')){
//         this.columns.forEach((col: { index: any; Field: any; }, index: string | number)=>{
//           col.index = index;
//           this.displayedColumns[index] = col.Field;
//         });
//         this.localStorage.set('', this.displayedColumns);
//       } else{
//         this.displayedColumns = this.localStorage.get('');

//       }
//       if(!this.user.isDhUser){
//         this.displayedColumns.splice(
//           this.displayedColumns.indexOf('CorporationName'),

//           );
//       }
//     }

// }

