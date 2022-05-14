package com.ott.ott_backend;

import com.sun.istack.NotNull;
import lombok.Builder;
import lombok.RequiredArgsConstructor;

@Builder
@RequiredArgsConstructor
public class OttBackendModel {
    @NotNull
    private String id;
}
