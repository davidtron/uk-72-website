var adviceSlider, adviceTab, breakdownStates, chemicalStates, droughtStates, fireStates, floodStates, fluStates, heatwaveStates, powercutStates, stormStates, terroristStates, thunderStates, winterweatherStates;

floodStates = [
  {
    tabId: 'tab-before-flood',
    contentSelector: '#flood-slider-before'
  }, {
    tabId: 'tab-during-flood',
    contentSelector: '#flood-slider-during'
  }, {
    tabId: 'tab-after-flood',
    contentSelector: '#flood-slider-after'
  }
];

fireStates = [
  {
    tabId: 'tab-before-fire',
    contentSelector: '#fire-slider-before'
  }, {
    tabId: 'tab-during-fire',
    contentSelector: '#fire-slider-during'
  }, {
    tabId: 'tab-after-fire',
    contentSelector: '#fire-slider-after'
  }
];

breakdownStates = [
  {
    tabId: 'tab-before-breakdown',
    contentSelector: '#breakdown-slider-before'
  }, {
    tabId: 'tab-during-breakdown',
    contentSelector: '#breakdown-slider-during'
  }, {
    tabId: 'tab-after-breakdown',
    contentSelector: '#breakdown-slider-after'
  }
];

chemicalStates = [
  {
    tabId: 'tab-before-chemical',
    contentSelector: '#chemical-slider-before'
  }, {
    tabId: 'tab-during-chemical',
    contentSelector: '#chemical-slider-during'
  }, {
    tabId: 'tab-after-chemical',
    contentSelector: '#chemical-slider-after'
  }
];

droughtStates = [
  {
    tabId: 'tab-before-drought',
    contentSelector: '#drought-slider-before'
  }, {
    tabId: 'tab-during-drought',
    contentSelector: '#drought-slider-during'
  }, {
    tabId: 'tab-after-drought',
    contentSelector: '#drought-slider-after'
  }
];

fluStates = [
  {
    tabId: 'tab-before-flu',
    contentSelector: '#flu-slider-before'
  }, {
    tabId: 'tab-during-flu',
    contentSelector: '#flu-slider-during'
  }, {
    tabId: 'tab-after-flu',
    contentSelector: '#flu-slider-after'
  }
];

heatwaveStates = [
  {
    tabId: 'tab-before-heatwave',
    contentSelector: '#heatwave-slider-before'
  }, {
    tabId: 'tab-during-heatwave',
    contentSelector: '#heatwave-slider-during'
  }, {
    tabId: 'tab-after-heatwave',
    contentSelector: '#heatwave-slider-after'
  }
];

powercutStates = [
  {
    tabId: 'tab-before-powercut',
    contentSelector: '#powercut-slider-before'
  }, {
    tabId: 'tab-during-powercut',
    contentSelector: '#powercut-slider-during'
  }, {
    tabId: 'tab-after-powercut',
    contentSelector: '#powercut-slider-after'
  }
];

winterweatherStates = [
  {
    tabId: 'tab-before-winterweather',
    contentSelector: '#winterweather-slider-before'
  }, {
    tabId: 'tab-during-winterweather',
    contentSelector: '#winterweather-slider-during'
  }, {
    tabId: 'tab-after-winterweather',
    contentSelector: '#winterweather-slider-after'
  }
];

stormStates = [
  {
    tabId: 'tab-before-storm',
    contentSelector: '#storm-slider-before'
  }, {
    tabId: 'tab-during-storm',
    contentSelector: '#storm-slider-during'
  }, {
    tabId: 'tab-after-storm',
    contentSelector: '#storm-slider-after'
  }
];

thunderStates = [
  {
    tabId: 'tab-before-thunder',
    contentSelector: '#thunder-slider-before'
  }, {
    tabId: 'tab-during-thunder',
    contentSelector: '#thunder-slider-during'
  }, {
    tabId: 'tab-after-thunder',
    contentSelector: '#thunder-slider-after'
  }
];

terroristStates = [
  {
    tabId: 'tab-before-terrorist',
    contentSelector: '#terrorist-slider-before'
  }, {
    tabId: 'tab-during-terrorist',
    contentSelector: '#terrorist-slider-during'
  }, {
    tabId: 'tab-after-terrorist',
    contentSelector: '#terrorist-slider-after'
  }
];

adviceTab = function(elements, selectedTab) {
  var activeElem, currentTab, inactiveElems;
  currentTab = selectedTab || elements[0].tabId;
  activeElem = _(elements).find(function(elem) {
    return elem.tabId === currentTab;
  });
  if (activeElem) {
    inactiveElems = _(elements).filter(function(elem) {
      return elem.tabId !== currentTab;
    });
    $(activeElem.contentSelector).show();
    $('#' + activeElem.tabId).parent('li').addClass('active');
    return _(inactiveElems).each(function(inactiveElem) {
      $(inactiveElem.contentSelector).hide();
      return $('#' + inactiveElem.tabId).parent('li').removeClass('active');
    });
  }
};

adviceSlider = function(name, states) {
  var beforeIndex, currentlySelected, duringIndex, hasBefore, sliderAfter, sliderBefore, sliderDuring;
  currentlySelected = null;
  hasBefore = $('#' + name + '-slider').hasClass("js-has-before");
  if (hasBefore) {
    sliderBefore = $('#' + name + '-slider-before .slider').bxSlider({
      infiniteLoop: false,
      responsive: false,
      onSlideBefore: function($slideElement, oldIndex, newIndex) {
        if (newIndex > 0) {
          return $('#' + name + '-slider-before .bx-prev').removeClass('disabled');
        } else {
          return $('#' + name + '-slider-before .bx-prev').addClass('disabled');
        }
      },
      onSlideAfter: function($slideElement, oldIndex, newIndex) {
        return sliderBefore.currentIndex = newIndex;
      }
    });
  } else {
    states = [states[1], states[2]];
  }
  sliderDuring = $('#' + name + '-slider-during .slider').bxSlider({
    infiniteLoop: false,
    responsive: false,
    onSlideBefore: function($slideElement, oldIndex, newIndex) {
      if (!hasBefore) {
        if (newIndex > 0) {
          return $('#' + name + '-slider-during .bx-prev').removeClass('disabled');
        } else {
          return $('#' + name + '-slider-during .bx-prev').addClass('disabled');
        }
      }
    },
    onSlideAfter: function($slideElement, oldIndex, newIndex) {
      return sliderDuring.currentIndex = newIndex;
    }
  });
  sliderAfter = $('#' + name + '-slider-after .slider').bxSlider({
    infiniteLoop: false,
    responsive: false,
    onSlideBefore: function($slideElement, oldIndex, newIndex) {
      if (newIndex === sliderAfter.getSlideCount() - 1) {
        return $('#' + name + '-slider-after .bx-next').addClass('disabled');
      } else {
        return $('#' + name + '-slider-after .bx-next').removeClass('disabled');
      }
    },
    onSlideAfter: function($slideElement, oldIndex, newIndex) {
      return sliderAfter.currentIndex = newIndex;
    }
  });
  if (hasBefore) {
    $('#' + name + '-slider-before .bx-prev').addClass('disabled');
  } else {
    $('#' + name + '-slider-during .bx-prev').addClass('disabled');
  }
  if (hasBefore) {
    $('#' + name + '-slider-before').find('.bx-next').click(function(event) {
      console.log('#' + name + '-slider-before');
      if (sliderBefore.currentIndex === sliderBefore.getSlideCount() - 1) {
        currentlySelected = 'tab-during-' + name;
        return adviceTab(states, currentlySelected);
      } else {
        return sliderBefore.goToNextSlide();
      }
    });
  }
  $('#' + name + '-slider-during').find('.bx-prev').click(function(event) {
    if (hasBefore && sliderDuring.currentIndex === 0) {
      currentlySelected = 'tab-before-' + name;
      return adviceTab(states, currentlySelected);
    } else {
      return sliderDuring.goToPrevSlide();
    }
  });
  $('#' + name + '-slider-during').find('.bx-next').click(function(event) {
    if (sliderDuring.currentIndex === sliderDuring.getSlideCount() - 1) {
      currentlySelected = 'tab-after-' + name;
      return adviceTab(states, currentlySelected);
    } else {
      return sliderDuring.goToNextSlide();
    }
  });
  $('#' + name + '-slider-after').find('.bx-prev').click(function(event) {
    if (sliderAfter.currentIndex === 0) {
      currentlySelected = 'tab-during-' + name;
      return adviceTab(states, currentlySelected);
    } else {
      return sliderAfter.goToPrevSlide();
    }
  });
  if (hasBefore) {
    duringIndex = 1;
    beforeIndex = 2;
  } else {
    duringIndex = 0;
    beforeIndex = 1;
  }
  if (hasBefore && currentlySelected === states[0].tabId) {
    $('#' + name + '-slider-during').hide();
    $('#' + name + '-slider-after').hide();
  } else if (currentlySelected === states[duringIndex].tabId) {
    $('#' + name + '-slider-before').hide();
    $('#' + name + '-slider-after').hide();
  } else if (currentlySelected === states[beforeIndex].tabId) {
    $('#' + name + '-slider-before').hide();
    $('#' + name + '-slider-during').hide();
  }
  return adviceTab(states, currentlySelected);
};

$(document).ready(function() {
  adviceSlider('flood', floodStates);
  adviceSlider('fire', fireStates);
  adviceSlider('breakdown', breakdownStates);
  adviceSlider('chemical', chemicalStates);
  adviceSlider('drought', droughtStates);
  adviceSlider('flu', fluStates);
  adviceSlider('heatwave', heatwaveStates);
  adviceSlider('powercut', powercutStates);
  adviceSlider('winterweather', winterweatherStates);
  adviceSlider('thunder', thunderStates);
  adviceSlider('storm', stormStates);
  return adviceSlider('terrorist', terroristStates);
});