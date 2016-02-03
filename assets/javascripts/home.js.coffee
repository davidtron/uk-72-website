floodStates = [
  { tabId: 'tab-before-flood', contentSelector: '#flood-slider-before' }
  { tabId: 'tab-during-flood', contentSelector: '#flood-slider-during' }
  { tabId: 'tab-after-flood',  contentSelector: '#flood-slider-after' }
]

fireStates = [
  { tabId: 'tab-before-fire', contentSelector: '#fire-slider-before' }
  { tabId: 'tab-during-fire', contentSelector: '#fire-slider-during' }
  { tabId: 'tab-after-fire',  contentSelector: '#fire-slider-after' }
]

breakdownStates = [
  { tabId: 'tab-before-breakdown', contentSelector: '#breakdown-slider-before' }
  { tabId: 'tab-during-breakdown', contentSelector: '#breakdown-slider-during' }
  { tabId: 'tab-after-breakdown',  contentSelector: '#breakdown-slider-after' }
]

chemicalStates = [
  { tabId: 'tab-before-chemical', contentSelector: '#chemical-slider-before' }
  { tabId: 'tab-during-chemical', contentSelector: '#chemical-slider-during' }
  { tabId: 'tab-after-chemical',  contentSelector: '#chemical-slider-after' }
]

droughtStates = [
  { tabId: 'tab-before-drought', contentSelector: '#drought-slider-before' }
  { tabId: 'tab-during-drought', contentSelector: '#drought-slider-during' }
  { tabId: 'tab-after-drought',  contentSelector: '#drought-slider-after' }
]

fluStates = [
  { tabId: 'tab-before-flu', contentSelector: '#flu-slider-before' }
  { tabId: 'tab-during-flu', contentSelector: '#flu-slider-during' }
  { tabId: 'tab-after-flu',  contentSelector: '#flu-slider-after' }
]

heatwaveStates = [
  { tabId: 'tab-before-heatwave', contentSelector: '#heatwave-slider-before' }
  { tabId: 'tab-during-heatwave', contentSelector: '#heatwave-slider-during' }
  { tabId: 'tab-after-heatwave',  contentSelector: '#heatwave-slider-after' }
]

powercutStates = [
  { tabId: 'tab-before-powercut', contentSelector: '#powercut-slider-before' }
  { tabId: 'tab-during-powercut', contentSelector: '#powercut-slider-during' }
  { tabId: 'tab-after-powercut',  contentSelector: '#powercut-slider-after' }
]

winterweatherStates = [
  { tabId: 'tab-before-winterweather', contentSelector: '#winterweather-slider-before' }
  { tabId: 'tab-during-winterweather', contentSelector: '#winterweather-slider-during' }
  { tabId: 'tab-after-winterweather',  contentSelector: '#winterweather-slider-after' }
]

stormStates = [
  { tabId: 'tab-before-storm', contentSelector: '#storm-slider-before' }
  { tabId: 'tab-during-storm', contentSelector: '#storm-slider-during' }
  { tabId: 'tab-after-storm',  contentSelector: '#storm-slider-after' }
]

terroristStates = [
  { tabId: 'tab-before-terrorist', contentSelector: '#terrorist-slider-before' }
  { tabId: 'tab-during-terrorist', contentSelector: '#terrorist-slider-during' }
  { tabId: 'tab-after-terrorist',  contentSelector: '#terrorist-slider-after' }
]

$(document).ready ->
  $('a.pdf-languages-trigger').click ->
    $(this).toggleClass 'active'
    $('.download-languages').toggleClass 'active'


adviceTab = (elements, selectedTab) ->
  console.log(selectedTab)
  currentTab = selectedTab || elements[0].tabId
  activeElem = _(elements).find (elem) -> elem.tabId == currentTab
  if activeElem
    inactiveElems = _(elements).filter (elem) -> elem.tabId != currentTab

    $(activeElem.contentSelector).show()
    $('#'+activeElem.tabId).parent('li').addClass 'active'

    _(inactiveElems).each (inactiveElem) ->
      $(inactiveElem.contentSelector).hide()
      $('#'+inactiveElem.tabId).parent('li').removeClass 'active'

adviceSlider = (name, states) ->
  currentlySelected = null

  hasBefore = $('#'+name+'-slider').hasClass("js-has-before")

  if hasBefore
    sliderBefore = $('#'+name+'-slider-before .slider').bxSlider
      infiniteLoop: false,
      responsive: false,
      onSlideBefore: ($slideElement, oldIndex, newIndex) ->
        if newIndex > 0
          $('#'+name+'-slider-before .bx-prev').removeClass 'disabled'
        else
          $('#'+name+'-slider-before .bx-prev').addClass 'disabled'
      onSlideAfter: ($slideElement, oldIndex, newIndex) ->
        sliderBefore.currentIndex = newIndex

  else
    states = [states[1], states[2]]

  sliderDuring = $('#'+name+'-slider-during .slider').bxSlider
    infiniteLoop: false,
    responsive: false,
    onSlideBefore: ($slideElement, oldIndex, newIndex) ->
      if !hasBefore
        if newIndex > 0
          $('#'+name+'-slider-during .bx-prev').removeClass 'disabled'
        else
          $('#'+name+'-slider-during .bx-prev').addClass 'disabled'
    onSlideAfter: ($slideElement, oldIndex, newIndex) ->
      sliderDuring.currentIndex = newIndex

  sliderAfter = $('#'+name+'-slider-after .slider').bxSlider
    infiniteLoop: false,
    responsive: false,
    onSlideBefore: ($slideElement, oldIndex, newIndex) ->
      if newIndex == sliderAfter.getSlideCount()-1
        $('#'+name+'-slider-after .bx-next').addClass 'disabled'
      else
        $('#'+name+'-slider-after .bx-next').removeClass 'disabled'
    onSlideAfter: ($slideElement, oldIndex, newIndex) ->
      sliderAfter.currentIndex = newIndex

  if hasBefore
    $('#'+name+'-slider-before .bx-prev').addClass 'disabled'
  else
    $('#'+name+'-slider-during .bx-prev').addClass 'disabled'


  if hasBefore
    $('#'+name+'-slider-before').find('.bx-next').click (event) ->
      console.log('#'+name+'-slider-before')
      if sliderBefore.currentIndex == sliderBefore.getSlideCount()-1
        currentlySelected = 'tab-during-'+name
        adviceTab states, currentlySelected
      else
        sliderBefore.goToNextSlide()

  $('#'+name+'-slider-during').find('.bx-prev').click (event) ->
    if hasBefore && sliderDuring.currentIndex == 0
      currentlySelected = 'tab-before-'+name
      adviceTab states, currentlySelected
    else
      sliderDuring.goToPrevSlide()

  $('#'+name+'-slider-during').find('.bx-next').click (event) ->
    if sliderDuring.currentIndex == sliderDuring.getSlideCount()-1
      currentlySelected = 'tab-after-'+name
      adviceTab states, currentlySelected
    else
      sliderDuring.goToNextSlide()

  $('#'+name+'-slider-after').find('.bx-prev').click (event) ->
    if sliderAfter.currentIndex == 0
      currentlySelected = 'tab-during-'+name
      adviceTab states, currentlySelected
    else
      sliderAfter.goToPrevSlide()

  if hasBefore
    duringIndex = 1
    beforeIndex = 2
  else
    duringIndex = 0
    beforeIndex = 1

  if hasBefore && currentlySelected == states[0].tabId
    $('#'+name+'-slider-during').hide()
    $('#'+name+'-slider-after').hide()
  else if currentlySelected == states[duringIndex].tabId
    $('#'+name+'-slider-before').hide()
    $('#'+name+'-slider-after').hide()
  else if currentlySelected == states[beforeIndex].tabId
    $('#'+name+'-slider-before').hide()
    $('#'+name+'-slider-during').hide()

  adviceTab states, currentlySelected


$(document).ready ->
  adviceSlider('flood', floodStates)
  adviceSlider('fire', fireStates)
  adviceSlider('breakdown', breakdownStates)
  adviceSlider('chemical', chemicalStates)
  adviceSlider('drought', droughtStates)
  adviceSlider('flu', fluStates)
  adviceSlider('heatwave', heatwaveStates)
  adviceSlider('powercut', powercutStates)
  adviceSlider('winterweather', winterweatherStates)
  adviceSlider('storm', stormStates)
  adviceSlider('terrorist', terroristStates)


