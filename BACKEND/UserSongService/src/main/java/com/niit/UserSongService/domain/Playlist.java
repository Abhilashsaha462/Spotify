package com.niit.UserSongService.domain;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Playlist {
    @Id
    private String email;
//    private String playlistName;
    private List<Song> songList;

}
