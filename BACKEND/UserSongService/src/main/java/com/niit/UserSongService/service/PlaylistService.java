package com.niit.UserSongService.service;

import com.niit.UserSongService.domain.Playlist;
import com.niit.UserSongService.exception.UserNotFoundException;
import org.apache.commons.configuration.plist.XMLPropertyListConfiguration;

public interface PlaylistService {
    Playlist savePlaylist(Playlist playlist) throws UserNotFoundException;

}
