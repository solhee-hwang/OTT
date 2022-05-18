package com.ott.ott_backend.Service;

import com.ott.ott_backend.model.UserEntity;
import com.ott.ott_backend.persistence.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class UserService {
    private UserRepository userRepository;
    public UserEntity create(final UserEntity userEntity){
        if(userEntity == null || userEntity.getEmail() == null){
            throw new RuntimeException("Invalid arguments");
        }
        final String email = userEntity.getEmail();
        if(userRepository.existsByEmail(email)){
            log.warn("Email already exist{}", email);
            throw new RuntimeException("Email alreay exists");
        }
        return userRepository.save(userEntity);
    }
    public UserEntity getByCredentials(final String email, final String password){
        return userRepository.findByEmailAndPassword(email,password);
    }
}