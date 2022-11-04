package com.niit.authenticationservice.AuthenticationService.service;

import com.niit.authenticationservice.AuthenticationService.domain.User;
import com.niit.authenticationservice.AuthenticationService.exception.UserNotFoundException;
import org.apache.http.auth.InvalidCredentialsException;

import java.util.List;

public interface UserService {

    public User saveUser(User user);

    public User findByEmailAndPassword(String email,String password) throws UserNotFoundException;

}
