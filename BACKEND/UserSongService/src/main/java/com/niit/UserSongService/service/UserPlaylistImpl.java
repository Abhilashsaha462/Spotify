package com.niit.UserSongService.service;

import com.netflix.discovery.converters.Auto;
import com.niit.UserSongService.domain.Playlist;
import com.niit.UserSongService.domain.Song;
import com.niit.UserSongService.exception.UserNotFoundException;
import com.niit.UserSongService.repository.PlaylistRepository;
import com.niit.UserSongService.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class UserPlaylistImpl implements PlaylistService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    PlaylistRepository playlistRepository;

    @Override
    public Playlist savePlaylist(Playlist playlist) throws UserNotFoundException {
        Optional<Playlist> playList = playlistRepository.findById(playlist.getEmail());
        System.out.println(playlist);
        if (playList.isEmpty()) {
            System.out.println("inif");
            Playlist newPlayList = new Playlist();
            newPlayList.setEmail(playlist.getEmail());
//            List<Song> songs = new ArrayList<>();

//            songs.add((Song) playlist.getSongList());
            newPlayList.setSongList(playlist.getSongList());
            return playlistRepository.save(newPlayList);
        } else {
            System.out.println("inelse");
            Playlist existingPlayList = playList.get();
            List<Song> songs = existingPlayList.getSongList();
            songs.addAll(playlist.getSongList());

//            songs.add((Song) playlist.getSongList());
            existingPlayList.setSongList(songs);
            return playlistRepository.save(existingPlayList);
        }
    }

}
