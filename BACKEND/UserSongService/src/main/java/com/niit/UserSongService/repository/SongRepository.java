package com.niit.UserSongService.repository;

import com.niit.UserSongService.domain.Song;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SongRepository extends MongoRepository<Song, String> {

}
