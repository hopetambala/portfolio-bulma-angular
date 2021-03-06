import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

declare var tableau: any;

@Component({
  selector: 'app-p-citizen',
  templateUrl: './p-citizen.component.html',
  styleUrls: ['./p-citizen.component.scss']
})
export class PCitizenComponent implements OnInit {

  photos: Array<any> = []

  viz: any;

  constructor() { 
    this.photos = [
      'assets/portfolio/pcitizen/ferndale.jpg',
      'assets/portfolio/pcitizen/ferndale2.jpg',
      'assets/portfolio/pcitizen/ferndale3.jpg'
    ]
  }

  ngOnInit() {
    
    $(document).ready(function(){
      var	scrolling = false;
      var contentSections = $('.cd-section'),
      verticalNavigation = $('.cd-vertical-nav'),
      navigationItems = verticalNavigation.find('a'),
      navTrigger = $('.cd-nav-trigger'),
      scrollArrow = $('.cd-scroll-down');

      $(window).on('scroll', checkScroll);

      //smooth scroll to the selected section
      verticalNavigation.on('click', 'a', function(event){
        event.preventDefault();
        //smoothScroll($(this.hash));
        verticalNavigation.removeClass('open');
      });

      //smooth scroll to the second section
      scrollArrow.on('click', function(event){
        event.preventDefault();
        //smoothScroll($(this.hash));
      });

      // open navigation if user clicks the .cd-nav-trigger - small devices only
      navTrigger.on('click', function(event){
        event.preventDefault();
        verticalNavigation.toggleClass('open');
      });

      function checkScroll() {
        if( !scrolling ) {
          scrolling = true;
          (!window.requestAnimationFrame) ? setTimeout(updateSections, 300) : window.requestAnimationFrame(updateSections);
        }
      }

      function updateSections() {
        var halfWindowHeight = $(window).height()/2,
        scrollTop = $(window).scrollTop();
        contentSections.each(function(){
          var section = $(this),
          sectionId = section.attr('id'),
          navigationItem = navigationItems.filter('[href^="#'+ sectionId +'"]');
          ( (section.offset().top - halfWindowHeight < scrollTop ) && ( section.offset().top + section.height() - halfWindowHeight > scrollTop) )
            ? navigationItem.addClass('active')
            : navigationItem.removeClass('active');
          });
        scrolling = false;
      }

    });
  }

  scroll(el: HTMLElement) {
    //el.scrollIntoView();
    el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
