package com.niit.UserSongService.service;

import com.niit.UserSongService.domain.Song;
import com.niit.UserSongService.domain.User;
import com.niit.UserSongService.exception.SongNotFoundException;
import com.niit.UserSongService.exception.UserAlreadyExistsException;
import com.niit.UserSongService.exception.UserNotFoundException;
import com.niit.UserSongService.proxy.UserAuthProxy;
import com.niit.UserSongService.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    private UserRepository userRepository;
    private UserAuthProxy userAuthProxy;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, UserAuthProxy userAuthProxy)
    {
        this.userRepository = userRepository;
        this.userAuthProxy = userAuthProxy;
    }

    @Override
    public User registerUser(User user) throws UserAlreadyExistsException {
        if (userRepository.findById(user.getEmail()).isPresent())
        {
            throw new UserAlreadyExistsException();
        }
        ResponseEntity<?> response = userAuthProxy.saveUser(user);
        if (response.getStatusCodeValue()==201) {
            return userRepository.save(user);
        }
        else
        {
            return null;
        }


    }

//    @Override
//    public User saveUserSonglistToList(Song playlist, String email) throws UserNotFoundException {
//        //  Retrieving the user object with same email id. If the return optionalobject is empty then return
////  UserNotFoundException
//        if (userRepository.findById(email).isEmpty())
//        {
//            throw new UserNotFoundException();
//        }
////  If the user found then store it as an reference variable
//        User user = userRepository.findByEmail(email);
////  Check does the user has any playlist stored in the list
//        if (user.getPlayList() == null)
//        {
////  If not store the first playlist object for the use
//            user.setPlayList(Arrays.asList(playlist));
//        }
//        else
//        {
////  Control come here if the user has a list of favourite playlists. Retrieve the list.
//            List<Song> plays = user.getPlayList();
////  Store the new playlist object in the list.
//            plays.add(playlist);
////  Update the playList property of the user object.
//            user.setPlayList(plays);
//        }
////  The save method will update the existing user object in the mongo.
//        return userRepository.save(user);
//
//    }

    @Override
    public User getAllSongs(String email) throws SongNotFoundException {
        if (userRepository.findById(email).isEmpty())
        {
            throw new SongNotFoundException();
        }
        System.out.println("yes");
        return userRepository.findByEmail(email);
    }

}
