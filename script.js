function openOnglet(evt, name){
    alert('vous avez cliqué sur un bouton');
    var i , tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabcontent');
    for(i= 0, i< tabcontent.length; i++){
        tabcontent[i].computedStyleMap.display = 'None';
    }
    tablinks = document?getElementsByClassName('tablinks');
    for (i=0; i <tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace()
    }
}