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

