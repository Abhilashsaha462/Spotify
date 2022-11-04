package com.niit.UserSongService.repository;

import com.niit.UserSongService.domain.Playlist;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PlaylistRepository extends MongoRepository<Playlist, String> {

}
