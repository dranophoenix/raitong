// WARNING: DO NOT EDIT THIS FILE. THIS FILE IS MANAGED BY SPRING ROO.
// You may push code into the target .java compilation unit if you wish to edit any member(s).

package com.raitongorganicsfarm.app.mb.repository;

import com.raitongorganicsfarm.app.mb.entity.Subscription;
import com.raitongorganicsfarm.app.mb.repository.SubscriptionRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

privileged aspect SubscriptionRepository_Roo_Mongo_Repository {
    
    declare parents: SubscriptionRepository extends PagingAndSortingRepository<Subscription, String>;
    
    declare @type: SubscriptionRepository: @Repository;
    
}
