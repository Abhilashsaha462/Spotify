package com.niit.UserSongService.controller;

import com.netflix.discovery.converters.Auto;
import com.niit.UserSongService.domain.Playlist;
import com.niit.UserSongService.domain.Song;
import com.niit.UserSongService.domain.User;
import com.niit.UserSongService.exception.SongNotFoundException;
import com.niit.UserSongService.exception.UserAlreadyExistsException;
import com.niit.UserSongService.exception.UserNotFoundException;
import com.niit.UserSongService.service.PlaylistService;
import com.niit.UserSongService.service.SongService;
import com.niit.UserSongService.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping("/api/v1/")

public class UserController {

    private UserService userService;

    private ResponseEntity<?> responseEntity;

    @Autowired
    private PlaylistService playlistService;

    @Autowired
    private SongService songService;

    @Autowired
    public UserController(UserService userService)
    {
        this.userService = userService;
    }


    @PostMapping("register")
    public ResponseEntity<?> registerUser(@RequestBody User user) throws UserAlreadyExistsException {
        try {
            responseEntity = new ResponseEntity<>(userService.registerUser(user), HttpStatus.CREATED);
        }
        catch (UserAlreadyExistsException e)
        {
            throw new UserAlreadyExistsException();
        }
        return responseEntity;
    }

//    @PostMapping("/user/{email}/playlists")
//    public ResponseEntity<?> saveUserPlaylistToList(@RequestBody Song playlist, @PathVariable String email) throws UserNotFoundException {
//        try{
//            responseEntity =new ResponseEntity<>(userService.saveUserSonglistToList(playlist,email), HttpStatus.CREATED);
//        }
//        catch (UserNotFoundException e)
//        {
//            throw new UserNotFoundException();
//        }
//        return responseEntity;
//    }

    @PostMapping("playlist")
    public ResponseEntity<?> savePlaylist(@RequestBody Playlist playList) throws UserNotFoundException {

        return new ResponseEntity<>(  playlistService.savePlaylist(playList), HttpStatus.OK);
    }


    @GetMapping("/songs/{email}")
    public ResponseEntity getAllSongs(@PathVariable String email) throws SongNotFoundException {
        try {
            System.out.println("ok");
            responseEntity = new ResponseEntity<>(userService.getAllSongs(email), HttpStatus.OK);
            System.out.println("done");
        }
        catch (SongNotFoundException e)
        {
            throw new SongNotFoundException();
        }
        return responseEntity;
    }

    @PostMapping("/song")
    public ResponseEntity<?> addSongs(@RequestBody Song song){
        return new ResponseEntity<>(songService.addSong(song), HttpStatus.OK);
    }

    @GetMapping("/allsongs")
    public ResponseEntity<?> getAllSongs()
    {
        return new ResponseEntity<>(songService.getAllSongs(),HttpStatus.OK);
    }

}
