package com.niit.UserSongService.service;

import com.niit.UserSongService.domain.Song;
import com.niit.UserSongService.domain.User;
import com.niit.UserSongService.exception.SongNotFoundException;
import com.niit.UserSongService.exception.UserAlreadyExistsException;
import com.niit.UserSongService.exception.UserNotFoundException;

import java.util.List;

public interface UserService {

    public User registerUser(User user) throws UserAlreadyExistsException;



//    public User saveUserSonglistToList(Song playlist, String email) throws UserNotFoundException;



    public User getAllSongs(String email) throws SongNotFoundException;

}
