import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Data1serviceService } from '../data1service.service';
import { Playlist } from '../playlist';
import { reg1 } from '../reg1';
import { reg2 } from '../reg2';
import { SpotifyComponent } from '../spotify/spotify.component';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {

  songData:FormGroup
  constructor(private song:Data1serviceService, private route:Router) { 
    this.songData = new FormGroup({
      songId : new FormControl(''),
      songName : new FormControl(''),
      genre : new FormControl(''),
    })
  }

  // saveData1()
  //  {
  //    const regData3 = this.songData.value;
  //    this.song.userData(regData3).subscribe(() => {
  //     alert("Data stored successfully");
  //     this.songData.reset();
  //     // this.route.navigate(["/song"]);
  //    },error => {
  //      alert(error)
  //    });
   
  //  }

  ngOnInit(): void {
    // this.song.getemail();
    this.song.getAllSongs1().subscribe(
      a=>{
       this.song1=a;
        console.log("Song details",a);
      },
      (error)=>{
        console.log(error);
        
      }
     )
  }

  song1:reg2[]=[];

  playlist:reg2=new reg2();

  getAllSong() {
    
   console.log("Showing user song details");
   this.playlist.songId=this.songData.value.songId;
   this.playlist.songName=this.songData.value.songName;
   this.playlist.genre=this.songData.value.genre;
   this.song.addSongs(this.playlist).subscribe(x=>
    alert("song created")
    )
  };

  playlist1:Playlist=new Playlist();
  open(x:any) {
    console.log(x);
    this.playlist1.email= localStorage.getItem('email')!;
    this.playlist1.songList= x;
    this.song.addToPlay(this.playlist1).subscribe(x=>alert("song added in playlist"));

  }


  logout(){
    window.localStorage.clear();
    confirm("Succesfully LogOut")
  }
}
