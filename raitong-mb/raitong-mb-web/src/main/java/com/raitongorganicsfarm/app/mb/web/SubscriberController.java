package com.raitongorganicsfarm.app.mb.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.raitongorganicsfarm.app.mb.entity.Subscriber;
import com.raitongorganicsfarm.app.mb.repository.SubscriberRepository;

@Controller
public class SubscriberController {

	@Autowired
	private SubscriberRepository subscriberRepository;
	private Subscriber subscriber;

	@RequestMapping(method = RequestMethod.POST, value = "/subscribers/**")
	public String create(@ModelAttribute Subscriber subscriber) {
		this.subscriber = subscriberRepository.save(subscriber);
		return "viewSubscriber";
	}
	
	public Subscriber getSubscriber() {
		return subscriber;
	}
	
}