package ua.ldv.calendar.springfullcalendarjson.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Event {

    private String title;
    private String start;
    private String end;
}

