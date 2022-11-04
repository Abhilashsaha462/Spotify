package com.niit.UserSongService.domain;

import lombok.*;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;


@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Document
public class User {

    @Id
    private String email;
    private String userName;
    private String phoneNumber;
    @Transient
    private String password;


}
