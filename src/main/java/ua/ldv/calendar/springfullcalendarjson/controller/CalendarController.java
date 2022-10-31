package ua.ldv.calendar.springfullcalendarjson.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller()
public class CalendarController {

    @RequestMapping("/")
    String index(Model model) {
        return "index";
    }
}
