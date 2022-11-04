package com.niit.UserSongService.service;

import com.niit.UserSongService.domain.Song;

import java.util.List;

public interface SongService {
    Song addSong(Song song);
    List<Song> getAllSongs();
}
