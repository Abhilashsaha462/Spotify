import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Data1serviceService } from '../data1service.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SongComponent } from '../song/song.component';

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.css']
})
export class SpotifyComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private s: Data1serviceService, private r:Router, public dialog: MatDialog) {}
   song:any;

  //  onCreate1()
  //  {
  //   this.s.getAllSongs1().subscribe((x)=>{
  //     this.song=x;
  //     console.log(x);
  //   })
  //  }

  // onCreate1()
  // {
  //   this.s.getAllSongs1().subscribe((x)=>{
  //     this.song=x;
  //     console.log(x);
  //   })
  // }

  // openDialog() {
  //   const dialogRef = this.dialog.open(SongComponent,{
  //     width:'50%'
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

  logout()
  {
    localStorage.removeItem('email');
    this.r.navigateByUrl("login");
  }

}